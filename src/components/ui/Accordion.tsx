"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItem {
  id?: string;
  title: string;
  countBadge?: number | string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenIndex?: number | null;
}

export function Accordion({ items, defaultOpenIndex = 0 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `accordion-btn-${item.id || index}`;
        const panelId = `accordion-panel-${item.id || index}`;

        return (
          <div 
            key={index} 
            className={`border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm ${
              isOpen 
                ? "border-emerald-300 bg-white ring-2 ring-emerald-500/10 shadow-md" 
                : "border-gray-200 bg-white hover:border-gray-300 hover:shadow"
            }`}
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
              className={`w-full flex items-center justify-between p-4 sm:p-5 text-left font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-inset ${
                isOpen ? "bg-emerald-50/70 text-brand-dark" : "bg-white text-gray-800 hover:bg-gray-50/80"
              }`}
            >
              <div className="flex items-center gap-3">
                {item.icon && (
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    isOpen ? "bg-brand-gold text-white" : "bg-gray-100 text-gray-600"
                  }`}>
                    {item.icon}
                  </span>
                )}
                <span className="text-base sm:text-lg font-heading">{item.title}</span>
                {item.countBadge !== undefined && (
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                    {item.countBadge}
                  </span>
                )}
              </div>
              <ChevronDown 
                size={20} 
                className={`transform transition-transform duration-300 shrink-0 ${
                  isOpen ? "rotate-180 text-brand-gold" : "text-gray-400"
                }`} 
              />
            </button>
            
            <div 
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4 sm:p-6 bg-white border-t border-gray-100 text-gray-600 leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
