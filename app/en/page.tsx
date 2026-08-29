import Link from "next/link";
import { InfoNotice, Eyebrow } from "@/components/ui";

export default function EnglishPage() {
  return (
    <main id="main-content" className="container pageShell narrow"><Eyebrow>Lamora Coffee · English</Eyebrow><h1>One origin, two ways to enjoy.</h1><p className="lead">Thoughtfully roasted Vietnamese coffee for cafés and home brewers.</p><InfoNotice>Choose a line to explore café service or your daily ritual.</InfoNotice><div className="actions"><Link className="button buttonPrimary" href="/san-pham/signature-blend">For cafés</Link><Link className="button buttonSecondary" href="/san-pham/original-blend">For home brewing</Link></div><p><Link className="textLink" href="/">Read the Vietnamese edition</Link></p></main>
  );
}
