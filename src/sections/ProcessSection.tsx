"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { PhoneCall, Search, FileText, Hammer, ClipboardCheck, Handshake } from "lucide-react";

const steps = [
  { num: "01", title: "Tiếp nhận yêu cầu", desc: "Lắng nghe và ghi nhận thông tin dự án.", icon: PhoneCall },
  { num: "02", title: "Khảo sát và tư vấn", desc: "Đánh giá thực tế và đưa ra giải pháp sơ bộ.", icon: Search },
  { num: "03", title: "Lập phương án", desc: "Thiết kế cơ sở và lập dự toán chi tiết.", icon: FileText },
  { num: "04", title: "Triển khai thực hiện", desc: "Ký kết hợp đồng và bắt đầu thi công.", icon: Hammer },
  { num: "05", title: "Kiểm tra chất lượng", desc: "Giám sát chặt chẽ và nghiệm thu nội bộ.", icon: ClipboardCheck },
  { num: "06", title: "Bàn giao & Hỗ trợ", desc: "Bàn giao công trình và bảo hành dài hạn.", icon: Handshake },
];

export function ProcessSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16 md:mb-20"
        >

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-brand-dark mb-3 sm:mb-4">
            Quy Trình Làm Việc
          </h2>
          <p className="text-gray-500 text-sm sm:text-lg max-w-2xl mx-auto">
            Chúng tôi áp dụng quy trình chuyên nghiệp, minh bạch 6 bước để đảm bảo mọi dự án đạt kết quả tốt nhất.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-6 sm:gap-y-10 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="flex items-start gap-5">
                  {/* Number + Icon */}
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold transition-all duration-300 shadow-sm">
                      <Icon size={24} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-gold text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-brand-gold/30">
                      {step.num}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="font-bold text-brand-dark text-lg mb-2 group-hover:text-brand-gold transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Connecting line (desktop) */}
                {index < steps.length - 1 && index % 3 !== 2 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%+8px)] w-[calc(2rem-16px)] h-px bg-gray-200" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
