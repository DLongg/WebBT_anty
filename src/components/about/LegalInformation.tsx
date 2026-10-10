import { legalProfile } from "@/data/about";
import { Calendar, MapPin, UserCheck, FileCheck, ShieldCheck } from "lucide-react";

export function LegalInformation() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Calendar":
        return <Calendar size={28} className="text-emerald-700" />;
      case "MapPin":
        return <MapPin size={28} className="text-emerald-700" />;
      case "UserCheck":
        return <UserCheck size={28} className="text-emerald-700" />;
      case "FileCheck":
      default:
        return <FileCheck size={28} className="text-emerald-700" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        {/* Header with badge */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-100">
            <ShieldCheck size={14} className="text-brand-gold" />
            PHÁP LÝ & HỒ SƠ DOANH NGHIỆP
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-4">
            Hồ Sơ Pháp Lý & Thông Tin Nhanh
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full mb-3" />
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Thông tin đăng ký doanh nghiệp minh bạch và tuân thủ đầy đủ pháp luật Việt Nam.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {legalProfile.map((item, idx) => (
            <div 
              key={idx}
              className="group relative bg-[#F1F8E9]/60 hover:bg-[#F1F8E9] border border-emerald-200/60 hover:border-emerald-300 rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-white border border-emerald-200 shadow-xs flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {getIcon(item.iconName)}
              </div>

              {/* Label */}
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-1.5">
                {item.label}
              </span>

              {/* Value (prominent) */}
              <span className="text-lg sm:text-xl font-bold font-heading text-brand-dark leading-snug">
                {item.value}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
