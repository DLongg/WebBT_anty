"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { Project } from "@/types";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

interface ProjectsSectionClientProps {
  projects: Project[];
  projectCategories: { value: string; label: string }[];
}

export function ProjectsSectionClient({ projects, projectCategories }: ProjectsSectionClientProps) {
  const { ref, isInView } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" 
    ? projects.slice(0, 6) 
    : projects.filter(p => p.category === activeCategory).slice(0, 6);

  return (
    <section className="py-24 md:py-32 bg-brand-light" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-brand-dark mb-4">
              Dự Án Tiêu Biểu
            </h2>
            <p className="text-gray-500 text-lg max-w-xl">
              Những dự án xuất sắc minh chứng cho năng lực và sự chuyên nghiệp của BT DECOM.
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-2 text-brand-gold font-semibold hover:text-brand-dark transition-colors shrink-0 group"
          >
            Xem tất cả dự án
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>


        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-10">
          {projectCategories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.value
                  ? "bg-brand-gold text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
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
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                        {project.categoryLabel}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow relative">
                      {/* View details button that slides up on hover */}
                      <div className="absolute right-6 -top-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-gold shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                        <ArrowRight size={20} />
                      </div>

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

        <div className="mt-10 text-center md:hidden">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-brand-gold font-medium"
          >
            Xem tất cả dự án
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
