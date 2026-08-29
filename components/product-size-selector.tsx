"use client";

import { useState } from "react";
import Image from "next/image";
import { MotionConfig, motion } from "motion/react";
import { LanguageText, useLanguage } from "./language-provider";
import { formatPrice, getPriceSummary } from "@/lib/pricing";

type SizeOption = { size: string; code: string; price: string; compareAtPrice?: string; image?: string; imageAlt?: string };

export function ProductSizeSelector({ options }: { options: readonly SizeOption[] }) {
  const { locale } = useLanguage();
  const [selected, setSelected] = useState(options[0]?.size ?? "");
  const selectedOption = options.find((option) => option.size === selected) ?? options[0];
  return (
    <MotionConfig reducedMotion="user">
      <fieldset className="sizeSelector">
        <legend><LanguageText vi="Chọn cỡ túi" en="Choose your bag" /></legend>
        <div className="sizeSelectorGrid">
          {options.map((option) => (
            <motion.button
              key={option.code}
              type="button"
              aria-pressed={selected === option.size}
              onClick={() => setSelected(option.size)}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              {option.image ? <Image className="sizeSelectorImage" src={option.image} alt={option.imageAlt ?? ""} width={420} height={420} /> : null}
              {selected === option.size ? <motion.span className="sizeSelectorIndicator" layoutId="size-selector-indicator" aria-hidden="true" /> : null}
              <span className="sizeSelectorLabel"><small><LanguageText vi="Cỡ túi" en="Bag size" /></small>{option.size}{(() => {
                const summary = getPriceSummary(option);
                return <span className="sizeSelectorPrice"><strong>{formatPrice(summary.price, locale)}</strong>{summary.hasSale ? <del>{formatPrice(summary.compareAtPrice ?? 0, locale)}</del> : null}</span>;
              })()}</span>
            </motion.button>
          ))}
        </div>
        {selectedOption ? <p className="sizeSelectorSummary" aria-live="polite"><LanguageText vi="Giá đang chọn" en="Selected price" /><strong>{formatPrice(getPriceSummary(selectedOption).price, locale)}</strong></p> : null}
      </fieldset>
    </MotionConfig>
  );
}
