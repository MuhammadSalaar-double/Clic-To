// components/landing/FeatureCards.tsx
"use client";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";

const features = [
  { title: "All Inputs", desc: "Click, drag, voice, keyboard – express freely." },
  { title: "Stunning Effects", desc: "Nature, luxury, physics, art – all dopamine-rich." },
  { title: "Customizable", desc: "Colors, speed, size, sounds – make it yours." },
  { title: "Export Art", desc: "Save PNGs or record videos of your creations." },
];

export default function FeatureCards() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feat, i) => (
          <motion.div
            key={feat.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard className="p-8 text-center">
              <h3 className="text-xl font-semibold">{feat.title}</h3>
              <p className="mt-2 text-gray-500">{feat.desc}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}