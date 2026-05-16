import { Particle } from "@/lib/engine/Particle";
import { EffectConfig } from "@/lib/types";

export function createBouncingBalls(config: EffectConfig) {
  return Array.from({ length: 5 }, () => {
    return new Particle({
      x: config.x,
      y: config.y,
      vx: (Math.random() - 0.5) * 5,
      vy: -5 - Math.random() * 5,
      life: 3,
      size: 10 + Math.random() * 10,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
      type: "circle",
    });
  });
}

export function createLiquid(config: EffectConfig) {
  // Soft, merging circles like a fluid splash
  return Array.from({ length: 30 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 15,
      y: config.y + (Math.random() - 0.5) * 15,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      life: 1.5 + Math.random(),
      size: 3 + Math.random() * 10,
      color: `hsla(210, 80%, 60%, 0.6)`,
      type: "circle",
    });
  });
}

export function createMagneticParticles(config: EffectConfig) {
  // These will be attracted to the pointer later in the engine; for now they just drift
  return Array.from({ length: 20 }, () => {
    return new Particle({
      x: config.x,
      y: config.y,
      vx: (Math.random() - 0.5) * 1,
      vy: (Math.random() - 0.5) * 1,
      life: 2,
      size: 2 + Math.random() * 4,
      color: "#888",
      type: "circle",
    });
  });
}
