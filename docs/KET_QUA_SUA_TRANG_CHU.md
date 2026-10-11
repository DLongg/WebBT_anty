# Kết quả sửa trang chủ BT DECOM

Ngày bàn giao ban đầu: 11/10/2026. Cập nhật: 12/10/2026. Đã thực hiện lần lượt các đợt 1–5 trong [sửa trang chủ.md](sửa%20trang%20chủ.md), kết hợp [redesignSkill.md](redesignSkill.md).

## Hero được giữ theo yêu cầu mới

Khôi phục video nền `hero_bgr.mp4`, tiêu đề **“Chúng tôi sống vì thử thách”**, đoạn mô tả cũ, widget slider đen với 5 dự án đầu trên desktop và nút **“Xem dự án”** trên mobile. Header ở đầu trang chủ trở lại trong suốt, chuyển trắng khi cuộn hoặc mở menu.

Chiều cao dùng `h-svh` thay phép bù `100vh/0.9` vì đã bỏ zoom toàn trang. Mũi tên được căn lại để vừa màn hình; nút chọn slide có nhãn bàn phím. Các thay đổi này giữ bố cục Hero ban đầu ở mức zoom chuẩn.

Theo phản hồi về màn hình 16 inch, khung nội dung Hero được giới hạn tối đa **1.250 px**, căn giữa thay vì nở theo `container` tới 1.536 px. Video tiếp tục phủ toàn màn hình. Đã chụp và đo ở 390, 1.024, 1.280, 1.366, 1.440, 1.536 và 1.920 px: không tràn ngang; dòng đầu tiêu đề nằm trong cột. Xem [Hero 1536 px](design-audit/hero/hero-1536.png) và [số đo](design-audit/hero/results.json).

Video và hiệu ứng Hero cũ được giữ. Phương án bỏ video, thay ảnh tĩnh và đổi tiêu đề không áp dụng sau yêu cầu mới; không ghi nhận các phần đó là tối ưu đã hoàn thành.

## Dải khách hàng/đối tác được giữ theo yêu cầu bổ sung

Khôi phục `PartnerSection` với đúng class `py-16 md:py-20 bg-white border-y border-gray-100 overflow-hidden`, tiêu đề, 5 tên đơn vị, gradient hai mép và hiệu ứng marquee của bản chưa sửa. Dải này thay thế danh sách khách hàng tĩnh vừa triển khai. Hero cũ tiếp tục được giữ.

## CTA được khôi phục theo yêu cầu bổ sung

Khôi phục lớp `absolute inset-0 opacity-20` với ảnh nền cũ của phần liên hệ cuối trang; giữ lại nền tối, tiêu đề “Bạn cần đơn vị thi công xây lắp chuyên nghiệp?”, bố cục căn giữa, lớp trang trí và hiệu ứng xuất hiện. Nút tư vấn tiếp tục dẫn tới `/contact`; nút gọi dùng số thật `0936 189 292`. Không khôi phục số điện thoại mẫu. URL ảnh nền cũ trả về 404; đã sửa mã ảnh từ `photo-1541888086425-d81bb19240f5` sang `photo-1541888946425-d81bb19240f5`, kiểm tra trả về 200. Class và độ mờ 20% được giữ.

## Các phần còn lại đã thực hiện

| Đợt | Kết quả |
| --- | --- |
| 1 — dữ liệu và liên hệ | Thông tin gọi/email lấy từ một nguồn chung; bỏ số điện thoại mẫu, link xã hội rỗng và form mô phỏng ở luồng liên hệ |
| 2 — chữ, màu, tương tác | Bỏ zoom 0.9; sửa ánh xạ Montserrat/Inter; thống nhất họ xanh, focus-visible, skip link và menu mobile |
| 3 — bố cục chính | Dải năng lực gọn sau Hero; 4 dịch vụ dạng danh sách; đưa 3 dự án chọn lọc ngay sau dịch vụ |
| 4 — nội dung và footer | Gộp giới thiệu/lợi thế; dùng ảnh thi công sẵn có; bỏ testimonial mẫu và khối lặp; khôi phục dải đối tác chạy ngang theo yêu cầu; footer 3 nhóm |
| 5 — nghiệm thu | Kiểm tra 5 chiều rộng, bàn phím, slider, trang con, link và bản static export; lưu ảnh và cập nhật quy chuẩn |

Dự án nổi bật chọn bằng slug trong `src/data/homepage.ts`: Cầu vượt Chùa Bộc – Thái Hà, Cấp nguồn khu đô thị Thành phố Giao Lưu và Cấp thoát nước trường Koala House. Tên đầy đủ và route chi tiết được giữ. Các ảnh được lấy từ tài nguyên công trình sẵn có trong repo; chưa xác minh độc lập với doanh nghiệp bên ngoài.

Số liệu sử dụng nguồn hồ sơ hiện có: thành lập năm 2012, nhân sự theo hồ sơ 2025, 3 đội xây lắp. **26 hồ sơ công trình** là số Markdown hiện đọc được, không được trình bày như tổng công trình doanh nghiệp.

Theo yêu cầu ngày 12/10, đã khôi phục phần **“Tin Tức & Sự Kiện”** như bản cũ: 3 bài đầu trong nguồn tin hiện có, ảnh, ngày tháng, thẻ desktop/mobile, hiệu ứng xuất hiện và link xem tất cả. Khối nằm trước dải đối tác. Không lọc `status`/`publishedAt` và không đánh dấu các bài thành đã xuất bản để làm chúng hiện trở lại; giữ nguyên dữ liệu và route.

Trang liên hệ dùng nút gọi và mở ứng dụng email. Không có thông báo gửi thành công giả; người dùng cần gửi email trong ứng dụng của mình.

## Số đo bố cục trước và sau

Đo bằng Chrome headless trên bản xuất tĩnh local; cùng viewport và cách phục vụ.

| Chỉ số | Trước | Sau |
| --- | ---: | ---: |
| Chiều dài trang desktop 1440 × 900 | 9.230 px | 5.760 px |
| Vị trí bắt đầu dự án desktop | 5.336 px | 1.772 px |
| Chiều dài trang mobile 390 × 844 | 11.944 px | 7.259 px |
| Vị trí bắt đầu dự án mobile | 6.113 px | 2.206 px |
| Link mẫu/rỗng trên trang chủ | 3 | 0 |

Bốn ảnh WebP mới có tổng dung lượng khoảng **540 KB**, so với khoảng **8,1 MB** của bốn ảnh nguồn. Ảnh gốc được giữ; tối ưu này áp dụng cho các section mới, không thay ảnh/video Hero cũ.

Các kết quả LCP và tài nguyên local được lưu trong JSON. Đây là mẫu đo đơn, không phải kết luận tốc độ hosting hoặc điểm Core Web Vitals thực. Video streaming có thể chưa tạo entry Resource Timing tại thời điểm chụp; dung lượng cộng từ entry không đại diện tổng tải video.

## Kiểm tra đã hoàn thành

- **85/85 mục đạt** trên bản xuất tĩnh: font, 5 viewport 360/390/768/1024/1440, không tràn ngang, ảnh, link, video phát và slider chuyển dự án.
- Menu mobile: focus đầu menu, vòng Tab, Escape, trả focus; skip link bỏ qua header; tăng cỡ chữ trên mobile và CSS giảm chuyển động.
- Kiểm tra 5 trang chính và 3 trang chi tiết đại diện; 17 đích liên kết nội bộ trả về 200.
- Không có exception JavaScript trong lượt kiểm tra.
- `npm.cmd run lint`: **0 lỗi, 27 cảnh báo**. Cảnh báo còn lại là ảnh `img`, import/prop chưa dùng và cleanup hook hiện có, bao gồm ảnh Hero cũ được khôi phục.
- `npm.cmd run build`: **thành công, 64 route xuất tĩnh**; TypeScript đạt trong build.
- `git diff --check`: đạt.

Có thể chạy lại kiểm tra bằng `node scripts/homepage-audit.mjs production` sau khi build. Script dùng Chrome headless và cổng local 9400/9334; có thể cấu hình đường dẫn Chrome qua `CHROME_PATH`. Chạy trên thư mục gốc dự án với Node hỗ trợ WebSocket tích hợp.

## Tệp bàn giao

- [Ảnh desktop trước](design-audit/baseline/home-1440-full.png) · [desktop sau](design-audit/production/home-1440-full.png).
- [Ảnh mobile trước](design-audit/baseline/home-390-full.png) · [mobile sau](design-audit/production/home-390-full.png).
- [Hero desktop sau](design-audit/production/home-1440.png) · [Hero mobile sau](design-audit/production/home-390.png).
- [Tin tức desktop](design-audit/production/news-1440.png) · [tin tức mobile](design-audit/production/news-390.png).
- [CTA desktop sau khi sửa ảnh](design-audit/cta/cta-1440.png) · [CTA mobile](design-audit/cta/cta-390.png).
- [Dải khách hàng/đối tác đã khôi phục](design-audit/production/partners-1440.png).
- [Kết quả kiểm tra](design-audit/production/results.json) · [số đo trước](design-audit/baseline/results.json).
- [Quy chuẩn frontend cập nhật](QUY_CHUAN_FRONTEND.md).

Các thay đổi đã ở mã nguồn local và bản `out/`; chưa triển khai lên hosting. Bản local không được xem là bằng chứng về tình trạng tên miền công khai.
