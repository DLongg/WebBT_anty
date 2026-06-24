"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { services } from "@/data/services";
import Link from "next/link";
import { ArrowRight, PenTool, Map, Compass, HardHat, ClipboardCheck, Eye, Zap, Flame } from "lucide-react";

// Map string icon names to Lucide components
const iconMap: Record<string, any> = {
  PenTool,
  Map,
  Compass,
  HardHat,
  ClipboardCheck,
  Eye,
  Zap,
  Flame,
};

export function ServicesSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-brand-dark mb-3 sm:mb-4">
              Dịch Vụ Nổi Bật
            </h2>
            <p className="text-gray-500 text-sm sm:text-lg">
              BT DECOM cung cấp các giải pháp toàn diện trong lĩnh vực xây lắp điện, cơ điện tòa nhà và thương mại thiết bị.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-brand-gold font-semibold hover:text-brand-dark transition-colors"
            >
              Xem tất cả dịch vụ
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Services Grid - 2x2 on larger screens for better visual weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {services.slice(0, 4).map((service, index) => {
            const Icon = iconMap[service.icon] || PenTool;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <div className="relative group bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 h-full border border-gray-100 hover:border-brand-gold/30 hover:bg-white hover:shadow-2xl hover:shadow-brand-gold/5 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                    {/* Background number */}
                    <div className="absolute top-4 right-6 sm:top-6 sm:right-8 font-heading font-extrabold text-[60px] sm:text-[80px] leading-none text-gray-100 group-hover:text-brand-gold/10 transition-colors duration-500 select-none">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                        <Icon size={26} strokeWidth={1.5} />
                      </div>

                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-heading text-brand-dark mb-2 sm:mb-3 group-hover:text-brand-gold transition-colors">
                        {service.name}
                      </h3>

                      <p className="text-gray-500 leading-relaxed mb-4 sm:mb-6 text-sm">
                        {service.shortDescription}
                      </p>

                      <div className="inline-flex items-center gap-2 text-brand-gold text-sm font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        Xem chi tiết <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
