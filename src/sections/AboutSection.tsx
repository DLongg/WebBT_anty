"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function AboutSection() {
  const { ref, isInView } = useScrollAnimation();

  const highlights = [
    "Doanh nghiệp uy tín trên thị trường miền Bắc",
    "Chuyên môn sâu về xây lắp điện và cơ điện tòa nhà",
    "Cam kết Chất lượng - Tiến độ - Hiệu quả"
  ];

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image Side - Stacked composition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="BT DECOM - Giới thiệu"
                  className="w-full aspect-[4/5] object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent" />
              </div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-brand-gold text-white p-6 rounded-2xl shadow-2xl shadow-brand-gold/30 z-20"
              >
                <div className="font-heading font-extrabold text-4xl md:text-5xl leading-none">13+</div>
                <div className="text-sm text-white/90 mt-1 font-medium">Năm kinh nghiệm</div>
              </motion.div>

              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border-t-4 border-l-4 border-brand-gold/30 rounded-tl-3xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-4 border-r-4 border-brand-gold/30 rounded-br-3xl -z-10" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >


            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold font-heading text-brand-dark mb-6 leading-tight">
              Công ty TNHH Xây lắp và Phát triển Thương mại{" "}
              <span className="text-brand-gold">BT</span>
            </h2>

            <div className="space-y-4 text-gray-600 mb-8 text-[17px] leading-relaxed">
              <p>
                <strong className="text-brand-dark">BT DECOM., LTD</strong> được thành lập từ năm 2012. Trải qua nhiều năm hình thành và phát triển, chúng tôi đã từng bước khẳng định vị thế và uy tín, trở thành đối tác tin cậy của nhiều khách hàng trên cả nước.
              </p>
              <p>
                Với phương châm lấy <strong className="text-brand-dark">chất lượng, uy tín và sự hài lòng của khách hàng</strong> làm nền tảng, BT DECOM không ngừng nâng cao năng lực để mang đến những công trình bền vững, an toàn và có giá trị lâu dài.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3 mb-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-brand-gold" size={14} />
                  </div>
                  <span className="text-brand-dark font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-3 bg-brand-dark hover:bg-brand-gold text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Khám Phá Hồ Sơ Năng Lực
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
