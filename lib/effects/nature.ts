import { Particle } from "@/lib/engine/Particle";
import { EffectConfig } from "@/lib/types";

export function createSparkles(config: EffectConfig, _img?: HTMLImageElement | null, settings?: any) {
  const count = 10;
  const color = settings?.color || "#d4af37";
  return Array.from({ length: count }, () => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 2 + Math.random() * 3;
    return new Particle({
      x: config.x,
      y: config.y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 0.5 + Math.random() * 0.5,
      size: 2 + Math.random() * 4,
      color: color,
      type: "circle",
    });
  });
}

export function createFlowers(config: EffectConfig) {
  // similar, but with petal-like shapes (circles) and pastel colors
  return Array.from({ length: 8 }, () => {
    return new Particle({
      x: config.x,
      y: config.y,
      vx: (Math.random() - 0.5) * 2,
      vy: -2 - Math.random() * 2,
      life: 1 + Math.random(),
      size: 8 + Math.random() * 8,
      color: `hsl(${Math.random() * 60 + 300}, 80%, 70%)`, // pink/purple
      type: "circle",
    });
  });
}

// ... leaves, butterflies, snow, rain, stars, clouds follow