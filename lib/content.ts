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
  sku: readonly { code: string; weight: string; price: string; availability: string }[];
  purchaseChannels: readonly string[];
  b2bMinimum?: string;
  image: string;
  imageAlt: string;
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
      { code: "ORI-500", weight: "500 g", price: "295.000 ₫", availability: "Đang nhận đơn" },
    ],
    purchaseChannels: ["Website", "Sàn thương mại điện tử", "Zalo OA"],
    image: "/images/products/lamora-original-ori-250-front.png",
    imageAlt: "Túi cà phê hạt Lamora Original Blend 250 gam",
  },
] as const;

export const brewMethods = [
  {
    slug: "phin",
    name: "Phin",
    ratio: "20 g cà phê · 90 ml nước",
    image: "/images/editorial/lamora-brew-phin.jpg",
    imageAlt: "Cà phê được pha bằng phin Việt Nam",
  },
  {
    slug: "pour-over",
    name: "Pour over",
    ratio: "20 g cà phê · 300 ml nước",
    image: "/images/editorial/lamora-brew-pour-over.jpg",
    imageAlt: "Pha cà phê bằng phương pháp pour over",
  },
  {
    slug: "french-press",
    name: "French press",
    ratio: "20 g cà phê · 300 ml nước",
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
