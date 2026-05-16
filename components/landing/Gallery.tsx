// components/landing/Gallery.tsx
"use client";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";

const previews = ["✨ Sparkles", "🌸 Flowers", "💎 Diamonds", "🖋 Calligraphy", "💧 Watercolor", "🔥 Confetti"];

export default function Gallery() {
  return (
    <section className="px-6 py-20 bg-white/50">
      <h2 className="text-3xl font-serif text-center mb-12">Effect Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {previews.map((preview, i) => (
          <motion.div
            key={preview}
            whileHover={{ scale: 1.05 }}
            className="glass p-6 text-center text-xl font-semibold cursor-pointer"
          >
            {preview}
          </motion.div>
        ))}
      </div>
    </section>
  );
}