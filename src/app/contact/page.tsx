"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin, Phone, Mail, Clock, Send, Users, Banknote } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name.trim()) newErrors.name = "Vui lòng nhập họ tên";
    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      <Header />
      
      {/* Banner */}
      <div className="pt-32 pb-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')] bg-cover bg-center" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <SectionHeading 
            title="Liên Hệ Với Chúng Tôi" 
            subtitle="BT DECOM sẵn sàng lắng nghe và đáp ứng mọi yêu cầu của Quý đối tác, khách hàng 24/7."
            alignment="center"
            className="mb-0"
          />
        </div>
      </div>

      <section className="py-20 bg-brand-light relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold font-heading text-brand-dark mb-6">Thông tin giao dịch chính thức</h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                <strong className="text-brand-dark block text-lg mb-1">CÔNG TY TNHH XÂY LẮP VÀ PHÁT TRIỂN THƯƠNG MẠI BT</strong>
                <span className="italic block mb-1">BT TRADING DEVELOPMENT AND CONSTRUCTION COMPANY LIMITED</span>
                <span className="block mb-3 font-medium">Tên viết tắt: BT DECOM., LTD</span>
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-gold shrink-0 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark text-lg mb-1">Trụ sở chính</h3>
                    <p className="text-gray-600">Số nhà A40 khu TT 810, Xã Thanh Trì, Thành phố Hà Nội</p>
                    <p className="text-gray-400 text-sm mt-1">(Ghi chú hồ sơ cũ: Xã Vĩnh Quỳnh, Huyện Thanh Trì)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-gold shrink-0 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark text-lg mb-1">Điện thoại / Hotline</h3>
                    <p className="text-brand-gold font-bold text-xl mb-1"><a href="tel:0936189292">0936 189 292</a></p>
                    <p className="text-gray-600">Điện thoại bàn: (024) 3861 6273</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-gold shrink-0 shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark text-lg mb-1">Email</h3>
                    <p className="text-gray-600"><a href="mailto:btdecom@gmail.com" className="hover:text-brand-gold transition-colors">btdecom@gmail.com</a></p>
                  </div>
                </div>
              </div>

              {/* Department Contacts */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="text-brand-gold" size={20} />
                  <h3 className="font-bold font-heading text-xl text-brand-dark">Liên hệ theo bộ phận</h3>
                </div>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-gray-100">
                    <p className="font-bold text-brand-dark">Người đại diện theo pháp luật</p>
                    <p className="text-gray-600">Bà Đào Thị Hà</p>
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark">Phòng Tài chính Kế toán (Hóa đơn, chứng từ)</p>
                    <p className="text-gray-600 flex items-center gap-2">Ông Mai Thanh Hải - Kế toán trưởng</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 h-fit sticky top-28">
              <h3 className="text-2xl font-bold font-heading text-brand-dark mb-6">Gửi yêu cầu tư vấn</h3>
              
              {isSuccess ? (
                <div className="bg-brand-green/30 text-brand-gold p-6 rounded-lg text-center border border-brand-green">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-brand-gold" />
                  </div>
                  <h4 className="font-bold text-xl mb-2">Gửi thành công!</h4>
                  <p className="text-sm">Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.</p>
                  <Button 
                    className="mt-6" 
                    onClick={() => setIsSuccess(false)}
                    variant="outline"
                  >
                    Gửi yêu cầu khác
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Họ và tên *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-brand-gold bg-white text-brand-dark`}
                        placeholder="Nguyễn Văn A"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Số điện thoại *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-brand-gold bg-white text-brand-dark`}
                        placeholder="09xx xxx xxx"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-brand-gold bg-white text-brand-dark`}
                      placeholder="email@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Lĩnh vực quan tâm</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-gold bg-white text-brand-dark`}
                    >
                      <option value="">-- Tùy chọn dịch vụ --</option>
                      <option value="Thi cong dien">Thi công Xây lắp điện</option>
                      <option value="Co dien toa nha">Cơ điện tòa nhà (M&E)</option>
                      <option value="Cap thoat nuoc">Hệ thống cấp thoát nước</option>
                      <option value="Thuong mai may moc">Thương mại máy móc</option>
                      <option value="Khac">Khác</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Nội dung chi tiết</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-gold bg-white text-brand-dark resize-none"
                      placeholder="Mô tả yêu cầu hoặc dự án của bạn..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full justify-center h-12 text-base shadow-md"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Đang gửi..." : "Gửi yêu cầu ngay"}
                  </Button>
                </form>
              )}
            </div>
            
          </div>
        </div>
      </section>

      {/* Map Section & Banking Info */}
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Banking Accounts */}
          <div className="p-10 md:p-16 flex flex-col justify-center bg-brand-dark text-white">
            <div className="flex items-center gap-3 mb-8">
              <Banknote className="text-brand-gold" size={32} />
              <h2 className="text-3xl font-bold font-heading text-white">Thông tin thanh toán</h2>
            </div>
            <p className="text-gray-400 mb-8 max-w-lg">
              Thông tin tài khoản ngân hàng chính thức của CÔNG TY TNHH XÂY LẮP VÀ PHÁT TRIỂN THƯƠNG MẠI BT phục vụ giao dịch cho đối tác và khách hàng:
            </p>
            
            <div className="space-y-4">
              {[
                { 
                  bank: "Vietcombank", 
                  branch: "CN Thăng Long", 
                  number: "0491000017938"
                },
                { 
                  bank: "MB Bank", 
                  branch: "CN Ba Đình - PGD Đội Cấn", 
                  number: "0341100302006"
                },
                { 
                  bank: "SHB", 
                  branch: "CN Hàn Thuyên", 
                  number: "2227776868"
                }
              ].map((acc, idx) => (
                <div key={idx} className="bg-white/10 p-5 rounded-lg border border-white/10 hover:border-brand-gold/50 transition-colors">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-2">
                    <span className="font-bold text-lg text-brand-gold">{acc.bank}</span>
                    <span className="text-xl font-bold font-mono tracking-wider">{acc.number}</span>
                  </div>
                  <div className="text-sm text-gray-400">Chi nhánh: {acc.branch}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Google Maps */}
          <div className="h-[500px] lg:h-auto min-h-[400px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.688325435974!2d105.845014!3d20.965004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135add123456789%3A0xabcdef123456789!2zQSs0MCBLSFUgVE0gODEwLCBUaGFuaCBUcsOsLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
