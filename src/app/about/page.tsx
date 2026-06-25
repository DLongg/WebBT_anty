import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/sections/CTASection";
import { Accordion } from "@/components/ui/Accordion";
import { CopyButton } from "@/components/ui/CopyButton";
import { EquipmentModal } from "@/components/ui/EquipmentModal";
import { FileText, Building2, Users, Banknote, HardHat, Wrench, Zap, Clock, Calendar, CheckCircle2, ChevronRight, ArrowRight, Phone } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const personnelAccordionItems = [
    {
      title: "Chi tiết Cán bộ chuyên môn (28 người)",
      content: (
        <div className="space-y-4">
          <div>
            <strong className="text-brand-dark">Trên Đại học (2 người):</strong> Thạc sĩ Quản trị kinh doanh.
          </div>
          <div>
            <strong className="text-brand-dark">Đại học (20 người):</strong>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>5 KS hệ thống điện, 1 KS tự động hóa, 1 KS thiết bị điện</li>
              <li>1 KS cơ khí chế tạo máy, 1 KS cơ khí ô tô, 1 KS xây dựng</li>
              <li>2 KS tin học, 1 KS điện tử</li>
              <li>Khối kinh tế: 2 CN Tài chính kế toán, 2 CN QTKD, 1 CN Kinh tế ngoại thương, 1 CN Luật, 1 CN Kinh tế lao động</li>
            </ul>
          </div>
          <div>
            <strong className="text-brand-dark">Cao đẳng (6 người):</strong> 5 CĐ hệ thống điện, 1 CĐ kế toán.
          </div>
        </div>
      ),
    },
    {
      title: "Chi tiết Công nhân kỹ thuật (54 người)",
      content: (
        <div>
          <p className="mb-3">Đội ngũ lành nghề, thâm niên cao, trải dài từ bậc 3/7 đến bậc 6/7.</p>
          <div className="grid grid-cols-2 gap-3 font-medium">
            <div className="flex items-center gap-2"><Zap size={16} className="text-brand-gold"/> 30 CN Kỹ thuật điện</div>
            <div className="flex items-center gap-2"><Wrench size={16} className="text-brand-gold"/> 8 CN Cơ khí</div>
            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-gold"/> 4 CN Hàn</div>
            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-gold"/> 4 CN Xây dựng</div>
            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-gold"/> 3 Lái cẩu</div>
            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-gold"/> 2 Lái xe tải</div>
            <div className="flex items-center gap-2 col-span-2"><CheckCircle2 size={16} className="text-brand-gold"/> 3 Nhân viên thí nghiệm</div>
          </div>
        </div>
      ),
    }
  ];

  const banks = [
    { 
      bank: "Vietcombank", 
      branch: "CN Thăng Long", 
      number: "0491000017938",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Vietcombank_logo.svg/2560px-Vietcombank_logo.svg.png"
    },
    { 
      bank: "MB Bank", 
      branch: "CN Ba Đình - PGD Đội Cấn", 
      number: "0341100302006",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Military_Bank_logo.svg/2560px-Military_Bank_logo.svg.png"
    },
    { 
      bank: "SHB", 
      branch: "CN Hàn Thuyên", 
      number: "2227776868",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/SHB_Logo.svg/2560px-SHB_Logo.svg.png"
    }
  ];

  return (
    <>
      <Header />
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-32 lg:pt-40 lg:pb-40 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888081622-1ce4471fbdab?w=1920&q=80')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 drop-shadow-md">
            VỀ CHÚNG TÔI
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto">
            Hơn 13 năm kinh nghiệm trong lĩnh vực xây lắp và phát triển thương mại
          </p>

        </div>
      </section>

      {/* 2. Chỉ số nổi bật (Overlapping Hero) */}
      <section className="relative z-20 -mt-16 mb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-gray-100">
              {[
                { number: "13+", label: "Năm kinh nghiệm" },
                { number: "82", label: "Nhân sự" },
                { number: "50+", label: "Thiết bị" },
                { number: "3", label: "Đội xây lắp" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center px-4">
                  <div className="text-4xl md:text-5xl font-bold text-brand-gold font-heading mb-2">{stat.number}</div>
                  <div className="text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Giới thiệu công ty (Text + Image) */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-brand-gold/10 rounded-[2rem] transform -rotate-3 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" 
                alt="Công trình BT DECOM" 
                className="w-full h-auto rounded-2xl shadow-xl object-cover aspect-[4/3]"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-brand-gold font-semibold uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-brand-gold"></span> Về BT DECOM
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-6 leading-tight">
                CÔNG TY TNHH XÂY LẮP VÀ PHÁT TRIỂN THƯƠNG MẠI BT
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-brand-gold to-brand-green mb-8 rounded-full"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Thành lập từ năm 2012, <strong>BT DECOM</strong> đã từng bước khẳng định vị thế trong lĩnh vực xây dựng và thương mại, trở thành đối tác tin cậy của nhiều khách hàng trên cả nước.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Chúng tôi không ngừng đầu tư nâng cao năng lực quản lý, thi công và chất lượng dịch vụ để đáp ứng các yêu cầu khắt khe nhất, hướng tới sự phát triển bền vững và lâu dài.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Timeline phát triển */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-4">Hành Trình Phát Triển</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* The vertical line */}
            <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-1 bg-brand-gold/30 transform md:-translate-x-1/2"></div>
            
            {[
              { year: "2012", desc: "Thành lập công ty" },
              { year: "2015", desc: "Mở rộng lĩnh vực thi công" },
              { year: "2020", desc: "Nâng cấp năng lực thiết bị" },
              { year: "2025", desc: "Hơn 82 nhân sự chuyên môn" }
            ].map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={idx} className={`relative mb-12 md:w-1/2 pl-12 ${isLeft ? 'md:pl-0 md:pr-10 md:text-right md:ml-0' : 'md:pl-10 md:text-left md:ml-auto'}`}>
                  {/* Dot */}
                  <div className={`absolute left-[11px] top-6 w-5 h-5 bg-brand-gold rounded-full border-4 border-white shadow-sm z-10 ${isLeft ? 'md:left-full md:-translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'}`}></div>
                  
                  {/* Content */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <span className="text-3xl font-bold text-brand-gold mb-2 block font-heading">{item.year}</span>
                    <p className="text-gray-700 font-medium text-lg">{item.desc}</p>
                  </div>
                </div>
              );
            })}
            
            <div className={`relative md:w-1/2 pl-12 md:pl-10 md:text-left md:ml-auto`}>
                <div className={`absolute left-[13px] top-3 w-4 h-4 bg-brand-green rounded-full border-2 border-white shadow-sm animate-pulse z-10 md:left-0 md:-translate-x-1/2`}></div>
                <div className="pt-2">
                  <span className="text-2xl font-bold text-brand-green/80 italic font-heading">2026 & Tương lai...</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Thông tin nhanh */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: "Thành lập", value: "25/12/2012", icon: <Calendar className="text-brand-gold/50 mb-3" size={32} /> },
              { label: "Trụ sở", value: "Hà Nội", icon: <Building2 className="text-brand-gold/50 mb-3" size={32} /> },
              { label: "Đại diện", value: "Đào Thị Hà", icon: <Users className="text-brand-gold/50 mb-3" size={32} /> },
              { label: "Loại hình", value: "TNHH MTV", icon: <FileText className="text-brand-gold/50 mb-3" size={32} /> }
            ].map((info, idx) => (
              <div key={idx} className="bg-brand-light/30 border border-brand-green/10 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-brand-light/60 transition-colors">
                {info.icon}
                <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">{info.label}</span>
                <span className="text-lg md:text-xl font-bold text-brand-dark">{info.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Thông điệp lãnh đạo */}
      <section className="py-20 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px]"></div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <span className="text-brand-gold text-6xl md:text-8xl leading-none font-serif opacity-50 absolute -top-4 md:-top-10 left-0 md:-left-10">"</span>
          <p className="text-xl md:text-3xl text-white font-light leading-relaxed italic mb-8 relative z-10">
            Với phương châm lấy chất lượng, uy tín và sự hài lòng của khách hàng làm nền tảng phát triển, BT DECOM luôn nỗ lực mang đến những công trình bền vững và an toàn.
          </p>
          <span className="text-brand-gold text-6xl md:text-8xl leading-none font-serif opacity-50 absolute bottom-0 right-0 md:-right-10 rotate-180">"</span>
          <p className="text-brand-gold font-bold text-lg uppercase tracking-widest">— Ban lãnh đạo BT DECOM</p>
        </div>
      </section>

      {/* 7. Năng lực nhân sự */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-4">Năng Lực Nhân Sự</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full mb-8"></div>
            <div className="inline-flex items-center gap-3 bg-brand-dark text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg shadow-brand-dark/20">
              <Users size={24} className="text-brand-gold" />
              Tổng quan: 82 Nhân sự
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            {[
              { count: "28", label: "Cán bộ" },
              { count: "54", label: "Công nhân" },
              { count: "20", label: "Kỹ sư ĐH" },
              { count: "2", label: "Thạc sĩ" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white border-b-4 border-brand-gold rounded-xl p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-brand-dark mb-1">{stat.count}</div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion items={personnelAccordionItems} />
          </div>
        </div>
      </section>

      {/* 8. Máy móc thiết bị */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-4">Máy Móc Thiết Bị</h2>
              <div className="w-24 h-1 bg-brand-gold rounded-full"></div>
            </div>
            <div className="shrink-0">
              <EquipmentModal />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🚛", text: "Xe cẩu 10T KATO" },
              { icon: "🚚", text: "Xe tải 5T" },
              { icon: "🏗️", text: "Xe cẩu tự hành 12.5T" },
              { icon: "⚡", text: "Máy thử cao áp" },
              { icon: "🔧", text: "Máy hàn 25KVA" },
              { icon: "📏", text: "Máy đo điện trở đất" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-brand-gold/50 hover:bg-white hover:shadow-md transition-all group">
                <div className="text-3xl group-hover:scale-110 transition-transform">{item.icon}</div>
                <span className="font-bold text-gray-700 group-hover:text-brand-dark">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Sơ đồ tổ chức */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-4">Sơ Đồ Tổ Chức</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
          </div>

          <div className="flex justify-center overflow-x-auto pb-8">
            <div className="min-w-[800px] flex flex-col items-center">

              {/* Level 1: Ban Giám Đốc */}
              <div className="relative mb-16">
                <div className="bg-brand-dark text-white font-bold py-4 px-10 rounded-xl shadow-lg border-b-4 border-brand-gold text-center text-lg">
                  Ban Giám Đốc
                </div>
                <div className="absolute left-1/2 -bottom-16 w-0.5 h-16 bg-gray-300 -translate-x-1/2"></div>
              </div>

              {/* Level 2: 3 Phòng ban */}
              <div className="relative w-full max-w-[750px] mb-16">
                {/* Horizontal connector line */}
                <div className="absolute top-0 left-[16.66%] right-[16.66%] h-0.5 bg-gray-300"></div>

                <div className="grid grid-cols-3 gap-6">
                  {/* Phòng Kế hoạch Tổng hợp */}
                  <div className="relative flex flex-col items-center">
                    <div className="absolute left-1/2 -top-6 w-0.5 h-6 bg-gray-300 -translate-x-1/2"></div>
                    <div className="bg-white border border-gray-200 text-brand-dark font-bold py-4 px-4 rounded-lg shadow-sm text-center w-full z-10">
                      <div className="text-sm">Phòng Kế hoạch</div>
                      <div className="text-sm">Tổng hợp</div>
                    </div>
                  </div>

                  {/* Phòng Kỹ thuật Vật tư (middle, connects down to teams) */}
                  <div className="relative flex flex-col items-center">
                    <div className="absolute left-1/2 -top-6 w-0.5 h-6 bg-gray-300 -translate-x-1/2"></div>
                    <div className="bg-white border-2 border-brand-gold text-brand-dark font-bold py-4 px-4 rounded-lg shadow-md text-center w-full z-10 relative">
                      <div className="text-sm">Phòng Kỹ thuật</div>
                      <div className="text-sm">Vật tư</div>
                      {/* Line down to teams */}
                      <div className="absolute left-1/2 -bottom-16 w-0.5 h-16 bg-brand-gold/50 -translate-x-1/2"></div>
                    </div>
                  </div>

                  {/* Phòng Tài chính Kế toán */}
                  <div className="relative flex flex-col items-center">
                    <div className="absolute left-1/2 -top-6 w-0.5 h-6 bg-gray-300 -translate-x-1/2"></div>
                    <div className="bg-white border border-gray-200 text-brand-dark font-bold py-4 px-4 rounded-lg shadow-sm text-center w-full z-10">
                      <div className="text-sm">Phòng Tài chính</div>
                      <div className="text-sm">Kế toán</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Level 3: Đội Xây Lắp */}
              <div className="flex flex-col gap-4 relative">
                <div className="absolute -left-6 top-5 bottom-5 w-0.5 bg-brand-gold/40 rounded-full"></div>
                {[1, 2, 3].map((num) => (
                  <div key={num} className="relative flex items-center">
                    <div className="absolute -left-6 w-6 h-0.5 bg-brand-gold/40"></div>
                    <div className="bg-brand-green/10 border border-brand-green/20 text-brand-dark font-semibold py-3 px-8 rounded-md shadow-sm min-w-[220px] text-center">
                      Đội Xây Lắp {num}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 10. Ngân hàng & Thông tin pháp lý */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-4">Tài Khoản Ngân Hàng</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {banks.map((acc, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:border-brand-gold/30 transition-all">
                <div className="h-10 mb-6 flex justify-center">
                  <img src={acc.logo} alt={acc.bank} className="h-full object-contain" />
                </div>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <div>
                    <div className="text-2xl font-bold text-brand-dark tracking-wider">{acc.number}</div>
                  </div>
                  <CopyButton textToCopy={acc.number} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CTA cuối trang */}
      <section className="relative py-24 bg-brand-dark overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888081622-1ce4471fbdab?w=1920&q=80')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-brand-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight">
            Bạn cần đơn vị thi công xây lắp chuyên nghiệp?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
            <a 
              href="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-gold text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-gold-light transition-all shadow-lg"
            >
              Liên hệ tư vấn miễn phí <ArrowRight size={20} />
            </a>
            <a 
              href="tel:0912345678" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white hover:text-brand-gold transition-colors font-medium group"
            >
              <Phone size={20} className="text-gray-400 group-hover:text-brand-gold transition-colors" />
              Hoặc gọi trực tiếp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
