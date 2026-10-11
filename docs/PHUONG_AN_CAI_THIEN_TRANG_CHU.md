# Đánh giá và phương án cải thiện trang chủ BT DECOM

Ngày đánh giá: 11/10/2026. Phạm vi: thiết kế, nội dung và đường dẫn liên hệ trên trang chủ hiện tại. Chưa thay đổi mã nguồn giao diện.

## 1. Cơ sở đánh giá

Đã đọc `README.md`, `QUY_CHUAN_FRONTEND.md`, trang chủ, Header/Footer, các section và dữ liệu liên quan; đồng thời mở `http://localhost:3000/` bằng Chrome và chụp giao diện ở desktop 1440 × 900, mobile 390 × 844 và tablet 768 × 1024. Nội dung và hiệu ứng đã được kiểm tra sau khi JavaScript tải.

Tên miền `https://btdecom.vn/` chưa truy cập được trong môi trường kiểm tra: Chrome trả `DNS_PROBE_FINISHED_NXDOMAIN`, công cụ web cũng không mở được. Đây là kết quả tại môi trường hiện tại; chưa kết luận tình trạng truy cập của mọi người dùng. Đánh giá dưới đây áp dụng cho bản local của dự án.

Ảnh bằng chứng:

- [Desktop: màn hình đầu tiên](design-audit/desktop-hero.png)
- [Desktop: dịch vụ](design-audit/desktop-services.png)
- [Desktop: dự án](design-audit/desktop-projects.png)
- [Desktop: CTA và footer](design-audit/desktop-footer.png)
- [Mobile: màn hình đầu tiên](design-audit/mobile-hero.png)
- [Mobile: dịch vụ](design-audit/mobile-services.png)
- [Mobile: dự án](design-audit/mobile-projects.png)
- [Mobile: menu](design-audit/mobile-menu.png)
- [Tablet: dịch vụ](design-audit/tablet-services.png)
- [Số đo và dữ liệu quan sát](design-audit/observations.json)

Ảnh chụp từ chế độ phát triển có nút Next.js nhỏ ở góc dưới; nút này không thuộc thiết kế website. Các số đo là quan sát bố cục, không phải kết quả đo hiệu năng bản production.

## 2. Nhận định chính

Trang đã có nền tảng phù hợp: xanh thương hiệu, nền tối, menu dễ nhận biết và bộ ảnh công trình có giá trị. Điểm yếu lớn nhất là cách ưu tiên thông tin: thông điệp mở đầu thiên về khẩu hiệu, công trình thực tế xuất hiện quá muộn, còn nhiều section lặp lại cam kết chất lượng và tiến độ. Các card, số trang trí, bóng đổ và hiệu ứng có cách xử lý khá giống nhau, khiến bản sắc của một nhà thầu kỹ thuật chưa nổi bật.

Hướng đề xuất: xây dựng trang chủ như một bản giới thiệu năng lực ngắn, dẫn khách qua ba câu hỏi: BT DECOM làm gì → đã thực hiện công trình nào → liên hệ bằng cách nào.

## 3. Những điểm yếu và cách xử lý

| Ưu tiên | Điểm yếu đã quan sát | Ảnh hưởng | Phương án |
| --- | --- | --- | --- |
| P0 | CTA cuối trang dùng `tel:+84XXXXXXXXX`; form footer không có xử lý gửi, input không có `name`; nút tìm kiếm không có hành động; liên kết Facebook/YouTube dùng `#` | Khách bấm vào nhưng chưa thực hiện được việc mong muốn | Dùng số liên hệ thật từ nguồn dữ liệu chung; nối form tới kênh tiếp nhận có phản hồi thành công/thất bại, hoặc thay bằng đường dẫn tới trang liên hệ; hoàn thiện hoặc bỏ các điều khiển chưa hoạt động |
| P1 | H1 “Chúng tôi sống vì thử thách” và mô tả chưa chỉ rõ lĩnh vực; desktop không có CTA trong nhóm nội dung hero | Khách mới khó hiểu năng lực và bước tiếp theo | H1 nêu xây lắp điện/cơ điện; đoạn mô tả ngắn; hiện “Liên hệ tư vấn” và “Xem dự án” ở mọi kích thước màn hình |
| P1 | Trang có 12 section và footer. Dự án bắt đầu ở khoảng 5.336 px desktop, 6.082 px mobile | Phải cuộn khoảng 6–7 chiều cao màn hình mới đến bằng chứng công trình | Đưa dự án ngay sau dịch vụ; gộp giới thiệu, giá trị cốt lõi và điểm khác biệt; chuyển quy trình đầy đủ sang trang phù hợp |
| P1 | Hero mobile có khoảng trống lớn phía trên; nội dung bắt đầu gần giữa màn hình | Màn hình đầu dùng chưa hiệu quả | Đưa nội dung lên dưới header; dùng chiều cao theo nội dung và viewport linh hoạt, tránh cố định toàn màn hình cho mọi điện thoại |
| P1 | Tên dự án dùng `line-clamp-1`; ba card đầu đều hiện gần giống “Chiếu sáng kiến trúc cầu vượt…” | Khó phân biệt công trình, mất thông tin địa điểm đặc trưng | Tên ngắn “Cầu vượt Chùa Bộc – Thái Hà”, “Cầu vượt Láng Hạ – Thái Hà”; cho phép 2 dòng; tách hạng mục và địa điểm thành metadata |
| P1 | Ảnh giới thiệu lấy từ Unsplash; testimonial dùng ảnh `randomuser.me`; dữ liệu tin tức có chú thích “Mockup Articles”, hai tin đầu mang ngày sau ngày đánh giá | Cần kiểm tra tính xác thực trước khi dùng làm bằng chứng uy tín | Thay bằng ảnh đội ngũ/công trình đã xác nhận; chỉ giữ lời chứng thực có nguồn xác thực; rà soát nội dung và ngày xuất bản; ưu tiên biên bản bàn giao, hồ sơ năng lực và dự án thật khi chưa có testimonial phù hợp |
| P2 | Card dịch vụ lớn nhưng ít nội dung; “Xem chi tiết” chỉ hiện khi hover | Tốn chiều cao, trên điện thoại thiếu tín hiệu bấm | Giảm padding; hiện liên kết chi tiết thường trực; thêm một ảnh hoặc thông tin phạm vi thi công giúp phân biệt từng dịch vụ |
| P2 | `html { zoom: 0.9 }`; nhiều mô tả mobile là 12–14 px trước khi thu nhỏ | Chữ và vùng bấm nhỏ hơn kích thước thiết kế; hero phải bù bằng `100vh/0.9` | Bỏ zoom toàn trang trong lần triển khai; đặt lại container, thang chữ và breakpoints; nội dung chính 16 px, metadata 13–14 px, vùng bấm khoảng 44 px trở lên |
| P2 | Xanh thương hiệu `#2E7D32`, xanh hero `#4ade80`, xanh header `#15803D`, màu nâu quy trình `#d4a373` cùng xuất hiện | Ngôn ngữ màu thiếu thống nhất | Xanh chính cho CTA trên nền sáng; xanh sáng cho chữ/icon trên nền tối; bỏ điểm nhấn nâu và giới hạn màu phụ |
| P2 | Thống kê/biểu tượng xanh đậm trên nền tối; chữ footer khá mờ; nhiều chuyển động tự chạy | Một số thông tin khó đọc hoặc gây phân tán | Kiểm tra tương phản; dùng chữ sáng cho số liệu trên nền tối; giảm animation xuất hiện; hỗ trợ reduced motion và điều khiển tạm dừng slider |

Số nhân sự đang hiển thị `80+` ở thống kê và `82+` ở điểm khác biệt, trong khi dữ liệu giới thiệu ghi `82`. Các cách diễn đạt không nhất thiết mâu thuẫn, nhưng nên dùng một nguồn dữ liệu thống nhất và ghi thời điểm cập nhật. `13+ năm` phù hợp với ngày thành lập 25/12/2012 tại thời điểm đánh giá; cần tránh để số này cố định mãi.

## 4. Bố cục đề xuất

```text
Header: Logo | Giới thiệu | Dịch vụ | Dự án | Tin tức | Liên hệ | Tư vấn
   ↓
Hero: thông điệp năng lực + ảnh công trình nổi bật + 2 nút hành động
   ↓
Dải năng lực: thành lập 2012 / nhân sự / công trình / thiết bị đã xác nhận
   ↓
Lĩnh vực hoạt động: 4 nhóm dịch vụ ngắn, dễ phân biệt
   ↓
Dự án tiêu biểu: 1 dự án lớn + 2 dự án bổ sung + xem toàn bộ
   ↓
Năng lực BT DECOM: ảnh đội ngũ thật + 3 lợi thế có bằng chứng + hồ sơ năng lực
   ↓
Khách hàng và đối tác: tên hoặc logo đã xác nhận, bố cục tĩnh
   ↓
Tin tức: 2–3 bài đã xuất bản và được xác nhận
   ↓
Liên hệ tư vấn + Footer gọn
```

Quy trình 6 bước chuyển sang trang dịch vụ hoặc giới thiệu; giữ đường dẫn rõ ràng từ trang chủ. Testimonial chỉ đưa vào khối năng lực khi đã xác thực. Tuyển dụng vẫn có thể truy cập từ Tin tức hoặc footer để giảm tải menu chính.

Hero mẫu:

> **Xây lắp điện và cơ điện cho công trình bền vững**
>
> BT DECOM thi công đường dây, trạm biến áp, hệ thống cơ điện và chiếu sáng. Đồng hành cùng chủ đầu tư từ khảo sát đến bàn giao.
>
> **Liên hệ tư vấn** · **Xem dự án**

Thông điệp là bản đề xuất, cần đối chiếu phạm vi cung cấp thực tế trước khi xuất bản. Có thể giữ “Chúng tôi sống vì thử thách” ở phần giới thiệu như một câu thể hiện văn hóa doanh nghiệp.

Desktop: để ảnh công trình là điểm nổi bật, có tên công trình và hạng mục ở caption; giảm lớp khung card đen, chấm phân trang và mũi tên đang cạnh tranh với nội dung chính. Mobile: đưa tiêu đề lên sớm, hai nút hành động dễ thấy, ảnh công trình gọn phía dưới. Chọn thủ công các dự án đại diện cho nhiều năng lực thay vì lấy 5 ID đầu tiên.

## 5. Quy chuẩn thị giác cho lần cải thiện

- Màu: xanh chính `#2E7D32`, xanh hover `#1B5E20`, xanh sáng trên nền tối `#4ADE80`, nền tối `#1A2332`, nền trung tính `#F7F8F7`, trắng `#FFFFFF`. Kiểm tra tương phản theo cặp màu thực tế khi triển khai.
- Giữ Montserrat và Inter hiện tại; thống nhất H1 48–64 px desktop / 32–38 px mobile, H2 32–40 px / 26–30 px, nội dung 16–18 px. Tránh viết hoa chữ đầu mọi từ ở tiêu đề.
- Container desktop khoảng 1.200–1.280 px, lề mobile 20 px; section thường 72–88 px desktop / 40–56 px mobile. Hạn chế khoảng đệm 128 px lặp lại.
- Card bán kính 8–12 px, bóng nhẹ; dùng ảnh và nội dung để tạo khác biệt. Bỏ số 01–04 ở dịch vụ nếu chỉ trang trí; giữ đánh số cho quy trình có thứ tự.
- Dự án desktop dùng một ảnh chủ đạo và hai card bổ sung; mobile hiện 3 dự án chọn lọc và nút xem toàn bộ, tránh xếp 6 card lớn kéo dài gần 3.000 px như hiện tại.
- Ưu tiên ảnh thật có chủ thể rõ; ảnh chiếu sáng nên chọn thời điểm thể hiện hệ thống đang hoạt động. Ảnh trên card cần crop có chủ đích và tránh lớp phủ tối che chi tiết công trình.

Video hero hiện khoảng 19,9 MB. Đây là kích thước tệp, chưa phải lượng tải thực tế hay kết luận về tốc độ trang. Đề xuất dùng ảnh poster nhẹ, ảnh tĩnh trên mobile hoặc khi giảm chuyển động, chỉ tải video theo nhu cầu; thêm kích thước ảnh và lazy loading cho ảnh dưới màn hình đầu. Đo lại trên bản production sau thay đổi.

## 6. Triển khai theo thứ tự

| Đợt | Công việc | Kết quả cần đạt |
| --- | --- | --- |
| 1 — Sửa luồng liên hệ | Số gọi điện, form, nút tìm kiếm và link mẫu; rà soát dữ liệu demo | Mọi hành động hiện trên trang có kết quả rõ ràng; dữ liệu uy tín có nguồn kiểm chứng |
| 2 — Sửa phần đầu trang | Hero mới, CTA desktop/mobile, dải năng lực, chọn dự án nổi bật | Trong màn hình đầu khách biết lĩnh vực và thấy cách liên hệ; bỏ khoảng trống lớn mobile |
| 3 — Sắp xếp toàn trang | Đưa dự án lên sớm, gộp nội dung lặp, rút gọn dịch vụ, footer | Trang chủ có khoảng 8 khối chính và footer; giảm chiều dài, tăng trọng lượng cho công trình thật |
| 4 — Hoàn thiện | Bỏ zoom, thống nhất màu/chữ, tối ưu tài nguyên và tương tác bàn phím | Giao diện ổn định trên điện thoại, tablet, desktop; chữ dễ đọc và hành động dễ bấm |

## 7. Tiêu chí nghiệm thu

1. Hero có thông điệp ngành nghề rõ, CTA tư vấn và xem dự án trên cả desktop/mobile.
2. Dự án tiêu biểu xuất hiện sau nhóm dịch vụ; tên công trình đọc được và phân biệt được.
3. Không còn số điện thoại mẫu, link `#` hoặc nút/form chưa xử lý trong luồng liên hệ.
4. Chỉ dùng số liệu, hình ảnh, tin tức và lời chứng thực đã được xác nhận.
5. Kiểm tra ở 360, 390, 768, 1.024 và 1.440 px; menu không tràn, header không che điểm đến khi cuộn, nội dung chính dễ đọc.
6. Slider, menu và form dùng được bằng bàn phím; có focus rõ và xử lý reduced motion.
7. Đo tốc độ trên bản production và điều kiện mạng xác định; ghi nhận mức thay đổi trước/sau, tránh lấy số từ dev server làm chuẩn.

Ưu tiên bắt đầu từ hero, vị trí dự án và luồng liên hệ: đây là ba thay đổi có tác động rõ nhất đến việc khách hiểu năng lực và tiếp tục trao đổi với BT DECOM.
