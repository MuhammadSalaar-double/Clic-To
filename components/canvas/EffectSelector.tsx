"use client";
import { motion } from "framer-motion";
import { EffectId } from "@/lib/types";

const categories: { name: string; effects: EffectId[] }[] = [
  { name: "Nature", effects: ["flowers", "leaves", "butterflies", "snow", "rain", "stars", "clouds"] },
  { name: "Fun", effects: ["emojis", "memes", "confetti", "bubbles", "hearts"] },
  { name: "Luxury", effects: ["goldenParticles", "diamonds", "crystal", "glowingOrbs"] },
  { name: "Artistic", effects: ["inkDiffusion", "watercolor", "smoke", "neonPaint"] },
  { name: "Typing", effects: ["customText", "calligraphy"] },
  { name: "Physics", effects: ["bouncingBalls", "liquid", "magneticParticles"] },
  { name: "Custom", effects: ["customImage"] },   // <-- added for uploaded images
];

interface EffectSelectorProps {
  selected: EffectId[];
  onChange: (effects: EffectId[]) => void;
  mode: "single" | "multi";
}

export default function EffectSelector({ selected, onChange, mode }: EffectSelectorProps) {
  const handleToggle = (effect: EffectId) => {
    if (mode === "single") {
      onChange([effect]);
    } else {
      if (selected.includes(effect)) {
        onChange(selected.filter((e) => e !== effect));
      } else {
        onChange([...selected, effect]);
      }
    }
  };

  return (
    <div className="space-y-3">
      {categories.map((cat) => (
        <div key={cat.name}>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">{cat.name}</h4>
          <div className="flex flex-wrap gap-2">
            {cat.effects.map((effect) => (
              <motion.button
                key={effect}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleToggle(effect)}
                className={`px-3 py-1 rounded-full text-sm transition-all ${
                  selected.includes(effect)
                    ? "bg-luxury-gold text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {effect}
              </motion.button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
