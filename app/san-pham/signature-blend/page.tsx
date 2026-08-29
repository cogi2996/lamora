import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailTemplate } from "@/components/product-detail-template";
import { getProduct } from "@/lib/content";

export const metadata: Metadata = { title: "Signature Blend" };

export default function SignatureBlendPage() {
  const product = getProduct("signature-blend");
  if (!product) notFound();
  return <ProductDetailTemplate product={product} />;
}
