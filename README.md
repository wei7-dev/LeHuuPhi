# Lê Hữu Phi — Portfolio v2

Portfolio cá nhân của **Lê Hữu Phi**, frontend developer tại Quy Nhơn. Đây là bản thiết kế lại (v2) từ profile card cũ: mở đầu bằng ảnh chân dung và câu nói *“Biến ý tưởng thành dự án thật”*, điều hướng bằng thanh nổi dạng liquid glass ở cuối màn hình, và hỗ trợ chuyển đổi **Tiếng Việt / English** ngay trên trang.

- **GitHub Pages:** https://wei7-dev.github.io/card-profile/
- **Bản v1 lưu trữ:** [`v1/index.html`](v1/index.html) — giữ nguyên để so sánh, không phải bản đang phát triển.

## Điểm chính

- Bố cục dành cho nhà tuyển dụng: giới thiệu → kỹ năng dùng hằng ngày → dự án nổi bật/dự án khác → kinh nghiệm → liên hệ.
- Hero có avatar, câu quote lớn, trạng thái đang tìm cơ hội và các thông tin nhanh (Quy Nhơn, sinh năm 2007, sinh viên).
- Thanh điều hướng nổi dạng liquid glass ở cuối màn hình; tab chỉ sáng khi đã vào đúng section (ở hero không có tab nào sáng). Dock tự ẩn khi cuộn xuống và hiện lại khi cuộn lên.
- Song ngữ **VI / EN** không cần build: đổi ngay trên dock, lưu lựa chọn vào `localStorage` (`portfolio-lang`) và hỗ trợ đường dẫn `?lang=en`.
- Light/dark theme, mặc định là light; lựa chọn được lưu trong `localStorage` (`portfolio-theme`).
- Kỹ năng chia thành 4 nhóm: **Frontend** (HTML, CSS, JavaScript), **Backend** (Java, Python), **Database** (Firebase, Supabase, MongoDB) và **công cụ khác** (Git/GitHub, REST API, Figma).
- 2 dự án nổi bật (**HRM System**, **Honda Showroom**) và 2 dự án khác (**Honda Admin**, **Profile Card v1**); phần dự án chỉ dùng tên, mô tả và link, không dùng ảnh chụp.
- Liên hệ gồm email, điện thoại, địa chỉ Quy Nhơn – Bình Định – Việt Nam, thời gian phản hồi 48 giờ và các icon GitHub / Facebook / Zalo gọn trong danh sách.
- Phần **Kinh nghiệm** cố ý để trống vì hiện chưa có kinh nghiệm làm việc thật; nội dung sẽ được cập nhật ở v3.
- Reveal animation, copy email, giờ Việt Nam, skip link, focus-visible và alt text; tôn trọng `prefers-reduced-motion`.
- Không framework, không bước build — HTML/CSS/JS thuần, deploy trực tiếp lên GitHub Pages.

## Cấu trúc

```text
.
├── index.html              # Trang portfolio v2
├── index.css               # Design tokens, layout, dock, responsive, animation
├── index.js                # Song ngữ, theme, active nav, copy email, giờ Việt Nam
├── assets/
│   ├── avatar.jpg          # Ảnh minh hoạ dùng trong hero
│   ├── school.png          # Logo trường
│   ├── favicon.svg
│   └── og-cover.jpg        # Ảnh chia sẻ mạng xã hội (1200 × 630)
├── v1/                     # Bản profile card cũ, giữ nguyên để so sánh
└── README.md
```

Các file ảnh gốc của v1 (`ava.png`, `dien-thoai.png`, `mail.png`, …) vẫn được giữ ở thư mục gốc vì `v1/` dùng lại chúng qua đường dẫn `../`.

## Chạy local

Dùng một static server bất kỳ (khuyến nghị để clipboard và font hoạt động đúng):

```bash
python -m http.server 8000
```

Mở `http://localhost:8000/`. Có thể dùng **Live Server** trong VS Code. Không cần cài dependency hay chạy build.

## Ngôn ngữ và giao diện

- Mặc định trang hiển thị **Tiếng Việt**. Bấm **EN** trên dock để chuyển sang tiếng Anh; bấm **VI** để quay lại.
- Có thể mở trực tiếp bằng `?lang=en`, ví dụ `http://localhost:8000/?lang=en`.
- Lựa chọn ngôn ngữ được lưu ở `localStorage` với key `portfolio-lang`.
- Theme mặc định là light. Nút đổi theme nằm ở góc trên bên phải hero; lựa chọn lưu ở key `portfolio-theme`.

## Chỉnh sửa nội dung

- **Thông tin, dự án, link liên hệ:** sửa trực tiếp trong `index.html`.
- **Bản dịch VI/EN:** sửa object `translations` ở đầu `index.js`. Các phần tử trên trang dùng `data-i18n`, `data-i18n-aria-label`, `data-i18n-alt` để nhận nội dung tương ứng.
- **Màu sắc, font, khoảng cách, layout:** sửa design tokens ở đầu `index.css` (mục `01. TOKENS`) và các media query ở mục `15. RESPONSIVE`.
- **Hành vi:** `index.js` gồm song ngữ, theme, active nav theo vị trí cuộn, ẩn/hiện dock, copy email và giờ Việt Nam.
- **Meta chia sẻ:** `canonical`, `og:url` và `og:image` đang trỏ tới `https://wei7-dev.github.io/card-profile/`. Nếu đổi tên miền, cập nhật lại các URL tuyệt đối này.

## Dự án

### Nổi bật

| Dự án | Live | Mã nguồn | Ghi chú |
| --- | --- | --- | --- |
| HRM System | [Xem](https://wei7-dev.github.io/hrm-system/) | [GitHub](https://github.com/wei7-dev/hrm-system) | Quản lý nhân sự, chấm công, Firebase |
| Honda Showroom | [Xem](https://wei7-dev.github.io/honda-dashboard/honda-model/index.html) | [GitHub](https://github.com/wei7-dev/honda-dashboard) | Showroom xe máy, bộ lọc sản phẩm |

### Khác

| Dự án | Live | Ghi chú |
| --- | --- | --- |
| Honda Admin | [Demo](https://wei7-dev.github.io/honda-dashboard/admin-dashboard/index.html) | Dashboard quản trị; tài khoản demo `admin` / `admin123` |
| Profile Card v1 | [`v1/index.html`](v1/index.html) | Bản đầu tiên của trang CV này |

## Deploy lên GitHub Pages

1. Commit và push thay đổi lên nhánh `main`.
2. Vào **Settings → Pages** của repo `wei7-dev/card-profile`.
3. Chọn **Deploy from a branch** → `main` → `/ (root)`.
4. Bản v2 ở `/`; bản cũ ở `/v1/`.

Toàn bộ đường dẫn trong site là đường dẫn tương đối, nên site vẫn chạy đúng khi deploy dưới subpath của GitHub Pages.

## Liên hệ

- Email: [lp5378411@gmail.com](mailto:lp5378411@gmail.com)
- Điện thoại: [+84 387 614 187](tel:+84387614187)
- GitHub: [@wei7-dev](https://github.com/wei7-dev)
- Facebook: [/wei.077](https://www.facebook.com/wei.077)
- Zalo: [0387 614 187](https://zalo.me/0387614187)
