import { Particle } from "@/lib/engine/Particle";
import { EffectConfig } from "@/lib/types";

export function createCursorTrail(config: EffectConfig) {
  return [new Particle({
    x: config.x,
    y: config.y,
    vx: 0, vy: 0,
    life: 0.3,
    size: 4,
    color: "#1ae2ff",
    type: "shape",
    shape: "sparkle",
    hue: 190,
  })];
}

export function createInkSplash(config: EffectConfig) {
  return Array.from({ length: 20 }, () => {
    return new Particle({
      x: config.x,
      y: config.y,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      life: 1.5,
      size: 3 + Math.random() * 10,
      color: `hsl(0, 0%, ${Math.random() * 70}%)`,
      type: "shape",
      shape: "waterBlob",
      hue: 0,
    });
  });
}

export function createCustomImage(config: EffectConfig, customImage?: HTMLImageElement | null) {
  if (!customImage) return [];
  return [new Particle({
    x: config.x,
    y: config.y,
    vx: 0,
    vy: -0.3,
    life: 2,
    size: 40,
    color: "#fff",
    type: "image",
    image: customImage,
    hue: 0,
  })];
}
