"use client";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass max-w-3xl p-12"
      >
        <h1 className="font-serif text-6xl font-bold tracking-tight text-luxury-charcoal md:text-8xl">
          Clic<span className="text-neon-pink">To</span>
        </h1>
        <p className="mt-6 text-xl text-gray-600 md:text-2xl">
          A magical playground where every click, tap, or gesture becomes a living artwork.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/canvas">
            <Button variant="primary" size="lg">Launch Canvas</Button>
          </Link>
          <Button variant="secondary" size="lg">Watch Demo</Button>
        </div>
      </motion.div>

      <motion.div
        className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-neon-blue/20 to-transparent blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-gradient-to-tl from-luxury-gold/20 to-transparent blur-3xl"
        animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      />
    </section>
  );
}
