// ============================================================
// DATA.JS — Dữ liệu Portfolio: Chử Văn Phụng
// Ứng viên Thực tập sinh Thương mại Điện tử (E-commerce Intern)
// ============================================================

const CVData = {
  name: "Chử Văn Phụng",
  role: "Ứng viên Thực tập sinh Thương mại Điện tử",
  subRole: "Cử nhân Quản trị Kinh doanh — Đại học Tài chính - Marketing (UFM)",
  email: "phungchu552@gmail.com",
  phone: "0902 596 732",
  zalo: "0902 596 732",
  address: "Tân Phú, TP. Hồ Chí Minh",
  linkedin: "https://www.linkedin.com/in/cvphung03",
  cvPdfPath: "assets/cv/CV_ChuVanPhung.pdf",
};

// ============================================================
// PORTFOLIO ITEMS (ẤN PHẨM THỰC TẾ & DỰ ÁN TMĐT)
// Phân loại: product (Ảnh Sàn TMĐT 1:1), social (Banner & Social), case-study (Case Study & Video)
// ============================================================
const portfolioItems = [
  // ── ITEM 0: Hệ thống Excel CRM & Tối ưu Tỷ lệ Khách Quay Lại ──
  {
    id: "excel-crm",
    category: "ops",
    categoryLabel: "Vận hành & Thực tế",
    tag: "Excel CRM · Operations Tracker",
    metric: "Retention 30% · SLA ≤ 15p",
    title: "Hệ thống Excel CRM Quản lý Hạn dùng & Tối ưu Tỷ lệ Quay lại (30%)",
    image: "assets/images/real/excel-crm-dashboard.png",
    src: "assets/images/real/excel-crm-dashboard.png",
    gallery: [
      { label: "Dashboard KPI & Biểu đồ", src: "assets/images/real/excel-crm-dashboard.png" },
      { label: "Sổ CRM & Cảnh báo Gia hạn", src: "assets/images/real/excel-crm-tracker.png" },
    ],
    downloadUrl: "assets/docs/CRM_QuanLyKhachHang_ChuVanPhung.xlsx",
    gradient: "gradient-1",
    tagline: "5 SKU Dịch vụ số · Tự động hóa cảnh báo gia hạn",
    goal: "Xây dựng hệ thống theo dõi vòng đời khách hàng cho 5 gói dịch vụ số (ChatGPT Plus, Gemini Pro 3 Tháng/1 Năm, Canva Pro, Duolingo Super), tự động hóa cảnh báo hết hạn để giữ chân khách cũ vượt mục tiêu 15%.",
    tools: "Microsoft Excel (INDEX/MATCH, COUNTIF, Conditional Formatting, Data Validation, Charts)",
    ecom: "Vận dụng tư duy quản lý dữ liệu và theo dõi tiến độ (SLA bảo hành ≤ 15 phút, nhắc lịch 3 điểm chạm trước hạn 5 ngày), giúp đạt tỷ lệ khách quay lại thực tế 30% và kiểm soát chặt biên lợi nhuận từng SKU.",
  },

  // ── ITEM A: Bộ 4 Ảnh Listing Shopee Chuẩn SEO ──
  {
    id: 0,
    category: "product",
    categoryLabel: "Ảnh Sàn TMĐT (1:1)",
    tag: "Bộ 4 Ảnh Listing Shopee · 1:1",
    metric: "Listing Shopee 12.12",
    title: "Bộ 4 Ảnh Sản Phẩm Chuẩn SEO Shopee — Cathy Doll & Vitara SE",
    image: "assets/images/portfolio/cathy-doll-1-hero.webp",
    src: "assets/images/portfolio/cathy-doll-1-hero.webp",
    rawImage: "assets/images/portfolio/raw-cathy-doll.jpg",
    rawSrc: "assets/images/portfolio/raw-cathy-doll.jpg",
    gallery: [
      { label: "1. Ảnh Bìa Sale 12.12", src: "assets/images/portfolio/cathy-doll-1-hero.webp" },
      { label: "2. Công Dụng", src: "assets/images/portfolio/cathy-doll-2-congdung.webp" },
      { label: "3. Hướng Dẫn", src: "assets/images/portfolio/cathy-doll-3-hdsd.webp" },
      { label: "4. Cam Kết Shop", src: "assets/images/portfolio/cathy-doll-4-camket.webp" },
    ],
    gradient: "gradient-1",
    tagline: "Nhung ThaiLand Order · Tối ưu SEO 12.12",
    goal: "Thiết kế trọn bộ 4 ảnh vuông 1:1 đồng bộ cho trang sản phẩm Shopee: khung Hero khuyến mãi 12.12 (chừa trống góc dưới trái tránh nhãn sàn), Infographic 3 công dụng, Hướng dẫn sử dụng 3 bước và Cam kết đóng gói 3 lớp giúp tăng tỷ lệ nhấp (CTR) và chuyển đổi (CR).",
    tools: "AI Image Generation (Prompt Engineering), Canva, Photoshop",
    ecom: "Tối ưu trang sản phẩm (Product Listing) trên Shopee & TikTok Shop, đồng bộ nhận diện combo chăm sóc da body.",
  },

  // ── ITEM B: Banner Ngang Trang Trí Gian Hàng Shopee ──
  {
    id: 1,
    category: "social",
    categoryLabel: "Banner & Social",
    tag: "Banner Gian Hàng · 16:9",
    metric: "Banner Gian Hàng 16:9",
    title: "Banner Trang Trí Gian Hàng Chiến Dịch — BOYA FinScent",
    image: "assets/images/portfolio/boya-banner-shop.jpg",
    src: "assets/images/portfolio/boya-banner-shop.jpg",
    rawImage: "assets/images/portfolio/raw-boya.jpg",
    rawSrc: "assets/images/portfolio/raw-boya.jpg",
    isBanner: true,
    gradient: "gradient-2",
    tagline: "Shop Decoration · Outpainting 3D Visual",
    goal: "Mở rộng bố cục Key Visual 3D thành banner ngang 16:9 chuẩn trang trí trang chủ gian hàng Shopee trong các chiến dịch Mega Sale, làm nổi bật ưu đãi giảm 30% + Voucher 20K và nút kêu gọi hành động (CTA).",
    tools: "AI Image Generation (Outpainting & Prompt Engineering), Canva",
    ecom: "Trang trí giao diện gian hàng (Shop Decoration), banner chương trình khuyến mãi định kỳ trên sàn TMĐT.",
  },

  // ── ITEM 2: Pantene Miracle Collagen ──
  {
    id: 2,
    category: "product",
    categoryLabel: "Ảnh Sàn TMĐT (1:1)",
    tag: "Ảnh Studio 1:1",
    metric: "Listing Thumbnail CTR+",
    title: "Serum Phục Hồi Tóc Pantene Miracle Collagen — Concept Studio Bục Đá",
    image: "assets/images/portfolio/result/1.png",
    src: "assets/images/portfolio/result/1.png",
    rawImage: "assets/images/portfolio/raw/image_7e18c4.jpg",
    rawSrc: "assets/images/portfolio/raw/image_7e18c4.jpg",
    gradient: "gradient-3",
    tagline: "Tách nền · Ánh sáng Studio · Tôn vinh nhãn chai",
    goal: "Biến ảnh chụp cầm tay bọc nilon ngoài chợ đêm thành ảnh chụp studio chuẩn thương hiệu quốc tế với bục trưng bày tối giản, ánh sáng vàng ấm làm nổi bật các hạt dưỡng chất Pro-V Collagen.",
    tools: "AI Commercial Photos · Prompt Engineering · Photoshop CS",
    ecom: "Tối ưu hóa ảnh đại diện sản phẩm ngành Hóa mỹ phẩm trên Shopee Mall / TikTok Shop, tăng tỷ lệ nhấp vào gian hàng khi người dùng tìm kiếm từ khóa 'serum dưỡng tóc'.",
  },

  // ── ITEM 3: BOYA FinScent 1:1 ──
  {
    id: 3,
    category: "product",
    categoryLabel: "Ảnh Sàn TMĐT (1:1)",
    tag: "Ảnh Studio 1:1",
    metric: "Shopee Carousel 1:1",
    title: "Bộ 3 Sữa Tắm Nước Hoa BOYA FinScent — Concept Trời Xanh & Hoa Pha Lê",
    image: "assets/images/portfolio/result/3.png",
    src: "assets/images/portfolio/result/3.png",
    rawImage: "assets/images/portfolio/raw/5e377713-d324-4a21-a4e0-98cd513f23f6.jpg",
    rawSrc: "assets/images/portfolio/raw/5e377713-d324-4a21-a4e0-98cd513f23f6.jpg",
    gradient: "gradient-4",
    tagline: "Boya Care · Visual mùa hè tươi mát",
    goal: "Khắc phục góc chụp thô trên nắp thùng carton tại kho hàng. Dựng bối cảnh 3 biến thể sản phẩm lơ lửng trong không gian trời xanh cùng các chi tiết hoa pha lê trong suốt tượng trưng cho hương thơm lan tỏa.",
    tools: "AI Prompt Engineering · Lighting Reflection Setup · Photoshop",
    ecom: "Hình ảnh hoàn hảo cho chiến dịch Mega Sale mùa hè trên sàn TMĐT — kích thích khách hàng mua cả combo 3 mùi hương thay vì chỉ mua lẻ 1 chai.",
  },

  // ── ITEM 4: Joji Banana Cream ──
  {
    id: 4,
    category: "product",
    categoryLabel: "Ảnh Sàn TMĐT (1:1)",
    tag: "Ảnh Studio 1:1",
    metric: "Visual Kích Thích Mua",
    title: "Kem Trị Nứt Gót Joji Banana Cream — Motion Chuối Lơ Lửng",
    image: "assets/images/portfolio/result/4.png",
    src: "assets/images/portfolio/result/4.png",
    rawImage: "assets/images/portfolio/raw/image_b65c21.png",
    rawSrc: "assets/images/portfolio/raw/image_b65c21.png",
    gradient: "gradient-5",
    tagline: "Action Shot · Giọt kem & Lát chuối chuyển động",
    goal: "Nâng cấp từ ảnh tĩnh đơn điệu thành bức ảnh chụp chuyển động (dynamic product shot) tràn đầy năng lượng với các lát chuối tươi và giọt dưỡng chất bay trong không gian ánh sáng vàng ấm.",
    tools: "AI Prompt Engineering · Composition Tuning · Canva",
    ecom: "Thu hút sự chú ý tức thì trên Feed TikTok Shop và banner danh mục Chăm sóc cá nhân Shopee, truyền tải trực giác thành phần chiết xuất từ chuối tự nhiên.",
  },

  // ── ITEM 5: Yummy Cheese Powder ──
  {
    id: 5,
    category: "product",
    categoryLabel: "Ảnh Sàn TMĐT (1:1)",
    tag: "Ảnh F&B 1:1",
    metric: "Listing Food & Beverage",
    title: "Bột Lắc Phô Mai Yummy Cheese Powder — Bối Cảnh F&B Hấp Dẫn",
    image: "assets/images/portfolio/result/5.png",
    src: "assets/images/portfolio/result/5.png",
    rawImage: "assets/images/portfolio/raw/image_b6e6ea.png",
    rawSrc: "assets/images/portfolio/raw/image_b6e6ea.png",
    gradient: "gradient-6",
    tagline: "Gợi mở vị giác · Bột phô mai & Khoai tây chiên",
    goal: "Bao bì sản phẩm khi đặt riêng rất khô khan. Thiết kế bối cảnh hoàn chỉnh gồm đĩa khoai tây chiên phủ xốt phô mai béo ngậy, khối phô mai tươi và lớp bột gia vị rắc tự nhiên quanh gói sản phẩm.",
    tools: "AI Generation · Styling Ẩm thực · Photoshop",
    ecom: "Khai thác tâm lý 'thấy ngon là mua' của khách hàng ngành Bách Hóa Online trên Shopee/Lazada, tăng tỷ lệ bỏ vào giỏ hàng (Add to Cart).",
  },

  // ── ITEM 6: Măng Cụt Sấy Giòn Palida ──
  {
    id: 6,
    category: "social",
    categoryLabel: "Banner & Social",
    tag: "Lifestyle Commerce",
    metric: "Lifestyle Commerce",
    title: "Măng Cụt Sấy Giòn Palida — Bối Cảnh Dã Ngoại (Picnic Lifestyle)",
    image: "assets/images/portfolio/result/6.png",
    src: "assets/images/portfolio/result/6.png",
    rawImage: "assets/images/portfolio/raw/image_b7c7ed.jpg",
    rawSrc: "assets/images/portfolio/raw/image_b7c7ed.jpg",
    gradient: "gradient-1",
    tagline: "Khăn trải picnic · Trà trái cây · Trái tươi & Múi sấy",
    goal: "Kết hợp bao bì sản phẩm chụp tại chợ với đĩa măng cụt sấy thành một bức ảnh phong cách sống (lifestyle) thư giãn ngoài trời, tôn vinh chất lượng đồ ăn vặt healthy cao cấp.",
    tools: "AI Composite · Concept Dã ngoại · Photoshop",
    ecom: "Phù hợp đăng bài Fanpage, Instagram và làm ảnh mô tả chi tiết sản phẩm kể câu chuyện thương hiệu (brand storytelling) trong gian hàng.",
  },

  // ── ITEM 7: Dép Quai Ngang Neon Style ──
  {
    id: 7,
    category: "social",
    categoryLabel: "Banner & Social",
    tag: "Thời Trang Gen Z",
    metric: "Lookbook Gen Z",
    title: "Dép Quai Ngang Neon Style — Lookbook Thời Trang Trẻ Trung",
    image: "assets/images/portfolio/result/7.png",
    src: "assets/images/portfolio/result/7.png",
    rawImage: "assets/images/portfolio/raw/dd135027-a4b5-46b0-8fe2-e5081f499253.jpg",
    rawSrc: "assets/images/portfolio/raw/dd135027-a4b5-46b0-8fe2-e5081f499253.jpg",
    gradient: "gradient-2",
    tagline: "Phong cách Studio · Tông màu Lime Green nổi bật",
    goal: "Ứng dụng dáng pose thời trang ấn tượng từ ảnh mẫu tham khảo, chuyển đổi thành ấn phẩm quảng bá mẫu dép quai ngang màu xanh chanh năng động phù hợp thị hiếu giới trẻ.",
    tools: "AI Re-imagining · Color Grading · Style Transfer",
    ecom: "Dùng cho gian hàng Thời trang phụ kiện trên TikTok Shop / Shopee Style, tối ưu hóa hiển thị trong các bộ sưu tập theo mùa.",
  },
];
