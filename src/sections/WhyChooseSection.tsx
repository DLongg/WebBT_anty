"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle2 } from "lucide-react";

export function WhyChooseSection() {
  const { ref, isInView } = useScrollAnimation();

  const advantages = [
    { title: "Kinh nghiệm thực chiến", desc: "Hơn 13 năm thi công điện cao - hạ thế" },
    { title: "Đội ngũ mạnh", desc: "82+ kỹ sư, cán bộ và công nhân kỹ thuật" },
    { title: "Thiết bị hiện đại", desc: "Trang thiết bị thi công đồng bộ, sẵn sàng" },
    { title: "Đúng tiến độ", desc: "Đảm bảo tiến độ thi công chính xác theo cam kết" },
    { title: "Chi phí tối ưu", desc: "Minh bạch, cạnh tranh và hợp lý" },
    { title: "Hỗ trợ toàn diện", desc: "Kỹ thuật và bảo trì sau bàn giao" },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >


            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold font-heading text-brand-dark mb-4 sm:mb-6 leading-tight">
              Sự khác biệt mang tên{" "}
              <span className="text-brand-gold">BT DECOM</span>
            </h2>

            <p className="text-gray-500 text-sm sm:text-lg mb-6 sm:mb-10 leading-relaxed">
              Không chỉ là một nhà thầu xây lắp điện, BT DECOM định vị mình là đối tác chiến lược, mang đến những giá trị thực vượt trên sự mong đợi.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {advantages.map((adv, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                  className="flex items-start gap-3 bg-white p-4 sm:p-5 rounded-xl border border-gray-100 hover:border-brand-gold/20 hover:shadow-lg hover:shadow-brand-gold/5 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="text-brand-gold" size={16} />
                  </div>
                  <div>
                    <div className="text-brand-dark font-semibold text-sm mb-0.5">{adv.title}</div>
                    <div className="text-gray-500 text-xs leading-relaxed">{adv.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Side - Offset grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="grid grid-cols-12 gap-4">
              {/* Left column */}
              <div className="col-span-7 space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80"
                    alt="Thi công hệ thống điện"
                    className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              {/* Right column */}
              <div className="col-span-5 space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80"
                    alt="Trạm biến áp"
                    className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Achievement card */}
                <div className="bg-brand-gold p-6 rounded-2xl text-white shadow-xl shadow-brand-gold/20">
                  <div className="font-heading font-extrabold text-4xl leading-none mb-2">100%</div>
                  <div className="text-sm text-white/90 leading-snug">Cam kết tiến độ<br />& an toàn lao động</div>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
