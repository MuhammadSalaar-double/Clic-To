import { Particle } from "@/lib/engine/Particle";
import { EffectConfig } from "@/lib/types";

export function createCursorTrail(config: EffectConfig) {
  return [new Particle({
    x: config.x,
    y: config.y,
    vx: 0, vy: 0,
    life: 0.3,
    size: 3,
    color: "#1ae2ff",
    type: "circle",
  })];
}

export function createInkSplash(config: EffectConfig) {
  return Array.from({ length: 20 }, () => {
    return new Particle({
      x: config.x,
      y: config.y,
      vx: (Math.random() - 0.5) * 3,
      vy: (Math.random() - 0.5) * 3,
      life: 1.5,
      size: 2 + Math.random() * 8,
      color: `hsl(0, 0%, ${Math.random() * 80}%)`,
      type: "circle",
    });
  });
}

export function createCustomImage(config: EffectConfig, customImage?: HTMLImageElement | null) {
  if (!customImage) return [];
  return [new Particle({
    x: config.x,
    y: config.y,
    vx: (Math.random() - 0.5) * 2,
    vy: -1 - Math.random() * 2,
    life: 1,
    size: 30,
    type: "image",
    image: customImage,
  })];
}
