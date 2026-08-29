import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { InfoNotice, Eyebrow } from "@/components/ui";
import { contact } from "@/lib/content";
import { LanguageText } from "@/components/language-provider";

export const metadata: Metadata = { title: "Liên hệ" };

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ nhom?: string }> }) {
  const params = await searchParams;
  const defaultAudience = params.nhom === "b2c" ? "b2c" : "b2b";
  return (
    <main id="main-content" className="container pageShell contactLayout">
      <div><Eyebrow><LanguageText vi="Kết nối với Lamora" en="Connect with Lamora" /></Eyebrow><h1><LanguageText vi="Hãy bắt đầu từ nhu cầu thực tế." en="Start with what you need." /></h1><p className="lead"><LanguageText vi="Cho chúng tôi biết bạn đang tìm cà phê cho quán hay cho những lần pha tại nhà." en="Tell us whether you're choosing coffee for a café or for brewing at home." /></p><div className="contactDetails"><div><span><LanguageText vi="Địa chỉ" en="Address" /></span><p>{contact.address}</p></div><div><span>Email</span><a href={`mailto:${contact.email}`}>{contact.email}</a></div><div><span><LanguageText vi="Điện thoại" en="Phone" /></span><a href={`tel:${contact.phone.replaceAll(" ", "")}`}>{contact.phone}</a></div><div><span><LanguageText vi="Giờ tư vấn" en="Hours" /></span><p><LanguageText vi={contact.hours} en="Monday – Friday, 08:30 – 17:30" /></p></div></div><InfoNotice><LanguageText vi={`${contact.leadRecipient} sẽ phản hồi trong một ngày làm việc.`} en="Lamora's advice team replies within one business day." /></InfoNotice></div>
      <ContactForm defaultAudience={defaultAudience} />
    </main>
  );
}
