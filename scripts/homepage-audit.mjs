import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { spawn } from 'node:child_process';
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
const phase = process.argv[2] || 'production';
const output = path.join(process.cwd(), 'docs', 'design-audit', phase);
fs.mkdirSync(output, { recursive: true });
const staticMode = phase === 'baseline' || phase === 'production' || phase === 'cta' || phase === 'hero';
const port = staticMode ? 9400 : 3000;
let server;
if (staticMode) {
  const root = path.resolve('out');
  server = http.createServer((request, response) => {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    let file = path.resolve(root, '.' + pathname);
    if (!file.startsWith(root + path.sep) && file !== root) { response.writeHead(403); response.end(); return; }
    if (pathname.endsWith('/')) file = path.join(file, 'index.html');
    else if (!path.extname(file)) file += '.html';
    if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) { response.writeHead(404); response.end(); return; }
    const types = {'.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.png':'image/png', '.jpg':'image/jpeg', '.webp':'image/webp', '.svg':'image/svg+xml', '.woff2':'font/woff2', '.mp4':'video/mp4', '.txt':'text/plain'};
    response.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
    fs.createReadStream(file).pipe(response);
  }).listen(port, '127.0.0.1');
}
async function main() {
  const profile = path.join(process.cwd(), 'tmp', 'audit-browser-' + phase);
  spawn(process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check', '--disable-background-timer-throttling', '--remote-debugging-port=9334', '--remote-debugging-address=127.0.0.1', '--user-data-dir=' + profile, 'about:blank'], { windowsHide: true, stdio: 'ignore' });
  let targets;
  for (let i = 0; i < 60; i++) { try { targets = await (await fetch('http://127.0.0.1:9334/json')).json(); break; } catch { await wait(200); } }
  if (!targets) throw Error('Browser did not start');
  const ws = new WebSocket(targets.find(target => target.type === 'page').webSocketDebuggerUrl);
  await new Promise(resolve => ws.addEventListener('open', resolve, {once:true}));
  const pending = new Map(); let seq = 0;
  const errors = [];
  ws.addEventListener('message', event => {
    const data = JSON.parse(event.data);
    if (data.method === 'Runtime.exceptionThrown') errors.push(data.params.exceptionDetails);
    if (data.id) {
      const promise = pending.get(data.id);
      pending.delete(data.id);
      if (data.error) promise.reject(Error(JSON.stringify(data.error)));
      else promise.resolve(data.result);
    }
  });
  const call = (method, params={}) => new Promise((resolve,reject) => { const id=++seq; pending.set(id,{resolve,reject}); ws.send(JSON.stringify({id,method,params})); });
  const evaluate = async expression => { const result = await call('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true}); if(result.exceptionDetails) throw Error(JSON.stringify(result.exceptionDetails)); return result.result.value; };
  const screenshot = async (name, full=false) => {
    if (full) {
      const height = await evaluate('document.documentElement.scrollHeight');
      const viewport = await evaluate('innerHeight');
      for(let y=0;y<height;y+=viewport){await evaluate('window.scrollTo({top:'+y+',behavior:"instant"})');await wait(120);}
      await wait(300); await evaluate('window.scrollTo({top:0,behavior:"instant"})');await wait(200);
    }
    const metrics = await call('Page.getLayoutMetrics');
    const result = await call('Page.captureScreenshot',{format:'png',captureBeyondViewport:full,...(full ? {clip:{x:0,y:0,width:metrics.cssContentSize.width,height:metrics.cssContentSize.height,scale:1}} : {})});
    fs.writeFileSync(path.join(output,name+'.png'),Buffer.from(result.data,'base64'));
  };
  await call('Page.enable'); await call('Runtime.enable'); await call('Network.enable'); await call('Network.setCacheDisabled',{cacheDisabled:true}); await call('Page.bringToFront');
  await call('Page.addScriptToEvaluateOnNewDocument',{source:`window.auditLCP=0; new PerformanceObserver(list=>{for(const item of list.getEntries())window.auditLCP=item.startTime}).observe({type:'largest-contentful-paint',buffered:true});`});
  const results={phase,staticMode,checks:[],errors};
  const check=(name,value)=>{results.checks.push({name,pass:Boolean(value)}); console.log(name,Boolean(value));};
  const visit=async(route,width=1440,height=900)=>{
    await call('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});
    await call('Page.navigate',{url:'http://localhost:'+port+route});
    for (let attempt=0; attempt<80; attempt++) {
      await wait(250);
      if (await evaluate('document.readyState==="complete" && location.pathname===' + JSON.stringify(route) + ' && !!document.querySelector("header")')) break;
    }
    await evaluate('document.fonts.ready'); await wait(staticMode?1000:1500);
  };
  if (phase === 'hero') {
    for (const width of [390,1024,1280,1366,1440,1536,1920]) {
      await visit('/',width,width===390?844:width<=1366?768:900);
      await screenshot('hero-'+width);
      results['width'+width]=await evaluate(`(() => {
        const hero=document.querySelector('section[aria-labelledby=hero-heading]');
        const grid=hero.querySelector('.grid');
        const heading=hero.querySelector('h1');
        const firstLine=document.createRange();firstLine.selectNodeContents(heading.firstChild);
        return {viewport:innerWidth,scrollWidth:document.documentElement.scrollWidth,contentWidth:grid.parentElement.getBoundingClientRect().width,gridWidth:grid.getBoundingClientRect().width,headingFirstLineRects:Array.from(firstLine.getClientRects()).map(rect=>({left:rect.left,right:rect.right,top:rect.top})),headingColumnRight:heading.parentElement.parentElement.getBoundingClientRect().right,controls:Array.from(hero.querySelectorAll('button[aria-label^="Trang"]')).map(button=>({label:button.getAttribute('aria-label'),left:button.getBoundingClientRect().left,right:button.getBoundingClientRect().right}))};
      })()`);
    }
  } else if (phase === 'cta') {
    for (const width of [390,1440]) {
      await visit('/',width,width===1440?900:844);
      await evaluate('document.querySelector("section[aria-labelledby=contact-heading]").scrollIntoView({behavior:"instant",block:"center"})');
      await wait(1500);
      await screenshot('cta-'+width);
    }
  } else if (phase === 'stage3') {
    for (const width of [390,1440]) {
      await visit('/',width,width===1440?900:844);
      await screenshot('home-'+width);
      check('Hero actions visible '+width,await evaluate(`!!document.querySelector('section a[href="/contact"]') && !!document.querySelector('section a[href="/projects"]')`));
      check('Three curated projects '+width,await evaluate('document.querySelectorAll("section[aria-labelledby=projects-heading] article").length===3'));
      check('Projects follow services '+width,await evaluate('document.querySelector("section[aria-labelledby=services-heading]").nextElementSibling.getAttribute("aria-labelledby")==="projects-heading"'));
      check('No horizontal overflow '+width,await evaluate('document.documentElement.scrollWidth<=innerWidth'));
    }
  } else if (phase === 'stage2') {
    await visit('/contact',390,844); await screenshot('contact-mobile');
    check('Contact has no simulated form', await evaluate('document.querySelectorAll("form").length===0 && document.body.innerText.includes("Gửi email tư vấn")'));
    check('Contact uses real phone',await evaluate('!!document.querySelector(\'a[href="tel:0936189292"]\')'));
    await evaluate('document.querySelector("button[aria-controls=mobile-navigation]").click()'); await wait(300); await screenshot('mobile-menu');
    check('Menu expanded and scroll locked',await evaluate('document.querySelector("button[aria-controls=mobile-navigation]").getAttribute("aria-expanded")==="true" && document.body.style.overflow==="hidden"'));
    await call('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27}); await wait(200);
    check('Escape restores focus',await evaluate('!document.querySelector("#mobile-navigation") && document.activeElement===document.querySelector("button[aria-controls=mobile-navigation]") && document.body.style.overflow!=="hidden"'));
    await visit('/services'); await screenshot('services-desktop');
    check('Zoom removed',await evaluate('getComputedStyle(document.documentElement).zoom==="1"'));
  } else {
    for(const width of (phase==='baseline'?[1440,390]:[360,390,768,1024,1440])) {
      await visit('/',width,width===1440?900:844);
      const facts=await evaluate(`({width:innerWidth,height:innerHeight,pageHeight:document.documentElement.scrollHeight,scrollWidth:document.documentElement.scrollWidth,heading:document.querySelector('h1')?.innerText,sections:Array.from(document.querySelectorAll('main > section')).map(s=>({heading:s.querySelector('h1,h2')?.innerText,top:Math.round(s.getBoundingClientRect().top+scrollY),height:Math.round(s.getBoundingClientRect().height)})),video:document.querySelectorAll('video').length,videoSource:document.querySelector('video source')?.getAttribute('src'),videoPlaying:!!document.querySelector('video') && !document.querySelector('video').paused && document.querySelector('video').readyState>=2,deadLinks:document.querySelectorAll('a[href="#"],a[href*="XXXXXXXX"]').length,brokenImages:Array.from(document.images).filter(i=>i.complete&&i.naturalWidth===0).map(i=>i.src),performance:{lcpMs:window.auditLCP,domContentLoadedMs:performance.getEntriesByType('navigation')[0].domContentLoadedEventEnd,resourceBytes:performance.getEntriesByType('resource').reduce((s,r)=>s+r.encodedBodySize,0),videoRequests:performance.getEntriesByType('resource').filter(r=>r.name.includes('.mp4')).map(r=>r.name)}})`);
      results['width'+width]=facts;
      await screenshot('home-'+width); if(width===390||width===1440) await screenshot('home-'+width+'-full',true);
      if(phase!=='baseline' && (width===390||width===1440)) {
        await evaluate('document.querySelector("section[aria-labelledby=news-heading]").scrollIntoView({behavior:"instant",block:"start"})');
        await wait(1200);
        await screenshot('news-'+width);
        await evaluate('document.querySelector("section[aria-labelledby=contact-heading]").scrollIntoView({behavior:"instant",block:"center"})');
        await wait(1200);
        await screenshot('cta-'+width);
        await evaluate('window.scrollTo({top:0,behavior:"instant"})');
        await wait(200);
      }
      if(phase!=='baseline') {
        check('Montserrat headings '+width,await evaluate('getComputedStyle(document.querySelector("h1")).fontFamily.includes("Montserrat")'));
        check('Inter body '+width,await evaluate('getComputedStyle(document.body).fontFamily.includes("Inter")'));
        if(width===390||width===1440) check('All homepage images loaded '+width,await evaluate('Array.from(document.images).every(image=>image.complete&&image.naturalWidth>0)'));
        check('No horizontal overflow '+width,facts.scrollWidth<=width);
        check('No dead links '+width,facts.deadLinks===0);
        check('No broken local images '+width,facts.brokenImages.length===0);
        check('Original hero video '+width,facts.video===1 && facts.videoSource==='/videos/hero_bgr.mp4' && facts.videoPlaying);
        check('Original hero heading '+width,facts.heading.replace(/\s+/g,' ').trim()==='Chúng tôi sống vì thử thách');
        if(width<1024) check('Original mobile hero CTA visible '+width,await evaluate(`Array.from(document.querySelectorAll('section[aria-labelledby="hero-heading"] a[href="/projects"]')).some(a=>a.getBoundingClientRect().height>0&&a.getBoundingClientRect().bottom<=innerHeight)`));
      }
    }
    if(phase!=='baseline'){
      await visit('/',1440,900);
      const beforeSlide=await evaluate('document.querySelector("section[aria-labelledby=hero-heading] h3").innerText');
      await evaluate('document.querySelector("button[aria-label=\\"Trang sau\\"]").click()');await wait(1900);
      check('Original hero slider advances',await evaluate('document.querySelector("section[aria-labelledby=hero-heading] h3").innerText')!==beforeSlide);
      check('Desktop slider controls fit viewport',await evaluate('Array.from(document.querySelectorAll("section[aria-labelledby=hero-heading] button[aria-label^=Trang]")).every(button=>{const rect=button.getBoundingClientRect();return rect.left>=0&&rect.right<=innerWidth})'));
      await evaluate('window.scrollTo({top:200,behavior:"instant"})');await wait(500);
      check('Header becomes white on scroll',await evaluate('scrollY>50 && document.querySelector("header").classList.contains("bg-white") && document.querySelector("header").classList.contains("text-brand-dark")'));
      await visit('/',390,844);
      await evaluate('document.querySelector("button[aria-controls=mobile-navigation]").click()'); await wait(200);
      await screenshot('mobile-menu');
      check('Menu focuses first link',await evaluate('document.activeElement===document.querySelector("#mobile-navigation a")'));
      await evaluate('Array.from(document.querySelectorAll("#mobile-navigation a")).at(-1).focus()');
      await call('Input.dispatchKeyEvent',{type:'keyDown',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});
      check('Menu traps forward Tab',await evaluate('document.activeElement===document.querySelector("button[aria-controls=mobile-navigation]")'));
      await call('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});await wait(200);
      check('Escape closes menu and restores focus',await evaluate('!document.querySelector("#mobile-navigation") && document.activeElement===document.querySelector("button[aria-controls=mobile-navigation]")'));
      await evaluate('document.querySelector(".skip-link").focus()');
      await call('Input.dispatchKeyEvent',{type:'keyDown',key:'Enter',code:'Enter',windowsVirtualKeyCode:13});await wait(200);
      check('Skip link focuses content after navigation',await evaluate('document.activeElement.id==="main-content"'));
      await call('Input.dispatchKeyEvent',{type:'keyDown',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});
      check('Skip link bypasses header links',await evaluate('document.activeElement.closest("section")?.getAttribute("aria-labelledby")==="hero-heading"'));
      await evaluate('document.documentElement.style.fontSize="20px"');
      check('Enlarged text fits mobile',await evaluate('document.documentElement.scrollWidth<=innerWidth'));
      await evaluate('document.documentElement.style.fontSize=""');
      await call('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
      check('Reduced motion disables smooth scrolling',await evaluate('getComputedStyle(document.documentElement).scrollBehavior==="auto"'));
      await call('Emulation.setEmulatedMedia',{features:[]});
      const routes=['/about','/services','/projects','/news','/contact','/services/thi-cong-xay-lap-dien','/projects/thi-cong-xay-lap-hang-muc-chieu-sang-1','/news/bt-decom-trien-khai-giai-doan-moi-du-an-khu-phuc-hop-ha-noi'];
      for(const route of routes){await visit(route,390,844);check('Route '+route,await evaluate('!!document.querySelector("h1,h2") && !!document.querySelector("header") && !!document.querySelector("footer") && !document.body.innerText.includes("This page could not be found")'));check('Route fits mobile '+route,await evaluate('document.documentElement.scrollWidth<=innerWidth'));}
      await visit('/contact',390,844); await screenshot('contact-mobile');
      check('Contact no form',await evaluate('document.querySelectorAll("form").length===0'));
      await visit('/');
      await evaluate('document.querySelector(".animate-marquee").closest("section").scrollIntoView({behavior:"instant",block:"center"})');
      await wait(1500);
      await screenshot('partners-1440');
      const links=await evaluate(`Array.from(document.querySelectorAll('a[href^="/"]')).map(a=>a.getAttribute('href'))`);
      for(const href of [...new Set(links)]) {const response=await fetch('http://localhost:'+port+href);check('Link '+href,response.status===200);}
      check('No runtime exceptions',errors.length===0);
    }
  }
  fs.writeFileSync(path.join(output,'results.json'),JSON.stringify(results,null,2));
  console.log('Saved',output);
  call('Browser.close').catch(()=>{}); ws.close(); if(server)server.close(); await wait(300); process.exit(results.checks.some(check=>!check.pass)?1:0);
}
main().catch(error=>{console.error(error);if(server)server.close();process.exit(1)});
