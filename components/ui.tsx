import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Product } from "@/lib/content";
import { LanguageText } from "./language-provider";
import { lineName, productI18n } from "@/lib/i18n";
import { getPriceSummary } from "@/lib/pricing";
import { LocalizedPrice, PriceDisplay } from "./price-display";

export { PriceDisplay } from "./price-display";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionHeader({ eyebrow, title, body, id }: { eyebrow: ReactNode; title: ReactNode; body?: ReactNode; id?: string }) {
  return (
    <header className="sectionHeader">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id}>{title}</h2>
      {body ? <p>{body}</p> : null}
    </header>
  );
}

export function InfoNotice({ children, tone = "info" }: { children: ReactNode; tone?: "info" | "success" }) {
  return <p className={`infoNotice infoNotice--${tone}`} role="note">{children}</p>;
}

export function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  const featuredSku = product.sku[0];
  const copy = productI18n[product.slug];

  return (
    <article className={`productCard productCard--${product.line}${compact ? " productCard--compact" : ""}`}>
      <div className="productCardImage">
        <span className="productCardLine"><LanguageText {...lineName(product.line)} /></span>
        <Image src={product.image} alt={product.imageAlt} width={2048} height={2048} sizes="(max-width: 767px) 80vw, 40vw" />
      </div>
      <div className="productCardBody">
        <Eyebrow><LanguageText {...copy.audience} /></Eyebrow>
        <h3>{product.name}</h3>
        <p>{compact ? <LanguageText vi={`${product.description.split(",")[0]}.`} en={`${copy.description.en.split(",")[0]}.`} /> : <LanguageText {...copy.description} />}</p>
        {compact ? (
          <PriceDisplay sku={featuredSku} />
        ) : (
          <>
            <ul className="skuList" aria-label="Các cỡ túi sản phẩm / Available bag sizes">
              {product.sku.map((sku) => {
                const summary = getPriceSummary(sku);
                return <li key={sku.code}><span><strong>{sku.weight}</strong><small>{sku.code}</small></span><span className="skuPrice"><b><LocalizedPrice value={summary.price} /></b>{summary.hasSale ? <del><LocalizedPrice value={summary.compareAtPrice ?? 0} /></del> : null}</span></li>;
              })}
            </ul>
          </>
        )}
        <div className="productCardActions">
          <Link className="button buttonPrimary" href={`/san-pham/${product.slug}`}><LanguageText vi="Xem sản phẩm" en="View product" /></Link>
          <Link className="textLink" href={`/lien-he?nhom=${product.line === "signature" ? "b2b" : "b2c"}`}><LanguageText vi="Tư vấn" en="Talk to us" /></Link>
        </div>
      </div>
    </article>
  );
}

export function TrustStrip() {
  const items = [
    ["01", "100% cà phê nguyên chất", "Thông tin sản phẩm rõ ràng cho từng dòng.", "100% pure coffee", "Clear product information for every line."],
    ["02", "Rang mộc nguyên bản", "Giữ trải nghiệm nhất quán từ hạt đến tách.", "Naturally roasted", "A consistent experience from bean to cup."],
    ["03", "Chọn theo nhịp dùng", "Cỡ túi cho quán và những lần pha tại nhà.", "Choose your rhythm", "Bag sizes for cafés and home brewing."],
  ];
  return <section className="trustStrip" aria-label="Điểm nổi bật của Lamora"><div className="container trustGrid">{items.map(([index, title, body, titleEn, bodyEn]) => <article key={index} className="trustItem"><span>{index}</span><div><h3><LanguageText vi={title} en={titleEn} /></h3><p><LanguageText vi={body} en={bodyEn} /></p></div></article>)}</div></section>;
}

export function ContactBand({ audience = "general" }: { audience?: "b2b" | "b2c" | "general" }) {
  const copy = audience === "b2b"
    ? ["Dành cho quán", "Bắt đầu từ nhu cầu vận hành thực tế.", "Nhận tư vấn", "For cafés", "Start with your real service needs.", "Get advice"]
    : audience === "b2c"
      ? ["Pha tại nhà", "Chọn cỡ túi phù hợp với nhịp pha của bạn.", "Tìm kênh mua", "Home brewing", "Choose a bag size for your brewing rhythm.", "Find a retailer"]
      : ["Kết nối với Lamora", "Bạn đang chọn cho quán hay cho những lần pha tại nhà?", "Liên hệ Lamora", "Connect with Lamora", "Choosing for a café or for home brewing?", "Contact Lamora"];
  return (
    <section className="contactBand">
      <div><Eyebrow><LanguageText vi={copy[0]} en={copy[3]} /></Eyebrow><h2><LanguageText vi={copy[1]} en={copy[4]} /></h2></div>
      <Link className="button buttonPrimary" href={`/lien-he${audience === "general" ? "" : `?nhom=${audience}`}`}><LanguageText vi={copy[2]} en={copy[5]} /></Link>
    </section>
  );
}
