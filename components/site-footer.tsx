import Image from "next/image";
import Link from "next/link";
import { contact, navigation } from "@/lib/content";
import styles from "./site-footer.module.css";
import { LanguageText } from "./language-provider";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.intro}>
          <div className={styles.brand}>
          <Image
            className={styles.logo}
            src="/images/brand/lamora-logo-full-on-dark.png"
            alt="Lamora Coffee"
            width={824}
            height={341}
          />
          <p><LanguageText vi="Ổn định cho vận hành quán, tinh tế cho những lần pha tại nhà." en="Dependable for cafés, refined for every home brew." /></p>
          </div>
          <div className={styles.signature} aria-hidden="true">L<span>·</span></div>
        </div>

        <div className={styles.grid}>
          <nav aria-label="Điều hướng cuối trang / Footer navigation">
            <p className={styles.heading}><LanguageText vi="Khám phá" en="Explore" /></p>
            <div className={styles.links}>
            {navigation.map((item) => <Link key={item.href} href={item.href}><LanguageText vi={item.label} en={item.href === "/san-pham" ? "Products" : item.href === "/cau-chuyen" ? "Our story" : item.href === "/huong-dan-pha" ? "Brew guide" : "Contact"} /></Link>)}
            </div>
          </nav>
          <address className={styles.address}>
            <p className={styles.heading}><LanguageText vi="Liên hệ" en="Contact" /></p>
            <span>{contact.company}</span>
            <span>{contact.address}</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`tel:${contact.phone.replaceAll(" ", "")}`}>{contact.phone}</a>
          </address>
        </div>
        <div className={styles.bottom}>
          <span><LanguageText vi="© 2026 Lamora Coffee" en="© 2026 Lamora Coffee" /></span>
          <span><LanguageText vi="Nguyên bản từ đất lành." en="Original coffee, grounded in place." /></span>
        </div>
      </div>
    </footer>
  );
}
