# Kế hoạch sửa trang chủ BT DECOM

Ngày lập: 11/10/2026. Cập nhật: 12/10/2026. Trạng thái: đã triển khai các đợt 1–5; kết quả kiểm tra và ảnh bàn giao nằm trong [báo cáo thực hiện](KET_QUA_SUA_TRANG_CHU.md).

**Điều chỉnh theo yêu cầu mới của người dùng:** giữ Hero như trước khi sửa. Hero được khôi phục video nền, tiêu đề “Chúng tôi sống vì thử thách”, đoạn mô tả, slider 5 dự án trên desktop và nút “Xem dự án” trên mobile. Các đề xuất thay Hero bằng ảnh tĩnh, đổi tiêu đề và bỏ video mobile đã được thay thế bởi yêu cầu này. **Yêu cầu bổ sung:** giữ nguyên dải có class `py-16 md:py-20 bg-white border-y border-gray-100 overflow-hidden` từ bản chưa sửa. Khôi phục tiêu đề “Khách hàng & Đối tác chiến lược tiêu biểu”, 5 tên đơn vị và hiệu ứng marquee của `PartnerSection`. Yêu cầu này thay thế phương án danh sách khách hàng tĩnh. **Yêu cầu bổ sung ngày 12/10:** giữ phần “Tin Tức & Sự Kiện” như bản trước khi sửa, gồm 3 bài đầu từ dữ liệu cũ, bố cục thẻ, hiệu ứng xuất hiện và liên kết xem tất cả; đặt trước dải đối tác. Không còn ẩn khối theo trạng thái xuất bản. **Yêu cầu khôi phục CTA:** giữ lớp `absolute inset-0 opacity-20` của phần liên hệ cuối trang cùng ảnh nền cũ, nền tối, bố cục giữa và tiêu đề “Bạn cần đơn vị thi công xây lắp chuyên nghiệp?”. Nút gọi tiếp tục dùng số thật từ `src/data/contact.ts`. Những phần khác tiếp tục thực hiện theo kế hoạch.

## 1. Nguồn và phạm vi

Kết hợp [redesignSkill.md](redesignSkill.md) với [đánh giá trang chủ](PHUONG_AN_CAI_THIEN_TRANG_CHU.md), [quy chuẩn frontend](QUY_CHUAN_FRONTEND.md) và mã nguồn hiện tại.

Đánh giá trực quan đã thực hiện trên bản local ở desktop 1440 × 900, mobile 390 × 844 và tablet 768 × 1024. Tên miền công khai chưa mở được trong môi trường đánh giá; không xem ảnh local là bằng chứng cho tình trạng bản production.

Áp dụng quy trình của skill: **Scan → Diagnose → Fix**. Phần scan và diagnose đã có cơ sở từ mã nguồn, ảnh chụp và số đo; tài liệu này cụ thể hóa bước fix thành các thay đổi nhỏ, có thể kiểm tra riêng.

Phạm vi chính là trang chủ. Header, Footer, CSS và dữ liệu dùng chung có thể cần chỉnh để hỗ trợ trang chủ; mọi chỉnh sửa dùng chung phải kiểm tra ảnh hưởng tới các trang con. Luồng từ trang chủ tới trang liên hệ cũng thuộc phạm vi kiểm tra hành vi.

## 2. Mục tiêu thiết kế

Trang chủ cần giúp chủ đầu tư, ban quản lý dự án và đối tác hiểu nhanh ba điều:

1. BT DECOM cung cấp năng lực xây lắp điện, trạm biến áp và cơ điện nào.
2. Công trình, đội ngũ và hồ sơ nào chứng minh năng lực đó.
3. Có thể liên hệ tư vấn hoặc xem hồ sơ bằng hành động nào.

Định hướng thị giác: hình ảnh công trình thật giữ vai trò chủ đạo, bố cục rõ như một hồ sơ năng lực, chữ chắc và dễ đọc, màu xanh được sử dụng có tiết chế. Điểm nhấn chính là ảnh dự án lớn cùng chú thích kỹ thuật; các khối còn lại hỗ trợ việc đọc và tìm thông tin.

Giữ Next.js 16.2.7, React 19, Tailwind CSS v4, Framer Motion và cấu trúc section hiện tại. Không viết lại toàn bộ website hoặc đổi thư viện chỉ để tạo khác biệt hình thức. Trước khi viết mã Next.js, đọc hướng dẫn liên quan trong `node_modules/next/dist/docs/` theo `AGENTS.md`.

## 3. Cách áp dụng redesignSkill.md vào dự án

| Nhóm trong skill | Vấn đề tại BT DECOM | Quyết định áp dụng |
| --- | --- | --- |
| Typography | Chữ mobile nhỏ; tiêu đề viết hoa đầu mỗi từ; tên dự án bị cắt | Bỏ zoom toàn trang, điều chỉnh thang chữ, dùng sentence case và cân bằng dòng tiêu đề |
| Color and Surfaces | Nhiều xanh hardcode, điểm nhấn nâu, icon nhiều màu, nhiều glow/bóng | Một họ xanh thương hiệu và một họ màu trung tính; giảm lớp trang trí; giữ nền tối ở Hero, CTA khôi phục và footer |
| Layout | Dự án xuất hiện muộn; quá nhiều khối cam kết; card lớn và đồng đều | Gộp nội dung lặp, đưa dự án lên sớm, bố cục dự án một ảnh lớn và hai ảnh bổ sung |
| Interactivity and States | Nút tìm kiếm và link mẫu chưa hoạt động; form thiếu hành vi thực | Chỉ hiển thị điều khiển có tác dụng; bổ sung focus, pressed, validation và trạng thái gửi khi có dịch vụ tiếp nhận thật |
| Content | Ảnh avatar mẫu, tin mockup, số liệu phân tán | Dùng nội dung có nguồn; thống nhất dữ liệu; không chế thêm tên người, thành tích hoặc ngày xuất bản |
| Component Patterns | Lặp card nền trắng + viền + bóng, carousel và footer bốn cột | Dịch vụ dạng danh sách gọn; dự án có phân cấp; đối tác chạy ngang như bản cũ theo yêu cầu; footer ba nhóm thông tin |
| Iconography | Lucide đang được dùng xuyên suốt | Giữ bộ icon có sẵn, thống nhất kích thước và stroke; thay biểu tượng không đúng ý nghĩa khi cần |
| Code Quality | Hardcode màu, `any`, style rải rác; cấu trúc có thành phần dùng chung | Dùng token và kiểu dữ liệu rõ; thay đổi theo từng component; giữ route và đọc Markdown hiện tại |

Skill gợi ý thay font, thêm texture, đổi icon và nhiều kỹ thuật chuyển động. Với dự án này, giữ Montserrat cho tiêu đề và Inter cho nội dung ở vòng đầu: hai vai trò đã phân biệt và hỗ trợ tiếng Việt. Cải thiện kích thước, độ đậm và khoảng cách trước; chỉ đổi font nếu bản so sánh có lợi rõ ràng.

Ảnh công trình đã tạo độ sâu cho thiết kế, nên không thêm grain, glassmorphism, parallax, scroll có quán tính hoặc hiệu ứng spotlight theo mặc định. Khoảng trắng được điều chỉnh theo nội dung; không tăng gấp đôi khi trang hiện đã dài.

Các gợi ý về tạo tên, số liệu và ngày tháng trong skill không dùng cho nội dung doanh nghiệp thực. Thiếu bằng chứng thì dùng nội dung đã xác nhận hoặc bỏ khối đó khỏi trang chủ. Không biến nội dung mẫu thành nội dung có vẻ thật.

## 4. Bố cục trang chủ sau khi sửa

```text
HEADER: logo | giới thiệu | dịch vụ | dự án | tin tức | liên hệ | tư vấn

HERO
┌─────────────────────────┬──────────────────────────────┐
│ Chúng tôi sống          │ Slider 5 dự án như bản cũ    │
│ vì thử thách            │                              │
│ Mô tả cũ · video nền    │ Nút Xem dự án trên mobile    │
└─────────────────────────┴──────────────────────────────┘

DẢI NĂNG LỰC: thành lập / nhân sự / đội thi công / công trình

DỊCH VỤ: 4 nhóm, mô tả phạm vi và liên kết rõ

DỰ ÁN
┌────────────────────────────┬───────────────────────────┐
│ Công trình chủ đạo         │ Công trình bổ sung        │
│ Ảnh lớn + mô tả ngắn       ├───────────────────────────┤
│                            │ Công trình bổ sung        │
└────────────────────────────┴───────────────────────────┘

NĂNG LỰC DOANH NGHIỆP: ảnh thi công + 3 lợi thế + hồ sơ
TIN TỨC: giữ 3 bài và bố cục thẻ của bản cũ
KHÁCH HÀNG VÀ ĐỐI TÁC: giữ dải tên chạy ngang của bản cũ
LIÊN HỆ TƯ VẤN: gọi điện / email / trang liên hệ
FOOTER: doanh nghiệp | điều hướng | liên hệ
```

Tổng cộng 8 khối nội dung chính và footer. Khối tin tức và dải đối tác giữ bản cũ theo yêu cầu bổ sung. Mobile xếp một cột, giữ thứ tự đọc và chỉ hiện 3 dự án chọn lọc.

## 5. Yêu cầu sửa từng phần

### 5.1. Header

- Giữ logo, thương hiệu và đường dẫn chính; chuẩn hóa nhãn sentence case.
- Desktop có một nút “Liên hệ tư vấn” tới `/contact`; hero cũng có CTA riêng.
- Chuyển Tuyển dụng sang footer hoặc nhóm Tin tức; giữ đường dẫn hiện tại.
- Bỏ nút tìm kiếm khỏi lần sửa này nếu chưa có chức năng tìm kiếm. Không để nút bấm không có kết quả.
- Giữ header sáng dễ đọc khi cuộn; kiểm tra chữ/logo khi đặt trên hero tối. Không dùng màu xanh đậm cho chữ nhỏ trên nền tối.
- Mobile: menu có `aria-expanded`, liên kết với vùng menu, đóng bằng Escape, trả focus về nút mở, ngăn cuộn nền khi đang mở. Menu đóng không nhận focus.
- Có skip link tới nội dung chính. Kiểm tra cách dùng `usePathname` cho mục có query như Tuyển dụng, tránh đánh dấu nhầm mục đang hoạt động.

### 5.2. Hero — giữ giao diện ban đầu

Yêu cầu mới của người dùng thay thế phương án Hero đề xuất ban đầu:

- Giữ tiêu đề “Chúng tôi sống vì thử thách”, đoạn mô tả, màu xanh sáng và video `/videos/hero_bgr.mp4`.
- Giữ widget slider đen, 5 dự án đầu từ nguồn Markdown và hành vi chuyển slide cũ. Dự án chọn lọc thủ công chỉ áp dụng cho khối “Dự án tiêu biểu” bên dưới.
- Giữ nút “Xem dự án” trên mobile; desktop có link vào dự án đang hiển thị và nút tư vấn trên header.
- Khôi phục header trong suốt tại đầu trang chủ, chuyển trắng khi cuộn hoặc mở menu.
- Sau khi bỏ zoom toàn trang, dùng `h-svh` với chiều cao tối thiểu 640 px thay phép chia `100vh/0.9`; điều chỉnh vị trí mũi tên để vừa khung desktop.
- Theo phản hồi trên màn hình 16 inch, giới hạn khung nội dung Hero tối đa 1.250 px, căn giữa; giữ video phủ toàn màn hình, grid hai cột và slider như hiện tại.
- Bổ sung nhãn bàn phím cho nút chọn slide và giữ skip link hoạt động.
- Video, ảnh và chuyển động Hero cũ được giữ theo yêu cầu; không xem phần tối ưu bỏ video, poster hay tạm dừng video là đã thực hiện.

### 5.3. Dải năng lực

- Chuyển `StatsSection` lên sau hero, trình bày trên nền sáng thành một dải gọn.
- Lấy dữ liệu từ nguồn chung, không tiếp tục khai báo `80+`, `82+`, `40+`, `50+` riêng tại nhiều section.
- Các giá trị hiện có cần đối chiếu: thành lập 25/12/2012, nhân sự 82, thiết bị 40+/50+, 3 đội xây lắp, 26 hồ sơ dự án. Số file dự án không tự động tương đương tổng số công trình doanh nghiệp đã thực hiện.
- Dùng “Thành lập năm 2012” nếu không muốn tính số năm; nếu tính, dùng mốc ngày đầy đủ. Số liệu nhân sự và thiết bị cần thời điểm cập nhật.
- Chữ số có `tabular-nums`; ưu tiên hiển thị ngay giá trị cuối, không bắt người dùng chờ count-up.

### 5.4. Dịch vụ

- Giữ 4 dịch vụ nổi bật hiện tại ở vòng đầu; đường dẫn `/services/[slug]` giữ nguyên.
- Đổi tiêu đề thành “Lĩnh vực hoạt động”. Mỗi mục có tên, một mô tả cụ thể, icon đúng ngữ nghĩa và “Xem chi tiết” thường trực.
- Desktop dùng danh sách hai cột với đường phân cách nhẹ; mobile một cột. Tránh các hộp cao có khoảng trống cho nội dung hover đang ẩn.
- Bỏ số 01–04 trang trí và shadow lớn. Số chỉ dùng khi thông tin thật sự có thứ tự.
- Link toàn mục dùng được bằng bàn phím; không lồng button trong link hoặc tạo hai link trùng nhau không cần thiết.

### 5.5. Dự án tiêu biểu

- Đặt ngay sau dịch vụ; hiện 3 dự án có ảnh và dữ liệu đáng tin cậy, đại diện cho các nhóm năng lực khác nhau nếu đủ tư liệu.
- Desktop dùng một mục lớn và hai mục bổ sung; tablet/mobile chuyển bố cục theo chiều rộng thực tế. Không ép crop ảnh làm mất chủ thể hoặc chữ trên bảng công trình.
- Chọn bằng danh sách slug rõ ràng. Giữ `getAllProjects()` và cơ chế đọc Markdown; không đổi slug, ID hoặc route chỉ để rút ngắn nhãn hiển thị.
- Có thể thêm nhãn hiển thị ngắn riêng, ví dụ “Cầu vượt Chùa Bộc – Thái Hà”, trong khi tên đầy đủ ở trang chi tiết vẫn giữ.
- Tên hiện tối đa 2–3 dòng theo kích thước; không cắt mọi tên thành “Chiếu sáng kiến trúc cầu vượt…”. Hiện hạng mục và địa điểm; năm, công suất hoặc phạm vi chỉ hiện khi có dữ liệu.
- Bỏ filter trên trang chủ vì đã chọn 3 dự án; giữ filter trên `/projects`. Hiện “Xem tất cả dự án” trên mọi màn hình.
- Kiểm tra ảnh trả về từ `src/lib/projects.ts`: ảnh thư mục có thể ghi đè ảnh frontmatter. Chỉ đưa ảnh đã xác nhận vào nhóm nổi bật; ảnh stock không được trình bày như ảnh chụp công trình thực.
- Nếu không có dự án hợp lệ, bỏ khối hoặc hiển thị thông tin hướng dẫn phù hợp người xem; không lộ tên thư mục nội bộ.

### 5.6. Giới thiệu và năng lực

- Gộp nội dung hữu ích của `AboutSection`, `CoreValuesSection` và `WhyChooseSection` thành một khối.
- Một ảnh đội ngũ/thi công đã xác nhận, một đoạn giới thiệu 60–90 từ, 3 lợi thế có bằng chứng, một link “Xem hồ sơ năng lực” tới `/about`.
- Không gọi link `/about` là “Tải hồ sơ” khi chưa có tệp PDF thực.
- Bỏ các khối lặp cam kết an toàn, chất lượng, tiến độ. Không giữ “100%” dưới dạng thành tích đo được nếu chỉ là lời cam kết.
- Bỏ `CoreValuesSection`, `WhyChooseSection`, `ProcessSection` và `TestimonialSection` khỏi danh sách render trang chủ sau khi đã chuyển nội dung cần thiết. Giữ component còn được dùng ở nơi khác.
- Quy trình đầy đủ giữ hoặc bổ sung ở trang dịch vụ khi cần; chỉ dùng testimonial đã xác thực, không dùng avatar ngẫu nhiên gắn với tên đại diện khách hàng.

### 5.7. Đối tác và tin tức

- Theo yêu cầu bổ sung, giữ nguyên dải đối tác của bản cũ: class section, tiêu đề “Khách hàng & Đối tác chiến lược tiêu biểu”, 5 tên đơn vị lặp để chạy marquee, gradient hai mép và dừng chạy khi hover. Không thay bằng danh sách khách hàng lấy từ 3 dự án.
- Logo chỉ dùng khi tệp tồn tại và có nguồn phù hợp; tên chữ là phương án thay thế rõ ràng. Nếu không có hành động, bỏ `cursor-pointer`.
- Theo yêu cầu ngày 12/10, khôi phục “Tin Tức & Sự Kiện” với `news.slice(0, 3)`, giữ nguyên nội dung, ngày tháng, thẻ bài và hiệu ứng của bản cũ; không thay đổi dữ liệu hoặc thêm trạng thái xuất bản để làm khối hiện trở lại.
- Dữ liệu hiện có chú thích mockup và có ngày sau ngày đánh giá. Người triển khai phải đối chiếu tại thời điểm triển khai, không xuất bản bài mẫu chỉ vì ngày đã trôi qua.
- Khi cần, thêm trường trạng thái xuất bản và ngày ISO bên cạnh ngày hiển thị; cập nhật kiểu `NewsArticle` và nơi sử dụng đồng bộ.
- Không ẩn phần tin tức theo `status` hoặc `publishedAt` trong lần sửa này. Giữ liên kết `/news` và các bài chi tiết; kiểm tra thẻ desktop/mobile và ảnh.

### 5.8. CTA, footer và luồng liên hệ

- Theo yêu cầu bổ sung, khôi phục CTA nền tối của bản cũ: ảnh nền có class `absolute inset-0 opacity-20`, lớp trang trí, bố cục căn giữa, tiêu đề và hiệu ứng xuất hiện. Giữ liên kết tư vấn `/contact` và số điện thoại thật, không khôi phục số mẫu hoặc lời hứa tư vấn miễn phí.
- Sửa `tel:+84XXXXXXXXX` thành `tel:0936189292` theo số đang có trong dữ liệu dự án; đồng bộ Header, CTA và Footer qua một nguồn dữ liệu chung.
- Footer gồm 3 nhóm: doanh nghiệp, đường dẫn chính, thông tin liên hệ. Số điện thoại và email bấm được.
- Bỏ Facebook/YouTube `href="#"` nếu chưa có URL thật; chuyển bản đồ thành link có nhãn hoặc iframe lazy khi cần, không chiếm trọng lượng thị giác lớn.
- Form footer hiện không có xử lý gửi. Phương án tối thiểu dùng gọi điện, email hoặc link liên hệ; chỉ giữ form khi đã nối tới dịch vụ tiếp nhận thật.
- **Điểm phụ thuộc mới xác nhận:** `src/app/contact/page.tsx` dùng `setTimeout` mô phỏng API và báo thành công. Trước khi nghiệm thu CTA dẫn tới form, thay mô phỏng bằng dịch vụ thực hoặc chuyển phần tương ứng sang kênh gọi/email có tác dụng. Không báo “Đã gửi” khi chưa gửi dữ liệu.
- Dự án dùng static export, nên không mặc định thêm API route/Server Action rồi coi là chạy được trên hosting tĩnh. Nếu cần form, chọn dịch vụ tiếp nhận phù hợp môi trường triển khai; cấu hình bí mật phía dịch vụ, không đưa vào mã client.
- Form thật phải có nhãn, autocomplete, kiểm tra đầu vào, lỗi theo trường, trạng thái đang gửi, thành công và lỗi dịch vụ. Khi gửi lỗi, giữ dữ liệu và cho thử lại; chỉ reset sau thành công thực.
- Không hứa thời gian phản hồi, dịch vụ 24/7 hoặc hỗ trợ miễn phí khi chưa có căn cứ. Nếu đã có trang chính sách phù hợp việc thu thập dữ liệu, liên kết rõ; không tạo link chính sách chưa có đích.

## 6. Hệ thống thiết kế

### Màu và bề mặt

| Vai trò | Giá trị đề xuất | Cách dùng |
| --- | --- | --- |
| Xanh chính | `#2E7D32` | CTA, link và điểm nhấn trên nền sáng |
| Xanh tương tác | `#1B5E20` | Hover/pressed của CTA |
| Xanh sáng | `#4ADE80` | Chữ/icon nhấn trên nền tối, không dùng làm chữ nhỏ trên nền trắng |
| Nền tối | `#1A2332` | Hero, CTA khôi phục và footer |
| Nền phụ | `#F7F8F7` | Section sáng cần phân biệt nhẹ |
| Bề mặt | `#FFFFFF` | Nội dung và header |
| Chữ chính/phụ | `#1A2332` / `#4B5563` | Tiêu đề, nội dung và metadata |

Đây là một họ màu nhấn xanh; các sắc độ phục vụ trạng thái, không tạo nhiều màu nhấn độc lập. Bỏ màu nâu `#d4a373` và các accent tím/xanh dương/vàng không có ý nghĩa nội dung. Nền tối dùng chữ trắng hoặc xanh sáng đủ tương phản.

Token hiện mang tên `brand-gold` dù giá trị là xanh. Khi triển khai, có thể thêm tên mang ngữ nghĩa `brand-primary` và giữ alias cũ để chuyển dần; không thay toàn bộ tên token làm ảnh hưởng các trang con trong một lần sửa.

### Chữ, khoảng cách và hình dạng

| Thành phần | Desktop | Mobile |
| --- | --- | --- |
| H1 | 48–64 px, 600–700 | 32–38 px, 600–700 |
| H2 | 32–40 px, 600 | 26–30 px, 600 |
| Tên dự án/dịch vụ | 20–24 px, 600 | 18–20 px, 600 |
| Nội dung | 16–18 px, line-height 1.6 | 16 px, line-height 1.6 |
| Metadata | 14 px | 13–14 px |
| Section thường | Khoảng 72–88 px | Khoảng 40–56 px |

- Container khoảng 1.200–1.280 px; lề mobile 20 px, giảm có kiểm soát ở màn hình rất hẹp.
- Đoạn văn tối đa khoảng 60–65 ký tự mỗi dòng. H1/H2 dùng tracking hơi âm và `text-wrap: balance`; nội dung có thể dùng `text-wrap: pretty`.
- Radius ảnh/khối 8–12 px, nút 6–8 px. Không dùng cùng một pill bo tròn cho mọi thành phần.
- Căn hàng tên, mô tả và hành động theo nhóm nội dung; không kéo dài card chỉ để tạo độ cao bằng nhau.
- Icon giữ Lucide, stroke thống nhất khoảng 1.5–2; ưu tiên 16/20/24 px. Không cài bộ icon mới cho khác biệt thuần hình thức.

### Trạng thái và chuyển động

- Nút/link có default, hover, focus-visible và pressed; disabled/loading chỉ khi có tình huống thật.
- Vùng bấm chính tối thiểu khoảng 44 × 44 px; không giấu hành động sau hover trên thiết bị cảm ứng.
- Transition 150–250 ms cho trạng thái tương tác; ưu tiên transform/opacity. Không dùng `transition-all` hoặc animate width/height khi có phương án phù hợp hơn.
- Nội dung quan trọng hiển thị từ HTML ban đầu; không phụ thuộc hoàn toàn vào JavaScript và animation để trở nên nhìn thấy.
- Một hiệu ứng xuất hiện nhẹ tại hero là đủ; các section còn lại hạn chế chuyển động tự chạy. Tôn trọng `prefers-reduced-motion`, kể cả smooth scroll.

## 7. Danh sách tệp dự kiến chỉnh

| Tệp | Việc cần làm |
| --- | --- |
| `src/app/page.tsx` | Sắp xếp 8 khối, bỏ render các khối đã gộp, truyền dự án chọn thủ công |
| `src/app/globals.css` | Bỏ zoom, thống nhất token, focus, thang lớp và reduced motion; kiểm tra CSS hero cũ trước khi loại bỏ |
| `src/app/layout.tsx` | Kiểm tra font variables, cấu trúc main, metadata và hỗ trợ skip link; tránh tạo main lồng nhau |
| `src/components/Header.tsx` | Menu gọn, bỏ tìm kiếm chưa hoạt động, focus và hành vi mobile |
| `src/sections/HeroSection.tsx` | Khôi phục Hero ban đầu theo yêu cầu mới; chỉ điều chỉnh chiều cao và vị trí điều khiển sau khi bỏ zoom |
| `src/sections/StatsSection.tsx` | Dải năng lực nền sáng, dữ liệu chung và số liệu rõ nguồn |
| `src/sections/ServicesSection.tsx` | Danh sách dịch vụ gọn, liên kết thường trực, kiểu icon map rõ |
| `src/sections/ProjectsSection.tsx`, `ProjectsSectionClient.tsx` | Chọn 3 dự án, bố cục phân cấp, bỏ filter trang chủ, tên dễ đọc |
| `src/sections/AboutSection.tsx` | Gộp giới thiệu và lợi thế, ảnh thật, link hồ sơ |
| `src/sections/PartnerSection.tsx`, `NewsSection.tsx` | Khôi phục dải đối tác cũ theo yêu cầu; khôi phục cả phần Tin Tức & Sự Kiện cũ theo yêu cầu |
| `src/sections/CTASection.tsx`, `src/components/Footer.tsx` | Gọi/email thật, footer gọn, bỏ form/link mẫu |
| `src/app/contact/page.tsx` | Xử lý phụ thuộc gửi form mô phỏng, không redesign toàn trang liên hệ |
| `src/data/about.ts`, `src/data/news.ts`, `src/types/index.ts` | Thống nhất số liệu và kiểu dữ liệu khi cần |
| Tệp dữ liệu homepage/contact mới nếu cần | Slug nổi bật, nhãn ngắn, thông tin liên hệ; không sao chép toàn bộ dữ liệu dự án |

Giữ các component dùng ở trang khác. Chỉ xóa dead code sau khi tìm toàn bộ nơi sử dụng. Không sửa tệp export trong `out/` làm nguồn chính; build lại từ `src` khi triển khai.

## 8. Thứ tự thực hiện và kiểm tra

Skill ưu tiên font → màu → tương tác → layout → component → trạng thái → tinh chỉnh. Với BT DECOM, xử lý hành động liên hệ bị hỏng trước; font được đánh giá và giữ lại, sau đó đi theo các nhóm cải thiện của skill.

| Đợt | Phạm vi | Kiểm tra trước khi chuyển bước |
| --- | --- | --- |
| 1 | Chốt dữ liệu, sửa số điện thoại/link, xử lý form mô phỏng | Đích gọi/email đúng; không báo gửi thành công giả; dữ liệu mẫu không được đưa vào nhóm chứng minh năng lực |
| 2 | Typography, màu, bỏ zoom và trạng thái tương tác cơ bản | Chụp trang chủ và trang con đại diện; không tràn chữ/menu; các CTA có focus rõ |
| 3 | Giữ Hero cũ; sửa dải năng lực, dịch vụ, đưa dự án lên sớm | Hero giữ nội dung cũ; CTA mobile và slider hoạt động; dự án có phân cấp và tên đọc được |
| 4 | Gộp năng lực, đối tác/tin tức, CTA và footer | Không lặp khối, route cũ hoạt động; chỉ hiển thị dữ liệu hợp lệ |
| 5 | Responsive, tài nguyên, khả năng sử dụng và build | Kiểm tra các kích thước, bàn phím, reduced motion, lint/build và luồng liên hệ |

Sau mỗi nhóm chỉnh, kiểm tra hành vi liên quan và ảnh trước/sau. Không cần chạy toàn bộ bộ kiểm tra sau mỗi thay đổi nhỏ; chạy lint/build ở mốc tích hợp, sau lỗi hoặc sau thay đổi có ảnh hưởng rộng.

## 9. Checklist nghiệm thu

- [x] Hero giữ video, tiêu đề, mô tả, slider desktop và nút xem dự án mobile như bản ban đầu theo yêu cầu mới.
- [x] Nút tư vấn trên header desktop, menu mobile và khối liên hệ; link xem dự án hoạt động.
- [x] Mobile 390 × 844 thấy nút “Xem dự án” ở màn hình đầu.
- [x] Dự án nằm ngay sau dịch vụ, hiện 3 mục chọn lọc có tên phân biệt được.
- [x] Khối giới thiệu dùng ảnh thi công sẵn có; không còn testimonial mẫu trên trang chủ.
- [x] Số liệu có nguồn chung; phân biệt 26 hồ sơ Markdown với tổng công trình doanh nghiệp.
- [x] Không còn số điện thoại mẫu, `href="#"`, nút tìm kiếm rỗng hoặc form gửi giả trong luồng đã sửa.
- [x] Gọi, email, xem hồ sơ, dịch vụ và dự án đều có đích thật. Không triển khai form mới.
- [x] Kiểm tra 360, 390, 768, 1.024 và 1.440 px; không tràn ngang. Kiểm tra tăng cỡ chữ trên mobile.
- [x] Menu mobile mở/đóng, khóa cuộn nền, Escape, focus và vòng Tab hoạt động.
- [x] Skip link bỏ qua header; có focus-visible cho thao tác bàn phím.
- [x] CSS giảm chuyển động tắt smooth scroll. Video và chuyển động slider cũ được giữ theo yêu cầu, chưa có nút tạm dừng.
- [x] Ảnh các khối mới có alt và tỷ lệ cố định; ảnh dưới màn hình đầu lazy. Hero tiếp tục dùng tài nguyên cũ.
- [x] Kiểm tra Header/Footer/CSS trên 5 trang chính và 3 trang chi tiết đại diện.
- [x] `npm.cmd run lint`: 0 lỗi, 27 cảnh báo hiện hữu, gồm cảnh báo ảnh Hero cũ được khôi phục.
- [x] `npm.cmd run build`: xuất tĩnh 64 route; kiểm tra trực tiếp bản `out/`.
- [x] Lưu số đo local trước/sau trong cùng cách phục vụ static export; không kết luận tốc độ hosting thực từ số đo local.
- [x] Lưu ảnh trước/sau và cập nhật `QUY_CHUAN_FRONTEND.md`.

Các yêu cầu đổi H1 ngành nghề, thay slider bằng ảnh tĩnh, bỏ video mobile và thêm nút tạm dừng video không thuộc nghiệm thu lần này sau chỉ đạo giữ nguyên Hero. Phương án khách hàng tĩnh cũng được thay thế bởi yêu cầu giữ dải đối tác chạy ngang của bản cũ.

## 10. Bằng chứng tham chiếu

- [Hero desktop hiện tại](design-audit/desktop-hero.png)
- [Hero mobile hiện tại](design-audit/mobile-hero.png)
- [Dịch vụ desktop](design-audit/desktop-services.png)
- [Dự án mobile](design-audit/mobile-projects.png)
- [CTA và footer desktop](design-audit/desktop-footer.png)
- [Số đo bố cục](design-audit/observations.json)

Bản đã thực hiện: [báo cáo kết quả](KET_QUA_SUA_TRANG_CHU.md), [ảnh desktop](design-audit/production/home-1440-full.png), [ảnh mobile](design-audit/production/home-390-full.png) và [kết quả kiểm tra](design-audit/production/results.json).
