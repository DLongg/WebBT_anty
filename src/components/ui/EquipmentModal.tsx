"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, ChevronRight, FileSpreadsheet, CheckCircle2 } from "lucide-react";
import { equipmentInventoryData } from "@/data/about";

export function EquipmentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-brand-gold hover:text-white px-5 py-2.5 rounded-xl font-bold transition-all duration-300 text-sm shadow-sm group active:scale-95"
      >
        <FileSpreadsheet size={18} className="text-emerald-700 group-hover:text-white transition-colors" />
        <span>Xem bảng kê chi tiết thiết bị</span>
        <ChevronRight size={16} className="text-emerald-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="equipment-modal-title"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 animate-fade-in-up"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl relative flex flex-col max-h-[90vh] overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="bg-brand-dark text-white p-5 md:p-6 flex items-center justify-between shrink-0 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/20 text-brand-gold-light flex items-center justify-center shrink-0">
                  <FileSpreadsheet size={22} />
                </div>
                <div>
                  <h3 id="equipment-modal-title" className="text-xl md:text-2xl font-bold font-heading">
                    Bảng Thống Kê Máy Móc Thiết Bị Thi Công
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm mt-0.5">
                    Hồ sơ năng lực thiết bị cơ giới & máy móc thí nghiệm BT DECOM
                  </p>
                </div>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Đóng bảng kê thiết bị"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-brand-gold"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 md:p-6 overflow-y-auto flex-1 custom-scrollbar">
              {equipmentInventoryData.map((category, catIdx) => (
                <div key={catIdx} className={catIdx > 0 ? "mt-8" : ""}>
                  <div className="flex items-center justify-between bg-emerald-50/80 border border-emerald-100 px-4 py-2.5 rounded-lg mb-3">
                    <h4 className="text-base font-bold text-emerald-950 font-heading">
                      {category.title}
                    </h4>
                    <span className="text-xs font-semibold text-emerald-700 bg-white px-2.5 py-1 rounded-full border border-emerald-200">
                      {category.items.length} hạng mục
                    </span>
                  </div>

                  <div className="overflow-x-auto border border-gray-200 rounded-xl">
                    <table className="w-full text-xs sm:text-sm border-collapse min-w-[720px]">
                      <thead>
                        <tr className="bg-gray-50 text-left border-b border-gray-200">
                          <th className="px-3.5 py-3 font-semibold text-gray-700 w-12 text-center">STT</th>
                          <th className="px-3.5 py-3 font-semibold text-gray-700">Chủng loại thiết bị</th>
                          <th className="px-3.5 py-3 font-semibold text-gray-700 text-center w-16">SL</th>
                          <th className="px-3.5 py-3 font-semibold text-gray-700">Công suất</th>
                          <th className="px-3.5 py-3 font-semibold text-gray-700">Kiểu / Xuất xứ</th>
                          <th className="px-3.5 py-3 font-semibold text-gray-700">Địa điểm tập kết</th>
                          <th className="px-3.5 py-3 font-semibold text-gray-700 text-center">Sẵn sàng</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {category.items.map((item, idx) => (
                          <tr
                            key={idx}
                            className="hover:bg-emerald-50/40 transition-colors"
                          >
                            <td className="px-3.5 py-2.5 text-center text-gray-400 font-medium">{item.stt}</td>
                            <td className="px-3.5 py-2.5 text-gray-900 font-semibold">{item.name}</td>
                            <td className="px-3.5 py-2.5 text-center font-bold text-brand-dark bg-gray-50/50">
                              {item.qty}
                            </td>
                            <td className="px-3.5 py-2.5 text-gray-600 font-mono text-xs">{item.power || "—"}</td>
                            <td className="px-3.5 py-2.5 text-gray-600">{item.model || "—"}</td>
                            <td className="px-3.5 py-2.5 text-gray-500">{item.location}</td>
                            <td className="px-3.5 py-2.5 text-center">
                              <span className="inline-flex items-center gap-1 text-[11px] bg-emerald-100/70 text-emerald-800 px-2 py-0.5 rounded-full font-semibold whitespace-nowrap">
                                <CheckCircle2 size={12} className="text-emerald-700" />
                                {item.ready}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}

              {/* Footer note */}
              <div className="mt-8 text-center text-xs sm:text-sm text-gray-500 border-t border-gray-100 pt-6 pb-2">
                <p className="font-bold text-brand-dark uppercase tracking-wide">
                  CÔNG TY TNHH XÂY LẮP VÀ PHÁT TRIỂN THƯƠNG MẠI BT (BT DECOM)
                </p>
                <p className="mt-1 text-gray-500">
                  Toàn bộ thiết bị tập kết tại nội thành Hà Nội — sẵn sàng cơ động có mặt tại công trường sau 1 giờ điều động.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 p-4 border-t border-gray-100 flex items-center justify-between shrink-0">
              <span className="text-xs text-gray-500">
                Nhấn <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-[11px] font-mono">Esc</kbd> để đóng
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg text-sm font-semibold transition-colors"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
