# Lamora Coffee — Audit UI/UX frontend

Ngày audit: 28/08/2026  
Phạm vi: các route bán hàng tiếng Việt, trang tiếng Anh, desktop và mobile.

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
