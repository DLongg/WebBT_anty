"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3 mt-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className={`w-full flex items-center justify-between p-4 text-left font-medium transition-colors ${
                isOpen ? "bg-brand-gold/10 text-brand-dark" : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span>{item.title}</span>
              <ChevronDown 
                size={18} 
                className={`transform transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-gold" : "text-gray-400"}`} 
              />
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4 bg-white border-t border-gray-100 text-gray-600 text-sm leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
