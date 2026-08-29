"use client";

import { useLanguage, type Locale } from "./language-provider";
import styles from "./site-header.module.css";

function FlagIcon({ locale }: { locale: Locale }) {
  if (locale === "vi") {
    return <svg viewBox="0 0 28 18" aria-hidden="true" focusable="false"><rect width="28" height="18" rx="2" fill="#D62828" /><path fill="#FFD166" d="m14 3.2 1.25 3.82h4.02l-3.25 2.36 1.24 3.82L14 10.84l-3.26 2.36 1.24-3.82-3.25-2.36h4.02L14 3.2Z" /></svg>;
  }
  return <svg viewBox="0 0 28 18" aria-hidden="true" focusable="false"><rect width="28" height="18" rx="2" fill="#19345C" /><path stroke="#F7F2E9" strokeWidth="4" d="M2 2 26 16M26 2 2 16" /><path stroke="#C83D3D" strokeWidth="2" d="M2 2 26 16M26 2 2 16" /><path stroke="#F7F2E9" strokeWidth="6" d="M14 1v16M1 9h26" /><path stroke="#C83D3D" strokeWidth="3" d="M14 1v16M1 9h26" /></svg>;
}

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  return (
    <div className={styles.languageSwitcher} role="group" aria-label="Chọn ngôn ngữ / Choose language">
      {(["vi", "en"] as const).map((option) => (
        <button
          key={option}
          type="button"
          className={`${styles.languageOption}${locale === option ? ` ${styles["languageOption--active"]}` : ""}`}
          aria-pressed={locale === option}
          aria-label={option === "vi" ? "Tiếng Việt" : "English"}
          onClick={() => setLocale(option)}
        >
          <FlagIcon locale={option} />
          <span>{option.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
}
