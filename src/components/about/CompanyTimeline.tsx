import { timelineEvents } from "@/data/about";
import { Milestone, Sparkles } from "lucide-react";

export function CompanyTimeline() {
  return (
    <section id="timeline-anchor" className="scroll-mt-20 py-16 sm:py-20 md:py-24 bg-gray-50/70 border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-100">
            <span className="w-2 h-2 rounded-full bg-brand-gold" />
            LỊCH SỬ HÌNH THÀNH
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-4">
            Hành Trình Phát Triển
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full mb-4" />
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
            Hơn 13 năm không ngừng mở rộng năng lực, hoàn thiện công nghệ và khẳng định uy tín với các đối tác hàng đầu.
          </p>
        </div>

        {/* Timeline Structure */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-gold via-emerald-400 to-emerald-200 transform md:-translate-x-1/2 rounded-full" />

          <div className="space-y-8 sm:space-y-12">
            {timelineEvents.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isFuture = idx === timelineEvents.length - 1;

              return (
                <div 
                  key={idx} 
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left / Right Card content */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                    isEven ? "md:pl-10 md:text-left" : "md:pr-10 md:text-right"
                  }`}>
                    <div className={`p-6 rounded-2xl bg-white border transition-all duration-300 hover:shadow-lg ${
                      isFuture 
                        ? "border-emerald-300 bg-gradient-to-br from-white to-emerald-50/50 ring-2 ring-emerald-500/10" 
                        : "border-gray-200 shadow-sm hover:border-emerald-200"
                    }`}>
                      {/* Year badge */}
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-2 ${
                        isFuture 
                          ? "bg-brand-gold text-white" 
                          : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      }`}>
                        {isFuture && <Sparkles size={12} className="animate-spin" />}
                        <span>{item.year}</span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold font-heading text-brand-dark mb-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Dot */}
                  <div className="absolute left-[11px] md:left-1/2 top-7 md:top-1/2 w-5 h-5 rounded-full bg-white border-4 border-brand-gold shadow-md transform md:-translate-x-1/2 md:-translate-y-1/2 z-10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  </div>

                  {/* Empty spacer for the other column in desktop */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
