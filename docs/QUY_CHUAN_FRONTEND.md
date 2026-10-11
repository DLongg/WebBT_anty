# Quy chuẩn frontend BT DECOM

Cập nhật 12/10/2026 theo bản sửa trang chủ. Hero, phần Tin Tức & Sự Kiện, dải khách hàng/đối tác và CTA được giữ lại giao diện ban đầu theo yêu cầu người dùng.

## Màu và font

| Token | Giá trị | Vai trò |
| --- | --- | --- |
| `brand-primary`, alias `brand-gold` | `#2E7D32` | Nút và liên kết trên nền sáng |
| `brand-gold-light`, `brand-gold-dark` | `#1B5E20` | Hover và pressed |
| `brand-accent` | `#4ADE80` | Điểm nhấn trên nền tối |
| `brand-dark` | `#1A2332` | Chữ chính, nền Hero/CTA/Footer |
| `brand-light` | `#F7F8F7` | Nền phụ |
| `gray-600` | `#4B5563` | Nội dung phụ trên nền sáng |

Giữ Montserrat cho tiêu đề, Inter cho nội dung. `next/font` gắn biến font trên `html`, ánh xạ bằng `@theme inline`; tránh khai báo alias tại root nhưng biến nguồn chỉ có trên body.

| Thành phần | Quy chuẩn trang chủ |
| --- | --- |
| H1 Hero cũ | 32 px mobile; tăng qua breakpoint đến 80 px desktop lớn; weight 700 |
| H2 `home-heading` | `clamp(1.625rem, 2.7vw, 2.5rem)`, weight 600, line-height 1.2 |
| Tên dịch vụ/dự án | 18–24 px tùy khối, weight 500–600 |
| Nội dung mới | 16–18 px, line-height khoảng 1.6 |
| Metadata | 13–14 px |

Dùng sentence case; cân bằng dòng tiêu đề. Màu xanh sáng chỉ dùng trên nền tối.

## Bố cục

- Không dùng `zoom` toàn trang hoặc che tràn ngang bằng `overflow-x: hidden` trên body.
- `site-container`: tối đa 1.280 px, lề 20 px trên mobile, 24 px từ 768 px.
- `home-section`: khoảng đệm dọc 48 px mobile, 80 px từ 768 px.
- Header cao 72 px mobile, 88 px desktop. Trang con tiếp tục có padding bù fixed header.
- Hero giữ video nền và slider cũ; `h-svh`, min-height 640 px. Slider ẩn dưới 1.024 px; nút “Xem dự án” thay thế trên mobile.
- Khung nội dung Hero rộng tối đa 1.250 px, căn giữa, padding ngang 16/24 px; video vẫn phủ toàn màn hình. Giới hạn riêng này tránh Hero nở theo breakpoint 1.536 px của `container` trên màn hình laptop lớn.
- Sau Hero: dải số liệu → dịch vụ → 3 dự án → năng lực → tin tức/sự kiện → khách hàng/đối tác → liên hệ → footer.
- Dịch vụ là danh sách hai cột desktop, một cột mobile. Dự án có một mục chính và hai mục bổ sung; không đặt filter ở trang chủ.
- Ảnh các khối mới có tỷ lệ cố định, radius khoảng 8–12 px; không thêm glow, bóng lớn hoặc nền trang trí khi không cần.

## Điều hướng và tương tác

- Header trong suốt ở đầu trang chủ, trắng khi cuộn hơn 50 px hoặc mở menu. Trang khác dùng header trắng.
- Chỉ hiển thị điều khiển có chức năng. Tuyển dụng giữ ở footer; không hiển thị tìm kiếm chưa triển khai.
- `primary-link`: xanh chính, chữ trắng, radius 8 px, cao tối thiểu 44 px; hover xanh đậm, pressed dịch xuống 1 px.
- `text-link`: xanh chính, gạch chân khi hover; cao tối thiểu 44 px.
- Focus-visible viền 3 px, offset 4 px. Skip link “Đến nội dung chính” bỏ qua điều hướng.
- Menu mobile có nhãn và trạng thái ARIA, khóa cuộn nền, giữ focus trong menu, đóng bằng Escape hoặc đổi route và trả focus về nút mở.
- CSS giảm chuyển động tắt smooth scroll và rút ngắn transition/animation. Video và chuyển động Framer Motion của Hero cũ là ngoại lệ được giữ theo yêu cầu.

## Dữ liệu và hành vi

- CTA cuối trang giữ nền tối, ảnh nền cũ với class `absolute inset-0 opacity-20`, bố cục căn giữa và hiệu ứng xuất hiện. Link tư vấn và gọi vẫn dùng đích thật.
- Liên hệ dùng nguồn chung `src/data/contact.ts`; điện thoại `0936 189 292`, email `btdecom@gmail.com`.
- Không dùng form mô phỏng hoặc báo đã gửi khi chưa gửi thật. Hiện gọi và mở ứng dụng email; người dùng tự gửi email.
- Dự án tiêu biểu chọn bằng slug trong `src/data/homepage.ts`; chỉ rút gọn nhãn trang chủ, giữ tên và route ở trang chi tiết. Hero vẫn lấy 5 dự án đầu như trước.
- Năm thành lập 2012; nhân sự theo hồ sơ 2025; 3 đội xây lắp; số hồ sơ được đếm từ Markdown. Không coi số file là tổng công trình đã thực hiện.
- Dải khách hàng/đối tác giữ nguyên bản cũ theo yêu cầu: tiêu đề “Khách hàng & Đối tác chiến lược tiêu biểu”, 5 tên đơn vị chạy ngang và dừng khi hover, class `py-16 md:py-20 bg-white border-y border-gray-100 overflow-hidden`. Không hiển thị thêm logo hoặc lời chứng thực mới.
- Theo yêu cầu ngày 12/10, giữ phần “Tin Tức & Sự Kiện” của bản cũ với 3 bài đầu trong `src/data/news.ts`, bố cục thẻ desktop/mobile và liên kết xem tất cả. Không lọc `status`/`publishedAt`; giữ nguyên dữ liệu và route hiện có.
- Ảnh công trình dùng tài nguyên sẵn có trong repo; WebP tối ưu ở `public/images/home/`. Giữ ảnh gốc và nguồn Markdown.

## Kiểm tra trước khi bàn giao

Kiểm tra 360, 390, 768, 1.024 và 1.440 px; menu, bàn phím, slider, tăng cỡ chữ, đường dẫn liên hệ và trang con đại diện. Chạy lint và build; phục vụ bản static export để kiểm tra hành vi production. Số đo local chỉ dùng so sánh trong cùng điều kiện, không thay đánh giá hosting thực.

Xem [kết quả sửa trang chủ](KET_QUA_SUA_TRANG_CHU.md) và [kế hoạch đã cập nhật](sửa%20trang%20chủ.md).
