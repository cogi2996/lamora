import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { InfoNotice, Eyebrow } from "@/components/ui";
import { contact } from "@/lib/content";

export const metadata: Metadata = { title: "Liên hệ" };

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ nhom?: string }> }) {
  const params = await searchParams;
  const defaultAudience = params.nhom === "b2c" ? "b2c" : "b2b";
  return (
    <main id="main-content" className="container pageShell contactLayout">
      <div><Eyebrow>Kết nối với Lamora</Eyebrow><h1>Hãy bắt đầu từ nhu cầu thực tế.</h1><p className="lead">Cho chúng tôi biết bạn đang tìm cà phê cho quán hay cho những lần pha tại nhà.</p><div className="contactDetails"><div><span>Địa chỉ</span><p>{contact.address}</p></div><div><span>Email</span><a href={`mailto:${contact.email}`}>{contact.email}</a></div><div><span>Điện thoại</span><a href={`tel:${contact.phone.replaceAll(" ", "")}`}>{contact.phone}</a></div><div><span>Giờ tư vấn</span><p>{contact.hours}</p></div></div><InfoNotice>{contact.leadRecipient} sẽ phản hồi trong một ngày làm việc.</InfoNotice></div>
      <ContactForm defaultAudience={defaultAudience} />
    </main>
  );
}
