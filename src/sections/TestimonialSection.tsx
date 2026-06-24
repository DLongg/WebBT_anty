"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export function TestimonialSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white" ref={ref}>
      <motion.div 
        className="container mx-auto px-4 md:px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-14">

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-brand-dark mb-3 sm:mb-4">
            Khách Hàng Nói Gì
          </h2>
          <p className="text-gray-500 text-sm sm:text-lg max-w-2xl mx-auto">
            Sự hài lòng của khách hàng là thước đo thành công lớn nhất của BT DECOM.
          </p>
        </div>


        <div className="mt-12 max-w-5xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="pb-16 testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-brand-light p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl h-full flex flex-col relative border border-transparent hover:border-brand-gold/20 transition-colors">
                  <Quote className="absolute top-8 right-8 text-brand-gold/10 w-24 h-24 -rotate-12" />
                  
                  <div className="flex gap-1 mb-6 relative z-10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="fill-brand-gold text-brand-gold w-5 h-5" />
                    ))}
                  </div>
                  
                  <p className="text-brand-dark/80 italic text-sm sm:text-lg mb-6 sm:mb-8 flex-grow relative z-10 leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <div className="font-bold font-heading text-brand-dark">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .testimonial-swiper {
          padding-bottom: 60px !important;
        }
        .testimonial-swiper .swiper-pagination {
          bottom: 10px !important;
          top: auto !important;
        }
        .testimonial-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #C8E6C9;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #2E7D32;
          width: 30px;
          border-radius: 5px;
        }
      `}} />
    </section>
  );
}
