// components/landing/CTA.tsx
"use client";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="px-6 py-24 text-center">
      <h2 className="text-4xl font-serif mb-6">Start Creating Magic</h2>
      <Link href="/canvas">
        <Button variant="primary" size="lg">Launch Now</Button>
      </Link>
    </section>
  );
}