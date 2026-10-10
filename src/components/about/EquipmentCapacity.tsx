import { featuredEquipment } from "@/data/about";
import { EquipmentModal } from "@/components/ui/EquipmentModal";
import { Wrench, Shield, CheckCircle2 } from "lucide-react";

export function EquipmentCapacity() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Section Header with EquipmentModal Trigger */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 pb-6 border-b border-gray-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-100">
              <Wrench size={14} className="text-brand-gold" />
              THIẾT BỊ CƠ GIỚI & ĐO KIỂM HIỆN ĐẠI
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-3">
              Năng Lực Máy Móc & Thiết Bị Thi Công
            </h2>
            <div className="w-20 h-1 bg-brand-gold rounded-full mb-3" />
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl">
              Hơn 50+ đầu thiết bị thi công xây lắp và dàn máy đo kiểm cao áp chuyên dụng, 100% tập kết tại Hà Nội sẵn sàng cơ động.
            </p>
          </div>

          <div className="shrink-0">
            <EquipmentModal />
          </div>
        </div>

        {/* 6 Featured Equipment Cards - Grid 3 cols x 2 rows on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredEquipment.map((item) => (
            <div 
              key={item.id}
              className="group bg-white rounded-2xl border border-gray-200/80 hover:border-emerald-300 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image Container with 4:3 Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3 bg-brand-dark/85 backdrop-blur-md text-emerald-300 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/10">
                  {item.category}
                </div>

                {/* Ready Status Badge */}
                <div className="absolute bottom-3 right-3 bg-emerald-600/90 text-white text-[11px] font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1 backdrop-blur-sm">
                  <CheckCircle2 size={12} />
                  <span>Sẵn sàng cơ động</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold font-heading text-brand-dark group-hover:text-brand-gold transition-colors mb-1.5">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {item.specs}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                  <span>Kiểm định định kỳ</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <Shield size={13} /> Đạt chuẩn an toàn
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
