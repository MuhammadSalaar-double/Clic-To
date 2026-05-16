// components/landing/AnimatedBackground.tsx
"use client";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-neon-blue/10 to-transparent blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-tl from-luxury-gold/10 to-transparent blur-3xl"
        animate={{ x: [0, -80, 0], y: [0, 80, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      />
    </div>
  );
}