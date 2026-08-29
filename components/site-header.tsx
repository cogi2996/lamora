"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/lib/content";
import { LanguageText } from "./language-provider";
import { LanguageSwitcher } from "./language-switcher";
import styles from "./site-header.module.css";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <a className={styles.skipLink} href="#main-content"><LanguageText vi="Bỏ qua đến nội dung" en="Skip to content" /></a>
      <div className={`container ${styles.inner}`}>
        <Link href="/" aria-label="Lamora Coffee — Trang chủ">
          <Image
            className={styles.wordmark}
            src="/images/brand/lamora-logo-wordmark-on-light.png"
            alt="Lamora Coffee"
            width={360}
            height={91}
            priority
          />
        </Link>
        <button
          className={styles.menuButton}
          type="button"
          aria-label={open ? "Đóng điều hướng / Close navigation" : "Mở điều hướng / Open navigation"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className={styles.menuIcon} aria-hidden="true"><i /><i /></span>
          <span className={styles.menuText}>{open ? <LanguageText vi="Đóng" en="Close" /> : "Menu"}</span>
        </button>
        <nav
          id="primary-navigation"
          aria-label="Điều hướng chính"
          className={`${styles.navigation} ${open ? styles.open : ""}`}
        >
          {navigation.map((item) => (
            <Link className={styles.navLink} key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={pathname === item.href || (item.href === "/san-pham" && pathname.startsWith("/san-pham/")) ? "page" : undefined}>
              <LanguageText vi={item.label} en={item.href === "/san-pham" ? "Products" : item.href === "/cau-chuyen" ? "Our story" : item.href === "/huong-dan-pha" ? "Brew guide" : "Contact"} />
            </Link>
          ))}
          <Link className={`${styles.cta} button buttonPrimary`} href="/san-pham">
            <LanguageText vi="Khám phá sản phẩm" en="Explore coffee" />
          </Link>
          <LanguageSwitcher />
        </nav>
      </div>
      {open ? <button className={styles.menuBackdrop} type="button" tabIndex={-1} aria-label="Đóng điều hướng" onClick={() => setOpen(false)} /> : null}
    </header>
  );
}
