import { Quote } from "lucide-react";

export function LeadershipMessage() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-brand-dark relative overflow-hidden text-white">
      {/* Background construction photo with dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url('/images/about/about-hero.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/95 to-brand-dark" />

      {/* Ambient subtle glow lights */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center shadow-2xl relative">
          
          {/* Top Big Quote Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-brand-gold/20 text-emerald-400 flex items-center justify-center mx-auto mb-8 border border-emerald-500/30">
            <Quote size={36} className="transform rotate-180" />
          </div>

          {/* Eyebrow */}
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-400 mb-6">
            THÔNG ĐIỆP TỪ BAN LÃNH ĐẠO
          </p>

          {/* The Exact Quote Text */}
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed italic text-white mb-8 tracking-wide">
            “Với phương châm lấy <span className="font-semibold text-emerald-300">chất lượng, uy tín và sự hài lòng</span> của khách hàng làm nền tảng phát triển, BT DECOM luôn nỗ lực mang đến những công trình bền vững và an toàn.”
          </blockquote>

          {/* Gold Accent Divider */}
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-6 rounded-full" />

          {/* Signature */}
          <div className="flex flex-col items-center">
            <span className="text-base sm:text-lg font-bold font-heading text-white uppercase tracking-wider">
              Ban Lãnh Đạo BT DECOM
            </span>
            <span className="text-xs sm:text-sm text-gray-400 mt-1">
              CÔNG TY TNHH XÂY LẮP VÀ PHÁT TRIỂN THƯƠNG MẠI BT
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
