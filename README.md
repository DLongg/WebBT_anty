# BT DECOM - Website Doanh Nghiệp & Hồ Sơ Năng Lực

> **Website chính thức**: [https://btdecom.vn](https://btdecom.vn)  
> **Chủ quản**: Công ty TNHH Xây lắp và Phát triển Thương mại BT (BT DECOM., LTD)  
> **Tài liệu quy chuẩn thiết kế giao diện**: Xem chi tiết tại [QUY_CHUAN_FRONTEND.md](./QUY_CHUAN_FRONTEND.md)

---

## 1. GIỚI THIỆU DỰ ÁN

Website giới thiệu năng lực, các lĩnh vực hoạt động (Xây lắp điện, Cơ điện M&E, Chiếu sáng kiến trúc & giao thông, Trạm biến áp), danh mục công trình tiêu biểu và hồ sơ pháp lý - nhân sự - thiết bị phục vụ công tác đấu thầu và quảng bá thương hiệu của BT DECOM.

---

## 2. CÔNG NGHỆ SỬ DỤNG (TECH STACK)

- **Framework**: [Next.js 16](https://nextjs.org) (App Router, Static Export).
- **Ngôn ngữ**: TypeScript 5.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (`@tailwindcss/postcss`).
- **Animation & UI Icons**: [Framer Motion 12](https://www.framer.com/motion/), [Lucide React](https://lucide.dev/).
- **Quản lý nội dung**: Markdown (`gray-matter` + `react-markdown`).
- **Phông chữ**: `Montserrat` (Heading) & `Inter` (Body) qua `next/font/google`.

---

## 3. CẤU HÌNH HỆ THỐNG & TỐI ƯU

### 3.1. Cấu hình Next.js (`next.config.ts`)
```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Xuất tĩnh ra thư mục `out/` để triển khai độc lập (Apache, Nginx, GitHub Pages...)
  output: "export",
  // Không dùng trình tối ưu ảnh động của Node server mà dùng trực tiếp ảnh tĩnh
  images: {
    unoptimized: true,
  },
  // Mặc định `trailingSlash: false` để các đường link không bị redirect 308
};

export default nextConfig;
```

### 3.2. Cấu hình Dev Server (`package.json`)
Trong Next.js 16, chế độ Turbopack trên Windows đôi khi gặp lỗi panic ("Next.js package not found"). Dự án đã được cấu hình chạy bằng **Webpack** để đảm bảo tính ổn định 100%:
```json
"scripts": {
  "dev": "next dev --webpack",
  "build": "next build",
  "start": "next start",
  "lint": "eslint"
}
```

---

## 4. HƯỚNG DẪN CÀI ĐẶT & VẬN HÀNH

### 4.1. Yêu cầu môi trường
- **Node.js**: Phiên bản 18.18 trở lên (khuyến nghị Node 20 LTS hoặc Node 22).
- **Trình quản lý gói**: `npm` (hoặc `yarn` / `pnpm`).

### 4.2. Cài đặt dependencies
Mở terminal tại thư mục `BTDecom`:
```powershell
npm install
```

### 4.3. Chạy môi trường phát triển (Development)
```powershell
npm run dev
```
Mở trình duyệt tại địa chỉ: [http://localhost:3000](http://localhost:3000).

### 4.4. Biên dịch xuất bản tĩnh (Production Build)
```powershell
npm run build
```
Sau khi build hoàn tất:
- Toàn bộ website tĩnh (HTML, CSS, JS, Assets) sẽ được xuất vào thư mục **`out/`**.
- Bạn có thể tải toàn bộ nội dung trong `out/` lên bất kỳ web server hoặc hosting tĩnh nào (Nginx, Apache, Vercel, Netlify, cPanel, S3...).

### 4.5. Kiểm tra chất lượng mã nguồn (Linting)
```powershell
npm run lint
```

---

## 5. CẤU TRÚC THƯ MỤC DỰ ÁN

```text
BTDecom/
├── public/                     # Tài nguyên tĩnh trực tiếp
│   ├── images/
│   │   ├── bt-logo.png         # Logo chính thức
│   │   ├── hero-bg.png         # Ảnh nền Banner Hero
│   │   ├── home/               # Ảnh minh họa các section trang chủ
│   │   └── projects/[slug]/    # Ảnh minh họa chi tiết của từng dự án
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root Layout (Metadata, Fonts, HTML Shell)
│   │   ├── globals.css         # Tailwind v4, Theme Tokens & Keyframes
│   │   ├── page.tsx            # Trang chủ
│   │   ├── about/              # Trang Giới thiệu & Hồ sơ năng lực
│   │   ├── services/           # Trang Dịch vụ & Chi tiết dịch vụ [slug]
│   │   ├── projects/           # Trang Dự án & Chi tiết dự án [slug]
│   │   ├── news/               # Trang Tin tức & Chi tiết tin tức [slug]
│   │   └── contact/            # Trang Liên hệ & Form báo giá
│   ├── components/             # Components giao diện dùng chung
│   │   ├── Header.tsx          # Menu điều hướng
│   │   ├── Footer.tsx          # Chân trang & Thông tin pháp lý
│   │   └── ui/                 # Accordion, Button, CopyButton, EquipmentModal...
│   ├── content/
│   │   └── projects/*.md       # 26 file Markdown dữ liệu công trình thực tế
│   ├── data/                   # Dữ liệu tĩnh (services, news, testimonials...)
│   ├── hooks/                  # Custom React Hooks
│   ├── lib/                    # Thư viện tiện ích & hàm đọc Markdown (projects.ts)
│   ├── sections/               # Các khối giao diện trang chủ
│   └── types/                  # TypeScript interface định nghĩa kiểu dữ liệu
├── next.config.ts              # Cấu hình Next.js (output: "export")
├── package.json                # Dependencies & Scripts
├── QUY_CHUAN_FRONTEND.md       # Quy chuẩn thiết kế giao diện & UI/UX
└── README.md                   # Hướng dẫn kỹ thuật & vận hành dự án
```

---

## 6. HƯỚNG DẪN THÊM & CẬP NHẬT NỘI DUNG

### 6.1. Thêm một Dự án mới
1. **Tạo file Markdown**: Thêm file `src/content/projects/[ten-du-an].md`.
2. **Khai báo Frontmatter**:
   ```yaml
   ---
   id: "27"
   name: "Tên dự án mới"
   location: "Địa điểm thi công"
   category: "lighting" # 1 trong 4 mã: lighting | me | substation | electrical
   categoryLabel: "Chiếu sáng"
   shortDescription: "Mô tả ngắn gọn 1-2 câu..."
   image: "/images/projects/[ten-du-an]/1.png"
   gallery:
     - "/images/projects/[ten-du-an]/1.png"
     - "/images/projects/[ten-du-an]/2.png"
   client: "Tên chủ đầu tư"
   area: "Quy mô"
   year: "Năm hoàn thành"
   ---

   ## Giới thiệu dự án
   Nội dung giới thiệu...

   ## Phạm vi thi công
   - Hạng mục 1...
   - Hạng mục 2...
   ```
3. **Thêm hình ảnh**: Tạo thư mục `public/images/projects/[ten-du-an]/` và bỏ các ảnh `1.png`, `2.png` vào đó. Hệ thống sẽ tự động quét và hiển thị lên web mà không cần sửa code.

### 6.2. Cập nhật Dịch vụ & Tin tức
- **Dịch vụ**: Cập nhật tại [src/data/services.ts](file:///e:/TLCongTy/Website/web_BT/webTB_anty/BTDecom/src/data/services.ts).
- **Tin tức**: Cập nhật tại [src/data/news.ts](file:///e:/TLCongTy/Website/web_BT/webTB_anty/BTDecom/src/data/news.ts).
- **Danh sách thiết bị máy móc**: Cập nhật mảng dữ liệu tại [src/components/ui/EquipmentModal.tsx](file:///e:/TLCongTy/Website/web_BT/webTB_anty/BTDecom/src/components/ui/EquipmentModal.tsx).

---

## 7. XỬ LÝ SỰ CỐ THƯỜNG GẶP (TROUBLESHOOTING)

### Lỗi Turbopack crash ("Next.js package not found")
- **Nguyên nhân**: Bộ nhớ cache Turbopack trên Windows bị xung đột.
- **Khắc phục**: Script `npm run dev` trong dự án đã được chuyển sang `--webpack`. Nếu vẫn gặp lỗi cache cũ, chỉ cần xóa thư mục `.next`:
  ```powershell
  Remove-Item -Recurse -Force .next
  npm run dev
  ```

### Lỗi click menu bị chuyển hướng (Redirect 308)
- Đảm bảo trong `next.config.ts` không bật `trailingSlash: true` khi các link trong code không có dấu `/` ở cuối.
