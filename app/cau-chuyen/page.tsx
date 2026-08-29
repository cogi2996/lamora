import type { Metadata } from "next";
import Image from "next/image";
import { ContactBand, Eyebrow, SectionHeader } from "@/components/ui";
import { AmbientVideo } from "@/components/ambient-video";
import { LanguageText } from "@/components/language-provider";

export const metadata: Metadata = { title: "Câu chuyện" };

export default function StoryPage() {
  return (
    <main id="main-content">
      <section className="storyIntro">
        <AmbientVideo src="/media/lamora-coffee-hills-loop.mp4" poster="/images/editorial/lamora-coffee-hills-loop-poster.png" />
        <div className="container storyIntroInner">
          <Eyebrow><LanguageText vi="Câu chuyện Lamora" en="The Lamora story" /></Eyebrow>
          <h1><LanguageText vi="Nguyên bản từ đất lành." en="From good soil, honestly." /></h1>
          <p className="lead"><LanguageText vi="Một cách kể điềm tĩnh về vùng nguyên liệu, hạt cà phê và trải nghiệm sử dụng." en="A quiet story of origin, coffee beans and the rituals around them." /></p>
        </div>
      </section>
      <section className="section surfaceSection"><div className="container twoColumn"><Image src="/images/editorial/lamora-roasting-process.jpg" alt="Quá trình rang cà phê Lamora / Lamora coffee roasting process" width={1120} height={1400} sizes="(max-width: 767px) 100vw, 50vw" /><SectionHeader eyebrow={<LanguageText vi="Từ vùng trồng đến mẻ rang" en="From origin to roast" />} title={<LanguageText vi="Giữ sự rõ ràng trong từng bước." en="Keep every step clear." />} body={<LanguageText vi="Lamora chọn hạt cà phê từ vùng cao nguyên Việt Nam, rang mộc theo từng mẻ và đóng gói tại Thành phố Hồ Chí Minh." en="Lamora selects beans from Vietnam's highlands, naturally roasts each batch and packs them in Ho Chi Minh City." />} /></div></section>
      <section className="section container storyHarvest">
        <div className="twoColumn">
          <Image src="/images/editorial/lamora-coffee-harvest-detail.png" alt="Cành cà phê với quả chín giữa triền đồi / Coffee branch with ripe cherries" width={1672} height={941} sizes="(max-width: 767px) 100vw, 50vw" />
          <SectionHeader eyebrow={<LanguageText vi="Những chi tiết làm nên hương vị" en="The details behind the flavour" />} title={<LanguageText vi="Nhìn kỹ hơn vào nơi câu chuyện bắt đầu." en="Look closer at where the story begins." />} body={<LanguageText vi="Cành lá, quả chín và triền đồi là những hình ảnh Lamora dùng để kể về một tách cà phê gần gũi, rõ ràng và có chủ đích." en="Branches, ripe cherries and hillsides tell Lamora's story of a cup that feels close, clear and intentional." />} />
        </div>
      </section>
      <section className="section container">
        <SectionHeader eyebrow={<LanguageText vi="Nguyên tắc Lamora" en="Lamora principles" />} title={<LanguageText vi="Một hệ thống đủ rõ để chọn, pha và dùng mỗi ngày." en="A clear system for choosing, brewing and enjoying every day." />} body={<LanguageText vi="Các nguyên tắc này giúp hai dòng sản phẩm có tiếng nói chung mà vẫn giữ vai trò riêng." en="These principles give both coffee lines a shared voice while keeping their own role." />} />
        <div className="storyValues">
          <article><span>01</span><h2><LanguageText vi="Nguyên chất" en="Pure" /></h2><p><LanguageText vi="100% cà phê nguyên chất, được trình bày minh bạch trong từng dòng sản phẩm." en="100% pure coffee, presented transparently in every product line." /></p></article>
          <article><span>02</span><h2><LanguageText vi="Rang mộc" en="Natural roast" /></h2><p><LanguageText vi="Rang mộc nguyên bản để người dùng nhận biết rõ hương vị và điều chỉnh cách pha." en="Naturally roasted so you can taste the profile clearly and tune your brew." /></p></article>
          <article><span>03</span><h2><LanguageText vi="Vừa đủ" en="Just enough" /></h2><p><LanguageText vi="Thông tin vừa đủ cho quyết định nhanh, từ cỡ túi cho quán đến nhịp pha tại nhà." en="Just enough information for a quick decision, from café bags to home rituals." /></p></article>
        </div>
      </section>
      <div className="container"><ContactBand /></div>
    </main>
  );
}
