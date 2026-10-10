import { companyStats } from "@/data/about";
import { BadgeCheck, Users, Cog, HardHat } from "lucide-react";

export function CompanyStats() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <BadgeCheck size={26} className="text-[#15803D]" />;
      case 1:
        return <Users size={26} className="text-[#15803D]" />;
      case 2:
        return <Cog size={26} className="text-[#15803D]" />;
      case 3:
      default:
        return <HardHat size={26} className="text-[#15803D]" />;
    }
  };

  return (
    <section className="relative z-20 -mt-10 sm:-mt-12 md:-mt-14 mb-14 sm:mb-18 px-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-6 sm:p-7 md:p-8 transition-all hover:shadow-[0_16px_45px_rgba(0,0,0,0.1)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8">
            {companyStats.map((stat, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-4 group transition-transform hover:-translate-y-0.5"
              >
                {/* Circular Mint Icon Badge Matching Image 2 */}
                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-[#EAF5EF] border border-[#D1ECD7] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  {getIcon(idx)}
                </div>

                {/* Number & Label Column */}
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold font-heading text-[#15803D] leading-none mb-1 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-[13.5px] font-medium text-gray-600 leading-snug">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
