import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Product } from "@/lib/content";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <header className="sectionHeader">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </header>
  );
}

export function InfoNotice({ children, tone = "info" }: { children: ReactNode; tone?: "info" | "success" }) {
  return <p className={`infoNotice infoNotice--${tone}`} role="note">{children}</p>;
}

export function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  return (
    <article className={`productCard productCard--${product.line}${compact ? " productCard--compact" : ""}`}>
      <div className="productCardImage">
        <span className="productCardLine">{product.line === "signature" ? "Signature series" : "Original series"}</span>
        <Image src={product.image} alt={product.imageAlt} width={2048} height={2048} sizes="(max-width: 767px) 80vw, 40vw" />
      </div>
      <div className="productCardBody">
        <Eyebrow>{product.audience}</Eyebrow>
        <h3>{product.name}</h3>
        <p>{compact ? product.description.split(",")[0] + "." : product.description}</p>
        <p className="productCardFlavor">{product.flavor.join(" · ")}</p>
        <p className="meta">{product.roast}</p>
        {compact ? (
          <p className="productCardPrice"><strong>Từ {product.sku[0].price}</strong><span> / {product.sku[0].weight}{product.sku.length > 1 ? ` · ${product.sku.length} quy cách` : ""}</span></p>
        ) : (
          <>
            <ul className="skuList" aria-label="Quy cách sản phẩm">
              {product.sku.map((sku) => <li key={sku.code}><span><strong>{sku.weight}</strong><small>{sku.code}</small></span><b>{sku.price}</b></li>)}
            </ul>
            <p className="meta">Có thể đặt qua {product.purchaseChannels.join(" · ")}</p>
            {product.b2bMinimum ? <p className="meta">Điều kiện quán: {product.b2bMinimum}.</p> : null}
          </>
        )}
        <div className="productCardActions">
          <Link className="button buttonPrimary" href={`/san-pham/${product.slug}`}>Xem sản phẩm</Link>
          <Link className="textLink" href={`/lien-he?nhom=${product.line === "signature" ? "b2b" : "b2c"}`}>Tư vấn</Link>
        </div>
      </div>
    </article>
  );
}

export function TrustStrip() {
  const items = [
    ["01", "100% cà phê nguyên chất", "Thông tin sản phẩm rõ ràng cho từng dòng."],
    ["02", "Rang mộc nguyên bản", "Giữ trải nghiệm nhất quán từ hạt đến tách."],
    ["03", "Chọn theo nhịp dùng", "Quy cách cho quán và những lần pha tại nhà."],
  ];
  return <section className="trustStrip" aria-label="Điểm nổi bật của Lamora"><div className="container trustGrid">{items.map(([index, title, body]) => <article key={index} className="trustItem"><span>{index}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></section>;
}

export function ContactBand({ audience = "general" }: { audience?: "b2b" | "b2c" | "general" }) {
  const copy = audience === "b2b"
    ? ["Dành cho quán", "Bắt đầu từ nhu cầu vận hành thực tế.", "Nhận tư vấn"]
    : audience === "b2c"
      ? ["Pha tại nhà", "Chọn quy cách phù hợp với nhịp pha của bạn.", "Tìm kênh mua"]
      : ["Kết nối với Lamora", "Bạn đang chọn cho quán hay cho những lần pha tại nhà?", "Liên hệ Lamora"];
  return (
    <section className="contactBand">
      <div><Eyebrow>{copy[0]}</Eyebrow><h2>{copy[1]}</h2></div>
      <Link className="button buttonPrimary" href={`/lien-he${audience === "general" ? "" : `?nhom=${audience}`}`}>{copy[2]}</Link>
    </section>
  );
}
