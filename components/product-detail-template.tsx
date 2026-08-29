import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/content";
import { ContactBand, InfoNotice, Eyebrow, SectionHeader } from "./ui";
import { ProductSizeSelector } from "./product-size-selector";

export function ProductDetailTemplate({ product }: { product: Product }) {
  return (
    <main id="main-content" className={`productPage productPage--${product.line}`}>
      <section className={`productHero productHero--${product.line}`}>
        <div className="container productHeroGrid">
          <div className="productHeroCopy">
          <Eyebrow>{product.eyebrow}</Eyebrow>
          <h1>{product.name}</h1>
          <p className="lead">{product.description}</p>
          <p className="productHeroPrice">Từ {product.sku[0].price} <span>/ {product.sku[0].weight}</span></p>
          <div className="actions">
            <Link className="button buttonPrimary" href={`/lien-he?nhom=${product.line === "signature" ? "b2b" : "b2c"}&san-pham=${product.slug}`}>Liên hệ tư vấn</Link>
            <Link className="button buttonSecondary" href={product.line === "original" ? "/huong-dan-pha" : "/san-pham"}>{product.line === "original" ? "Xem cách pha" : "Xem các dòng khác"}</Link>
          </div>
          </div>
          <div className="productHeroMedia">
            <span className="productHeroMediaLabel">Lamora Coffee · {product.line === "signature" ? "Cho quán" : "Pha tại nhà"}</span>
            <Image className="packshot" src={product.image} alt={product.imageAlt} width={2048} height={2048} priority />
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionHeader eyebrow="Hồ sơ hương vị" title={product.flavor.join(" · ")} body={`Mức rang: ${product.roast}.`} />
        <dl className="productFacts">
          <div><dt>Dành cho</dt><dd>{product.audience}</dd></div>
          <div><dt>Dạng sản phẩm</dt><dd>Whole bean</dd></div>
          <div><dt>Quy cách</dt><dd>{product.sku.map((item) => item.weight).join(" · ")}</dd></div>
          <div><dt>Mã SKU</dt><dd>{product.sku.map((item) => item.code).join(" · ")}</dd></div>
          <div><dt>Giá</dt><dd>{product.sku.map((item) => `${item.weight}: ${item.price}`).join(" · ")}</dd></div>
          <div><dt>Tình trạng</dt><dd>{product.sku.map((item) => item.availability).join(" · ")}</dd></div>
        </dl>
        <ProductSizeSelector options={product.sku.map((item) => ({ size: item.weight, code: item.code, price: item.price }))} />
        <InfoNotice>Đặt hàng qua {product.purchaseChannels.join(", ")}. {product.b2bMinimum ? `Đơn quán bắt đầu từ ${product.b2bMinimum.toLowerCase()}.` : "Đơn tại nhà được đóng gói theo từng quy cách."}</InfoNotice>
      </section>
      <section className="section surfaceSection">
        <div className="container twoColumn">
          <Image src="/images/editorial/lamora-coffee-branch.jpg" alt="Cành cà phê trong vùng nguyên liệu" width={1120} height={1400} />
          <SectionHeader eyebrow="Nguyên bản từ đất lành" title="Một trải nghiệm rõ ràng từ sản phẩm đến cách dùng." body="Lamora chọn hạt cà phê từ vùng cao nguyên Việt Nam, rang và đóng gói tại Việt Nam để giữ trọn nét nguyên bản trong mỗi lần pha." />
        </div>
      </section>
      <div className="container"><ContactBand audience={product.line === "signature" ? "b2b" : "b2c"} /></div>
    </main>
  );
}
