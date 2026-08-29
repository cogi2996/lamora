"use client";

import type { Product } from "@/lib/content";
import { formatPrice, getPriceSummary } from "@/lib/pricing";
import { LanguageText, useLanguage } from "./language-provider";

export function LocalizedPrice({ value }: { value: number }) {
  const { locale } = useLanguage();
  return <>{formatPrice(value, locale)}</>;
}

export function PriceDisplay({ sku, context = "card" }: { sku: Product["sku"][number]; context?: "card" | "hero" }) {
  const { locale } = useLanguage();
  const summary = getPriceSummary(sku);
  const price = formatPrice(summary.price, locale);
  const compareAtPrice = summary.compareAtPrice ? formatPrice(summary.compareAtPrice, locale) : null;
  const savings = formatPrice(summary.savings, locale);
  const ariaLabel = locale === "en"
    ? `Sale price ${price}${compareAtPrice ? `, regular price ${compareAtPrice}, save ${summary.savingsPercent}%` : ""}`
    : `Giá bán ${price}${compareAtPrice ? `, giá niêm yết ${compareAtPrice}, tiết kiệm ${summary.savingsPercent}%` : ""}`;

  return (
    <div className={`${context === "hero" ? "productHeroPrice" : "productCardPrice"}${summary.hasSale ? " priceDisplay--sale" : ""}`} aria-label={ariaLabel}>
      <span className={context === "hero" ? undefined : "productCardPriceLabel"}><LanguageText vi={summary.hasSale ? "Giá ưu đãi" : "Giá từ"} en={summary.hasSale ? "Offer price" : "From"} /></span>
      <strong>{price}</strong>
      {compareAtPrice ? <del aria-label={locale === "en" ? `Regular price ${compareAtPrice}` : `Giá niêm yết ${compareAtPrice}`}>{compareAtPrice}</del> : null}
      {summary.hasSale ? <span className={context === "hero" ? "productHeroSavings" : "productCardSavings"}><LanguageText vi={`Tiết kiệm ${savings} · ${summary.savingsPercent}%`} en={`Save ${savings} · ${summary.savingsPercent}%`} /></span> : null}
    </div>
  );
}
