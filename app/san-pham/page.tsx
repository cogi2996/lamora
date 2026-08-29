import type { Metadata } from "next";
import { products } from "@/lib/content";
import { InfoNotice, Eyebrow, ProductCard } from "@/components/ui";

export const metadata: Metadata = { title: "Sản phẩm" };

export default function ProductsPage() {
  return (
    <main id="main-content" className="container pageShell">
      <header className="pageIntro"><Eyebrow>Danh mục Lamora</Eyebrow><h1>Chọn dòng phù hợp.</h1><p className="lead">Hai dòng cà phê cho quán và những lần pha tại nhà.</p></header>
      <InfoNotice>Chọn một dòng để xem quy cách và tư vấn chi tiết.</InfoNotice>
      <div className="productGrid">{products.map((product) => <ProductCard key={product.slug} product={product} compact />)}</div>
    </main>
  );
}
