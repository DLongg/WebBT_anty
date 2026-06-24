"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Footer() {
  const { ref, isInView } = useScrollAnimation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-12 sm:pt-16 pb-6" ref={ref}>
      <motion.div 
        className="container mx-auto px-4 md:px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          
          {/* Column 1: Intro */}
          <div className="space-y-4 sm:space-y-6">
            <Link href="/" className="inline-block flex items-center gap-3">
              <img 
                src="/images/bt-logo.png" 
                alt="BT DECOM Logo" 
                className="h-14 w-auto brightness-110"
              />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-2xl tracking-wider leading-none text-brand-gold">
                  BT DECOM., LTD
                </span>
                <span className="text-[9px] tracking-widest uppercase mt-1 text-white/80">
                  Chất lượng - Tiến độ - Hiệu quả
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              <strong>CÔNG TY TNHH XÂY LẮP VÀ PHÁT TRIỂN THƯƠNG MẠI BT</strong>
              <br />
              <span className="italic text-xs mt-1 block">BT TRADING DEVELOPMENT AND CONSTRUCTION COMPANY LIMITED</span>
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors" title="Facebook">
                <span className="font-bold text-sm">f</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors" title="Youtube">
                <span className="font-bold text-sm">Y</span>
              </a>
              <a href="mailto:btdecom@gmail.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors" title="Email">
                <span className="font-bold text-sm">@</span>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white font-heading">Lĩnh vực hoạt động</h4>
            <ul className="space-y-3">
              {[
                { name: "Thi công Xây lắp điện", slug: "thi-cong-xay-lap-dien" },
                { name: "Cơ điện & Tiện ích (M&E)", slug: "co-dien-va-tien-ich" },
                { name: "Xây dựng & Hạ tầng", slug: "xay-dung-va-ha-tang" },
                { name: "Tư vấn, Thiết kế & Giám sát", slug: "tu-van-thiet-ke-giam-sat" },
                { name: "Thương mại & Xuất nhập khẩu", slug: "thuong-mai-xuat-nhap-khau" },
              ].map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-brand-gold transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white font-heading">Thông tin liên hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-gold shrink-0 mt-1" size={18} />
                <div className="text-sm text-gray-400">
                  <span className="block font-medium text-white mb-1">Trụ sở chính:</span>
                  Số nhà A40 khu TT 810, Xã Thanh Trì, Thành phố Hà Nội
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-gold shrink-0" size={18} />
                <div className="text-sm text-gray-400">
                  <span className="block">0936 189 292</span>
                  <span className="block">(024) 3861 6273</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-gold shrink-0" size={18} />
                <div className="text-sm text-gray-400">
                  btdecom@gmail.com
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Form & Map */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-lg font-bold mb-6 text-white font-heading">Nhận tư vấn nhanh</h4>
            <form className="flex flex-col gap-3">
              <input 
                type="text" 
                placeholder="Số điện thoại của bạn..." 
                className="bg-white/10 border border-white/20 rounded-md px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-gold"
              />
              <Button variant="default" className="w-full justify-center">Gửi yêu cầu</Button>
            </form>
            
            <div className="h-28 w-full rounded-md overflow-hidden relative mt-4">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14903.927652870867!2d105.84!3d20.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad1bce4f0000%3A0x0!2zVMOibiDEkOG7mWksIFRoYW5oIFRyw6wsIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} BT DECOM. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">Hồ sơ năng lực</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Liên hệ</Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
