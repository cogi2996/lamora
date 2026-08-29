"use client";

import { useState } from "react";
import Image from "next/image";
import { MotionConfig, motion } from "motion/react";

type SizeOption = { size: string; code: string; price: string; image?: string; imageAlt?: string };

export function ProductSizeSelector({ options }: { options: readonly SizeOption[] }) {
  const [selected, setSelected] = useState(options[0]?.size ?? "");
  const selectedOption = options.find((option) => option.size === selected) ?? options[0];
  return (
    <MotionConfig reducedMotion="user">
      <fieldset className="sizeSelector">
        <legend>Chọn quy cách</legend>
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
              <span className="sizeSelectorLabel"><small>Quy cách</small>{option.size}<strong>{option.price}</strong></span>
            </motion.button>
          ))}
        </div>
        {selectedOption ? <p className="sizeSelectorSummary" aria-live="polite"><strong>{selectedOption.price}</strong><span>Mã {selectedOption.code} · Đang nhận đơn</span></p> : null}
      </fieldset>
    </MotionConfig>
  );
}
