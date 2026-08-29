import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailTemplate } from "@/components/product-detail-template";
import { getProduct } from "@/lib/content";

export const metadata: Metadata = { title: "Original Blend" };

export default function OriginalBlendPage() {
  const product = getProduct("original-blend");
  if (!product) notFound();
  return <ProductDetailTemplate product={product} />;
}
