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
    accent: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "quality",
    icon: Trophy,
    title: "Chất lượng",
    description: "Cam kết chất lượng công trình đạt chuẩn kỹ thuật, đảm bảo vận hành ổn định lâu dài.",
    accent: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: "professional",
    icon: Users,
    title: "Chuyên nghiệp",
    description: "Đội ngũ kỹ sư, công nhân lành nghề với hơn 13 năm kinh nghiệm thực chiến.",
    accent: "from-blue-500/20 to-indigo-500/20",
  },
  {
    id: "sustainable",
    icon: Gem,
    title: "Phát triển",
    description: "Không ngừng đổi mới công nghệ, nâng cao năng lực để phát triển bền vững.",
    accent: "from-purple-500/20 to-pink-500/20",
  }
];

export function CoreValuesSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-brand-dark relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />
      {/* Glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[150px] -z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16 md:mb-20"
        >

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-3 sm:mb-4">
            Giá Trị Cốt Lõi
          </h2>
          <p className="text-white/50 text-sm sm:text-lg max-w-2xl mx-auto">
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
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 sm:p-8 rounded-xl sm:rounded-2xl h-full hover:bg-white/10 hover:border-brand-gold/30 transition-all duration-500 hover:-translate-y-2">
                  {/* Icon */}
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${value.accent} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} strokeWidth={1.5} className="text-white" />
                  </div>

                  <h3 className="text-base sm:text-xl font-bold font-heading text-white mb-2 sm:mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-xs sm:text-base">
                    {value.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-6 h-0.5 w-12 bg-brand-gold/30 group-hover:w-full group-hover:bg-brand-gold transition-all duration-500 rounded-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
