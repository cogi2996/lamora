"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/lib/content";
import styles from "./site-header.module.css";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <a className={styles.skipLink} href="#main-content">Bỏ qua đến nội dung</a>
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
          aria-label={open ? "Đóng điều hướng" : "Mở điều hướng"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className={styles.menuIcon} aria-hidden="true"><i /><i /></span>
          <span className={styles.menuText}>{open ? "Đóng" : "Menu"}</span>
        </button>
        <nav
          id="primary-navigation"
          aria-label="Điều hướng chính"
          className={`${styles.navigation} ${open ? styles.open : ""}`}
        >
          {navigation.map((item) => (
            <Link className={styles.navLink} key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={pathname === item.href || (item.href === "/san-pham" && pathname.startsWith("/san-pham/")) ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
          <Link className={`${styles.cta} button buttonPrimary`} href="/san-pham">
            Khám phá sản phẩm
          </Link>
          <Link className={styles.language} href="/en" lang="en">EN</Link>
        </nav>
      </div>
    </header>
  );
}
