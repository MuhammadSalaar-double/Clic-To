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
  return Array.from({ length: 8 }, () => {
    return new Particle({
      x: config.x,
      y: config.y,
      vx: (Math.random() - 0.5) * 2,
      vy: -2 - Math.random() * 2,
      life: 1 + Math.random(),
      size: 8 + Math.random() * 8,
      color: `hsl(${Math.random() * 60 + 300}, 80%, 70%)`,
      type: "circle",
    });
  });
}

export function createLeaves(config: EffectConfig) {
  const leafColors = ["#8B5A2B", "#A0522D", "#556B2F", "#6B8E23"];
  return Array.from({ length: 10 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 10,
      y: config.y + (Math.random() - 0.5) * 10,
      vx: (Math.random() - 0.5) * 1,
      vy: -1 - Math.random() * 2,
      life: 2 + Math.random(),
      size: 6 + Math.random() * 8,
      color: leafColors[Math.floor(Math.random() * leafColors.length)],
      type: "circle",
    });
  });
}

export function createButterflies(config: EffectConfig) {
  const colors = ["#ff69b4", "#ff1493", "#ffb6c1", "#ffa07a"];
  return Array.from({ length: 6 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 10,
      y: config.y + (Math.random() - 0.5) * 10,
      vx: (Math.random() - 0.5) * 1.5,
      vy: -0.5 - Math.random() * 1.5,
      life: 2 + Math.random() * 1.5,
      size: 6 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      type: "circle",
    });
  });
}

export function createSnow(config: EffectConfig) {
  return Array.from({ length: 20 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 30,
      y: config.y + (Math.random() - 0.5) * 30,
      vx: (Math.random() - 0.5) * 0.5,
      vy: 1 + Math.random() * 1.5,
      life: 3 + Math.random() * 2,
      size: 3 + Math.random() * 5,
      color: "#ffffff",
      type: "circle",
    });
  });
}

export function createRain(config: EffectConfig) {
  return Array.from({ length: 25 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 40,
      y: config.y + (Math.random() - 0.5) * 10,
      vx: (Math.random() - 0.5) * 0.2,
      vy: 5 + Math.random() * 8,
      life: 0.8 + Math.random() * 0.4,
      size: 1 + Math.random() * 2,
      color: "#a0c4ff",
      type: "circle",
    });
  });
}

export function createStars(config: EffectConfig) {
  return Array.from({ length: 15 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 20,
      y: config.y + (Math.random() - 0.5) * 20,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      life: 2,
      size: 2 + Math.random() * 3,
      color: "#fffacd",
      type: "circle",
    });
  });
}

export function createClouds(config: EffectConfig) {
  return Array.from({ length: 8 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 20,
      y: config.y + (Math.random() - 0.5) * 5,
      vx: (Math.random() - 0.5) * 0.2,
      vy: -0.2 - Math.random() * 0.3,
      life: 3 + Math.random() * 2,
      size: 20 + Math.random() * 20,
      color: "rgba(255, 255, 255, 0.7)",
      type: "circle",
    });
  });
}
