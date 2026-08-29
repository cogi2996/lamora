type PriceSource = {
  price: string;
  compareAtPrice?: string;
};

export type PriceLocale = "vi" | "en";

// Display-only rate snapshot; refresh with the commercial owner before publishing.
export const USD_TO_VND_RATE = 26070;

export type PriceSummary = {
  price: number;
  compareAtPrice: number | null;
  savings: number;
  savingsPercent: number;
  hasSale: boolean;
};

function parseVnd(value: string) {
  const amount = Number(value.replace(/[^\d]/g, ""));
  return Number.isFinite(amount) ? amount : 0;
}

export function formatPrice(value: number, locale: PriceLocale = "vi") {
  if (locale === "en") {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", currencyDisplay: "symbol", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value / USD_TO_VND_RATE);
  }

  return `${new Intl.NumberFormat("vi-VN", { maximumFractionDigits: 0 }).format(value)} ₫`;
}

export const formatVnd = formatPrice;

export function getPriceSummary(source: PriceSource): PriceSummary {
  const price = parseVnd(source.price);
  const compareAtPrice = source.compareAtPrice ? parseVnd(source.compareAtPrice) : null;
  const hasSale = Boolean(compareAtPrice && compareAtPrice > price);
  const savings = hasSale && compareAtPrice ? compareAtPrice - price : 0;
  const savingsPercent = hasSale && compareAtPrice ? Math.round((savings / compareAtPrice) * 100) : 0;

  return {
    price,
    compareAtPrice: hasSale ? compareAtPrice : null,
    savings,
    savingsPercent,
    hasSale,
  };
}
