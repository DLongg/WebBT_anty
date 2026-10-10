import Link from "next/link";
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";

export function AboutCTA() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 bg-brand-dark text-white overflow-hidden text-center">
      {/* Background construction photo with dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
        style={{ backgroundImage: `url('/images/about/about-hero.jpg')` }}
      />
      <div className="absolute inset-0 bg-[#0F172A]/85 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A]/90" />

      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
          <Sparkles size={14} className="text-emerald-400" />
          <span>HỢP TÁC CÙNG BT DECOM</span>
        </div>

        {/* Heading from specification */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-6 leading-tight max-w-3xl mx-auto">
          Bạn cần đơn vị thi công xây lắp chuyên nghiệp?
        </h2>

        {/* Description from specification */}
        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
          Hãy liên hệ với <span className="font-semibold text-emerald-300">BT DECOM</span> để được tư vấn giải pháp kỹ thuật tối ưu và dự toán phù hợp nhất cho công trình của bạn.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-xl shadow-brand-gold/25 hover:-translate-y-0.5 text-base group"
          >
            <span>Liên hệ tư vấn miễn phí</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="tel:0936189292"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border-2 border-white/60 hover:border-white hover:bg-white hover:text-brand-dark text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-300 text-base group backdrop-blur-xs"
          >
            <PhoneCall size={18} className="text-emerald-400 group-hover:text-brand-dark transition-colors" />
            <span>Gọi Hotline: 0936 189 292</span>
          </a>
        </div>

        {/* Working Hours note */}
        <div className="mt-8 text-xs sm:text-sm text-gray-400">
          Tư vấn kỹ thuật 24/7 • Báo giá nhanh trong 24 giờ • Phục vụ toàn miền Bắc
        </div>
      </div>
    </section>
  );
}
