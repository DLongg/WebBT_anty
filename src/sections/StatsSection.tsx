"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function StatItem({ value, suffix, label, subtext, duration = 2500 }: { value: number; suffix: string; label: string; subtext?: string; duration?: number }) {
  const { ref, count } = useCountUp(value, duration);

  return (
    <div ref={ref} className="text-center md:text-left p-5 sm:p-8 md:p-10 relative group">
      <div className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-gold mb-2 sm:mb-3 leading-none">
        {count}
        <span className="text-brand-gold/60">{suffix}</span>
      </div>
      <div className="text-white text-base sm:text-lg font-bold mb-1 sm:mb-2 font-heading">{label}</div>
      {subtext && <p className="text-white/50 text-sm leading-relaxed">{subtext}</p>}
    </div>
  );
}

export function StatsSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-brand-dark" />
      <div
        className="absolute inset-0 opacity-15 mix-blend-overlay"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-brand-dark" />

      <motion.div
        className="container mx-auto px-4 md:px-6 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto divide-y md:divide-y-0 md:divide-x divide-white/10">
          <StatItem
            value={13}
            suffix="+"
            label="Năm kinh nghiệm"
            subtext="Thi công xây lắp điện và cơ điện tòa nhà"
            duration={2000}
          />
          <StatItem
            value={80}
            suffix="+"
            label="Nhân sự"
            subtext="Kỹ sư, cán bộ và công nhân kỹ thuật lành nghề"
            duration={2500}
          />
          <StatItem
            value={40}
            suffix="+"
            label="Máy móc & Thiết bị"
            subtext="Sẵn sàng có mặt tại công trình chỉ sau 1 giờ"
            duration={2000}
          />
          <StatItem
            value={26}
            suffix="+"
            label="Dự án tiêu biểu"
            subtext="Chiếu sáng, trạm biến áp, cơ điện M&E"
            duration={1500}
          />
        </div>
      </motion.div>
    </section>
  );
}
