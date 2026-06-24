"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/sections/CTASection";
import type { Project } from "@/types";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectsClientProps {
  projects: Project[];
  projectCategories: { value: string; label: string }[];
}

export function ProjectsClient({ projects, projectCategories }: ProjectsClientProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <Header />
      <div className="pt-32 pb-20 bg-brand-light">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Dự Án Đã Thực Hiện" 
            subtitle="Minh chứng cho năng lực và sự chuyên nghiệp của BT DECOM qua từng công trình."
            alignment="center"
          />
        </div>
      </div>
      
      <section className="py-20 bg-white min-h-[600px]">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
            {projectCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.value
                    ? "bg-brand-gold text-white shadow-md"
                    : "bg-brand-light text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className="group cursor-pointer h-full"
                >
                  <Link href={`/projects/${project.slug}`} className="block h-full">
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                        <div className="absolute top-4 left-4 bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                          {project.categoryLabel}
                        </div>
                      </div>
                      
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold font-heading text-brand-dark mb-2 group-hover:text-brand-gold transition-colors line-clamp-1">
                          {project.name}
                        </h3>
                        <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
                          <MapPin size={16} className="text-brand-gold" />
                          <span className="line-clamp-1">{project.location}</span>
                        </div>
                        <p className="text-gray-600 text-sm line-clamp-2 mt-auto">
                          {project.shortDescription}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center text-gray-500 py-20">
              Đang cập nhật thêm dự án trong danh mục này...
            </div>
          )}

        </div>
      </section>
      
      <CTASection />
      <Footer />
    </>
  );
}
