import type { ProductLine } from "./content";

export const productI18n: Record<string, {
  audience: { vi: string; en: string };
  eyebrow: { vi: string; en: string };
  description: { vi: string; en: string };
  featureAudience: { vi: string; en: string };
  featureTitle: { vi: string; en: string };
  featureBody: { vi: string; en: string };
}> = {
  "signature-blend": {
    audience: { vi: "Dành cho quán cà phê", en: "For cafés" },
    eyebrow: { vi: "Whole Bean · Espresso Blend", en: "Whole Bean · Espresso Blend" },
    description: { vi: "Một blend rõ vị, ổn định cho vận hành quán, với nốt chocolate đậm, hạt và hậu vị êm.", en: "A clear, dependable blend for café service, with dark chocolate, nutty notes and a smooth finish." },
    featureAudience: { vi: "Cho quán", en: "For cafés" },
    featureTitle: { vi: "Một profile rõ để xây dựng menu.", en: "A clear profile for your menu." },
    featureBody: { vi: "Nốt chocolate đậm, hạt và hậu vị êm giúp quán giữ một trải nghiệm nhất quán qua từng ca pha.", en: "Dark chocolate, nutty notes and a smooth finish help your café keep every shot consistent." },
  },
  "original-blend": {
    audience: { vi: "Dành cho người pha tại nhà", en: "For home brewers" },
    eyebrow: { vi: "Whole Bean · Home Brewing", en: "Whole Bean · Home Brewing" },
    description: { vi: "Một trải nghiệm nhẹ và cân bằng, phù hợp để bắt đầu với phin, pour over hoặc French press.", en: "A light, balanced experience to begin with a phin, pour-over or French press." },
    featureAudience: { vi: "Pha tại nhà", en: "Home brewing" },
    featureTitle: { vi: "Khoảng thời gian dành cho một ly cà phê cân bằng.", en: "A little time for a balanced cup." },
    featureBody: { vi: "Một blend nhẹ và cân bằng để bạn thong thả pha phin, pour over hoặc French press theo nhịp riêng.", en: "A light, balanced blend for a relaxed phin, pour-over or French press ritual at your own pace." },
  },
};

export const lineName = (line: ProductLine) => line === "signature"
  ? { vi: "Signature series", en: "Signature series" }
  : { vi: "Original series", en: "Original series" };

export const brewI18n: Record<string, { name: { vi: string; en: string }; ratio: { vi: string; en: string }; note: { vi: string; en: string }; alt: { vi: string; en: string } }> = {
  phin: {
    name: { vi: "Phin", en: "Vietnamese phin" },
    ratio: { vi: "20 g cà phê · 90 ml nước", en: "20 g coffee · 90 ml water" },
    note: { vi: "Giữ tỷ lệ ổn định, sau đó chỉnh độ xay hoặc thời gian chiết xuất.", en: "Keep the ratio steady, then adjust grind size or brew time." },
    alt: { vi: "Cà phê được pha bằng phin Việt Nam", en: "Coffee brewed with a Vietnamese phin" },
  },
  "pour-over": {
    name: { vi: "Pour over", en: "Pour over" },
    ratio: { vi: "20 g cà phê · 300 ml nước", en: "20 g coffee · 300 ml water" },
    note: { vi: "Rót đều tay, nếm lại rồi chỉnh độ xay hoặc nhiệt độ theo khẩu vị.", en: "Pour evenly, taste, then adjust grind size or water temperature." },
    alt: { vi: "Pha cà phê bằng phương pháp pour over", en: "Coffee brewed with a pour-over dripper" },
  },
  "french-press": {
    name: { vi: "French press", en: "French press" },
    ratio: { vi: "20 g cà phê · 300 ml nước", en: "20 g coffee · 300 ml water" },
    note: { vi: "Giữ thời gian ngâm ổn định, rồi điều chỉnh độ xay cho tách cà phê tròn vị.", en: "Keep steep time steady, then adjust grind size for a rounder cup." },
    alt: { vi: "Cà phê được pha bằng bình French press", en: "Coffee brewed in a French press" },
  },
};
