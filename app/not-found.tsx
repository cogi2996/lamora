import Link from "next/link";

export default function NotFound() {
  return <main id="main-content" className="container pageShell narrow"><p className="eyebrow">404</p><h1>Không tìm thấy trang.</h1><Link className="button buttonPrimary" href="/">Về trang chủ</Link></main>;
}
