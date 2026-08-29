# Lamora Coffee — Next.js skeleton

Skeleton kiến trúc được tạo từ handoff Lamora đã duyệt. Đây chưa phải bản pixel-perfect.

## Chạy local

```bash
npm install
npm run dev
```

## Kiểm tra

```bash
npm run typecheck
npm run lint
npm run build
```

## Nguyên tắc kiến trúc

- App Router, Server Component mặc định.
- Client Component chỉ dùng cho menu mobile, chọn quy cách và trạng thái form.
- Nội dung sản phẩm tập trung tại `lib/content.ts`.
- Token Figma ánh xạ trong `app/globals.css`.
- Ảnh thật nằm trong `public/images`; không dùng URL Figma tạm thời.
- Visual chuyển động nền nằm trong `public/media`: video MP4 không âm thanh, 8 giây, loop; poster tĩnh tương ứng nằm trong `public/images/editorial`.
- Bản tiếng Việt là nguồn nội dung chính; `/en` đã có trang giới thiệu tiếng Anh cơ bản.

## Ghi chú dữ liệu staging

- Dữ liệu giá, liên hệ, điều kiện B2B và kênh mua hiện là dữ liệu mẫu nhất quán cho local/staging; thay bằng dữ liệu kinh doanh chính thức trước khi public.
- Form liên hệ hiện mô phỏng phản hồi thành công ở giao diện; cần nối endpoint lưu lead và gửi email khi triển khai production.
- Logo đang dùng raster derivative; thay bằng logo vector chính thức khi nhận được bộ nhận diện production.
- Báo cáo audit UI/UX và tiêu chí chấm điểm nằm ở `UI-UX-Audit.md`.
