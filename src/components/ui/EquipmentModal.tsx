"use client";

import React, { useState } from "react";
import { X, ChevronRight } from "lucide-react";

interface EquipmentItem {
  stt: number;
  name: string;
  qty: string;
  power: string;
  model: string;
  location: string;
  ready: string;
}

interface EquipmentCategory {
  title: string;
  items: EquipmentItem[];
}

const equipmentData: EquipmentCategory[] = [
  {
    title: "I. Máy móc thi công",
    items: [
      { stt: 1, name: "Xe cẩu", qty: "1", power: "10T", model: "KATO", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 2, name: "Xe tải", qty: "1", power: "5T", model: "Đức", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 3, name: "Xe cẩu tự hành", qty: "1", power: "12,5T", model: "Nhật", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 4, name: "Kìm ép cốt thủy lực", qty: "2", power: "", model: "Thụy Điển", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 5, name: "Máy cắt cáp thủy lực", qty: "1", power: "", model: "Thụy Điển", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 6, name: "Máy cắt rãnh bêtông, đường nhựa", qty: "1", power: "", model: "Nhật", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 7, name: "Máy phá bêtông bằng khí nén", qty: "1", power: "", model: "Trung Quốc", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 8, name: "Dụng cụ uốn thanh cái", qty: "4", power: "", model: "", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 9, name: "Giá ra cáp chuyên dùng", qty: "2", power: "5T", model: "", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 10, name: "Kìm bóc lớp cách điện", qty: "4", power: "", model: "TAIWAN", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 11, name: "Puly chuyên dụng", qty: "40", power: "", model: "Nhật", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 12, name: "Máy phát điện", qty: "2", power: "5KVA", model: "HONDA", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 13, name: "Máy đột lỗ thủy lực", qty: "1", power: "50T", model: "Thụy Điển", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 14, name: "Máy mài dầm tay dạng đĩa", qty: "4", power: "", model: "", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 15, name: "Máy hàn", qty: "1", power: "25KVA", model: "TAIWAN", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 16, name: "Máy hàn xách tay", qty: "2", power: "7,5KVA", model: "", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 17, name: "Máy khoan cần", qty: "2", power: "14KW", model: "", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 18, name: "Máy khoan bêtông cầm tay", qty: "4", power: "ED-385K", model: "BOSCH", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 19, name: "Chân tó 2,5T", qty: "6", power: "2,5T", model: "", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 20, name: "Chân tó 5T", qty: "4", power: "5T", model: "", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 21, name: "Đầm bàn", qty: "4", power: "", model: "Nhật", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 22, name: "Đầm dùi", qty: "4", power: "", model: "Nhật", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 23, name: "Đèn khò ga", qty: "10", power: "", model: "", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 24, name: "Máy bơm nước", qty: "5", power: "3m³/h", model: "LG", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 25, name: "Palăng xích", qty: "3", power: "5T", model: "", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 26, name: "Máy cắt cầm tay", qty: "2", power: "", model: "Nga", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 27, name: "Tipho kéo cáp", qty: "2", power: "2T", model: "", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 28, name: "Kích thủy lực 5T", qty: "3", power: "5T", model: "", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 29, name: "Bàn cắt ống", qty: "1", power: "", model: "Nga", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 30, name: "Máy mài cầm tay", qty: "1", power: "", model: "Nga", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 31, name: "Máy khoan bàn", qty: "1", power: "", model: "Nga", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 32, name: "Kích răng", qty: "5", power: "5T", model: "Nga", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 33, name: "Kích thủy lực 10T", qty: "4", power: "10T", model: "Nga", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 34, name: "Bàn nguội, êtô", qty: "2", power: "", model: "Trung Quốc", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 35, name: "Máy đào 0,4m²", qty: "1", power: "", model: "Nga", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 36, name: "Máy phun sơn", qty: "1", power: "", model: "Nga", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 37, name: "Các dụng cụ đào đất thủ công", qty: "80", power: "", model: "", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 38, name: "Dụng cụ cầm tay các loại", qty: "30", power: "", model: "", location: "Nội thành HN", ready: "Sau 1 giờ" },
    ],
  },
  {
    title: "II. Máy móc thí nghiệm",
    items: [
      { stt: 1, name: "Máy đo điện trở đất", qty: "2", power: "AID 70", model: "Nhật", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 2, name: "Máy thử cao áp", qty: "1", power: "", model: "Nga", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 3, name: "Mêgôm mét", qty: "1", power: "2500V", model: "Nga", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 4, name: "Đồng hồ đo điện vạn năng", qty: "", power: "", model: "Nga", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 5, name: "Dụng cụ kiểm tra độ võng", qty: "", power: "", model: "Nga", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 6, name: "Cẩu đo", qty: "", power: "P333T", model: "Nga", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 7, name: "Ampe kìm", qty: "", power: "", model: "Nhật", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 8, name: "TE 20 mét", qty: "", power: "", model: "Nhật", location: "Nội thành HN", ready: "Sau 1 giờ" },
    ],
  },
];

export function EquipmentModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1 text-brand-gold font-bold hover:text-brand-dark transition-colors text-base"
      >
        Xem danh sách đầy đủ <ChevronRight size={18} />
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl relative animate-[fadeInUp_0.3s_ease-out] flex flex-col max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="bg-brand-dark text-white p-5 md:p-6 flex items-center justify-between shrink-0">
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-heading">
                  Bảng Thống Kê Máy Móc Thiết Bị
                </h3>
                <p className="text-white/60 text-sm mt-1">Phục vụ thi công các công trình</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 md:p-6 overflow-y-auto flex-1 custom-scrollbar">
              {equipmentData.map((category, catIdx) => (
                <div key={catIdx} className={catIdx > 0 ? "mt-8" : ""}>
                  <h4 className="text-lg font-bold text-brand-dark mb-4 bg-brand-gold/10 px-4 py-2 rounded-lg">
                    {category.title}
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse min-w-[700px]">
                      <thead>
                        <tr className="bg-gray-50 text-left">
                          <th className="px-3 py-3 font-semibold text-gray-600 border-b border-gray-200 w-12 text-center">STT</th>
                          <th className="px-3 py-3 font-semibold text-gray-600 border-b border-gray-200">Chủng loại thiết bị</th>
                          <th className="px-3 py-3 font-semibold text-gray-600 border-b border-gray-200 text-center w-16">SL</th>
                          <th className="px-3 py-3 font-semibold text-gray-600 border-b border-gray-200">Công suất</th>
                          <th className="px-3 py-3 font-semibold text-gray-600 border-b border-gray-200">Kiểu / Xuất xứ</th>
                          <th className="px-3 py-3 font-semibold text-gray-600 border-b border-gray-200">Tập kết</th>
                          <th className="px-3 py-3 font-semibold text-gray-600 border-b border-gray-200">Sẵn sàng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.items.map((item, idx) => (
                          <tr
                            key={idx}
                            className="hover:bg-brand-gold/5 transition-colors border-b border-gray-100 last:border-0"
                          >
                            <td className="px-3 py-2.5 text-center text-gray-400 font-medium">{item.stt}</td>
                            <td className="px-3 py-2.5 text-gray-800 font-medium">{item.name}</td>
                            <td className="px-3 py-2.5 text-center font-semibold text-brand-dark">{item.qty}</td>
                            <td className="px-3 py-2.5 text-gray-600">{item.power || "—"}</td>
                            <td className="px-3 py-2.5 text-gray-600">{item.model || "—"}</td>
                            <td className="px-3 py-2.5 text-gray-500">{item.location}</td>
                            <td className="px-3 py-2.5">
                              <span className="text-xs bg-brand-green/10 text-brand-green px-2 py-1 rounded-full font-medium whitespace-nowrap">
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
              <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-100 pt-6 pb-2">
                <p className="font-bold text-brand-dark">CÔNG TY TNHH XÂY LẮP VÀ PHÁT TRIỂN THƯƠNG MẠI BT</p>
                <p className="mt-1 text-gray-400">Toàn bộ thiết bị tập kết tại nội thành Hà Nội — sẵn sàng có mặt tại công trình sau 1 giờ</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
