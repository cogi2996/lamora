import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/content";
import { ContactBand, Eyebrow, ProductCard, SectionHeader, TrustStrip } from "@/components/ui";
import { AmbientVideo } from "@/components/ambient-video";
import { LanguageText } from "@/components/language-provider";

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="homeHero">
        <Image className="heroLineArt" src="/images/brand/lamora-mountain-line-art.svg" alt="" aria-hidden="true" width={720} height={220} sizes="(max-width: 767px) 80vw, 54vw" />
        <div className="container homeHeroGrid">
          <div>
            <Eyebrow><LanguageText vi="Lamora Coffee · Nguyên bản từ đất lành" en="Lamora Coffee · From good soil" /></Eyebrow>
            <h1><LanguageText vi="Một hành trình, hai cách thưởng thức." en="One journey, two ways to enjoy." /></h1>
            <p className="lead"><LanguageText vi="Ổn định cho vận hành quán. Tinh tế cho những lần pha tại nhà." en="Dependable for cafés. Refined for every home brew." /></p>
            <div className="actions">
              <Link className="button buttonPrimary" href="/san-pham/signature-blend"><LanguageText vi="Khám phá cho quán" en="Explore for cafés" /></Link>
              <Link className="button buttonSecondary" href="/san-pham/original-blend"><LanguageText vi="Khám phá tại nhà" en="Explore for home" /></Link>
            </div>
            <div className="heroProof" aria-label="Điểm nổi bật / Highlights">
              <span><LanguageText vi="100% cà phê nguyên chất" en="100% pure coffee" /></span>
              <span><LanguageText vi="Rang mộc tại Việt Nam" en="Naturally roasted in Vietnam" /></span>
            </div>
          </div>
          <Image className="heroImage" src="/images/editorial/lamora-origin-landscape.jpg" alt="Phong cảnh vùng trồng cà phê Lamora" width={1536} height={1024} sizes="(max-width: 767px) 100vw, 50vw" priority />
        </div>
      </section>
      <TrustStrip />
      <section className="section container">
        <SectionHeader eyebrow={<LanguageText vi="Hai dòng sản phẩm" en="Two coffee lines" />} title={<LanguageText vi="Chọn theo nhu cầu của bạn." en="Choose what fits your needs." />} body={<LanguageText vi="Mỗi dòng có vai trò rõ ràng trong cùng một hệ thống Lamora." en="Each line has a clear role in the Lamora system." />} />
        <div className="productGrid">{products.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
      </section>
      <section className="section packagingSection" aria-labelledby="packaging-title">
        <div className="container packagingLayout">
          <div className="packagingCopy">
            <Eyebrow><LanguageText vi="Thiết kế bao bì Lamora" en="Lamora packaging design" /></Eyebrow>
            <h2 id="packaging-title"><LanguageText vi="Rõ ràng từ mặt trước đến từng nếp gấp." en="Clear from the front to every fold." /></h2>
            <p><LanguageText vi="Xem nhanh hai dòng Signature Blend và Original Blend qua mặt trước, mặt sau và các mặt bên của túi." en="See both Signature Blend and Original Blend from the front, back and side panels." /></p>
            <Link className="button buttonPrimary" href="/san-pham"><LanguageText vi="Khám phá hai dòng cà phê" en="Explore both coffee lines" /></Link>
          </div>
          <figure className="packagingFigure">
            <Image
              src="/images/editorial/lamora-packaging-specification.png"
              alt="Bản mô tả bao bì Lamora với các mặt của Signature Blend và Original Blend"
              width={1280}
              height={720}
              sizes="(max-width: 767px) 100vw, 64vw"
            />
            <figcaption><LanguageText vi="Hai dòng, hai nhịp dùng — nhận diện rõ ngay từ lần chọn đầu tiên." en="Two lines, two rhythms — easy to recognise from the first choice." /></figcaption>
          </figure>
        </div>
      </section>
      <section className="section homeOriginSection" aria-labelledby="origin-title">
        <div className="container homeOriginLayout">
          <div className="homeOriginMedia" aria-hidden="true">
            <AmbientVideo src="/media/lamora-coffee-branch-loop.mp4" poster="/images/editorial/lamora-coffee-branch-loop-poster.png" />
          </div>
          <SectionHeader
            eyebrow={<LanguageText vi="Nơi câu chuyện bắt đầu" en="Where the story begins" />}
            title={<LanguageText vi="Nhìn gần hơn vào cành cà phê." en="A closer look at the coffee branch." />}
            body={<LanguageText vi="Từ cành lá và quả chín đến hạt được rang mộc, mỗi bước giữ lại một phần rõ ràng của vùng nguyên liệu." en="From leafy branches and ripe cherries to naturally roasted beans, every step keeps the origin in view." />}
            id="origin-title"
          />
        </div>
      </section>
      <section className="section surfaceSection">
        <div className="container twoColumn">
          <Image src="/images/editorial/lamora-home-brewing-ritual.jpg" alt="Nghi thức pha cà phê tại nhà / Home coffee brewing ritual" width={1536} height={1024} sizes="(max-width: 767px) 100vw, 50vw" />
          <div><SectionHeader eyebrow={<LanguageText vi="Từ hạt đến tách" en="From bean to cup" />} title={<LanguageText vi="Bắt đầu bằng một tỷ lệ, rồi điều chỉnh theo khẩu vị." en="Start with a ratio, then tune to taste." />} body={<LanguageText vi="Khám phá ba phương pháp pha dành cho Original Blend." en="Explore three brew methods for Original Blend." />} /><Link className="textLink" href="/huong-dan-pha"><LanguageText vi="Xem hướng dẫn pha" en="See the brew guide" /></Link></div>
        </div>
      </section>
      <div className="container"><ContactBand /></div>
    </main>
  );
}
