"use client";

import { FormEvent, useState } from "react";
import { LanguageText, useLanguage, languageText } from "./language-provider";

type FormState = "idle" | "submitting" | "success" | "demo" | "error";

export function ContactForm({ defaultAudience = "b2b" }: { defaultAudience?: "b2b" | "b2c" }) {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const { locale } = useLanguage();
  const detailPlaceholder = locale === "en" ? "email@domain.com or +84 9xx xxx xxx" : "email@tenmien.vn hoặc 09xx xxx xxx";
  const messagePlaceholder = locale === "en" ? "For example: monthly volume or your favourite brew method" : "Ví dụ: số lượng dùng mỗi tháng hoặc cách pha bạn yêu thích";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setState("error");
      setMessage(languageText(locale, "Vui lòng kiểm tra các trường bắt buộc rồi thử lại.", "Please check the required fields and try again."));
      form.reportValidity();
      return;
    }
    setState("submitting");
    setMessage("");

    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
    if (!endpoint) {
      await new Promise((resolve) => window.setTimeout(resolve, 350));
      setState("demo");
      setMessage(languageText(locale, "Bản xem trước đã ghi nhận nội dung trên trình duyệt này. Khi kết nối endpoint, yêu cầu sẽ được gửi tới Lamora.", "This preview saved your message in this browser. Once an endpoint is connected, requests will be sent to Lamora."));
      return;
    }

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetch(endpoint, { method: "POST", body: new FormData(form), signal: controller.signal });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setState("success");
      setMessage(languageText(locale, "Cảm ơn bạn. Lamora đã nhận được yêu cầu và sẽ liên hệ trong một ngày làm việc.", "Thank you. Lamora received your request and will be in touch within one business day."));
      form.reset();
    } catch {
      setState("error");
      setMessage(languageText(locale, "Chưa thể gửi yêu cầu lúc này. Kiểm tra kết nối rồi thử lại; nội dung bạn đã nhập vẫn được giữ nguyên.", "We couldn't send this yet. Check your connection and try again; your message is still here."));
    } finally {
      window.clearTimeout(timeout);
    }
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit} noValidate aria-busy={state === "submitting"}>
      <div>
        <h2 className="contactFormTitle"><LanguageText vi="Nhận tư vấn phù hợp" en="Find your fit" /></h2>
        <p className="contactFormIntro"><LanguageText vi="Để lại thông tin, Lamora sẽ giúp bạn chọn dòng và cỡ túi dễ dùng nhất." en="Leave your details and Lamora will help you choose the right line and bag size." /></p>
      </div>
      <label htmlFor="contact-name"><LanguageText vi="Họ và tên" en="Full name" /></label>
      <input id="contact-name" name="name" autoComplete="name" minLength={2} required aria-invalid={state === "error" ? true : undefined} aria-describedby={state === "error" ? "contact-error" : undefined} />
      <label htmlFor="contact-detail"><LanguageText vi="Email hoặc số điện thoại" en="Email or phone number" /></label>
      <input id="contact-detail" name="contact" inputMode="text" autoComplete="email" placeholder={detailPlaceholder} required aria-describedby={state === "error" ? "contact-help contact-error" : "contact-help"} aria-invalid={state === "error" ? true : undefined} />
      <p id="contact-help" className="helper"><LanguageText vi="Dùng thông tin thuận tiện nhất để Lamora liên hệ lại." en="Use the contact detail that is easiest for Lamora to reach you on." /></p>
      <label htmlFor="contact-audience"><LanguageText vi="Bạn đang tìm cho" en="You are choosing for" /></label>
      <select id="contact-audience" name="audience" defaultValue={defaultAudience}>
          <option value="b2b"><LanguageText vi="Quán cà phê" en="A café" /></option>
          <option value="b2c"><LanguageText vi="Pha tại nhà" en="Home brewing" /></option>
      </select>
      <label htmlFor="contact-message"><LanguageText vi="Nhu cầu" en="What do you need?" /></label>
      <textarea id="contact-message" name="message" rows={5} minLength={10} placeholder={messagePlaceholder} required aria-invalid={state === "error" ? true : undefined} aria-describedby={state === "error" ? "contact-error" : undefined} />
      {state === "error" ? <p className="formMessage formMessageError" role="alert" id="contact-error">{message}</p> : null}
      {state === "success" ? <p className="formMessage formMessageSuccess" role="status" aria-live="polite">{message}</p> : null}
      {state === "demo" ? <p className="formMessage formMessageDemo" role="status" aria-live="polite">{message}</p> : null}
      <button className="button buttonPrimary" type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? <LanguageText vi="Đang gửi…" en="Sending…" /> : <LanguageText vi="Gửi yêu cầu" en="Send request" />}
      </button>
    </form>
  );
}
