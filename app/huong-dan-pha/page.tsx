import type { Metadata } from "next";
import Image from "next/image";
import { brewMethods } from "@/lib/content";
import { InfoNotice, Eyebrow } from "@/components/ui";
import { AmbientVideo } from "@/components/ambient-video";

export const metadata: Metadata = { title: "Hướng dẫn pha" };

export default function BrewingPage() {
  return (
    <main id="main-content">
      <section className="brewIntro">
        <AmbientVideo src="/media/lamora-brewing-ritual-loop.mp4" poster="/images/editorial/lamora-brewing-ritual-loop-poster.png" />
        <div className="container brewIntroInner">
          <header className="pageIntro"><Eyebrow>Hướng dẫn pha</Eyebrow><h1>Một tỷ lệ vừa vặn, điều chỉnh theo khẩu vị.</h1><p className="lead">Ba cách pha Original Blend tại nhà.</p></header>
          <InfoNotice>Các tỷ lệ dưới đây được cân chỉnh cho từng dụng cụ. Giữ một yếu tố ổn định, nếm lại rồi điều chỉnh theo khẩu vị.</InfoNotice>
        </div>
      </section>
      <section className="container pageShell pageContent pageContent--brewing">
        <div className="brewGrid">
          {brewMethods.map((method) => <article className="brewCard" key={method.slug}><Image src={method.image} alt={method.imageAlt} width={1120} height={1400} sizes="(max-width: 767px) 82vw, 33vw" /><Eyebrow>{method.ratio}</Eyebrow><h2>{method.name}</h2><p>Giữ một yếu tố ổn định, nếm lại và điều chỉnh độ xay, nhiệt độ hoặc thời gian pha.</p></article>)}
        </div>
        <section className="brewSteps" aria-labelledby="brew-steps-title">
          <header><Eyebrow>Điều chỉnh theo khẩu vị</Eyebrow><h2 id="brew-steps-title">Một thay đổi mỗi lần.</h2><p>Giữ trải nghiệm dễ hiểu: chỉ thay một yếu tố, ghi nhận kết quả rồi nếm lại.</p></header>
          <ol>
            <li><span>01</span><div><h3>Bắt đầu từ tỷ lệ</h3><p>Dùng tỷ lệ của phương pháp bạn chọn.</p></div></li>
            <li><span>02</span><div><h3>Giữ một biến ổn định</h3><p>Chỉ thay độ xay, nhiệt độ hoặc thời gian pha trong mỗi lần thử.</p></div></li>
            <li><span>03</span><div><h3>Nếm và ghi nhận</h3><p>Ghi lại điều vừa thay đổi để tìm ra tách cà phê hợp khẩu vị.</p></div></li>
          </ol>
        </section>
      </section>
    </main>
  );
}
