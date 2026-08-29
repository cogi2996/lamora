import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/content";
import { ContactBand, Eyebrow, InfoNotice, SectionHeader } from "./ui";
import { ProductSizeSelector } from "./product-size-selector";

export function ProductDetailTemplate({ product }: { product: Product }) {
  const featuredSku = product.sku[0];
  const hasSalePrice = Boolean(featuredSku.compareAtPrice && featuredSku.compareAtPrice !== featuredSku.price);

  return (
    <main id="main-content" className={`productPage productPage--${product.line}`}>
      <section className={`productHero productHero--${product.line}`}>
        <div className="container productHeroGrid">
          <div className="productHeroCopy">
            <Eyebrow>{product.eyebrow}</Eyebrow>
            <h1>{product.name}</h1>
            <p className="lead">{product.description}</p>
            <ul className="productHeroTags" aria-label="Đặc tính sản phẩm">
              {product.flavor.map((item) => <li key={item}>{item}</li>)}
              <li>{product.roast}</li>
            </ul>
            <div className={`productHeroPrice${hasSalePrice ? " productHeroPrice--sale" : ""}`}>
              <span>Giá từ</span>
              <strong>{featuredSku.price}</strong>
              {hasSalePrice ? <del>{featuredSku.compareAtPrice}</del> : null}
            </div>
            <div className="actions">
              <Link className="button buttonPrimary" href={`/lien-he?nhom=${product.line === "signature" ? "b2b" : "b2c"}&san-pham=${product.slug}`}>Liên hệ tư vấn</Link>
              <Link className="button buttonSecondary" href={product.line === "original" ? "/huong-dan-pha" : "/san-pham"}>{product.line === "original" ? "Xem cách pha" : "Xem các dòng khác"}</Link>
            </div>
          </div>
          <div className="productHeroMedia">
            <div className="productHeroMediaCard">
              <span className="productHeroMediaLabel">Lamora Coffee · {product.line === "signature" ? "Cho quán" : "Pha tại nhà"}</span>
              <Image className="packshot" src={product.image} alt={product.imageAlt} width={2048} height={2048} sizes="(max-width: 767px) 78vw, 50vw" priority />
              <div className="productHeroMediaMeta"><span>{featuredSku.code}</span><span>{featuredSku.weight} · Whole bean</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className={`productFeature productFeature--${product.line}`}>
        <div className="container productFeatureGrid">
          <Image src={product.feature.image} alt={product.feature.imageAlt} width={1536} height={1024} sizes="(max-width: 767px) 100vw, 50vw" />
          <div className="productFeatureCopy">
            <Eyebrow>{product.line === "signature" ? "Cho quán" : "Pha tại nhà"}</Eyebrow>
            <h2>{product.feature.title}</h2>
            <p>{product.feature.body}</p>
          </div>
        </div>
      </section>

      <section className="section productHighlights">
        <div className="container">
          <SectionHeader eyebrow="Điểm chính" title={product.line === "signature" ? "Một blend rõ vị, sẵn sàng cho quầy pha chế." : "Nhẹ nhàng mở vị cho những lần pha cân bằng."} body="Những thông tin cốt lõi để bạn chọn đúng dòng và bắt đầu nhanh hơn." />
          <div className="productHighlightsGrid">
            {product.highlights.map((item) => (
              <article key={item.label} className="productHighlight">
                <span>{item.label}</span>
                <h3>{item.value}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`section productProfile productProfile--${product.line}`}>
        <div className="container productProfileGrid">
          <div>
            <Eyebrow>Flavor profile</Eyebrow>
            <h2>{product.profile.title}</h2>
            <p>{product.profile.body}</p>
          </div>
          <dl className="productProfileFacts">
            <div><dt>Hương vị</dt><dd>{product.flavor.join(" · ")}</dd></div>
            <div><dt>Mức rang</dt><dd>{product.roast}</dd></div>
            <div><dt>Dạng hạt</dt><dd>Whole bean</dd></div>
          </dl>
        </div>
      </section>

      <section className="section productDetails container">
        <SectionHeader eyebrow="Chọn quy cách" title={product.line === "original" ? "Chọn theo nhịp thưởng thức của bạn." : "Quy cách phù hợp cho nhịp vận hành."} body={product.line === "original" ? "Bắt đầu với túi nhỏ, hoặc chọn quy cách lớn cho những ngày pha thường xuyên." : "Một quy cách gọn cho quầy pha chế cần sự ổn định mỗi ngày."} />
        <ProductSizeSelector options={product.sku.map((item) => ({ size: item.weight, code: item.code, price: item.price, image: item.image ?? product.image, imageAlt: item.imageAlt ?? product.imageAlt }))} />
        <dl className="productFacts">
          <div><dt>Dành cho</dt><dd>{product.audience}</dd></div>
          <div><dt>Dạng sản phẩm</dt><dd>Whole bean</dd></div>
          <div><dt>Quy cách</dt><dd>{product.sku.map((item) => item.weight).join(" · ")}</dd></div>
          <div><dt>Mã SKU</dt><dd>{product.sku.map((item) => item.code).join(" · ")}</dd></div>
          <div><dt>Tình trạng</dt><dd>{product.sku.map((item) => item.availability).join(" · ")}</dd></div>
          <div><dt>Kênh mua</dt><dd>{product.purchaseChannels.join(" · ")}</dd></div>
        </dl>
        <InfoNotice>Đặt hàng qua {product.purchaseChannels.join(", ")}. {product.b2bMinimum ? `Đơn quán: ${product.b2bMinimum.toLowerCase()}.` : "Đơn tại nhà được đóng gói theo từng quy cách."}</InfoNotice>
      </section>

      <div className="container"><ContactBand audience={product.line === "signature" ? "b2b" : "b2c"} /></div>
    </main>
  );
}
