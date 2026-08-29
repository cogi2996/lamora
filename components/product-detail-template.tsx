import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/content";
import { ContactBand, Eyebrow, PriceDisplay, SectionHeader } from "./ui";
import { ProductSizeSelector } from "./product-size-selector";
import { LanguageText } from "./language-provider";
import { productI18n } from "@/lib/i18n";

export function ProductDetailTemplate({ product }: { product: Product }) {
  const featuredSku = product.sku[0];
  const showSizeSection = product.line === "original";
  const copy = productI18n[product.slug];

  return (
    <main id="main-content" className={`productPage productPage--${product.line}`}>
      <section className={`productHero productHero--${product.line}`}>
        {product.line === "signature" ? <Image className="productHeroLineArt" src="/images/brand/lamora-mountain-line-art.svg" alt="" aria-hidden="true" width={1536} height={768} sizes="(max-width: 767px) 125vw, 70vw" /> : null}
        <div className="container productHeroGrid">
          <div className="productHeroCopy">
            <Eyebrow><LanguageText {...copy.eyebrow} /></Eyebrow>
            <h1>{product.name}</h1>
            <p className="lead"><LanguageText {...copy.description} /></p>
            <PriceDisplay sku={featuredSku} context="hero" />
            <div className="actions">
              <Link className="button buttonPrimary" href={`/lien-he?nhom=${product.line === "signature" ? "b2b" : "b2c"}&san-pham=${product.slug}`}><LanguageText vi="Liên hệ tư vấn" en="Get advice" /></Link>
              <Link className="button buttonSecondary" href={product.line === "original" ? "/huong-dan-pha" : "/san-pham"}><LanguageText vi={product.line === "original" ? "Xem cách pha" : "Xem các dòng khác"} en={product.line === "original" ? "See brew guide" : "See other blends"} /></Link>
            </div>
          </div>
          <div className="productHeroMedia">
            <div className="productHeroMediaCard">
              <span className="productHeroMediaLabel">Lamora Coffee · <LanguageText {...copy.featureAudience} /></span>
              <Image className="packshot" src={product.image} alt={product.imageAlt} width={2048} height={2048} sizes="(max-width: 767px) 78vw, 50vw" priority />
            </div>
          </div>
        </div>
      </section>

      <section className={`productFeature productFeature--${product.line}`}>
        <div className="container productFeatureGrid">
          <Image src={product.feature.image} alt={product.feature.imageAlt} width={1536} height={1024} sizes="(max-width: 767px) 100vw, 50vw" />
          <div className="productFeatureCopy">
            <Eyebrow><LanguageText {...copy.featureAudience} /></Eyebrow>
            <h2><LanguageText vi={product.feature.title} en={copy.featureTitle.en} /></h2>
            <p><LanguageText vi={product.feature.body} en={copy.featureBody.en} /></p>
          </div>
        </div>
      </section>

      {showSizeSection ? (
        <section className="section productDetails container">
          <SectionHeader eyebrow={<LanguageText vi="Chọn cỡ túi" en="Choose your bag" />} title={<LanguageText vi="Chọn theo nhịp thưởng thức của bạn." en="Choose the size that fits your rhythm." />} body={<LanguageText vi="Bắt đầu với túi nhỏ, hoặc chọn túi lớn cho những ngày pha thường xuyên." en="Start with a smaller bag, or choose a larger one for frequent brewing." />} />
          <ProductSizeSelector options={product.sku.map((item) => ({ size: item.weight, code: item.code, price: item.price, compareAtPrice: item.compareAtPrice, image: item.image ?? product.image, imageAlt: item.imageAlt ?? product.imageAlt }))} />
          <dl className="productFacts">
            <div><dt><LanguageText vi="Dành cho" en="For" /></dt><dd><LanguageText {...copy.audience} /></dd></div>
            <div><dt><LanguageText vi="Cỡ túi" en="Bag size" /></dt><dd>{product.sku.map((item) => item.weight).join(" · ")}</dd></div>
            <div><dt><LanguageText vi="Mã SKU" en="SKU" /></dt><dd>{product.sku.map((item) => item.code).join(" · ")}</dd></div>
          </dl>
        </section>
      ) : null}

      <div className="container"><ContactBand audience={product.line === "signature" ? "b2b" : "b2c"} /></div>
    </main>
  );
}
