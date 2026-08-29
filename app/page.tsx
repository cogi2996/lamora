import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/content";
import { ContactBand, Eyebrow, ProductCard, SectionHeader, TrustStrip } from "@/components/ui";

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="homeHero">
        <Image className="heroLineArt" src="/images/brand/lamora-mountain-line-art.svg" alt="" aria-hidden="true" width={720} height={220} sizes="(max-width: 767px) 80vw, 54vw" />
        <div className="container homeHeroGrid">
          <div>
            <Eyebrow>Lamora Coffee · Nguyên bản từ đất lành</Eyebrow>
            <h1>Một hành trình, hai cách thưởng thức.</h1>
            <p className="lead">Ổn định cho vận hành quán. Tinh tế cho những lần pha tại nhà.</p>
            <div className="actions">
              <Link className="button buttonPrimary" href="/san-pham/signature-blend">Khám phá cho quán</Link>
              <Link className="button buttonSecondary" href="/san-pham/original-blend">Khám phá tại nhà</Link>
            </div>
            <div className="heroProof" aria-label="Điểm nổi bật">
              <span>100% cà phê nguyên chất</span>
              <span>Rang mộc tại Việt Nam</span>
            </div>
          </div>
          <Image className="heroImage" src="/images/editorial/lamora-origin-landscape.jpg" alt="Phong cảnh vùng trồng cà phê Lamora" width={1536} height={1024} sizes="(max-width: 767px) 100vw, 50vw" priority />
        </div>
      </section>
      <TrustStrip />
      <section className="section container">
        <SectionHeader eyebrow="Hai dòng sản phẩm" title="Chọn theo nhu cầu của bạn." body="Mỗi dòng có vai trò rõ ràng trong cùng một hệ thống Lamora." />
        <div className="productGrid">{products.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
      </section>
      <section className="section surfaceSection">
        <div className="container twoColumn">
          <Image src="/images/editorial/lamora-home-brewing-ritual.jpg" alt="Nghi thức pha cà phê tại nhà" width={1536} height={1024} sizes="(max-width: 767px) 100vw, 50vw" />
          <div><SectionHeader eyebrow="Từ hạt đến tách" title="Bắt đầu bằng một tỷ lệ, rồi điều chỉnh theo khẩu vị." body="Khám phá ba phương pháp pha dành cho Original Blend." /><Link className="textLink" href="/huong-dan-pha">Xem hướng dẫn pha</Link></div>
        </div>
      </section>
      <div className="container"><ContactBand /></div>
    </main>
  );
}
