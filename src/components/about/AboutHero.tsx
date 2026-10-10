import Link from "next/link";
import { ChevronRight, Home, Play, ArrowRight, CheckCircle2 } from "lucide-react";

export function AboutHero() {
  const highlights = [
    "Thi công xây dựng dân dụng & công nghiệp",
    "Hệ thống cơ điện tòa nhà (MEP) & trạm biến áp",
    "Thương mại kỹ thuật và thiết bị chuyên ngành",
    "Cam kết An toàn - Tiến độ - Chất lượng vượt trội"
  ];

  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[560px] lg:min-h-[600px] pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24 bg-[#0A1624] text-white overflow-hidden flex items-center">
      {/* Background Image: High-resolution sunset panoramic construction site */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat bg-[center_top] lg:bg-[right_center]"
        style={{ backgroundImage: `url('/images/about/about-hero-sunset.jpg')` }}
      />

      {/* Dark gradient overlay on the left: text is crisp and readable while sunset shines on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07131F]/95 via-[#0A1A2A]/90 via-[50%] to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1624]/60 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5 flex items-center gap-2 text-xs sm:text-[13px] text-white/70 font-medium">
            <Link 
              href="/" 
              className="flex items-center gap-1.5 hover:text-white transition-colors py-1 focus:outline-none focus:ring-1 focus:ring-emerald-400 rounded"
            >
              <Home size={14} className="text-white/80" />
              <span>Trang chủ</span>
            </Link>
            <ChevronRight size={13} className="text-white/50" />
            <span className="text-white font-medium" aria-current="page">
              Giới thiệu
            </span>
          </nav>

          {/* Eyebrow Label with Green Bar */}
          <div className="flex items-center gap-2.5 mb-2 sm:mb-2.5">
            <span className="w-8 h-[2px] bg-[#15803D] rounded-full" />
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-emerald-400 font-heading">
              TỔNG QUAN DOANH NGHIỆP
            </span>
          </div>

          {/* Main Heading: VỀ (white) + CHÚNG TÔI (green) */}
          <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-black font-heading tracking-tight leading-[1.1] mb-2 text-white">
            VỀ <span className="text-[#15803D]">CHÚNG TÔI</span>
          </h1>

          {/* Full Company Name (Extracted from lg:col-span-7) */}
          <div className="text-xs sm:text-sm md:text-[15px] font-bold font-heading text-emerald-300 uppercase tracking-wide mb-3">
            CÔNG TY TNHH XÂY LẮP VÀ PHÁT TRIỂN THƯƠNG MẠI BT
          </div>

          {/* Company Introduction Paragraphs (Extracted from lg:col-span-7) */}
          <div className="space-y-2.5 text-xs sm:text-[13.5px] md:text-[14px] text-gray-200/90 leading-relaxed font-normal mb-4 sm:mb-5 max-w-xl">
            <p>
              Thành lập từ năm 2012, <strong className="text-white font-semibold">BT DECOM</strong> hoạt động trong lĩnh vực xây lắp và phát triển thương mại, chuyên sâu về thi công xây dựng, hệ thống cơ điện, trạm biến áp và thương mại kỹ thuật.
            </p>
            <p className="text-gray-300">
              Với định hướng lấy <strong className="text-white font-medium">chất lượng, uy tín và hiệu quả</strong> làm nền tảng, doanh nghiệp không ngừng nâng cao năng lực đội ngũ, đầu tư thiết bị và hoàn thiện quy trình triển khai dự án.
            </p>
          </div>

          {/* Core Capability Checklist (Extracted from lg:col-span-7) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[12.5px] text-gray-200 mb-5 max-w-xl">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Action Links & CTAs (Merged from lg:col-span-7 and AboutHero) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-[#15803D] hover:bg-[#166534] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
            >
              <span>Xem các dự án tiêu biểu</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <a 
              href="#timeline-anchor" 
              className="inline-flex items-center gap-2.5 text-white hover:text-emerald-300 font-semibold text-xs sm:text-sm transition-all group py-1"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-emerald-400/80 bg-emerald-950/60 flex items-center justify-center text-emerald-400 group-hover:bg-[#15803D] group-hover:text-white group-hover:border-[#15803D] transition-all shadow-sm">
                <Play size={11} className="fill-current ml-0.5" />
              </div>
              <span>Tìm hiểu hành trình của chúng tôi</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform text-white/80" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
