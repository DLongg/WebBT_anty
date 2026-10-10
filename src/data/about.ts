export interface CompanyStat {
  value: string;
  label: string;
  iconName: "Clock" | "Users" | "Wrench" | "Layers";
  description?: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface LegalField {
  label: string;
  value: string;
  iconName: "Calendar" | "MapPin" | "UserCheck" | "FileCheck";
}

export interface WorkforceRole {
  name: string;
  count: number;
  note?: string;
}

export interface FeaturedEquipmentItem {
  id: string;
  name: string;
  specs: string;
  category: string;
  image: string;
}

export interface BankAccount {
  bank: string;
  shortName: string;
  branch: string;
  accountNumber: string;
  logo: string;
  color: string;
}

export interface EquipmentTableItem {
  stt: number;
  name: string;
  qty: string;
  power: string;
  model: string;
  location: string;
  ready: string;
}

export interface EquipmentTableCategory {
  title: string;
  items: EquipmentTableItem[];
}

// 1. STATS
export const companyStats: CompanyStat[] = [
  {
    value: "13+",
    label: "Năm kinh nghiệm",
    iconName: "Clock",
    description: "Khẳng định uy tín từ năm 2012"
  },
  {
    value: "82",
    label: "Tổng số nhân sự",
    iconName: "Users",
    description: "Đội ngũ chuyên môn & kỹ thuật cao"
  },
  {
    value: "50+",
    label: "Thiết bị máy móc",
    iconName: "Wrench",
    description: "Đồng bộ, hiện đại, sẵn sàng điều động"
  },
  {
    value: "3",
    label: "Đội xây lắp chủ lực",
    iconName: "Layers",
    description: "Thi công trực tiếp các công trình lớn"
  }
];

// 2. TIMELINE
export const timelineEvents: Milestone[] = [
  {
    year: "2012",
    title: "Thành lập công ty",
    description: "Đặt nền móng hoạt động trong lĩnh vực xây lắp và thương mại kỹ thuật tại miền Bắc."
  },
  {
    year: "2015",
    title: "Mở rộng lĩnh vực thi công",
    description: "Phát triển chuyên sâu các gói thầu hệ thống cơ điện (MEP), trạm biến áp và đường dây trung thế."
  },
  {
    year: "2020",
    title: "Nâng cấp năng lực thiết bị máy móc",
    description: "Đầu tư đồng bộ đội xe cẩu tự hành, xe chuyên dụng và dàn thiết bị thử nghiệm hiện đại."
  },
  {
    year: "2025",
    title: "Đạt quy mô hơn 82 nhân sự chuyên môn",
    description: "Chuẩn hóa hệ thống quản lý, mở rộng đối tác chiến lược và hoàn thành nhiều công trình trọng điểm."
  },
  {
    year: "2026 & Tương lai",
    title: "Định hướng mở rộng và phát triển bền vững",
    description: "Tiếp tục nâng tầm công nghệ, chuyển đổi số quy trình quản lý thi công và phát triển vươn xa."
  }
];

// 3. LEGAL PROFILE
export const legalProfile: LegalField[] = [
  {
    label: "Ngày thành lập",
    value: "25/12/2012",
    iconName: "Calendar"
  },
  {
    label: "Trụ sở chính",
    value: "Hà Nội",
    iconName: "MapPin"
  },
  {
    label: "Người đại diện pháp luật",
    value: "Đào Thị Hà",
    iconName: "UserCheck"
  },
  {
    label: "Loại hình doanh nghiệp",
    value: "Công ty TNHH Một thành viên",
    iconName: "FileCheck"
  }
];

// 4. WORKFORCE
export const workforceOverview = [
  { count: "28", label: "Cán bộ chuyên môn", sub: "Trình độ ĐH & Sau ĐH" },
  { count: "54", label: "Công nhân kỹ thuật", sub: "Lành nghề, bậc 3/7 - 6/7" },
  { count: "20", label: "Kỹ sư Đại học", sub: "Đa ngành kỹ thuật & kinh tế" },
  { count: "02", label: "Thạc sĩ", sub: "Quản trị kinh doanh" }
];

export const workforceSpecialists: WorkforceRole[] = [
  { name: "Thạc sĩ Quản trị kinh doanh", count: 2 },
  { name: "Kỹ sư hệ thống điện", count: 5 },
  { name: "Kỹ sư tự động hóa", count: 1 },
  { name: "Kỹ sư thiết bị điện", count: 1 },
  { name: "Kỹ sư cơ khí (chế tạo máy & ô tô)", count: 2 },
  { name: "Kỹ sư xây dựng", count: 1 },
  { name: "Kỹ sư tin học & điện tử", count: 3 },
  { name: "Cử nhân Kinh tế, Luật, Kế toán, Ngoại thương", count: 7 },
  { name: "Cao đẳng kỹ thuật & nghiệp vụ", count: 6 }
];

export const workforceTechnicalWorkers: WorkforceRole[] = [
  { name: "Thợ điện", count: 30 },
  { name: "Thợ cơ khí", count: 8 },
  { name: "Thợ hàn", count: 4 },
  { name: "Thợ xây dựng", count: 4 },
  { name: "Lái cẩu", count: 3 },
  { name: "Lái xe tải", count: 2 },
  { name: "Nhân viên thí nghiệm", count: 3 }
];

// 5. FEATURED EQUIPMENT
export const featuredEquipment: FeaturedEquipmentItem[] = [
  {
    id: "crane-kato-10t",
    name: "Xe cẩu 10T KATO",
    specs: "Công suất 10 Tấn • Xuất xứ Nhật Bản",
    category: "Cẩu chuyên dụng",
    image: "/images/about/crane-kato-10t.jpg"
  },
  {
    id: "truck-5t",
    name: "Xe tải 5T",
    specs: "Tải trọng 5 Tấn • Xuất xứ Đức",
    category: "Vận tải thiết bị",
    image: "/images/about/truck-5t.jpg"
  },
  {
    id: "crane-boom-12t5",
    name: "Xe cẩu tự hành 12.5T",
    specs: "Công suất 12,5 Tấn • Xuất xứ Nhật Bản",
    category: "Cẩu cơ động cao",
    image: "/images/about/crane-boom-12t5.jpg"
  },
  {
    id: "high-voltage-tester",
    name: "Máy thử cao áp",
    specs: "Thí nghiệm cách điện và kiểm tra phóng điện cao áp",
    category: "Thiết bị đo lường thí nghiệm",
    image: "/images/about/high-voltage-tester.jpg"
  },
  {
    id: "welding-machine-25kva",
    name: "Máy hàn 25KVA",
    specs: "Công suất 25KVA • Xuất xứ TAIWAN",
    category: "Cơ khí & chế tạo",
    image: "/images/about/welding-machine-25kva.jpg"
  },
  {
    id: "ground-resistance-tester",
    name: "Máy đo điện trở đất",
    specs: "Model AID 70 • Xuất xứ Nhật Bản",
    category: "Đo lường an toàn điện",
    image: "/images/about/ground-resistance-tester.jpg"
  }
];

// 6. BANK ACCOUNTS
export const bankAccounts: BankAccount[] = [
  {
    bank: "Vietcombank",
    shortName: "Ngân hàng Ngoại thương Việt Nam",
    branch: "CN Thăng Long",
    accountNumber: "0491000017938",
    logo: "/images/about/vcb-logo.svg",
    color: "#005B38"
  },
  {
    bank: "MB Bank",
    shortName: "Ngân hàng Quân đội",
    branch: "CN Ba Đình – PGD Đội Cấn",
    accountNumber: "0341100302006",
    logo: "/images/about/mbbank-logo.svg",
    color: "#1400FF"
  },
  {
    bank: "SHB",
    shortName: "Ngân hàng Sài Gòn - Hà Nội",
    branch: "CN Hàn Thuyên",
    accountNumber: "2227776868",
    logo: "/images/about/shb-logo.svg",
    color: "#F37021"
  }
];

// 7. FULL EQUIPMENT INVENTORY
export const equipmentInventoryData: EquipmentTableCategory[] = [
  {
    title: "I. Máy móc thi công",
    items: [
      { stt: 1, name: "Xe cẩu", qty: "1", power: "10T", model: "KATO", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 2, name: "Xe tải", qty: "1", power: "5T", model: "Đức", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 3, name: "Xe cẩu tự hành", qty: "1", power: "12,5T", model: "Nhật", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 4, name: "Kìm ép cốt thủy lực", qty: "2", power: "—", model: "Thụy Điển", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 5, name: "Máy cắt cáp thủy lực", qty: "1", power: "—", model: "Thụy Điển", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 6, name: "Máy cắt rãnh bêtông, đường nhựa", qty: "1", power: "—", model: "Nhật", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 7, name: "Máy phá bêtông bằng khí nén", qty: "1", power: "—", model: "Trung Quốc", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 8, name: "Dụng cụ uốn thanh cái", qty: "4", power: "—", model: "—", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 9, name: "Giá ra cáp chuyên dùng", qty: "2", power: "5T", model: "—", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 10, name: "Kìm bóc lớp cách điện", qty: "4", power: "—", model: "TAIWAN", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 11, name: "Puly chuyên dụng", qty: "40", power: "—", model: "Nhật", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 12, name: "Máy phát điện", qty: "2", power: "5KVA", model: "HONDA", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 13, name: "Máy đột lỗ thủy lực", qty: "1", power: "50T", model: "Thụy Điển", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 14, name: "Máy mài dầm tay dạng đĩa", qty: "4", power: "—", model: "—", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 15, name: "Máy hàn", qty: "1", power: "25KVA", model: "TAIWAN", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 16, name: "Máy hàn xách tay", qty: "2", power: "7,5KVA", model: "—", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 17, name: "Máy khoan cần", qty: "2", power: "14KW", model: "—", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 18, name: "Máy khoan bêtông cầm tay", qty: "4", power: "ED-385K", model: "BOSCH", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 19, name: "Chân tó 2,5T", qty: "6", power: "2,5T", model: "—", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 20, name: "Chân tó 5T", qty: "4", power: "5T", model: "—", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 21, name: "Đầm bàn", qty: "4", power: "—", model: "Nhật", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 22, name: "Đầm dùi", qty: "4", power: "—", model: "Nhật", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 23, name: "Đèn khò ga", qty: "10", power: "—", model: "—", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 24, name: "Máy bơm nước", qty: "5", power: "3m³/h", model: "LG", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 25, name: "Palăng xích", qty: "3", power: "5T", model: "—", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 26, name: "Máy cắt cầm tay", qty: "2", power: "—", model: "Nga", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 27, name: "Tipho kéo cáp", qty: "2", power: "2T", model: "—", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 28, name: "Kích thủy lực 5T", qty: "3", power: "5T", model: "—", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 29, name: "Bàn cắt ống", qty: "1", power: "—", model: "Nga", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 30, name: "Máy mài cầm tay", qty: "1", power: "—", model: "Nga", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 31, name: "Máy khoan bàn", qty: "1", power: "—", model: "Nga", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 32, name: "Kích răng", qty: "5", power: "5T", model: "Nga", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 33, name: "Kích thủy lực 10T", qty: "4", power: "10T", model: "Nga", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 34, name: "Bàn nguội, êtô", qty: "2", power: "—", model: "Trung Quốc", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 35, name: "Máy đào 0,4m²", qty: "1", power: "—", model: "Nga", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 36, name: "Máy phun sơn", qty: "1", power: "—", model: "Nga", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 37, name: "Các dụng cụ đào đất thủ công", qty: "80", power: "—", model: "—", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 38, name: "Dụng cụ cầm tay các loại", qty: "30", power: "—", model: "—", location: "Nội thành HN", ready: "Sau 1 giờ" }
    ]
  },
  {
    title: "II. Máy móc thí nghiệm",
    items: [
      { stt: 1, name: "Máy đo điện trở đất", qty: "2", power: "AID 70", model: "Nhật", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 2, name: "Máy thử cao áp", qty: "1", power: "—", model: "Nga", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 3, name: "Mêgôm mét", qty: "1", power: "2500V", model: "Nga", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 4, name: "Đồng hồ đo điện vạn năng", qty: "3", power: "—", model: "Nga", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 5, name: "Dụng cụ kiểm tra độ võng", qty: "2", power: "—", model: "Nga", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 6, name: "Cẩu đo", qty: "2", power: "P333T", model: "Nga", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 7, name: "Ampe kìm", qty: "4", power: "—", model: "Nhật", location: "Nội thành HN", ready: "Sau 1 giờ" },
      { stt: 8, name: "TE 20 mét", qty: "2", power: "—", model: "Nhật", location: "Nội thành HN", ready: "Sau 1 giờ" }
    ]
  }
];
