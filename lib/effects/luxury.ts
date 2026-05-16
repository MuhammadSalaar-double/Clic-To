import { Particle } from "@/lib/engine/Particle";
import { EffectConfig } from "@/lib/types";

export function createGoldenParticles(config: EffectConfig, _img?: HTMLImageElement | null, settings?: any) {
  const color = settings?.color || "#d4af37";
  return Array.from({ length: 15 }, () => {
    return new Particle({
      x: config.x,
      y: config.y,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      life: 2,
      size: 2 + Math.random() * 3,
      color,
      type: "circle",
    });
  });
}

export function createDiamonds(config: EffectConfig) {
  return Array.from({ length: 10 }, () => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 1 + Math.random() * 2;
    return new Particle({
      x: config.x,
      y: config.y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1.5 + Math.random(),
      size: 4 + Math.random() * 5,
      color: "#e0f7fa", // icy blue-white
      type: "circle",
    });
  });
}

export function createCrystal(config: EffectConfig) {
  return Array.from({ length: 20 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 8,
      y: config.y + (Math.random() - 0.5) * 8,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      life: 2,
      size: 3 + Math.random() * 6,
      color: `hsl(${Math.random() * 60 + 180}, 80%, 80%)`,
      type: "circle",
    });
  });
}

export function createGlowingOrbs(config: EffectConfig) {
  return Array.from({ length: 6 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 15,
      y: config.y + (Math.random() - 0.5) * 15,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      life: 3,
      size: 15 + Math.random() * 15,
      color: `hsl(${Math.random() * 360}, 80%, 70%)`,
      type: "circle",
    });
  });
}
