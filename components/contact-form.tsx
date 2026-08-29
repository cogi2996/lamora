"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "demo" | "error";

export function ContactForm({ defaultAudience = "b2b" }: { defaultAudience?: "b2b" | "b2c" }) {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setState("error");
      setMessage("Vui lòng kiểm tra các trường bắt buộc rồi thử lại.");
      form.reportValidity();
      return;
    }
    setState("submitting");
    setMessage("");

    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
    if (!endpoint) {
      await new Promise((resolve) => window.setTimeout(resolve, 350));
      setState("demo");
      setMessage("Bản xem trước đã ghi nhận nội dung trên trình duyệt này. Khi kết nối endpoint, yêu cầu sẽ được gửi tới Lamora.");
      return;
    }

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetch(endpoint, { method: "POST", body: new FormData(form), signal: controller.signal });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setState("success");
      setMessage("Cảm ơn bạn. Lamora đã nhận được yêu cầu và sẽ liên hệ trong một ngày làm việc.");
      form.reset();
    } catch {
      setState("error");
      setMessage("Chưa thể gửi yêu cầu lúc này. Kiểm tra kết nối rồi thử lại; nội dung bạn đã nhập vẫn được giữ nguyên.");
    } finally {
      window.clearTimeout(timeout);
    }
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit} noValidate aria-busy={state === "submitting"}>
      <div>
        <h2 className="contactFormTitle">Nhận tư vấn phù hợp</h2>
        <p className="contactFormIntro">Để lại thông tin, Lamora sẽ giúp bạn chọn dòng và quy cách dễ dùng nhất.</p>
      </div>
      <label htmlFor="contact-name">Họ và tên</label>
      <input id="contact-name" name="name" autoComplete="name" minLength={2} required aria-invalid={state === "error" ? true : undefined} aria-describedby={state === "error" ? "contact-error" : undefined} />
      <label htmlFor="contact-detail">Email hoặc số điện thoại</label>
      <input id="contact-detail" name="contact" inputMode="email" autoComplete="email" required aria-describedby={state === "error" ? "contact-help contact-error" : "contact-help"} aria-invalid={state === "error" ? true : undefined} />
      <p id="contact-help" className="helper">Dùng thông tin thuận tiện nhất để Lamora liên hệ lại.</p>
      <label htmlFor="contact-audience">Bạn đang tìm cho</label>
      <select id="contact-audience" name="audience" defaultValue={defaultAudience}>
          <option value="b2b">Quán cà phê</option>
          <option value="b2c">Pha tại nhà</option>
      </select>
      <label htmlFor="contact-message">Nhu cầu</label>
      <textarea id="contact-message" name="message" rows={5} minLength={10} placeholder="Ví dụ: số lượng dùng mỗi tháng hoặc cách pha bạn yêu thích" required aria-invalid={state === "error" ? true : undefined} aria-describedby={state === "error" ? "contact-error" : undefined} />
      {state === "error" ? <p className="formMessage formMessageError" role="alert" id="contact-error">{message}</p> : null}
      {state === "success" ? <p className="formMessage formMessageSuccess" role="status" aria-live="polite">{message}</p> : null}
      {state === "demo" ? <p className="formMessage formMessageDemo" role="status" aria-live="polite">{message}</p> : null}
      <button className="button buttonPrimary" type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? "Đang gửi…" : "Gửi yêu cầu"}
      </button>
    </form>
  );
}
