# 🌟 Portfolio Cá Nhân E-commerce — Chử Văn Phụng

> **Website Portfolio cá nhân chuẩn Modern Editorial / Clean Commercial** dành cho vị trí **Thực tập sinh Thương mại Điện tử (E-commerce Intern)**.

---

## 📂 Cấu Trúc Thư Mục Dự Án

```
f:\ecommerce-portfolio\
├── index.html                  # File HTML chính (toàn bộ cấu trúc giao diện)
├── assets/                     # Tài nguyên hình ảnh, CV PDF
│   ├── cv/
│   │   └── CV_ChuVanPhung.pdf  # File CV chính thức của bạn
│   └── images/
│       ├── personal/           # Ảnh chân dung, ảnh sự kiện
│       │   ├── avatar.jpg      # Ảnh avatar chính ở Hero Section
│       │   ├── event1.jpg      # Ảnh sự kiện INZONE Arena 2026
│       │   └── event2.jpg
│       └── portfolio/          # Thư mục lưu các ảnh ấn phẩm thực tế của bạn
├── src/
│   ├── data.js                 # File cấu hình dữ liệu (thông tin cá nhân, danh sách ấn phẩm)
│   ├── main.js                 # Xử lý tương tác: Lightbox, bộ lọc, menu, animation, copy email
│   └── style.css               # Hệ thống CSS Modern Editorial, responsive 100%
└── README.md                   # Hướng dẫn chi tiết
```

---

## 🚀 Cách Xem Website Trên Máy Của Bạn (Local)

### Cách 1: Mở trực tiếp (Nhanh nhất)
Chỉ cần nhấp đúp (double-click) vào file `index.html` trong thư mục `F:\ecommerce-portfolio`. Trang web sẽ mở ngay trên trình duyệt Chrome / Edge / Brave của bạn!

### Cách 2: Dùng VS Code Live Server
1. Mở thư mục `F:\ecommerce-portfolio` bằng Visual Studio Code.
2. Cài extension **Live Server**.
3. Nhấp chuột phải vào `index.html` -> chọn **Open with Live Server**.

---

## 🎨 Cách Thêm Ảnh Ấn Phẩm Thực Tế Vào Portfolio

Khi bạn có các ảnh thiết kế thực tế (banner, ảnh sản phẩm, poster...):

1. **Lưu file ảnh** vào thư mục: `assets/images/portfolio/`  
   *Ví dụ:* `assets/images/portfolio/banner-flash-sale.jpg`
2. **Mở file** `src/data.js` bằng Notepad hoặc VS Code.
3. Tìm đến item tương ứng trong mảng `portfolioItems`, đổi giá trị `src: null` thành đường dẫn ảnh:
   ```javascript
   {
     id: 1,
     title: "Bộ Banner Chiến dịch Flash Sale Shopee",
     category: "banner",
     categoryLabel: "Banner Chiến Dịch",
     src: "assets/images/portfolio/banner-flash-sale.jpg", // <--- Thêm đường dẫn ở đây
     // ...
   }
   ```
4. Lưu file và reload lại trình duyệt. Ấn phẩm sẽ tự động hiển thị ảnh thật trong cả danh sách và Lightbox phóng to!

---

## ✏️ Cách Cập Nhật Thông Tin Cá Nhân

Mở file `src/data.js`, bạn có thể sửa trực tiếp:
```javascript
const CVData = {
  name: "Chử Văn Phụng",
  email: "phungch552@gmail.com",
  phone: "0902 596 72x",      // Cập nhật số điện thoại đầy đủ của bạn
  zalo: "0902 596 72x",
  address: "Tân Phú, TP. Hồ Chí Minh",
  linkedin: "https://linkedin.com/in/cvphung03", // Link LinkedIn của bạn
};
```
Mọi thông tin trên website sẽ tự động cập nhật đồng bộ!

---

## 🌐 Hướng Dẫn Đưa Lên Mạng Miễn Phí (Deploy)

### Cách 1: Đưa lên Vercel (Khuyên dùng — Đẹp, Nhanh, Có domain .vercel.app)
1. Đăng ký tài khoản miễn phí tại [vercel.com](https://vercel.com) (đăng nhập bằng GitHub hoặc email).
2. Tải và cài đặt [Vercel CLI](https://vercel.com/download) hoặc chỉ cần đẩy code lên GitHub.
3. Hoặc vào trang quản trị Vercel Dashboard -> Bấm **Add New Project** -> Kéo thả thư mục dự án lên.
4. Nhận ngay đường link: `https://chu-van-phung-portfolio.vercel.app` để gửi cho nhà tuyển dụng!

### Cách 2: Đưa lên Netlify Drop (Không cần code, 10 giây)
1. Truy cập [app.netlify.com/drop](https://app.netlify.com/drop).
2. Kéo cả thư mục `ecommerce-portfolio` thả vào trình duyệt.
3. Netlify sẽ tự động tạo trang web với URL miễn phí (VD: `https://cvphung-ecom.netlify.app`).

### Cách 3: Đưa lên GitHub Pages
1. Tạo một repository mới trên GitHub (tên VD: `ecommerce-portfolio`).
2. Tải toàn bộ các file trong thư mục này lên GitHub repository đó.
3. Vào mục **Settings** của repository -> Chọn **Pages** (cột trái).
4. Tại mục **Build and deployment** -> Chọn nhánh `main` (hoặc `master`), thư mục `/ (root)` -> Bấm **Save**.
5. Sau 1 phút, đường link của bạn sẽ sẵn sàng tại: `https://<ten-user>.github.io/ecommerce-portfolio/`.

---

© 2026 Chử Văn Phụng · Xây dựng chuyên nghiệp cho vị trí Thực tập sinh TMĐT.
