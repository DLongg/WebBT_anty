import type { Testimonial, Partner } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ông Nguyễn Đức Minh",
    position: "Giám đốc Dự án",
    company: "Công ty Newtatco",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "BT DECOM đã hoàn thành xuất sắc gói thầu cơ điện cho tòa nhà của chúng tôi. Đội ngũ kỹ sư rất chuyên nghiệp, tiến độ đảm bảo và chất lượng thi công vượt kỳ vọng.",
    rating: 5,
  },
  {
    id: "2",
    name: "Bà Trần Thị Mai",
    position: "Phó Giám đốc",
    company: "Ban QLDA KCN Cao Hòa Lạc",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "Chúng tôi rất hài lòng với năng lực thi công trạm biến áp và cáp ngầm của BT DECOM. Công ty đã thể hiện sự am hiểu kỹ thuật sâu sắc và tuân thủ nghiêm ngặt các quy trình an toàn.",
    rating: 5,
  },
  {
    id: "3",
    name: "Ông Lê Văn Hải",
    position: "Trưởng phòng Kỹ thuật",
    company: "Ban QLDA Hạ tầng giao thông Hà Nội",
    avatar: "https://randomuser.me/api/portraits/men/68.jpg",
    content: "Các dự án chiếu sáng cầu vượt và nút giao do BT DECOM thi công đều đạt chất lượng tốt, đúng tiến độ. Hệ thống chiếu sáng hoạt động ổn định và tạo điểm nhấn kiến trúc đẹp cho thành phố.",
    rating: 5,
  },
  {
    id: "4",
    name: "Ông Phạm Quốc Tuấn",
    position: "Chủ đầu tư",
    company: "Dự án Nhà máy nước sạch Yên Viên",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    content: "BT DECOM đã triển khai lắp đặt hệ thống cáp ngầm và trạm biến áp cho nhà máy rất chuyên nghiệp. Hệ thống cấp điện hoạt động ổn định, đáp ứng tốt nhu cầu sản xuất liên tục.",
    rating: 5,
  },
];

export const partners: Partner[] = [
  { id: "1", name: "Newtatco", logo: "/images/partners/newtatco.png" },
  { id: "2", name: "BQLDA KCN Cao Hòa Lạc", logo: "/images/partners/hoalac.png" },
  { id: "3", name: "EVN Hà Nội", logo: "/images/partners/evn.png" },
  { id: "4", name: "Sở GTVT Hà Nội", logo: "/images/partners/sogtvt.png" },
  { id: "5", name: "Bộ Tài chính", logo: "/images/partners/botaichinh.png" },
  { id: "6", name: "Tổng cục II", logo: "/images/partners/tongcucii.png" },
];
