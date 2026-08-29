import Link from "next/link";
import { InfoNotice, Eyebrow } from "@/components/ui";
import { LanguageText } from "@/components/language-provider";

export default function EnglishPage() {
  return (
    <main id="main-content" className="container pageShell narrow"><Eyebrow><LanguageText vi="Lamora Coffee · Tiếng Anh" en="Lamora Coffee · English" /></Eyebrow><h1><LanguageText vi="Một nguồn gốc, hai cách thưởng thức." en="One origin, two ways to enjoy." /></h1><p className="lead"><LanguageText vi="Cà phê Việt Nam rang mộc cho quán và người pha tại nhà." en="Thoughtfully roasted Vietnamese coffee for cafés and home brewers." /></p><InfoNotice><LanguageText vi="Chọn một dòng để khám phá cho quán hoặc nghi thức pha hằng ngày." en="Choose a line to explore café service or your daily ritual." /></InfoNotice><div className="actions"><Link className="button buttonPrimary" href="/san-pham/signature-blend"><LanguageText vi="Dành cho quán" en="For cafés" /></Link><Link className="button buttonSecondary" href="/san-pham/original-blend"><LanguageText vi="Pha tại nhà" en="For home brewing" /></Link></div><p><Link className="textLink" href="/"><LanguageText vi="Về bản tiếng Việt" en="Read the Vietnamese edition" /></Link></p></main>
  );
}
