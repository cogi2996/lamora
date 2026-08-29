import type { Metadata } from "next";
import Image from "next/image";
import { brewMethods } from "@/lib/content";
import { InfoNotice, Eyebrow } from "@/components/ui";
import { AmbientVideo } from "@/components/ambient-video";
import { LanguageText } from "@/components/language-provider";
import { brewI18n } from "@/lib/i18n";

export const metadata: Metadata = { title: "Hướng dẫn pha" };

export default function BrewingPage() {
  return (
    <main id="main-content">
      <section className="brewIntro">
        <AmbientVideo src="/media/lamora-brewing-ritual-loop.mp4" poster="/images/editorial/lamora-brewing-ritual-loop-poster.png" />
        <div className="container brewIntroInner">
          <header className="pageIntro"><Eyebrow><LanguageText vi="Hướng dẫn pha" en="Brew guide" /></Eyebrow><h1><LanguageText vi="Một tỷ lệ vừa vặn, điều chỉnh theo khẩu vị." en="A considered ratio, tuned to taste." /></h1><p className="lead"><LanguageText vi="Ba cách pha Original Blend tại nhà." en="Three ways to brew Original Blend at home." /></p></header>
          <InfoNotice><LanguageText vi="Tỷ lệ đã được cân chỉnh cho từng dụng cụ. Giữ một yếu tố ổn định, nếm lại rồi điều chỉnh theo khẩu vị." en="Each ratio is a starting point for its brewer. Keep one variable steady, taste, then tune to your preference." /></InfoNotice>
        </div>
      </section>
      <section className="container pageShell pageContent pageContent--brewing">
        <div className="brewGrid" aria-label="Các phương pháp pha / Brew methods">
          {brewMethods.map((method, index) => (
            <article className="brewCard" key={method.slug}>
              <div className="brewCardMedia">
                <Image src={method.image} alt={brewI18n[method.slug].alt.vi} width={1120} height={1400} sizes="(max-width: 767px) 86vw, 33vw" />
                <span className="brewCardIndex" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="brewCardBody">
                <div className="brewCardHeading">
                  <span className="brewCardKicker"><LanguageText vi="Phương pháp pha" en="Brew method" /></span>
                  <h2><LanguageText {...brewI18n[method.slug].name} /></h2>
                </div>
                <p><LanguageText {...brewI18n[method.slug].note} /></p>
                <div className="brewCardMeta">
                  <span><LanguageText vi="Tỷ lệ khởi điểm" en="Starting ratio" /></span>
                  <strong><LanguageText {...brewI18n[method.slug].ratio} /></strong>
                </div>
              </div>
            </article>
          ))}
        </div>
        <section className="brewSteps" aria-labelledby="brew-steps-title">
          <header><Eyebrow><LanguageText vi="Điều chỉnh theo khẩu vị" en="Tune to taste" /></Eyebrow><h2 id="brew-steps-title"><LanguageText vi="Một thay đổi mỗi lần." en="One change at a time." /></h2><p><LanguageText vi="Giữ trải nghiệm dễ hiểu: chỉ thay một yếu tố, ghi nhận kết quả rồi nếm lại." en="Keep it simple: change one variable, note the result, then taste again." /></p></header>
          <ol>
            <li><span>01</span><div><h3><LanguageText vi="Bắt đầu từ tỷ lệ" en="Start with the ratio" /></h3><p><LanguageText vi="Dùng tỷ lệ của phương pháp bạn chọn." en="Use the ratio for your chosen method." /></p></div></li>
            <li><span>02</span><div><h3><LanguageText vi="Giữ một biến ổn định" en="Hold one variable steady" /></h3><p><LanguageText vi="Chỉ thay độ xay, nhiệt độ hoặc thời gian pha trong mỗi lần thử." en="Change only grind size, temperature or brew time in each trial." /></p></div></li>
            <li><span>03</span><div><h3><LanguageText vi="Nếm và ghi nhận" en="Taste and note" /></h3><p><LanguageText vi="Ghi lại điều vừa thay đổi để tìm ra tách cà phê hợp khẩu vị." en="Note what changed to find the cup that suits you." /></p></div></li>
          </ol>
        </section>
      </section>
    </main>
  );
}
