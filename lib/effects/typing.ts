import { Particle } from "@/lib/engine/Particle";
import { EffectConfig } from "@/lib/types";

export function createCustomText(config: EffectConfig) {
  const text = config.text || "✨";
  return [new Particle({
    x: config.x,
    y: config.y,
    vx: 0, vy: -0.5,
    life: 2,
    size: 24,
    color: "#000",
    type: "text",
    text,
  })];
}

export function createCalligraphy(config: EffectConfig) {
  // Simulates elegant ink strokes with a few drifting particles
  return Array.from({ length: 3 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 5,
      y: config.y + (Math.random() - 0.5) * 5,
      vx: (Math.random() - 0.5) * 0.5,
      vy: -0.5 - Math.random() * 0.5,
      life: 2,
      size: 2 + Math.random() * 4,
      color: "#1a1a1a",
      type: "circle",
    });
  });
}
