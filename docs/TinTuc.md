# TASK: REDESIGN TRANG TIN TỨC – BT DECOM

## 1. Vai trò

Bạn là Senior Frontend Engineer kiêm Senior UI/UX Designer, có kinh nghiệm xây dựng website doanh nghiệp bằng React/Next.js, TypeScript và Tailwind CSS.

Nhiệm vụ: Chỉnh sửa giao diện trang **Tin tức (News Page)** hiện tại của BT DECOM để đạt mức độ tương đồng cao với hình ảnh tham chiếu được cung cấp.

**Quan trọng:**
- Hình ảnh đính kèm là nguồn tham chiếu chính về bố cục và thiết kế.
- Tuân thủ Design System BT DECOM.
- Ưu tiên pixel-perfect ở desktop, đồng thời responsive tốt.
- Giữ nguyên business logic, API, routing và dữ liệu hiện có.
- Không tự ý sửa các trang khác.

## 2. Phân tích trước khi triển khai

Trước khi chỉnh sửa:

1. Kiểm tra cấu trúc dự án và xác định framework, phiên bản Tailwind.
2. Xác định component, layout và stylesheet đang được sử dụng.
3. Kiểm tra các component có thể tái sử dụng.
4. Phân tích ảnh tham chiếu theo từng khu vực.
5. Xác định những điểm khác biệt giữa giao diện hiện tại và ảnh mẫu.

Không thay đổi cấu hình dự án hoặc cài thêm thư viện nếu chưa thực sự cần thiết.

## 3. Cấu trúc giao diện mục tiêu

### A. Header / Navigation

- Header nằm cố định phía trên.
- Logo BT DECOM bên trái.
- Navigation: Trang chủ, Giới thiệu, Dịch vụ, Dự án, Tin tức, Tuyển dụng, Liên hệ.
- Menu Tin tức được đánh dấu active bằng màu xanh và gạch chân.
- Bên phải có icon tìm kiếm và nút "Liên hệ tư vấn".
- Header nền trắng hoặc trắng bán trong suốt, shadow nhẹ.
- Trên mobile chuyển thành menu drawer.

### B. Hero Banner

Thiết kế banner ngang toàn màn hình.

- Sử dụng ảnh tòa nhà kính hiện đại, cây xanh và kiến trúc doanh nghiệp.
- Có lớp overlay tối để chữ trắng dễ đọc.
- Nội dung căn trái theo container.
- Label nhỏ: "TIN TỨC".
- Heading: "Cập nhật thông tin mới nhất".
- Description: "Chia sẻ kiến thức, kinh nghiệm và những hoạt động nổi bật của BT DECOM trên hành trình phát triển bền vững."
- Breadcrumb: Trang chủ > Tin tức.

Chiều cao banner desktop khoảng 300–360px, điều chỉnh phù hợp trên mobile.

### C. Thanh lọc danh mục

Ngay dưới banner là thanh lọc gồm:

- Tất cả
- Hoạt động công ty
- Công nghệ & Giải pháp
- Kinh nghiệm thi công
- Tuyển dụng
- Trách nhiệm xã hội

Thiết kế dạng pill/rounded button.

Trạng thái:
- Active: nền xanh Primary, chữ trắng.
- Default: nền xám rất nhạt, chữ tối.
- Hover: nền xanh nhạt.

Trên mobile cho phép cuộn ngang thanh danh mục.

Bên phải có ô tìm kiếm bài viết với icon Search.

### D. Khu vực bài viết chính

Desktop chia thành hai phần:

**Phần nội dung bên trái (khoảng 78%)**

Thiết kế theo bố cục Editorial Grid:

- Một bài viết nổi bật kích thước lớn nằm bên trái.
- Bốn bài viết nhỏ nằm bên phải theo grid 2 cột × 2 hàng.
- Khoảng cách giữa các card khoảng 16px.
- Các card bo góc 12–16px.

Bài viết nổi bật:
- Ảnh lớn chiếm toàn bộ nền card.
- Gradient tối từ dưới lên.
- Badge danh mục phía trên.
- Ngày đăng và thời gian đọc.
- Tiêu đề lớn màu trắng.
- Mô tả ngắn.
- Link "Xem chi tiết" kèm icon mũi tên.

Các bài viết nhỏ:
- Ảnh phía trên.
- Badge danh mục.
- Ngày đăng, thời gian đọc.
- Tiêu đề tối đa 2–3 dòng.
- Link "Xem chi tiết".
- Hover nâng card nhẹ và zoom ảnh.

Sử dụng dữ liệu thật nếu dự án đã có. Nếu chưa có, tạo mock data tách biệt và dễ thay thế, không trình bày nội dung mẫu như thông tin đã xác thực.

**Phần Sidebar bên phải (khoảng 22%)**

Gồm hai khối:

1. Danh mục tin tức:
   - Danh sách danh mục.
   - Icon tương ứng.
   - Số lượng bài viết.
   - Trạng thái active.

2. Bài viết nổi bật:
   - Danh sách Top 3 bài viết.
   - Số thứ tự 1, 2, 3.
   - Thumbnail nhỏ.
   - Tiêu đề rút gọn.
   - Ngày đăng.

Sidebar sử dụng nền trắng, border nhẹ, shadow-sm, rounded-xl.

### E. Khu vực bài viết tiếp theo

Bên dưới nhóm bài viết nổi bật:

- Hiển thị danh sách bài viết theo grid 3 cột desktop.
- Tablet 2 cột.
- Mobile 1 cột.
- Có phân trang hoặc nút "Xem thêm" tùy theo cơ chế dữ liệu hiện tại.
- Có trạng thái loading, empty và error.

## 4. Design System bắt buộc

### Colors

- Primary: #2E7D32
- Primary Dark: #1B5E20
- Primary Light: #43A047
- Secondary: #C8E6C9
- Dark: #1A2332
- Light: #F1F8E9
- Body Text: #4B5563
- Muted Text: #6B7280
- Border: #E5E7EB
- Background: #FFFFFF

Lưu ý: Màu #43A047 không dùng với chữ trắng cỡ nhỏ nếu không đạt contrast WCAG AA.

### Typography

- Heading: Montserrat, weight 600–800.
- Body: Inter, weight 400–600.
- H1 Hero: 36–48px desktop, 28–36px mobile.
- H2 Section: 28–36px.
- Card Title: 18–24px.
- Body: 16px.
- Metadata: 14px.

### Spacing

- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8.
- Section Padding: py-12 md:py-16.
- Card Gap: 16–24px.
- Card Radius: 16px.
- Button Radius: 12px.

### Animation

- Hover: 150–250ms.
- Card: hover:-translate-y-1.
- Image: group-hover:scale-105.
- Ưu tiên transform và opacity.
- Hỗ trợ prefers-reduced-motion.

## 5. Responsive

Desktop (>=1024px):
- Hiển thị Editorial Grid và Sidebar.
- Navigation đầy đủ.

Tablet (768–1023px):
- Điều chỉnh bài viết thành grid 2 cột.
- Sidebar có thể chuyển xuống dưới nội dung.
- Tránh card quá hẹp.

Mobile (<768px):
- Hero giảm chiều cao.
- Heading responsive.
- Danh mục cuộn ngang.
- Bài viết xếp 1 cột.
- Sidebar chuyển xuống cuối hoặc trình bày lại hợp lý.
- Không xuất hiện horizontal overflow.
- Touch target khuyến nghị tối thiểu 44×44px.

## 6. Chức năng

Các thành phần phải hoạt động thực tế:

- Lọc bài viết theo danh mục.
- Tìm kiếm theo tiêu đề hoặc nội dung phù hợp.
- Điều hướng đến trang chi tiết bài viết.
- Hiển thị số lượng bài viết theo danh mục từ dữ liệu thực.
- Phân trang hoặc tải thêm bài viết.
- Xử lý khi không có kết quả.
- Đồng bộ URL query parameters nếu phù hợp với kiến trúc hiện tại.

Không tạo nút hoặc tương tác giả chỉ để giống ảnh.

## 7. Accessibility & Performance

- Tuân thủ WCAG 2.2 AA.
- Sử dụng semantic HTML.
- Heading hierarchy hợp lý.
- Alt text cho hình ảnh.
- Focus-visible rõ ràng.
- Hỗ trợ điều hướng bằng bàn phím.
- Không dùng màu sắc làm dấu hiệu duy nhất.
- Lazy load ảnh ngoài vùng nhìn đầu tiên.
- Tối ưu kích thước ảnh và hạn chế layout shift.
- Nếu dùng Next.js, ưu tiên next/image và next/link.

## 8. Nguyên tắc triển khai

- Tái sử dụng component hiện có.
- Không duplicate CSS hoặc business logic.
- Không hardcode dữ liệu nếu đã có API/CMS.
- Không thay đổi chức năng ngoài phạm vi.
- Không tự ý xóa code hoặc thư viện.
- Không sửa global styles gây ảnh hưởng các trang khác.
- Code rõ ràng, dễ bảo trì, đúng conventions của repository.

## 9. Kiểm tra sau khi hoàn thành

1. Chạy typecheck, lint và build theo script của dự án.
2. Kiểm tra desktop 1440px.
3. Kiểm tra tablet 768px.
4. Kiểm tra mobile 375px và 320px.
5. Kiểm tra các trạng thái hover, focus, loading, empty và error.
6. Kiểm tra chức năng lọc, tìm kiếm và điều hướng.
7. Nếu có công cụ screenshot/browser, đối chiếu giao diện thực tế với ảnh tham chiếu.
8. Sửa lỗi layout và responsive phát hiện được.

## 10. Kết quả bàn giao

Sau khi triển khai, báo cáo:

- Những component đã tạo mới.
- Những file đã chỉnh sửa.
- Các chức năng đã hoàn thiện.
- Kết quả kiểm thử.
- Những điểm khác biệt còn lại so với ảnh tham chiếu.
- Các vấn đề chưa xử lý và lý do.

**Mục tiêu cuối cùng:** Xây dựng trang Tin tức BT DECOM có giao diện hiện đại, chuyên nghiệp, gần giống ảnh tham chiếu, đồng bộ Design System và có thể sử dụng trong môi trường production.
