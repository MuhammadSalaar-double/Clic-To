// components/landing/TrendingEffects.tsx
"use client";
import { motion } from "framer-motion";

const trending = ["Golden Particles", "Neon Paint", "Magnetic", "Custom Text", "Ink Splashes"];

export default function TrendingEffects() {
  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-serif text-center mb-8">🔥 Trending Effects</h2>
      <div className="flex overflow-x-auto gap-4 pb-4 max-w-5xl mx-auto">
        {trending.map((item) => (
          <div key={item} className="glass px-6 py-3 rounded-full whitespace-nowrap text-sm font-medium">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}