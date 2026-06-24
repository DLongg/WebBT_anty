import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/sections/CTASection";
import { FileText, Building2, Users, Banknote, ShieldCheck, HardHat, Wrench, Zap, ChevronDown, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Header />
      
      {/* Banner */}
      <div className="pt-32 pb-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1541888081622-1ce4471fbdab?w=1920&q=80')] bg-cover bg-center" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <SectionHeading 
            title="Hồ Sơ Năng Lực" 
            subtitle="Với mô hình tổ chức gọn nhẹ, khoa học và đội ngũ cán bộ nhân viên giàu kinh nghiệm, BT DECOM luôn tự tin đáp ứng mọi yêu cầu khắt khe nhất của khách hàng về kỹ mỹ thuật và tình hình thực tế trên công trường."
            alignment="center"
            className="mb-8"
          />
          <a 
            href="#" 
            className="inline-flex items-center gap-2 bg-brand-gold text-white px-6 py-3 rounded-md font-bold hover:bg-brand-gold-light transition-colors"
          >
            <FileText size={20} />
            Tải về Hồ sơ năng lực (PDF)
          </a>
        </div>
      </div>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          
          {/* Company Introduction */}
          <div className="mb-20">
            <div className="text-center mb-14">
              <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-3">Về chúng tôi</p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark inline-block relative">
                Giới Thiệu Chung
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full"></div>
              </h2>
            </div>

            {/* Hero intro block */}
            <div className="relative rounded-2xl overflow-hidden mb-10">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#1e3a20] to-brand-gold-dark opacity-95" />
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-brand-green/10 rounded-full blur-3xl" />
              <div className="relative z-10 p-8 md:p-12 flex gap-6">
                <div className="hidden md:block w-1.5 shrink-0 rounded-full bg-gradient-to-b from-brand-gold via-brand-gold-light to-brand-green" />
                <div className="text-white/90 text-lg leading-relaxed space-y-1">
                  <p className="text-2xl md:text-[1.65rem] font-heading font-bold text-white mb-4">
                    Công ty TNHH Xây lắp và Phát triển Thương mại BT
                  </p>
                  <p className="text-white/60 text-sm font-medium tracking-wide mb-6">BT TRADING DEVELOPMENT AND CONSTRUCTION COMPANY LIMITED – BT DECOM., LTD</p>
                  <p>
                    Được thành lập ngày 25 tháng 12 năm 2012, trải qua nhiều năm hình thành và phát triển, công ty đã từng bước khẳng định vị thế và uy tín trong lĩnh vực xây dựng và thương mại, trở thành đối tác tin cậy của nhiều khách hàng và đơn vị trên cả nước.
                  </p>
                </div>
              </div>
            </div>

            {/* Key stats cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
              {[
                { icon: <Clock size={22} />, label: "Thành lập", value: "25/12/2012", sub: "Hơn 13 năm kinh nghiệm" },
                { icon: <Building2 size={22} />, label: "Trụ sở chính", value: "Hà Nội", sub: "A40 khu TT 810, Thanh Trì" },
                { icon: <Users size={22} />, label: "Đại diện pháp luật", value: "Bà Đào Thị Hà", sub: "Sở hữu 100% vốn công ty" },
              ].map((item, idx) => (
                <div key={idx} className="group relative bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:border-brand-gold/30 transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-gold to-brand-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                      {item.icon}
                    </div>
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">{item.label}</span>
                  </div>
                  <p className="text-xl font-bold font-heading text-brand-dark mb-1">{item.value}</p>
                  <p className="text-sm text-gray-500">{item.sub}</p>
                </div>
              ))}
            </div>

            {/* Content blocks */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-5">
                  <div className="hidden md:block w-1 shrink-0 rounded-full bg-brand-gold/40" />
                  <div className="text-gray-700 leading-relaxed text-[1.05rem] space-y-4">
                    <p>
                      BT DECOM không ngừng đầu tư, nâng cao năng lực quản lý, năng lực thi công và chất lượng dịch vụ nhằm đáp ứng ngày càng tốt hơn các yêu cầu của khách hàng, đồng thời hướng tới sự phát triển bền vững và lâu dài.
                    </p>
                    <p>
                      Với sự điều hành năng động, tâm huyết cùng định hướng phát triển rõ ràng, Ban lãnh đạo công ty luôn chú trọng xây dựng môi trường làm việc chuyên nghiệp, phát huy tối đa năng lực của đội ngũ cán bộ, kỹ sư và người lao động.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-5">
                  <div className="hidden md:block w-1 shrink-0 rounded-full bg-brand-green/60" />
                  <p className="text-gray-700 leading-relaxed text-[1.05rem]">
                    Bộ máy tổ chức của công ty được xây dựng theo mô hình tinh gọn, khoa học và hiệu quả, bao gồm Ban Giám đốc cùng các phòng ban chuyên môn như Phòng Kế hoạch Tổng hợp, Phòng Kỹ thuật Vật tư, Phòng Tài chính Kế toán và ba đội xây lắp trực tiếp thi công. Cơ cấu tổ chức này giúp doanh nghiệp chủ động trong công tác quản lý, triển khai dự án và bảo đảm tiến độ cũng như chất lượng công trình.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote section */}
            <div className="relative mt-10 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-light opacity-95" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
              <div className="relative z-10 p-8 md:p-10 flex items-start gap-5">
                <span className="hidden md:block text-6xl font-serif text-white/30 leading-none -mt-2 shrink-0">&ldquo;</span>
                <div>
                  <p className="text-white text-lg md:text-xl leading-relaxed font-medium italic">
                    Với phương châm lấy chất lượng, uy tín và sự hài lòng của khách hàng làm nền tảng phát triển, Công ty TNHH Xây lắp và Phát triển Thương mại BT luôn nỗ lực không ngừng để mang đến những sản phẩm và dịch vụ tốt nhất, góp phần tạo dựng những công trình bền vững, an toàn và có giá trị lâu dài cho cộng đồng.
                  </p>
                  <p className="text-white/60 text-sm mt-4 font-semibold uppercase tracking-wider">— Ban lãnh đạo BT DECOM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Legal Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-brand-green/30 flex items-center justify-center text-brand-gold">
                  <Building2 size={24} />
                </div>
                <h2 className="text-2xl font-bold font-heading text-brand-dark">Thông tin chung & Pháp lý</h2>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="font-semibold min-w-32 shrink-0">Tên tiếng Việt:</span>
                  <span>CÔNG TY TNHH XÂY LẮP VÀ PHÁT TRIỂN THƯƠNG MẠI BT</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold min-w-32 shrink-0">Tên tiếng Anh:</span>
                  <span>BT TRADING DEVELOPMENT AND CONSTRUCTION COMPANY LIMITED</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold min-w-32 shrink-0">Tên viết tắt:</span>
                  <span>BT DECOM., LTD</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold min-w-32 shrink-0">Loại hình DN:</span>
                  <span>Công ty trách nhiệm hữu hạn một thành viên</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold min-w-32 shrink-0">Ngày đăng ký:</span>
                  <span>25/12/2012</span>
                </li>
              </ul>
            </div>

            {/* Leadership */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-brand-green/30 flex items-center justify-center text-brand-gold">
                  <Users size={24} />
                </div>
                <h2 className="text-2xl font-bold font-heading text-brand-dark">Ban lãnh đạo & Kế toán</h2>
              </div>
              
              <div className="bg-brand-light p-6 rounded-xl mb-6">
                <h3 className="font-bold text-lg text-brand-dark mb-1">Bà Đào Thị Hà</h3>
                <p className="text-sm text-brand-gold font-medium mb-3">Người đại diện theo pháp luật</p>
                <p className="text-gray-600 text-sm">Nắm giữ 100% tỷ lệ sở hữu của công ty.</p>
              </div>

              <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-lg text-brand-dark mb-1">Ông Mai Thanh Hải</h3>
                <p className="text-sm text-gray-500 font-medium mb-2">Kế toán trưởng / Phụ trách kế toán</p>
              </div>
            </div>
          </div>

          {/* Company Capacity: HR & Equipment */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-heading text-brand-dark inline-block relative">
                Năng Lực Cốt Lõi
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-brand-gold rounded-full"></div>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Human Resources */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-bl-full -z-10" />
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                    <HardHat size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-brand-dark">Năng lực Nhân sự</h3>
                    <p className="text-gray-500">Đội ngũ 82 nhân sự chuyên môn cao</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-brand-dark mb-3 text-lg flex items-center justify-between">
                      Cán bộ chuyên môn (28 người)
                    </h4>
                    <div className="space-y-3 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <div className="flex items-start gap-2">
                        <span className="w-2 h-2 mt-1.5 rounded-full bg-brand-gold shrink-0" />
                        <div><strong>Trên Đại học (2 người):</strong> Thạc sĩ Quản trị kinh doanh.</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-2 h-2 mt-1.5 rounded-full bg-brand-gold shrink-0" />
                        <div><strong>Đại học (20 người):</strong> 5 KS hệ thống điện, 1 KS tự động hóa, 1 KS thiết bị điện, 1 KS cơ khí chế tạo máy, 1 KS cơ khí ô tô, 1 KS xây dựng, 2 KS tin học, 1 KS điện tử. Khối kinh tế: 2 CN Tài chính kế toán, 2 CN QTKD, 1 CN Kinh tế ngoại thương, 1 CN Luật, 1 CN Kinh tế lao động.</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-2 h-2 mt-1.5 rounded-full bg-brand-gold shrink-0" />
                        <div><strong>Cao đẳng (6 người):</strong> 5 CĐ hệ thống điện, 1 CĐ kế toán.</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-brand-dark mb-3 text-lg">Công nhân kỹ thuật (54 người)</h4>
                    <div className="space-y-3 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <p>Đội ngũ lành nghề, thâm niên cao, trải dài từ bậc 3/7 đến bậc 6/7.</p>
                      <div className="grid grid-cols-2 gap-2 mt-2 font-medium">
                        <div className="flex items-center gap-2"><Zap size={14} className="text-brand-gold"/> 30 CN Kỹ thuật điện</div>
                        <div className="flex items-center gap-2"><Wrench size={14} className="text-brand-gold"/> 8 CN Cơ khí</div>
                        <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold ml-1"/> 4 CN Hàn</div>
                        <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold ml-1"/> 4 CN Xây dựng</div>
                        <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold ml-1"/> 3 Lái cẩu</div>
                        <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold ml-1"/> 2 Lái xe tải</div>
                        <div className="flex items-center gap-2 col-span-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold ml-1"/> 3 Nhân viên thí nghiệm</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Equipment & Machinery */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-bl-full -z-10" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-gold shrink-0">
                    <Wrench size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-brand-dark">Máy móc & Thiết bị</h3>
                    <p className="text-gray-500">Hơn 40 loại thiết bị hạng nặng và chuyên dụng</p>
                  </div>
                </div>

                <div className="bg-brand-gold text-white p-4 rounded-lg mb-6 shadow-md border-l-4 border-brand-dark font-medium text-sm flex items-start gap-3">
                  <Clock size={20} className="shrink-0 mt-0.5" />
                  <p><strong>Cam kết tốc độ:</strong> Toàn bộ máy móc được tập kết tại nội thành Hà Nội. Khả năng cơ động và sẵn sàng có mặt tại công trình <strong>khi có yêu cầu</strong>.</p>
                </div>

                <div className="space-y-4 text-sm flex-grow">
                  <div className="border border-gray-100 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 font-bold text-brand-dark border-b border-gray-100">Xe cơ giới & Thủy lực</div>
                    <div className="p-4 text-gray-600 bg-white leading-relaxed">
                      Xe cẩu 10T KATO (Nhật Bản), Xe tải 5T (Đức), Xe cẩu tự hành 12.5T (Nhật Bản). Máy đột lỗ thủy lực 50T (Thụy Điển), Kìm ép cốt, Kích thủy lực 10T/5T (Nga)...
                    </div>
                  </div>

                  <div className="border border-gray-100 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 font-bold text-brand-dark border-b border-gray-100">Thiết bị Điện & Thí nghiệm</div>
                    <div className="p-4 text-gray-600 bg-white leading-relaxed">
                      <strong>Thí nghiệm:</strong> Máy đo điện trở đất AID 70 (Nhật Bản), Máy thử cao áp, Mêgôm mét 2500V (Nga), Cẩu đo P333T.<br/>
                      <strong>Thi công:</strong> Phát điện 5KVA HONDA, Máy hàn 25KVA, Máy cắt rãnh bê tông (Nhật)...
                    </div>
                  </div>
                </div>
                
                <button className="mt-6 w-full py-3 flex items-center justify-center gap-2 text-brand-gold font-bold bg-brand-gold/5 rounded-lg hover:bg-brand-gold/10 transition-colors">
                  <ChevronDown size={18} /> Xem toàn bộ danh sách 50+ thiết bị
                </button>
              </div>
            </div>
          </div>

          {/* Organizational Chart */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div className="w-12 h-12 rounded-lg bg-brand-green/30 flex items-center justify-center text-brand-gold">
                <ShieldCheck size={24} />
              </div>
              <h2 className="text-3xl font-bold font-heading text-brand-dark text-center">Sơ đồ tổ chức</h2>
            </div>
            
            <div className="bg-brand-light/50 p-8 md:p-12 rounded-2xl border border-gray-100 overflow-x-auto">
              <div className="min-w-[700px] flex flex-col items-center">
                
                {/* Level 1 */}
                <div className="bg-brand-gold text-white font-bold py-3 px-8 rounded-lg shadow-md relative mb-12">
                  Ban Giám đốc
                  <div className="absolute left-1/2 -bottom-12 w-px h-12 bg-gray-300"></div>
                </div>

                {/* Level 2 Container */}
                <div className="w-full relative flex justify-between px-10 mb-12">
                  {/* Horizontal line connecting departments */}
                  <div className="absolute top-0 left-[15%] right-[15%] h-px bg-gray-300"></div>
                  
                  {/* Department 1 */}
                  <div className="relative flex flex-col items-center">
                    <div className="absolute left-1/2 -top-6 w-px h-6 bg-gray-300"></div>
                    <div className="bg-white border-2 border-brand-gold text-brand-dark font-bold py-3 px-6 rounded-lg shadow-sm text-center w-48 z-10 relative">
                      Phòng Kế hoạch <br/> Tổng hợp
                      <div className="absolute left-1/2 -bottom-12 w-px h-12 bg-gray-300"></div>
                    </div>
                  </div>

                  {/* Department 2 */}
                  <div className="relative flex flex-col items-center">
                    <div className="absolute left-1/2 -top-0 w-px h-0 bg-gray-300"></div>
                    <div className="bg-white border-2 border-brand-gold text-brand-dark font-bold py-3 px-6 rounded-lg shadow-sm text-center w-48 z-10 relative">
                      Phòng Kỹ thuật <br/> Vật tư
                      <div className="absolute left-1/2 -bottom-12 w-px h-12 bg-gray-300"></div>
                    </div>
                  </div>

                  {/* Department 3 */}
                  <div className="relative flex flex-col items-center">
                    <div className="absolute left-1/2 -top-6 w-px h-6 bg-gray-300"></div>
                    <div className="bg-white border-2 border-brand-gold text-brand-dark font-bold py-3 px-6 rounded-lg shadow-sm text-center w-48 z-10 relative">
                      Phòng Tài chính <br/> Kế toán
                      <div className="absolute left-1/2 -bottom-12 w-px h-12 bg-gray-300"></div>
                    </div>
                  </div>
                </div>

                {/* Level 3 Container */}
                <div className="w-[80%] relative flex justify-between px-4">
                  {/* Horizontal line connecting execution teams */}
                  <div className="absolute -top-12 left-[10%] right-[10%] h-px bg-gray-300"></div>
                  
                  {['Đội Xây Lắp 1', 'Đội Xây Lắp 2', 'Đội Xây Lắp 3'].map((team, idx) => (
                    <div key={idx} className="relative flex flex-col items-center">
                      <div className="absolute left-1/2 -top-12 w-px h-12 bg-gray-300"></div>
                      <div className="bg-gray-100 text-gray-700 font-bold py-2 px-6 rounded-md shadow-sm border border-gray-200 text-center w-36 z-10">
                        {team}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* Bank Accounts */}
          <div>
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div className="w-12 h-12 rounded-lg bg-brand-green/30 flex items-center justify-center text-brand-gold">
                <Banknote size={24} />
              </div>
              <h2 className="text-3xl font-bold font-heading text-brand-dark text-center">Thông tin Giao dịch / Ngân hàng</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  bank: "Vietcombank", 
                  branch: "CN Thăng Long", 
                  number: "0491000017938",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Vietcombank_logo.svg/2560px-Vietcombank_logo.svg.png"
                },
                { 
                  bank: "MB Bank", 
                  branch: "CN Ba Đình - PGD Đội Cấn", 
                  number: "0341100302006",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Military_Bank_logo.svg/2560px-Military_Bank_logo.svg.png"
                },
                { 
                  bank: "SHB", 
                  branch: "CN Hàn Thuyên", 
                  number: "2227776868",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/SHB_Logo.svg/2560px-SHB_Logo.svg.png"
                }
              ].map((acc, idx) => (
                <div key={idx} className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-8 mb-4">
                    <img src={acc.logo} alt={acc.bank} className="h-full object-contain object-left" />
                  </div>
                  <div className="text-sm text-gray-500 mb-1">{acc.branch}</div>
                  <div className="text-xl font-bold text-brand-dark tracking-wider">{acc.number}</div>
                  <div className="text-xs text-gray-400 mt-4 uppercase">Chủ tài khoản: CÔNG TY TNHH XÂY LẮP VÀ PHÁT TRIỂN THƯƠNG MẠI BT</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      
      <CTASection />
      <Footer />
    </>
  );
}
