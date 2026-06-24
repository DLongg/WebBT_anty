"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { news } from "@/data/news";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export function NewsSection() {
  const { ref, isInView } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 md:py-32 bg-brand-light" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-brand-dark mb-4">
              Tin Tức & Sự Kiện
            </h2>
            <p className="text-gray-500 text-lg max-w-xl">
              Cập nhật xu hướng kỹ thuật mới nhất và các hoạt động nổi bật từ BT DECOM.
            </p>
          </div>
          <Link
            href="/news"
            className="hidden md:inline-flex items-center gap-2 text-brand-gold font-semibold hover:text-brand-dark transition-colors shrink-0 group"
          >
            Xem tất cả bài viết
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>


        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {news.slice(0, 3).map((item) => (
            <motion.div key={item.id} variants={itemVariants} className="group h-full">
              <Link href={`/news/${item.slug}`} className="block h-full">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-brand-gold text-white text-xs font-bold px-3 py-1.5 rounded-sm uppercase tracking-wider">
                      {item.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-brand-gold" />
                        {item.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={14} className="text-brand-gold" />
                        {item.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold font-heading text-brand-dark mb-3 group-hover:text-brand-gold transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow">
                      {item.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-2 text-brand-gold text-sm font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300 mt-auto">
                      Đọc tiếp <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center md:hidden">
          <Link 
            href="/news" 
            className="inline-flex items-center gap-2 text-brand-gold font-medium"
          >
            Xem tất cả bài viết
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
