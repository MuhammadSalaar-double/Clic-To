import { Particle } from "@/lib/engine/Particle";
import { EffectConfig } from "@/lib/types";

export function createInkDiffusion(config: EffectConfig) {
  return Array.from({ length: 25 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 12,
      y: config.y + (Math.random() - 0.5) * 12,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      life: 2.5 + Math.random() * 2,
      size: 6 + Math.random() * 18,
      color: `hsl(200, 80%, ${10 + Math.random() * 25}%)`,
      type: "shape",
      shape: "waterBlob",
      hue: 200,
    });
  });
}

export function createWatercolor(config: EffectConfig) {
  const hue = Math.random() * 60 + 180;
  return Array.from({ length: 20 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 25,
      y: config.y + (Math.random() - 0.5) * 25,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      life: 3 + Math.random() * 2,
      size: 8 + Math.random() * 22,
      color: `hsl(${hue}, 55%, ${50 + Math.random() * 30}%)`,
      type: "shape",
      shape: "waterBlob",
      hue,
    });
  });
}

export function createSmoke(config: EffectConfig) {
  return Array.from({ length: 15 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 8,
      y: config.y + (Math.random() - 0.5) * 8,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -0.8 - Math.random() * 0.6,
      life: 2.5 + Math.random() * 1.5,
      size: 15 + Math.random() * 25,
      color: "rgba(180,180,180,0.4)",
      type: "shape",
      shape: "smoke",
      hue: 0,
    });
  });
}

export function createNeonPaint(config: EffectConfig) {
  const colors = ["#ff2d95", "#1ae2ff", "#39ff14", "#a855f7"];
  return Array.from({ length: 12 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 15,
      y: config.y + (Math.random() - 0.5) * 15,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      life: 1.5 + Math.random() * 1,
      size: 5 + Math.random() * 12,
      color: colors[Math.floor(Math.random() * colors.length)],
      type: "shape",
      shape: "waterBlob",
      hue: Math.random() * 360,
    });
  });
}
