"use client";

import { useState } from "react";

type SizeOption = { size: string; code: string; price: string };

export function ProductSizeSelector({ options }: { options: readonly SizeOption[] }) {
  const [selected, setSelected] = useState(options[0]?.size ?? "");
  const selectedOption = options.find((option) => option.size === selected) ?? options[0];
  return (
    <fieldset className="sizeSelector">
      <legend>Chọn quy cách</legend>
      <div>
        {options.map((option) => (
          <button key={option.code} type="button" aria-pressed={selected === option.size} onClick={() => setSelected(option.size)}>
            {option.size}
          </button>
        ))}
      </div>
      {selectedOption ? <p className="sizeSelectorSummary" aria-live="polite"><strong>{selectedOption.price}</strong><span>Mã {selectedOption.code} · Đang nhận đơn</span></p> : null}
    </fieldset>
  );
}
