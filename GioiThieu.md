# TASK: Xây dựng trang Giới thiệu – BT DECOM

**Task ID:** FE-ABOUT-001  
**Priority:** P0 – High  
**Status:** TODO  
**Module:** Frontend / About Page  
**Reference:** Ảnh thiết kế trang Giới thiệu BT DECOM đã cung cấp  
**Tech Stack:** Sử dụng framework, thư viện và cấu trúc hiện có trong repository.

---

## 1. Mục tiêu

Xây dựng lại trang **Giới thiệu (About Us)** cho website BT DECOM theo ảnh thiết kế tham chiếu.

Trang cần thể hiện đầy đủ thông tin doanh nghiệp, lịch sử phát triển, năng lực nhân sự, thiết bị thi công, cơ cấu tổ chức và thông tin liên hệ.

### Yêu cầu chính

- Giao diện hiện đại, chuyên nghiệp, đồng nhất với BT DECOM Design System.
- Bám sát bố cục, màu sắc và phong cách của ảnh tham chiếu.
- Hiển thị đầy đủ 11 nhóm nội dung được mô tả bên dưới.
- Responsive trên desktop, tablet và mobile.
- Có các tương tác Accordion, Equipment Modal và Copy Button.
- Đảm bảo accessibility và performance.
- Tái sử dụng component có sẵn.
- Không làm ảnh hưởng đến các trang khác.

**Lưu ý:** Ảnh tham chiếu là bản mockup. Ưu tiên độ chính xác về nội dung, khả năng sử dụng và responsive hơn việc sao chép tuyệt đối mọi chi tiết trong ảnh.

---

## 2. Phân tích repository trước khi triển khai

AI Agent cần:

1. Kiểm tra cấu trúc thư mục dự án.
2. Xác định framework và phiên bản Tailwind CSS.
3. Tìm trang About hiện tại và các component liên quan.
4. Kiểm tra Header, Footer, Container, Button, Modal và Accordion có sẵn.
5. Xác định nguồn dữ liệu và hình ảnh hiện có.
6. Đối chiếu giao diện hiện tại với ảnh tham chiếu.
7. Lập danh sách file cần chỉnh sửa trước khi bắt đầu.

### Ràng buộc

- Không tự ý cài thêm thư viện.
- Không thay đổi business logic ngoài phạm vi task.
- Không xóa dữ liệu hoặc chức năng hiện có.
- Không sửa các trang khác nếu không cần thiết.
- Không hardcode đường dẫn ảnh không tồn tại.
- Không tự tạo số liệu doanh nghiệp ngoài nội dung được cung cấp.

---

## 3. Chi tiết các section

### SECTION 01 – Hero Banner

**Mục tiêu:** Tạo ấn tượng ban đầu về thương hiệu và lĩnh vực hoạt động.

**Nội dung:**

- Label: GIỚI THIỆU
- Heading: VỀ CHÚNG TÔI
- Description: Hơn 13 năm kinh nghiệm trong lĩnh vực xây lắp và phát triển thương mại.
- Breadcrumb: Trang chủ / Giới thiệu

**Thiết kế:**

- Banner full-width.
- Hình nền công trình xây dựng thực tế.
- Overlay gradient tối từ trái sang phải.
- Heading lớn, màu trắng kết hợp xanh Primary.
- Nội dung căn trái theo container.
- Chiều cao desktop khoảng 350–450px.
- Mobile tự điều chỉnh chiều cao theo nội dung.

**Acceptance Criteria:**

- [ ] Nội dung hiển thị rõ ràng trên ảnh nền.
- [ ] Heading responsive.
- [ ] Breadcrumb điều hướng đúng.
- [ ] Không bị che bởi fixed header.
- [ ] Hình ảnh tối ưu và không gây layout shift.

### SECTION 02 – Company Statistics

**Mục tiêu:** Hiển thị 4 chỉ số năng lực nổi bật.

| Chỉ số | Giá trị |
|---|---|
| Năm kinh nghiệm | 13+ |
| Tổng số nhân sự | 82 |
| Thiết bị máy móc | 50+ |
| Đội xây lắp chủ lực | 3 |

**Thiết kế:**

- Stats Box nền trắng.
- Bo góc 16px.
- Shadow nhẹ.
- Đè lên phần chân Hero khoảng 30–40px.
- Mỗi chỉ số có icon Lucide.
- Số liệu màu Primary, font Montserrat Bold.

**Responsive:**

- Desktop: 4 cột.
- Tablet: 2×2.
- Mobile: 2×2.

**Acceptance Criteria:**

- [ ] Đủ 4 chỉ số.
- [ ] Không tràn nội dung.
- [ ] Icon đồng nhất.
- [ ] Khoảng cách giữa các chỉ số hợp lý.

### SECTION 03 – Giới thiệu tổng quan công ty

**Tên đầy đủ:**

CÔNG TY TNHH XÂY LẮP VÀ PHÁT TRIỂN THƯƠNG MẠI BT

**Nội dung:**

Thành lập từ năm 2012, BT DECOM hoạt động trong lĩnh vực xây lắp và phát triển thương mại, chuyên sâu về thi công xây dựng, hệ thống cơ điện, trạm biến áp và thương mại kỹ thuật.

Với định hướng lấy chất lượng, uy tín và hiệu quả làm nền tảng, doanh nghiệp không ngừng nâng cao năng lực đội ngũ, đầu tư thiết bị và hoàn thiện quy trình triển khai dự án.

**Thiết kế:**

- Layout 2 cột.
- Một bên nội dung, một bên hình ảnh công trình.
- Hình ảnh bo góc 16px, shadow nhẹ.
- Label nhỏ màu Primary.
- Heading sử dụng Montserrat Bold.
- Có thể bổ sung CTA dẫn đến trang Dự án.

**Acceptance Criteria:**

- [ ] Nội dung chính xác.
- [ ] Ảnh có alt text.
- [ ] Mobile chuyển về 1 cột.
- [ ] Không dùng ảnh giả làm ảnh công trình thực tế.

### SECTION 04 – Hành trình phát triển

**Mục tiêu:** Trình bày các cột mốc phát triển của doanh nghiệp.

| Năm | Nội dung |
|---|---|
| 2012 | Thành lập công ty |
| 2015 | Mở rộng lĩnh vực thi công |
| 2020 | Nâng cấp năng lực thiết bị máy móc |
| 2025 | Đạt quy mô hơn 82 nhân sự chuyên môn |
| 2026 & Tương lai | Định hướng mở rộng và phát triển bền vững |

**Thiết kế:**

- Timeline dọc.
- Trục nối màu xanh.
- Mốc thời gian nổi bật.
- Nội dung chia thành các item.
- Animation xuất hiện nhẹ khi cuộn, nếu phù hợp.

**Acceptance Criteria:**

- [ ] Đủ 5 mốc.
- [ ] Thứ tự thời gian chính xác.
- [ ] Timeline responsive.
- [ ] Không phụ thuộc animation để đọc nội dung.

### SECTION 05 – Hồ sơ pháp lý & Thông tin nhanh

Hiển thị 4 thông tin:

| Trường | Giá trị |
|---|---|
| Ngày thành lập | 25/12/2012 |
| Trụ sở chính | Hà Nội |
| Người đại diện pháp luật | Đào Thị Hà |
| Loại hình doanh nghiệp | Công ty TNHH Một thành viên |

**Thiết kế:**

- Card nền xanh rất nhạt.
- Mỗi thông tin gồm icon, label và value.
- Layout 1 hoặc 2 cột tùy kích thước.
- Value nổi bật hơn label.

**Acceptance Criteria:**

- [ ] Đủ 4 trường.
- [ ] Nội dung lấy từ nguồn dữ liệu thống nhất.
- [ ] Không tự thêm địa chỉ hoặc mã số thuế chưa được xác nhận.

### SECTION 06 – Thông điệp Ban lãnh đạo

**Quote:**

> Với phương châm lấy chất lượng, uy tín và sự hài lòng của khách hàng làm nền tảng phát triển, BT DECOM luôn nỗ lực mang đến những công trình bền vững và an toàn.

**Signature:** Ban lãnh đạo BT DECOM

**Thiết kế:**

- Nền tối `#1A2332`.
- Có thể sử dụng hình ảnh công trình với overlay.
- Icon Quote lớn.
- Nội dung màu trắng.
- Bo góc 16px.
- Chữ ký căn phải hoặc dưới trích dẫn.

**Acceptance Criteria:**

- [ ] Nội dung trích dẫn chính xác.
- [ ] Độ tương phản đạt WCAG AA.
- [ ] Không sử dụng ảnh gây khó đọc.

### SECTION 07 – Năng lực nhân sự

**Tổng nhân sự: 82 người.**

#### A. Các chỉ số tổng quan

| Chỉ số | Số lượng |
|---|---|
| Cán bộ chuyên môn | 28 |
| Công nhân kỹ thuật lành nghề | 54 |
| Kỹ sư Đại học | 20 |
| Thạc sĩ | 02 |

Lưu ý: Các nhóm trình độ có thể nằm trong nhóm cán bộ chuyên môn, không được cộng tất cả chỉ số thành tổng nhân sự.

#### B. Accordion cán bộ chuyên môn – 28 người

| Chuyên môn | Số lượng |
|---|---|
| Thạc sĩ QTKD | 2 |
| Kỹ sư hệ thống điện | 5 |
| Tự động hóa | 1 |
| Thiết bị điện | 1 |
| Cơ khí | 2 |
| Xây dựng | 1 |
| Tin học & Điện tử | 3 |
| Cử nhân Kinh tế/Luật/Kế toán | 7 |
| Cao đẳng | 6 |

#### C. Accordion công nhân kỹ thuật – 54 người

| Chuyên môn | Số lượng |
|---|---|
| Thợ điện | 30 |
| Thợ cơ khí | 8 |
| Thợ hàn | 4 |
| Thợ xây dựng | 4 |
| Lái cẩu | 3 |
| Lái xe tải | 2 |
| Nhân viên thí nghiệm | 3 |

**Thiết kế:**

- 4 Stat Cards phía trên.
- 2 Accordion phía dưới.
- Accordion có icon ChevronDown.
- Nội dung trình bày dạng danh sách hoặc grid.
- Animation mở/đóng mượt.

**Acceptance Criteria:**

- [ ] Tổng 28 + 54 = 82.
- [ ] Số lượng chi tiết mỗi nhóm khớp tổng.
- [ ] Accordion hoạt động bằng click và keyboard.
- [ ] Có aria-expanded và aria-controls.
- [ ] Không mất nội dung khi chuyển kích thước màn hình.

**Điểm cần xác minh:** Chỉ số 20 kỹ sư Đại học chưa khớp trực tiếp với tổng các nhóm chuyên môn có tên trong bảng. Giữ nguyên dữ liệu cung cấp nhưng không tự suy diễn cách phân loại.

### SECTION 08 – Năng lực máy móc & thiết bị thi công

**Danh sách thiết bị tiêu biểu:**

1. Xe cẩu 10T KATO
2. Xe tải 5T
3. Xe cẩu tự hành 12.5T
4. Máy thử cao áp
5. Máy hàn 25KVA
6. Máy đo điện trở đất

**Thiết kế:**

- Grid 3 cột × 2 hàng trên desktop.
- Mỗi thiết bị có ảnh, tên và card.
- Ảnh tỷ lệ 4:3.
- Có hover nhẹ.
- Nút: "Xem bảng kê chi tiết".

#### EquipmentModal

Khi nhấn nút:

- Mở modal hiển thị bảng kê thiết bị.
- Có tên thiết bị, số lượng, thông số và tình trạng nếu dữ liệu có sẵn.
- Có thể cuộn nếu danh sách dài.
- Có nút đóng.
- Đóng bằng Escape.
- Quản lý focus đúng chuẩn dialog.

**Acceptance Criteria:**

- [ ] Đủ 6 thiết bị tiêu biểu.
- [ ] Modal mở và đóng đúng.
- [ ] Không tự tạo số lượng hoặc thông số kỹ thuật chưa được cung cấp.
- [ ] Mobile hiển thị tốt.
- [ ] Không sử dụng ảnh thiết bị sai chủng loại nếu có thể tránh.

### SECTION 09 – Sơ đồ cơ cấu tổ chức

**Cấu trúc:**

```text
BAN GIÁM ĐỐC
      │
      ├── PHÒNG KẾ HOẠCH TỔNG HỢP
      │
      ├── PHÒNG KỸ THUẬT VẬT TƯ
      │
      └── PHÒNG TÀI CHÍNH KẾ TOÁN
      
CÁC ĐỘI THI CÔNG TRỰC TIẾP
      │
      ├── ĐỘI XÂY LẮP 1
      ├── ĐỘI XÂY LẮP 2
      └── ĐỘI XÂY LẮP 3
```

**Thiết kế:**

- Organizational Chart 3 tầng.
- Ban Giám Đốc ở tầng trên.
- Các phòng ban chức năng ở tầng giữa.
- Các đội xây lắp ở tầng dưới.
- Sử dụng connector lines để thể hiện phân cấp.
- Các node có icon và nền xanh nhạt.
- Node Ban Giám Đốc sử dụng nền Primary.

**Responsive:**

- Desktop: sơ đồ cây.
- Mobile: chuyển thành sơ đồ dọc hoặc nhóm card phân cấp.

**Acceptance Criteria:**

- [ ] Đủ 7 đơn vị.
- [ ] Thể hiện đúng quan hệ phân cấp.
- [ ] Không tràn màn hình mobile.
- [ ] Sơ đồ vẫn đọc được khi không có animation.

### SECTION 10 – Thông tin tài khoản ngân hàng

| Ngân hàng | Chi nhánh | Số tài khoản |
|---|---|---|
| Vietcombank | CN Thăng Long | 0491000017938 |
| MB Bank | CN Ba Đình – PGD Đội Cấn | 0341100302006 |
| SHB | CN Hàn Thuyên | 2227776868 |

**Thiết kế:**

- Grid 3 card desktop.
- Logo ngân hàng.
- Tên ngân hàng.
- Chi nhánh.
- Số tài khoản.
- CopyButton cạnh số tài khoản.

**CopyButton:**

- Click để sao chép số tài khoản.
- Hiển thị toast "Đã sao chép số tài khoản".
- Xử lý trường hợp clipboard không khả dụng.
- Có accessible label.

**Acceptance Criteria:**

- [ ] Hiển thị chính xác 3 số tài khoản.
- [ ] Sao chép đúng giá trị.
- [ ] Không làm mất số 0 đầu.
- [ ] Có thông báo sau khi sao chép.
- [ ] Thông tin ngân hàng không bị che hoặc cắt trên mobile.

### SECTION 11 – CTA & Footer

**Heading:**

Bạn cần đơn vị thi công xây lắp chuyên nghiệp?

**Description:**

Hãy liên hệ với BT DECOM để được tư vấn giải pháp phù hợp nhất cho dự án của bạn.

**Actions:**

- Primary: Liên hệ tư vấn miễn phí
- Secondary: Gọi Hotline

**Thiết kế:**

- Nền tối kết hợp ảnh công trình.
- Gradient overlay.
- Heading màu trắng.
- Nút Primary màu xanh.
- Nút Hotline dạng Outline.
- Footer dùng component chung của website.

**Acceptance Criteria:**

- [ ] Nút liên hệ điều hướng đúng.
- [ ] Nút Hotline dùng số điện thoại từ cấu hình thực tế.
- [ ] Không hardcode số Hotline chưa xác minh.
- [ ] Footer không bị duplicate.
- [ ] Responsive hoàn chỉnh.

---

## 4. Design System

### Brand Colors

```text
Primary:       #2E7D32
Primary Hover: #1B5E20
Primary Light: #43A047
Secondary:     #C8E6C9
Dark:          #1A2332
Light:         #F1F8E9
Body Text:     #4B5563
Muted Text:    #6B7280
Border:        #E5E7EB
Background:    #FFFFFF
```

### Typography

- Heading: Montserrat.
- Body: Inter.
- H1: 36–60px tùy viewport.
- H2: 28–36px.
- H3: 20–24px.
- Body: 16px.
- Metadata: 14px.

### Layout

- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Section spacing: `py-16 md:py-20`.
- Card radius: 16px.
- Button radius: 12px.
- Card gap: 16–24px.
- Animation: 150–300ms.

### Accessibility

- WCAG 2.2 AA.
- Semantic HTML.
- Keyboard navigation.
- Focus-visible.
- Alt text.
- Reduced Motion.
- Responsive text.
- Contrast đạt tiêu chuẩn.

---

## 5. Component Architecture đề xuất

Chỉ tạo component mới nếu chưa có component phù hợp trong repository.

```text
components/
└── about/
    ├── AboutHero.tsx
    ├── CompanyStats.tsx
    ├── CompanyOverview.tsx
    ├── CompanyTimeline.tsx
    ├── LegalInformation.tsx
    ├── LeadershipMessage.tsx
    ├── WorkforceCapacity.tsx
    ├── WorkforceAccordion.tsx
    ├── EquipmentCapacity.tsx
    ├── EquipmentModal.tsx
    ├── OrganizationChart.tsx
    ├── BankAccounts.tsx
    └── AboutCTA.tsx
```

Tách dữ liệu tĩnh sang file riêng nếu phù hợp với kiến trúc hiện tại:

```text
data/
└── about.ts
```

Không cần tạo toàn bộ file nếu việc tách nhỏ không mang lại giá trị thực tế.

---

## 6. Responsive Requirements

| Viewport | Yêu cầu |
|---|---|
| 320–639px | 1 cột, stats 2×2, accordion dọc |
| 640–767px | Bố cục mobile mở rộng |
| 768–1023px | 2 cột, tối ưu tablet |
| 1024–1279px | Desktop layout |
| ≥1280px | Full desktop, container giới hạn |

**Kiểm thử tối thiểu:** 320px, 375px, 768px, 1024px và 1440px.

---

## 7. Implementation Plan

### Phase 1 – Foundation

- [ ] Audit code hiện tại.
- [ ] Xác định component tái sử dụng.
- [ ] Chuẩn hóa dữ liệu About.
- [ ] Chuẩn bị asset hình ảnh.
- [ ] Kiểm tra Design Tokens.

### Phase 2 – Main Layout

- [ ] Hero Banner.
- [ ] Company Statistics.
- [ ] Company Overview.
- [ ] Timeline.
- [ ] Legal Information.
- [ ] Leadership Message.

### Phase 3 – Capability Sections

- [ ] Workforce Statistics.
- [ ] Workforce Accordion.
- [ ] Equipment Grid.
- [ ] Equipment Modal.
- [ ] Organization Chart.

### Phase 4 – Supporting Sections

- [ ] Bank Accounts.
- [ ] CopyButton.
- [ ] CTA.
- [ ] Footer integration.

### Phase 5 – Quality Assurance

- [ ] Responsive testing.
- [ ] Accessibility testing.
- [ ] Kiểm tra tương tác.
- [ ] Kiểm tra nội dung và số liệu.
- [ ] Typecheck.
- [ ] Lint.
- [ ] Production build.
- [ ] Visual comparison với ảnh tham chiếu.

---

## 8. Definition of Done

Task chỉ được coi là hoàn thành khi:

- [ ] Có đầy đủ 11 section.
- [ ] Nội dung đúng theo đặc tả.
- [ ] Giao diện bám sát ảnh thiết kế.
- [ ] Accordion hoạt động.
- [ ] EquipmentModal hoạt động.
- [ ] CopyButton hoạt động.
- [ ] Các CTA điều hướng chính xác.
- [ ] Responsive không lỗi.
- [ ] Không có lỗi TypeScript hoặc build.
- [ ] Không gây regression ở các trang khác.
- [ ] Không có lỗi accessibility nghiêm trọng được phát hiện.
- [ ] Các số liệu và thông tin pháp lý đã được đối chiếu với nguồn doanh nghiệp.

---

## 9. Báo cáo bàn giao

Khi hoàn thành, AI Agent cần cung cấp:

1. Danh sách file được tạo mới.
2. Danh sách file được chỉnh sửa.
3. Các component đã hoàn thiện.
4. Những chức năng đã kiểm thử.
5. Kết quả lint, typecheck và build.
6. Những khác biệt còn lại so với ảnh tham chiếu.
7. Các vấn đề cần xác nhận hoặc chưa xử lý.

**Không tự ý commit hoặc push lên Git nếu chưa được yêu cầu.**

---

## 10. Final Instruction

Hãy triển khai task theo đúng đặc tả, ưu tiên:

1. Đúng nội dung doanh nghiệp.
2. Bám sát thiết kế tham chiếu.
3. Component tái sử dụng.
4. Responsive và accessibility.
5. Code sạch, dễ bảo trì.

Không thay đổi các chức năng ngoài phạm vi trang Giới thiệu.

Trước khi bắt đầu coding, hãy kiểm tra repository và trình bày ngắn gọn phương án triển khai. Sau đó thực hiện theo từng phase và kiểm thử kết quả.
