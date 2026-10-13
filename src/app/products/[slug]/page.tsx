import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { productsData } from "@/data/products";
import { companyData } from "@/data/company";
import ProductDetailClient from "./ProductDetailClient";

export function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = productsData.filter((p) => p.slug !== slug).slice(0, 3);

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}
