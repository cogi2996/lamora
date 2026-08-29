# Lamora Coffee — Audit UI/UX frontend

Ngày audit: 28/08/2026  
Phạm vi: các route bán hàng tiếng Việt, trang tiếng Anh, desktop và mobile.

## Impeccable pass — 29/08/2026

| Dimension | Score | Evidence |
| --- | ---: | --- |
| Accessibility | 4/4 | Landmark, skip link, labelled form controls, visible focus ring, 48px controls and intentional reduced-motion fallback. |
| Performance | 3/4 | Responsive `sizes` added to content images; decorative videos use `preload="none"`; source media remains large and should be transcoded at release. |
| Responsive | 4/4 | At 390px the message and CTA precede the hero image; measured `scrollWidth` does not exceed the viewport. |
| Theming | 4/4 | Colors, type, spacing, radii and component rules are captured in `DESIGN.md` and `.impeccable/design.json`. |
| Implementation integrity | 4/4 | `npx impeccable@3.6.0 detect --json app components` returned no findings. |
| **Total** | **19/20** | **Excellent; remaining work is production integration and media transcoding.** |

### Changes verified in this pass

- Mobile home hero now reads headline → supporting copy → CTA → proof → image.
- `/san-pham` uses a compact decision card: audience, flavor, roast, starting price and one clear next action; operational detail stays on product detail pages.
- Hero, editorial and packshot images declare responsive `sizes`; ambient videos keep posters and defer media loading.
- Reduced-motion uses explicit selectors and preserves poster/content states instead of globally killing every transition.
- Contact form validates minimum lengths, prevents duplicate submission, times out endpoint requests after 8 seconds, preserves input on failure, and labels the no-endpoint path as a preview rather than claiming delivery.
- Visual browser audit at 390×844 and 1440×900 confirmed no horizontal overflow; the mobile CTA appears before the image.

## Impeccable distill pass — 29/08/2026

The repeated “Thông tin Lamora.” callout was adding a second heading and a card-like interruption before the primary content. `InfoNotice` is now a quiet inline note with a small color marker, no generic bold label, and shorter guidance copy. It uses `role="note"` instead of creating an unnamed complementary landmark.

### Audit result

- `/san-pham`, `/huong-dan-pha`, `/lien-he`, product detail pages and `/en` all use the simplified notice treatment.
- No notice retains the old bordered card, heavy top accent, or repeated “Thông tin Lamora.” label; the product detail note also removes the duplicated “từ từ” phrasing.
- The note remains readable on both light surfaces and the dark brewing hero, with no layout overflow introduced.
- Impeccable detector and project type/lint/build/QA checks are rerun after this pass.

## Navigation audit — 29/08/2026

The primary navigation CTA was inheriting the text color and underline rules intended for text links. CSS Modules scoped the old `:not(.button)` selector, so the global `.button` class was not excluded; this produced muted text on the forest button and a stray underline on hover/mobile.

### Fix verified

- Navigation links now use an explicit `navLink` class; the product CTA uses an explicit `cta` class.
- The CTA keeps the high-contrast action treatment: ivory text on forest background, 48px minimum height, and one arrow affordance.
- Underline is reserved for the active/hover text links, uses the forest token, and is 2px for clear visibility; it never appears on the CTA or language switcher.
- Mobile menu keeps 48px rows, a clear open/close state, and a full-width product CTA without visual collisions.
- Desktop and mobile browser checks at 1440×900 and 390×844 confirmed no horizontal overflow and readable menu states.

## Story hero typography audit — 29/08/2026

The story hero lead was constrained by the shared 40rem child width. At a wide desktop viewport, that measure wrapped the final “sử dụng.” onto a short second line, creating a false visual indent and weakening the editorial rhythm.

### Fix verified

- The headline keeps its intentional two-line display treatment and remains aligned to the eyebrow and lead.
- The story lead now uses a 44rem maximum measure, allowing the full sentence to resolve to one balanced desktop line (679px rendered at 1920px).
- At 390px, the lead remains constrained by the mobile container and wraps into two balanced lines (315px / 322px), with no horizontal overflow.
- The hero's reading order and contrast remain unchanged: eyebrow → headline → supporting copy over the darkened landscape.

## Tiêu chí chấm điểm

| Tiêu chí | Trọng số | Điều kiện đạt |
| --- | ---: | --- |
| Định hướng bán hàng | 25% | Người dùng hiểu dòng sản phẩm, giá/quy cách và CTA tiếp theo trong một lượt quét |
| Phân cấp thị giác | 20% | Một tiêu đề chính, một CTA chính, khoảng thở rõ và không có vùng cạnh tranh chú ý |
| Tin cậy và nhất quán thương hiệu | 20% | Màu, chữ, ảnh, giọng điệu và thông tin hai dòng sản phẩm đồng bộ |
| Responsive và khả năng đọc | 20% | Không tràn ngang; nội dung và CTA dùng được bằng một tay ở 390 px |
| Tương tác và khả năng tiếp cận | 15% | Focus rõ, touch target tối thiểu 44 px, form có trạng thái và thông báo dễ hiểu |

## Phát hiện trước khi chỉnh

| Mức | Vấn đề | Ảnh hưởng |
| --- | --- | --- |
| Cao | Thẻ sản phẩm chỉ có một CTA xem chi tiết; giá và quy cách chìm trong danh sách | Giảm động lực đi tiếp và khó so sánh nhanh khi mua |
| Cao | Hero và các vùng sản phẩm dùng nhiều mảng phẳng, thiếu điểm neo thị giác | Cảm giác chưa đủ cao cấp, thông điệp thương hiệu bị loãng |
| Cao | Lưới thông tin trang sản phẩm có sáu dữ kiện nhưng chia bốn cột | Hàng cuối không cân bằng, nhịp đọc bị gãy |
| Trung bình | Nút menu mobile chỉ là chữ, không có tín hiệu trạng thái trực quan | Khó nhận biết menu đang mở/đóng |
| Trung bình | Form liên hệ thiếu phần giới thiệu và gợi ý nội dung | Người dùng phải tự đoán nên gửi thông tin gì |
| Trung bình | Một số liên kết đã có mũi tên trong nội dung nhưng CSS cũng thêm mũi tên | Xuất hiện mũi tên lặp và làm CTA kém tinh gọn |
| Thấp | Footer chưa có nhãn nhóm nội dung | Khó quét nhanh trên màn hình nhỏ |

## Điều chỉnh đã thực hiện

- Tạo hierarchy rõ hơn cho hero bằng gradient nền nhẹ, khoảng thở rộng, hai CTA và dải điểm nổi bật.
- Làm nổi bật giá, mã SKU và quy cách trên Product Card; thêm CTA chính “Xem sản phẩm” và CTA phụ “Tư vấn”.
- Trang chi tiết sản phẩm có giá mở đầu, nhãn bối cảnh, CTA phù hợp từng dòng và bộ dữ kiện chia ba cột cân bằng.
- Bộ chọn quy cách phản hồi giá và mã SKU đang chọn qua vùng thông báo trực tiếp.
- Chuẩn hóa button tối thiểu 48 px, focus ring, trạng thái hover/active và bố cục CTA một cột trên mobile.
- Menu mobile có biểu tượng đóng/mở, aria-label và lớp đổ bóng giúp tách khỏi nội dung phía sau.
- Form có tiêu đề, hướng dẫn ngắn, placeholder hữu ích và CTA toàn chiều rộng trên mobile.
- Footer có nhãn “Khám phá” và “Liên hệ”, giữ vùng chạm 44/48 px.
- Loại bỏ mũi tên bị lặp ở liên kết văn bản và giữ nội dung tiếng Việt dễ đọc.

## Kết quả kiểm tra kỹ thuật

- `npm run typecheck`: đạt.
- `npm run lint`: đạt.
- `npm run build`: đạt với 9 route.
- `npm run qa`: đạt, kiểm tra 7 route và 6 asset.

## Điểm còn cần theo dõi khi có dữ liệu thật

- Thay giá, kênh mua, địa chỉ và điều kiện quán bằng dữ liệu kinh doanh đã duyệt.
- Nối form vào endpoint nhận lead thật và kiểm tra thông báo thành công trên thiết bị thật.
- Kiểm tra lại font hiển thị sau khi deploy với đầy đủ dấu tiếng Việt và đo tương phản bằng công cụ accessibility.
- Bổ sung kiểm thử người dùng cho ba mục tiêu: chọn dòng, chọn quy cách và gửi yêu cầu tư vấn.
