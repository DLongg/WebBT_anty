# QUY CHUẨN FRONTEND - BT DECOM

Tài liệu quy chuẩn các yếu tố giao diện trực quan (Visual & UI/UX Standards) của website **BT DECOM**.

---

## 1. BẢNG MÀU GIAO DIỆN (COLOR PALETTE)
| Token Tailwind | Mã HEX | Ứng dụng hiển thị trực quan |
| :--- | :--- | :--- |
| `bg-brand-gold`, `text-brand-gold` | `#2E7D32` | **Màu chính (Primary)**: Nút CTA, điểm nhấn icon, viền card active, gạch chân link active |
| `bg-brand-gold-light` | `#43A047` | Hover của nút Primary và các liên kết nổi bật |
| `bg-brand-gold-dark` | `#1B5E20` | Trạng thái nhấn active của nút, con lăn chuột khi hover |
| `bg-brand-green`, `text-brand-green` | `#C8E6C9` | Màu phụ, viền thẻ con, quầng sáng mờ nền (glow) |
| `bg-brand-dark`, `text-brand-dark` | `#1A2332` | Nền Header, Footer, Hero, màu chữ cho toàn bộ tiêu đề (`h1` - `h6`) |
| `bg-brand-light` | `#F1F8E9` | Nền các section sáng xen kẽ, nền badge nhẹ |
| `text-gray-600` / `text-gray-700` | `#4B5563` / `#374151` | Văn bản nội dung chính (Body text) |
| `text-gray-400` / `text-gray-500` | `#9CA3AF` / `#6B7280` | Văn bản phụ, ngày tháng, mô tả mờ |
| `border-gray-100` / `border-gray-200` | `#F3F4F6` / `#E5E7EB` | Viền thẻ card, đường kẻ phân cách section |

---

## 2. PHÔNG CHỮ & CẤP BẬC (TYPOGRAPHY)
- **Tiêu đề (Headings)**: `Montserrat` (`font-heading`, weight: 600 - 800) dùng cho toàn bộ tiêu đề.
- **Nội dung (Body)**: `Inter` (`font-body`, weight: 400 - 600) dùng cho đoạn văn, thẻ card, mô tả.

| Cấp bậc | Class Tailwind | Vị trí áp dụng |
| :--- | :--- | :--- |
| **H1 Hero** | `text-4xl md:text-6xl font-bold font-heading` | Banner chính, tiêu đề trang chi tiết |
| **H2 Section** | `text-3xl md:text-4xl font-bold font-heading text-brand-dark` | Tiêu đề các mục lớn |
| **H3 Card** | `text-xl md:text-2xl font-bold font-heading text-brand-dark` | Tên dự án, tên dịch vụ trên thẻ card |
| **Lead Text** | `text-lg md:text-xl text-gray-600 leading-relaxed` | Đoạn tóm tắt mở đầu |
| **Body** | `text-base (16px) text-gray-600 leading-relaxed` | Nội dung văn bản thông thường |
| **Small / Meta** | `text-sm (14px) text-gray-500` | Địa điểm, ngày tháng, thời gian đọc |
| **Badge** | `text-xs (12px) font-bold uppercase tracking-wider` | Nhãn danh mục, tag dự án |

---

## 3. BỐ CỤC & KHOẢNG CÁCH (LAYOUT & SPACING)
- **Container chuẩn**: `container mx-auto px-4 md:px-6` (Form & bài viết dùng `max-w-4xl` hoặc `max-w-5xl`).
- **Khoảng đệm Section**: `py-16 md:py-20` (Cách trên dưới 64px - 80px).
- **Banner đầu trang con**: `pt-32 pb-20` (Bù trừ chiều cao Fixed Header 64px - 80px).
- **Khoảng cách Tiêu đề đến Nội dung**: `mb-12 md:mb-16`.
- **Nhịp điệu màu nền xen kẽ**: Dark (`bg-brand-dark`) → Trắng (`bg-white`) → Sáng (`bg-brand-light` / `bg-gray-50`) → Trắng → Dark.

---

## 4. THÀNH PHẦN GIAO DIỆN (UI COMPONENTS)
- **Nút Primary**: `bg-brand-gold text-white hover:bg-brand-gold-light rounded-xl h-11 px-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300`.
- **Nút Outline**: `border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white rounded-xl h-11 px-6 transition-all duration-300`.
- **Thẻ Card (Dự án, Tin tức)**: `bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full`.
  - Ảnh trong thẻ: `overflow-hidden`, ảnh mang class `object-cover transition-transform duration-700 group-hover:scale-105`.
- **Huy hiệu trên ảnh (Badge)**: `bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider`.
- **Header / Navbar**:
  - Vị trí: `fixed top-0 left-0 right-0 z-50 h-16 sm:h-20 transition-all duration-300`.
  - Trạng thái: Trong suốt ở đỉnh trang chủ (`bg-transparent text-white`), đổi trắng khi cuộn > 50px (`bg-white shadow-md text-brand-dark`).
  - Active link: Gạch chân `absolute -bottom-1 left-0 h-0.5 w-full bg-brand-gold`.
- **Ô nhập Form**: `bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold`.
- **Modal Overlay**: `fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4`.

---

## 5. HÌNH ẢNH, ICONS & RESPONSIVE
- **Tỷ lệ ảnh chuẩn**: `aspect-video` (Banner Hero, 16:9) | `aspect-[4/3]` (Ảnh công trình dự án) | `aspect-[16/10]` (Tin tức) | `aspect-square` (Avatar).
- **Icons (`lucide-react`)**: Size `14` / `16` (inline, metadata) | Size `20` (nút bấm, điều hướng) | Size `32` (đầu khối dịch vụ).
- **Vi chuyển động (Micro-interaction)**: Mặc định `duration-300 ease-in-out`; hover nâng thẻ `hover:-translate-y-1`.
- **Breakpoints**: Mobile (`< 640px` - 1 cột, menu drawer) | Tablet (`640px - 1023px` - 2 cột) | Desktop (`≥ 1024px` - 3 đến 4 cột).
