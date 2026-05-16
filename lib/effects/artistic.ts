import { Particle } from "@/lib/engine/Particle";
import { EffectConfig } from "@/lib/types";

export function createInkDiffusion(config: EffectConfig) {
  return Array.from({ length: 30 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 10,
      y: config.y + (Math.random() - 0.5) * 10,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      life: 2 + Math.random() * 2,
      size: 5 + Math.random() * 15,
      color: `hsl(200, 80%, ${10 + Math.random() * 30}%)`,
      type: "circle",
    });
  });
}

export function createWatercolor(config: EffectConfig) {
  return Array.from({ length: 25 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 20,
      y: config.y + (Math.random() - 0.5) * 20,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      life: 3 + Math.random() * 2,
      size: 6 + Math.random() * 20,
      color: `hsl(${Math.random() * 60 + 180}, 60%, ${50 + Math.random() * 30}%)`,
      type: "circle",
    });
  });
}

export function createSmoke(config: EffectConfig) {
  return Array.from({ length: 20 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 5,
      y: config.y + (Math.random() - 0.5) * 5,
      vx: (Math.random() - 0.5) * 0.2,
      vy: -0.5 - Math.random() * 0.5,
      life: 2 + Math.random() * 1.5,
      size: 10 + Math.random() * 20,
      color: `rgba(180, 180, 180, ${0.3 + Math.random() * 0.4})`,
      type: "circle",
    });
  });
}

export function createNeonPaint(config: EffectConfig) {
  const colors = ["#ff2d95", "#1ae2ff", "#39ff14", "#a855f7"];
  return Array.from({ length: 15 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 12,
      y: config.y + (Math.random() - 0.5) * 12,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      life: 1.5 + Math.random() * 1,
      size: 4 + Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      type: "circle",
    });
  });
}
