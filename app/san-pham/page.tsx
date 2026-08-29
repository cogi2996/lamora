import type { Metadata } from "next";
import { products } from "@/lib/content";
import { Eyebrow, ProductCard } from "@/components/ui";
import { LanguageText } from "@/components/language-provider";

export const metadata: Metadata = { title: "Sản phẩm" };

export default function ProductsPage() {
  return (
    <main id="main-content" className="container pageShell">
      <header className="pageIntro"><Eyebrow><LanguageText vi="Danh mục Lamora" en="Lamora coffee" /></Eyebrow><h1><LanguageText vi="Chọn dòng phù hợp." en="Find your blend." /></h1><p className="lead"><LanguageText vi="Hai dòng cà phê cho quán và những lần pha tại nhà." en="Two coffee lines for cafés and home brewing." /></p></header>
      <div className="productGrid">{products.map((product) => <ProductCard key={product.slug} product={product} compact />)}</div>
    </main>
  );
}
