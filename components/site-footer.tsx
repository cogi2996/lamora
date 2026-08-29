import Image from "next/image";
import Link from "next/link";
import { contact, navigation } from "@/lib/content";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <Image
            className={styles.logo}
            src="/images/brand/lamora-logo-full-on-dark.png"
            alt="Lamora Coffee — Nguyên bản từ đất lành"
            width={824}
            height={341}
          />
          <p>Ổn định cho vận hành quán, tinh tế cho những lần pha tại nhà.</p>
        </div>
        <div>
          <p className={styles.heading}>Khám phá</p>
          <nav aria-label="Điều hướng cuối trang" className={styles.links}>
            {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
        </div>
        <address className={styles.address}>
          <p className={styles.heading}>Liên hệ</p>
          <span>{contact.company}</span>
          <span>{contact.address}</span>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={`tel:${contact.phone.replaceAll(" ", "")}`}>{contact.phone}</a>
        </address>
      </div>
    </footer>
  );
}
