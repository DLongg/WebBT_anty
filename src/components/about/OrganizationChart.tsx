import { Network, UserCheck, FolderKanban, Wrench, Calculator, HardHat } from "lucide-react";

export function OrganizationChart() {
  const departments = [
    {
      title: "PHÒNG KẾ HOẠCH TỔNG HỢP",
      desc: "Quản lý hợp đồng, lập tiến độ & hồ sơ dự thầu",
      icon: <FolderKanban size={20} className="text-emerald-700" />,
      highlight: false
    },
    {
      title: "PHÒNG KỸ THUẬT VẬT TƯ",
      desc: "Chỉ đạo biện pháp thi công, vật tư & máy móc",
      icon: <Wrench size={20} className="text-emerald-700" />,
      highlight: true
    },
    {
      title: "PHÒNG TÀI CHÍNH KẾ TOÁN",
      desc: "Quản lý dòng tiền dự án, thanh quyết toán",
      icon: <Calculator size={20} className="text-emerald-700" />,
      highlight: false
    }
  ];

  const teams = [
    { name: "ĐỘI XÂY LẮP 1", desc: "Chuyên trách xây dựng công trình & hạ tầng kỹ thuật" },
    { name: "ĐỘI XÂY LẮP 2", desc: "Chuyên trách hệ thống cơ điện (MEP) & trạm biến áp" },
    { name: "ĐỘI XÂY LẮP 3", desc: "Chuyên trách chiếu sáng, đường cáp ngầm & cơ điện nhẹ" }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-50/60 border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-100">
            <Network size={14} className="text-brand-gold" />
            CƠ CẤU VẬN HÀNH
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-4">
            Sơ Đồ Cơ Cấu Tổ Chức
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full mb-3" />
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Hệ thống phân cấp quản lý chuyên nghiệp, thông suốt từ Ban Giám Đốc tới các đơn vị thi công trực tiếp tại công trường.
          </p>
        </div>

        {/* ================= DESKTOP TREE (Hidden on Mobile) ================= */}
        <div className="hidden md:flex flex-col items-center">
          
          {/* LEVEL 1: BAN GIÁM ĐỐC */}
          <div className="relative mb-14 flex flex-col items-center">
            <div className="bg-brand-gold text-white font-bold py-4 px-12 rounded-2xl shadow-xl border border-emerald-400 text-center tracking-wide group transition-transform hover:-translate-y-1">
              <div className="flex items-center justify-center gap-2.5 mb-1">
                <UserCheck size={20} className="text-emerald-200" />
                <span className="text-lg font-heading uppercase">BAN GIÁM ĐỐC</span>
              </div>
              <p className="text-xs text-white/80 font-normal">Điều hành chiến lược & Quản lý toàn diện</p>
            </div>
            {/* Center stem down */}
            <div className="w-0.5 h-14 bg-emerald-500/60" />
          </div>

          {/* LEVEL 2: 3 PHÒNG BAN CHỨC NĂNG */}
          <div className="relative w-full max-w-4xl mb-14">
            {/* Horizontal bridge line spanning across 3 departments */}
            <div className="absolute top-0 left-[16.66%] right-[16.66%] h-0.5 bg-emerald-500/60" />

            <div className="grid grid-cols-3 gap-6">
              {departments.map((dept, idx) => (
                <div key={idx} className="relative flex flex-col items-center">
                  {/* Vertical drop line to card */}
                  <div className="w-0.5 h-6 bg-emerald-500/60" />

                  <div className={`w-full bg-white rounded-2xl p-5 border text-center shadow-sm transition-all duration-300 hover:shadow-md ${
                    dept.highlight 
                      ? "border-emerald-400 ring-2 ring-emerald-500/10 bg-gradient-to-b from-white to-emerald-50/40" 
                      : "border-gray-200"
                  }`}>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-2.5">
                      {dept.icon}
                    </div>
                    <h3 className="font-bold text-sm sm:text-base font-heading text-brand-dark mb-1 leading-snug">
                      {dept.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {dept.desc}
                    </p>

                    {/* For center technical department, stem line down to field teams */}
                    {dept.highlight && (
                      <div className="absolute left-1/2 -bottom-14 w-0.5 h-14 bg-emerald-500/60 -translate-x-1/2" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LEVEL 3: CÁC ĐỘI XÂY LẮP TRỰC TIẾP */}
          <div className="relative flex flex-col items-center w-full max-w-2xl pt-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-dark text-white text-xs font-bold uppercase tracking-wider mb-6 shadow-md">
              <HardHat size={15} className="text-emerald-400" />
              <span>CÁC ĐỘI THI CÔNG TRỰC TIẾP TẠI CÔNG TRƯỜNG</span>
            </div>

            <div className="grid grid-cols-3 gap-4 w-full">
              {teams.map((team, idx) => (
                <div 
                  key={idx}
                  className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-4 text-center shadow-xs hover:bg-emerald-50 hover:shadow-md transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white border border-emerald-200 text-brand-gold flex items-center justify-center mx-auto mb-2 font-bold font-heading text-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm font-heading text-emerald-950 mb-1">
                    {team.name}
                  </h4>
                  <p className="text-[11px] text-gray-600 leading-snug">
                    {team.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ================= MOBILE HIERARCHY CARDS (Visible on <768px) ================= */}
        <div className="md:hidden space-y-6">
          {/* Level 1 Mobile */}
          <div className="bg-brand-gold text-white p-5 rounded-2xl shadow-lg border border-emerald-400 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <UserCheck size={18} className="text-emerald-200" />
              <h3 className="font-bold text-base font-heading">BAN GIÁM ĐỐC</h3>
            </div>
            <p className="text-xs text-white/80">Điều hành chiến lược & Quản lý toàn diện</p>
          </div>

          <div className="flex justify-center">
            <div className="w-0.5 h-6 bg-emerald-500" />
          </div>

          {/* Level 2 Mobile: 3 Departments */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-500 text-center mb-2">
              Khối Phòng Ban Chức Năng
            </div>
            {departments.map((dept, idx) => (
              <div 
                key={idx} 
                className={`bg-white border rounded-xl p-4 shadow-sm flex items-start gap-3.5 ${
                  dept.highlight ? "border-emerald-300 bg-emerald-50/30" : "border-gray-200"
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                  {dept.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-brand-dark font-heading">{dept.title}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">{dept.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="w-0.5 h-6 bg-emerald-500" />
          </div>

          {/* Level 3 Mobile: Direct Construction Teams */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-500 text-center mb-2">
              Khối Thi Công Trực Tiếp
            </div>
            {teams.map((team, idx) => (
              <div 
                key={idx}
                className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-4 shadow-xs flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-gold text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-emerald-950 font-heading">{team.name}</h4>
                  <p className="text-xs text-gray-600 mt-0.5">{team.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
