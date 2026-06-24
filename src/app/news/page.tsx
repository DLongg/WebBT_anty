import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/sections/CTASection";
import { news } from "@/data/news";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export default function NewsPage() {
  return (
    <>
      <Header />
      <div className="pt-32 pb-20 bg-brand-light">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Tin Tức & Sự Kiện" 
            subtitle="Cập nhật những thông tin mới nhất về ngành xây lắp điện, xu hướng kỹ thuật và các hoạt động của BT DECOM."
            alignment="center"
          />
        </div>
      </div>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <div key={item.id} className="group h-full">
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
              </div>
            ))}
          </div>
          
          {/* Pagination (Static demo) */}
          <div className="flex justify-center mt-16 gap-2">
            <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-colors disabled:opacity-50" disabled>
              &lt;
            </button>
            <button className="w-10 h-10 rounded-lg bg-brand-gold text-white flex items-center justify-center shadow-sm">
              1
            </button>
            <button className="w-10 h-10 rounded-lg border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-colors">
              2
            </button>
            <button className="w-10 h-10 rounded-lg border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-colors">
              &gt;
            </button>
          </div>
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </>
  );
}
