"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Trophy, ShieldCheck, Users, Gem } from "lucide-react";

const values = [
  {
    id: "safety",
    icon: ShieldCheck,
    title: "An toàn",
    description: "Đặt an toàn lao động và an toàn điện lên hàng đầu trong mọi công trình thi công.",
    accent: "bg-emerald-50 text-emerald-600",
  },
  {
    id: "quality",
    icon: Trophy,
    title: "Chất lượng",
    description: "Cam kết chất lượng công trình đạt chuẩn kỹ thuật, đảm bảo vận hành ổn định lâu dài.",
    accent: "bg-amber-50 text-amber-600",
  },
  {
    id: "professional",
    icon: Users,
    title: "Chuyên nghiệp",
    description: "Đội ngũ kỹ sư, công nhân lành nghề với hơn 13 năm kinh nghiệm thực chiến.",
    accent: "bg-blue-50 text-blue-600",
  },
  {
    id: "sustainable",
    icon: Gem,
    title: "Phát triển",
    description: "Không ngừng đổi mới công nghệ, nâng cao năng lực để phát triển bền vững.",
    accent: "bg-purple-50 text-purple-600",
  }
];

export function CoreValuesSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-50 relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />
      {/* Glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[100px] -z-0 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16 md:mb-20"
        >

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-brand-dark mb-3 sm:mb-4">
            Giá Trị Cốt Lõi
          </h2>
          <p className="text-gray-500 text-sm sm:text-lg max-w-2xl mx-auto">
            Nền tảng vững chắc để xây dựng mọi công trình đạt chuẩn
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="bg-white border border-gray-100 p-5 sm:p-8 rounded-xl sm:rounded-2xl h-full hover:border-brand-gold/30 hover:shadow-xl hover:shadow-brand-gold/5 transition-all duration-500 hover:-translate-y-2">
                  {/* Icon */}
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl ${value.accent} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-base sm:text-xl font-bold font-heading text-brand-dark mb-2 sm:mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-xs sm:text-base">
                    {value.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-6 h-0.5 w-12 bg-gray-200 group-hover:w-full group-hover:bg-brand-gold transition-all duration-500 rounded-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
