"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { num: "01", title: "Tiếp nhận yêu cầu", desc: "Lắng nghe và ghi nhận thông tin dự án." },
  { num: "02", title: "Khảo sát và tư vấn", desc: "Đánh giá thực tế và đưa ra giải pháp sơ bộ." },
  { num: "03", title: "Lập phương án", desc: "Thiết kế cơ sở và lập dự toán chi tiết." },
  { num: "04", title: "Triển khai thực hiện", desc: "Ký kết hợp đồng và bắt đầu thi công/thiết kế." },
  { num: "05", title: "Kiểm tra chất lượng", desc: "Giám sát chặt chẽ và nghiệm thu nội bộ." },
  { num: "06", title: "Bàn giao & Hỗ trợ", desc: "Bàn giao công trình và bảo hành dài hạn." },
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
          className="text-center mb-16 md:mb-20 flex flex-col items-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold font-heading text-brand-dark mb-4 sm:mb-6 leading-tight">
            Quy Trình Làm Việc
          </h2>
          <p className="text-gray-500 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed mb-6">
            Chúng tôi áp dụng một quy trình chuyên nghiệp, minh bạch 6 bước để đảm bảo mọi dự án đều đạt kết quả tốt nhất.
          </p>
          <div className="w-12 h-1 bg-[#d4a373] rounded-full" />
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[54px] left-[8.33%] right-[8.33%] h-[2px] bg-[#d4a373] -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-row md:flex-col items-center md:items-center text-left md:text-center group relative"
              >
                {/* Mobile Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="md:hidden w-[2px] h-[calc(100%+2rem)] bg-[#d4a373] absolute left-[54px] top-[55px] -z-0" />
                )}

                {/* Circle Number */}
                <div className="w-[110px] h-[110px] shrink-0 rounded-full border-2 border-gray-100 bg-white flex items-center justify-center shadow-sm group-hover:border-[#d4a373] transition-all duration-300 relative z-10">
                  <span className="text-[40px] font-extrabold text-gray-300 font-heading group-hover:text-[#d4a373] transition-colors duration-300">
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <div className="ml-6 md:ml-0 md:mt-5 flex-1 relative z-10 bg-white md:bg-transparent py-2">
                  <h3 className="font-bold text-brand-dark text-base md:text-lg leading-snug mb-2 sm:mb-3 px-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed px-0 md:px-1">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
