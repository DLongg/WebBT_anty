import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "1",
    slug: "thi-cong-xay-lap-dien",
    name: "Thi công Xây lắp điện",
    shortDescription:
      "Lĩnh vực cốt lõi: Thi công công trình đường dây, mạng lưới điện và trạm biến áp.",
    description:
      "Lắp đặt hệ thống điện (Mã ngành: 4321) và xây dựng công trình điện (Mã ngành: 4221). BT DECOM chuyên thi công các đường dây truyền tải, mạng lưới phân phối điện và lắp đặt trạm biến áp. Đây là mảng dịch vụ quan trọng nhất, khẳng định uy tín và năng lực của công ty trên thị trường.",
    icon: "Zap",
    features: [
      "Lắp đặt hệ thống điện (Mã ngành: 4321)",
      "Xây dựng công trình điện (Mã ngành: 4221)",
      "Thi công đường dây cao - hạ thế",
      "Xây dựng mạng lưới điện phân phối",
      "Lắp đặt và bảo trì trạm biến áp",
    ],
    process: [
      {
        step: 1,
        title: "Khảo sát tuyến",
        description: "Khảo sát địa hình, lập phương án thi công lưới điện",
      },
      {
        step: 2,
        title: "Chuẩn bị mặt bằng",
        description: "Giải phóng hành lang, tập kết vật tư và thiết bị",
      },
      {
        step: 3,
        title: "Thi công lắp đặt",
        description: "Dựng cột, kéo cáp, lắp đặt thiết bị trạm biến áp",
      },
      {
        step: 4,
        title: "Đóng điện vận hành",
        description: "Thử nghiệm, nghiệm thu và đóng điện an toàn",
      },
    ],
  },
  {
    id: "2",
    slug: "co-dien-va-tien-ich",
    name: "Cơ điện & Tiện ích (M&E)",
    shortDescription:
      "Lắp đặt hệ thống chiếu sáng, PCCC, cấp thoát nước và điều hòa không khí.",
    description:
      "Cung cấp giải pháp toàn diện cho hệ thống cơ điện tòa nhà và công trình công cộng. Bao gồm lắp đặt hệ thống chiếu sáng và phòng cháy chữa cháy (Mã ngành: 4329), cùng hệ thống cấp thoát nước, sưởi và điều hòa không khí (Mã ngành: 4322).",
    icon: "HardHat",
    features: [
      "Lắp đặt hệ thống chiếu sáng (4329)",
      "Hệ thống phòng cháy chữa cháy (4329)",
      "Hệ thống cấp thoát nước (4322)",
      "Hệ thống sưởi và điều hòa (4322)",
      "Vận hành và bảo trì M&E",
    ],
    process: [
      {
        step: 1,
        title: "Thiết kế kỹ thuật",
        description: "Triển khai bản vẽ shop drawing cho từng hệ thống",
      },
      {
        step: 2,
        title: "Cung cấp vật tư",
        description: "Nhập thiết bị điện, PCCC, HVAC đạt chuẩn",
      },
      {
        step: 3,
        title: "Thi công đồng bộ",
        description: "Lắp đặt theo đúng quy chuẩn và tiến độ",
      },
      {
        step: 4,
        title: "Kiểm định, chạy thử",
        description: "Test hệ thống, nghiệm thu với cơ quan chức năng",
      },
    ],
  },
  {
    id: "3",
    slug: "xay-dung-va-ha-tang",
    name: "Xây dựng & Hạ tầng",
    shortDescription:
      "Dịch vụ trọn gói từ chuẩn bị mặt bằng đến hoàn thiện công trình dân dụng, công nghiệp và giao thông.",
    description:
      "BT DECOM đảm nhận các dự án xây dựng dân dụng (nhà ở 4101, không để ở 4102), hạ tầng giao thông (đường sắt 4211, đường bộ 4212), và các công trình kỹ thuật công ích (4299, 4229). Chúng tôi cung cấp chuỗi dịch vụ khép kín từ phá dỡ (4311), chuẩn bị mặt bằng (4312), đến hoàn thiện công trình (4330).",
    icon: "Map",
    features: [
      "Xây dựng dân dụng & Công nghiệp (4101, 4102)",
      "Xây dựng hạ tầng giao thông (4211, 4212)",
      "Công trình kỹ thuật & Công ích (4299, 4229)",
      "Chuẩn bị mặt bằng & Phá dỡ (4311, 4312)",
      "Hoàn thiện công trình (4330)",
    ],
    process: [
      {
        step: 1,
        title: "Chuẩn bị mặt bằng",
        description: "Phá dỡ, san lấp và chuẩn bị nền móng",
      },
      {
        step: 2,
        title: "Thi công kết cấu",
        description: "Xây dựng phần thô và các hạng mục kỹ thuật",
      },
      {
        step: 3,
        title: "Lắp đặt hệ thống",
        description: "Tích hợp hệ thống điện nước và hạ tầng",
      },
      {
        step: 4,
        title: "Hoàn thiện & Bàn giao",
        description: "Hoàn thiện kiến trúc và bàn giao sử dụng",
      },
    ],
  },
  {
    id: "4",
    slug: "tu-van-thiet-ke-giam-sat",
    name: "Tư vấn, Thiết kế & Giám sát",
    shortDescription:
      "Dịch vụ trí tuệ kỹ thuật cao: Khảo sát, thiết kế, quản lý và giám sát dự án đầu tư xây dựng.",
    description:
      "Hoạt động kiến trúc và tư vấn kỹ thuật (Mã ngành: 7110). Chúng tôi cung cấp dịch vụ đo đạc, khảo sát, thiết kế kiến trúc/quy hoạch; tư vấn quản lý dự án; thẩm tra thiết kế và giám sát thi công chuyên sâu cho hệ thống cơ điện và PCCC.",
    icon: "ClipboardCheck",
    features: [
      "Khảo sát & Đo đạc bản đồ",
      "Thiết kế kiến trúc, quy hoạch, nội thất",
      "Tư vấn quản lý dự án, chi phí",
      "Thẩm tra thiết kế và kiến trúc",
      "Giám sát thi công và kiểm định kỹ thuật",
    ],
    process: [
      {
        step: 1,
        title: "Tiếp nhận và khảo sát",
        description: "Ghi nhận yêu cầu, khảo sát địa hình thực tế",
      },
      {
        step: 2,
        title: "Lập phương án thiết kế",
        description: "Lên bản vẽ kỹ thuật và dự toán chi phí",
      },
      {
        step: 3,
        title: "Thẩm tra, phê duyệt",
        description: "Thẩm định hồ sơ và hỗ trợ pháp lý",
      },
      {
        step: 4,
        title: "Quản lý & Giám sát",
        description: "Giám sát thi công tại hiện trường",
      },
    ],
  },
  {
    id: "5",
    slug: "thuong-mai-xuat-nhap-khau",
    name: "Thương mại & Xuất nhập khẩu",
    shortDescription:
      "Cung ứng vật tư, thiết bị chuyên dụng ngành công nghiệp, xây dựng và dân dụng.",
    description:
      "BT DECOM cung cấp bán buôn máy móc thiết bị công nghiệp (4659), vật liệu xây dựng (4663, 4662, 4752), và thiết bị điện gia dụng (4649, 4759). Đồng thời, công ty được cấp phép xuất nhập khẩu (8299) các mặt hàng kinh doanh, đảm bảo nguồn hàng chất lượng cao.",
    icon: "Compass",
    features: [
      "Máy móc, thiết bị khai khoáng, phát điện (4659)",
      "Vật liệu và phụ kiện xây dựng (4663, 4662, 4752)",
      "Thiết bị điện gia dụng, đèn chiếu sáng (4649, 4759)",
      "Đồ nội thất chuyên dụng",
      "Xuất nhập khẩu hàng hóa (8299)",
    ],
    process: [
      {
        step: 1,
        title: "Tư vấn sản phẩm",
        description: "Hỗ trợ chọn lựa thiết bị phù hợp nhu cầu",
      },
      {
        step: 2,
        title: "Nhập khẩu & Phân phối",
        description: "Nhập nguồn hàng chính hãng chất lượng cao",
      },
      {
        step: 3,
        title: "Giao nhận hàng hóa",
        description: "Vận chuyển an toàn đến tận công trình",
      },
      {
        step: 4,
        title: "Bảo hành bảo trì",
        description: "Hỗ trợ kỹ thuật và bảo hành dài hạn",
      },
    ],
  },
];
