import { Particle } from "@/lib/engine/Particle";
import { EffectConfig } from "@/lib/types";

export function createGoldenParticles(config: EffectConfig, _img?: HTMLImageElement | null, settings?: any) {
  const color = settings?.color || "#d4af37";
  return Array.from({ length: 15 }, () => {
    return new Particle({
      x: config.x,
      y: config.y,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      life: 2,
      size: 3 + Math.random() * 5,
      color,
      type: "shape",
      shape: "sparkle",
      hue: 45,
    });
  });
}

export function createDiamonds(config: EffectConfig) {
  return Array.from({ length: 6 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 10,
      y: config.y + (Math.random() - 0.5) * 10,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      life: 2,
      size: 12 + Math.random() * 12,
      color: "#e0f7fa",
      type: "shape",
      shape: "diamond",
      hue: 190,
    });
  });
}

export function createCrystal(config: EffectConfig) {
  return Array.from({ length: 8 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 15,
      y: config.y + (Math.random() - 0.5) * 15,
      vx: (Math.random() - 0.5) * 1,
      vy: (Math.random() - 0.5) * 1,
      life: 2.5,
      size: 10 + Math.random() * 14,
      color: `hsl(${Math.random() * 60 + 180}, 30%, 75%)`,
      type: "shape",
      shape: "crystal",
      hue: 190,
    });
  });
}

export function createGlowingOrbs(config: EffectConfig) {
  const hues = [280, 320, 180, 40, 200];
  return Array.from({ length: 4 }, () => {
    const h = hues[Math.floor(Math.random() * hues.length)];
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 20,
      y: config.y + (Math.random() - 0.5) * 20,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      life: 3,
      size: 18 + Math.random() * 18,
      color: `hsl(${h}, 80%, 60%)`,
      type: "shape",
      shape: "glowOrb",
      hue: h,
    });
  });
}
