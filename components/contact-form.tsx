"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm({ defaultAudience = "b2b" }: { defaultAudience?: "b2b" | "b2c" }) {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setState("error");
      form.reportValidity();
      return;
    }
    setState("submitting");
    await new Promise((resolve) => window.setTimeout(resolve, 500));
    setState("success");
    form.reset();
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit} noValidate aria-busy={state === "submitting"}>
      <div>
        <h2 className="contactFormTitle">Nhận tư vấn phù hợp</h2>
        <p className="contactFormIntro">Để lại thông tin, Lamora sẽ giúp bạn chọn dòng và quy cách dễ dùng nhất.</p>
      </div>
      <label htmlFor="contact-name">Họ và tên</label>
      <input id="contact-name" name="name" autoComplete="name" required aria-invalid={state === "error" ? true : undefined} aria-describedby={state === "error" ? "contact-error" : undefined} />
      <label htmlFor="contact-detail">Email hoặc số điện thoại</label>
      <input id="contact-detail" name="contact" required aria-describedby={state === "error" ? "contact-help contact-error" : "contact-help"} aria-invalid={state === "error" ? true : undefined} />
      <p id="contact-help" className="helper">Dùng thông tin thuận tiện nhất để Lamora liên hệ lại.</p>
      <label htmlFor="contact-audience">Bạn đang tìm cho</label>
      <select id="contact-audience" name="audience" defaultValue={defaultAudience}>
          <option value="b2b">Quán cà phê</option>
          <option value="b2c">Pha tại nhà</option>
      </select>
      <label htmlFor="contact-message">Nhu cầu</label>
      <textarea id="contact-message" name="message" rows={5} placeholder="Ví dụ: số lượng dùng mỗi tháng hoặc cách pha bạn yêu thích" required aria-invalid={state === "error" ? true : undefined} aria-describedby={state === "error" ? "contact-error" : undefined} />
      {state === "error" ? <p className="formMessage formMessageError" role="alert" id="contact-error">Vui lòng điền các trường bắt buộc.</p> : null}
      {state === "success" ? <p className="formMessage formMessageSuccess" role="status" aria-live="polite">Cảm ơn bạn. Lamora đã nhận được yêu cầu và sẽ liên hệ trong một ngày làm việc.</p> : null}
      <button className="button buttonPrimary" type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? "Đang gửi…" : "Gửi yêu cầu"}
      </button>
    </form>
  );
}
