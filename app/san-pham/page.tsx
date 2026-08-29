import type { Metadata } from "next";
import { products } from "@/lib/content";
import { InfoNotice, Eyebrow, ProductCard } from "@/components/ui";

export const metadata: Metadata = { title: "Sản phẩm" };

export default function ProductsPage() {
  return (
    <main id="main-content" className="container pageShell">
      <header className="pageIntro"><Eyebrow>Danh mục Lamora</Eyebrow><h1>Chọn dòng và quy cách phù hợp.</h1><p className="lead">Ba quy cách cho hai nhu cầu: vận hành quán và pha tại nhà.</p></header>
      <InfoNotice>Chọn quy cách phù hợp rồi đặt hàng qua kênh thuận tiện nhất. Đơn dành cho quán được tư vấn riêng theo nhịp vận hành.</InfoNotice>
      <div className="productGrid">{products.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
    </main>
  );
}
