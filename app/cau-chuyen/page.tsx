import type { Metadata } from "next";
import Image from "next/image";
import { ContactBand, Eyebrow, SectionHeader } from "@/components/ui";
import { AmbientVideo } from "@/components/ambient-video";

export const metadata: Metadata = { title: "Câu chuyện" };

export default function StoryPage() {
  return (
    <main id="main-content">
      <section className="storyIntro">
        <AmbientVideo src="/media/lamora-coffee-hills-loop.mp4" poster="/images/editorial/lamora-coffee-hills-loop-poster.png" />
        <div className="container storyIntroInner">
          <Eyebrow>Câu chuyện Lamora</Eyebrow>
          <h1>Nguyên bản từ đất lành.</h1>
          <p className="lead">Một cách kể điềm tĩnh về vùng nguyên liệu, hạt cà phê và trải nghiệm sử dụng.</p>
        </div>
      </section>
      <section className="section surfaceSection"><div className="container twoColumn"><Image src="/images/editorial/lamora-roasting-process.jpg" alt="Quá trình rang cà phê Lamora" width={1120} height={1400} /><SectionHeader eyebrow="Từ vùng trồng đến mẻ rang" title="Giữ sự rõ ràng trong từng bước." body="Lamora chọn hạt cà phê từ vùng cao nguyên Việt Nam, rang mộc theo từng mẻ và đóng gói tại Thành phố Hồ Chí Minh." /></div></section>
      <section className="section container storyHarvest">
        <div className="twoColumn">
          <Image src="/images/editorial/lamora-coffee-harvest-detail.png" alt="Cành cà phê với quả chín giữa triền đồi" width={1672} height={941} />
          <SectionHeader eyebrow="Những chi tiết làm nên hương vị" title="Nhìn kỹ hơn vào nơi câu chuyện bắt đầu." body="Cành lá, quả chín và triền đồi là những hình ảnh Lamora dùng để kể về một tách cà phê gần gũi, rõ ràng và có chủ đích." />
        </div>
      </section>
      <section className="section container">
        <SectionHeader eyebrow="Nguyên tắc Lamora" title="Một hệ thống đủ rõ để chọn, pha và dùng mỗi ngày." body="Các nguyên tắc này giúp hai dòng sản phẩm có tiếng nói chung mà vẫn giữ vai trò riêng." />
        <div className="storyValues">
          <article><span>01</span><h2>Nguyên chất</h2><p>100% cà phê nguyên chất, được trình bày minh bạch trong từng dòng sản phẩm.</p></article>
          <article><span>02</span><h2>Rang mộc</h2><p>Rang mộc nguyên bản để người dùng nhận biết rõ hương vị và điều chỉnh cách pha.</p></article>
          <article><span>03</span><h2>Vừa đủ</h2><p>Thông tin vừa đủ cho quyết định nhanh, từ quy cách dùng cho quán đến nhịp pha tại nhà.</p></article>
        </div>
      </section>
      <div className="container"><ContactBand /></div>
    </main>
  );
}
