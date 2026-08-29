export type ProductLine = "signature" | "original";

export type Product = {
  slug: "signature-blend" | "original-blend";
  name: string;
  line: ProductLine;
  audience: string;
  eyebrow: string;
  description: string;
  flavor: readonly string[];
  roast: string;
  sku: readonly { code: string; weight: string; price: string; compareAtPrice?: string; availability: string; image?: string; imageAlt?: string }[];
  purchaseChannels: readonly string[];
  b2bMinimum?: string;
  image: string;
  imageAlt: string;
  feature: {
    image: string;
    imageAlt: string;
    title: string;
    body: string;
  };
  highlights: readonly { label: string; value: string; body: string }[];
  profile: {
    title: string;
    body: string;
  };
};

export const navigation = [
  { href: "/san-pham", label: "Sản phẩm" },
  { href: "/cau-chuyen", label: "Câu chuyện" },
  { href: "/huong-dan-pha", label: "Hướng dẫn pha" },
  { href: "/lien-he", label: "Liên hệ" },
] as const;

export const products: readonly Product[] = [
  {
    slug: "signature-blend",
    name: "Signature Blend",
    line: "signature",
    audience: "Dành cho quán cà phê",
    eyebrow: "Whole Bean · Espresso Blend",
    description:
      "Một blend rõ vị, ổn định cho vận hành quán, với nốt chocolate đậm, hạt và hậu vị êm.",
    flavor: ["Dark chocolate", "Nutty", "Smooth"],
    roast: "Medium–dark roast",
    sku: [{ code: "SIG-1000", weight: "1.000 g", price: "420.000 ₫", availability: "Đang nhận đơn" }],
    purchaseChannels: ["Tư vấn trực tiếp", "Đặt hàng cho quán"],
    b2bMinimum: "Từ 10 túi mỗi tháng",
    image: "/images/products/lamora-signature-sig-1000-front.png",
    imageAlt: "Túi cà phê hạt Lamora Signature Blend 1.000 gam",
    feature: {
      image: "/images/editorial/lamora-cafe-espresso-workflow.jpg",
      imageAlt: "Barista đang chuẩn bị espresso trong quán cà phê",
      title: "Một profile rõ để xây dựng menu.",
      body: "Nốt chocolate đậm, hạt và hậu vị êm giúp quán giữ một trải nghiệm nhất quán qua từng ca pha.",
    },
    highlights: [
      { label: "Hương vị", value: "Ổn định", body: "Dark chocolate · Nutty · Smooth" },
      { label: "Mức rang", value: "Medium–dark", body: "Đậm vừa, dễ cân chỉnh" },
      { label: "Dạng hạt", value: "Whole bean", body: "Xay theo công thức của quán" },
      { label: "Quy cách", value: "1.000 g", body: "Phù hợp nhịp vận hành" },
    ],
    profile: {
      title: "Đậm vừa đủ. Mượt trong từng lớp vị.",
      body: "Dark chocolate mở đầu, nốt hạt theo sau và hậu vị êm giúp tách cà phê giữ được độ rõ khi kết hợp cùng sữa hoặc uống đen.",
    },
  },
  {
    slug: "original-blend",
    name: "Original Blend",
    line: "original",
    audience: "Dành cho người pha tại nhà",
    eyebrow: "Whole Bean · Home Brewing",
    description:
      "Một trải nghiệm nhẹ và cân bằng, phù hợp để bắt đầu với phin, pour over hoặc French press.",
    flavor: ["Light chocolate", "Floral", "Balanced"],
    roast: "Medium roast",
    sku: [
      { code: "ORI-250", weight: "250 g", price: "165.000 ₫", availability: "Đang nhận đơn" },
      { code: "ORI-500", weight: "500 g", price: "295.000 ₫", availability: "Đang nhận đơn", image: "/images/products/lamora-original-ori-500-front-mvp.png", imageAlt: "Túi cà phê hạt Lamora Original Blend 500 gam" },
    ],
    purchaseChannels: ["Website", "Sàn thương mại điện tử", "Zalo OA"],
    image: "/images/products/lamora-original-ori-250-front.png",
    imageAlt: "Túi cà phê hạt Lamora Original Blend 250 gam",
    feature: {
      image: "/images/editorial/lamora-home-brewing-ritual.jpg",
      imageAlt: "Cà phê được pha tại nhà trong không gian sáng",
      title: "Khoảng thời gian dành cho một ly cà phê cân bằng.",
      body: "Một blend nhẹ và cân bằng để bạn thong thả pha phin, pour over hoặc French press theo nhịp riêng.",
    },
    highlights: [
      { label: "Hương vị", value: "Cân bằng", body: "Light chocolate · Floral · Balanced" },
      { label: "Mức rang", value: "Medium", body: "Sáng vị, dễ làm quen" },
      { label: "Dạng hạt", value: "Whole bean", body: "Linh hoạt cho nhiều cách pha" },
      { label: "Quy cách", value: "250 g / 500 g", body: "Chọn theo tần suất pha" },
    ],
    profile: {
      title: "Nhẹ nhàng mở vị. Cân bằng để thưởng thức mỗi ngày.",
      body: "Light chocolate và floral tạo nên một tách sáng vị, cân bằng và dễ điều chỉnh cho cả lần pha đầu tiên lẫn thói quen hằng ngày.",
    },
  },
] as const;

export const brewMethods = [
  {
    slug: "phin",
    name: "Phin",
    ratio: "20 g cà phê · 90 ml nước",
    note: "Giữ tỷ lệ ổn định, sau đó chỉnh độ xay hoặc thời gian chiết xuất.",
    image: "/images/editorial/lamora-brew-phin.jpg",
    imageAlt: "Cà phê được pha bằng phin Việt Nam",
  },
  {
    slug: "pour-over",
    name: "Pour over",
    ratio: "20 g cà phê · 300 ml nước",
    note: "Rót đều tay, nếm lại rồi chỉnh độ xay hoặc nhiệt độ theo khẩu vị.",
    image: "/images/editorial/lamora-brew-pour-over.jpg",
    imageAlt: "Pha cà phê bằng phương pháp pour over",
  },
  {
    slug: "french-press",
    name: "French press",
    ratio: "20 g cà phê · 300 ml nước",
    note: "Giữ thời gian ngâm ổn định, rồi điều chỉnh độ xay cho tách cà phê tròn vị.",
    image: "/images/editorial/lamora-brew-french-press.jpg",
    imageAlt: "Cà phê được pha bằng bình French press",
  },
] as const;

export const contact = {
  company: "Công ty TNHH Lamora Coffee",
  address: "18 Nguyễn Văn Trỗi, Phường 15, Quận Phú Nhuận, Thành phố Hồ Chí Minh",
  city: "Thành phố Hồ Chí Minh",
  email: "hello@lamoracoffee.vn",
  phone: "028 7300 2688",
  leadRecipient: "Bộ phận Tư vấn Lamora",
  hours: "Thứ Hai – Thứ Sáu, 08:30 – 17:30",
} as const;

export function getProduct(slug: Product["slug"]) {
  return products.find((product) => product.slug === slug);
}
