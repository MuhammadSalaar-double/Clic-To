import { Particle } from "@/lib/engine/Particle";
import { EffectConfig } from "@/lib/types";

export function createSparkles(config: EffectConfig, _img?: HTMLImageElement | null, settings?: any) {
  const count = 12;
  const color = settings?.color || "#ffd700";
  return Array.from({ length: count }, () => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 2 + Math.random() * 3;
    return new Particle({
      x: config.x,
      y: config.y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 0.5 + Math.random() * 0.5,
      size: 3 + Math.random() * 5,
      color,
      type: "shape",
      shape: "sparkle",
      hue: 50,
    });
  });
}

export function createFlowers(config: EffectConfig) {
  const count = 1; // One beautiful flower per click
  const hue = Math.random() * 60 + 300; // pink-purple range
  return [new Particle({
    x: config.x,
    y: config.y,
    vx: 0, vy: -0.3,
    life: 3 + Math.random() * 2,
    size: 30 + Math.random() * 20,
    color: `hsl(${hue}, 75%, 60%)`,
    type: "shape",
    shape: "flower",
    hue,
  })];
}

export function createButterflies(config: EffectConfig) {
  const count = 3;
  const hue = Math.random() * 60 + 200;
  return Array.from({ length: count }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 20,
      y: config.y + (Math.random() - 0.5) * 20,
      vx: (Math.random() - 0.5) * 2,
      vy: -1 - Math.random() * 2,
      life: 2.5 + Math.random() * 1.5,
      size: 15 + Math.random() * 12,
      color: `hsl(${hue}, 80%, 60%)`,
      type: "shape",
      shape: "butterfly",
      hue: hue + Math.random() * 40,
    });
  });
}

export function createLeaves(config: EffectConfig) {
  const count = 8;
  const hue = 80 + Math.random() * 40; // green range
  return Array.from({ length: count }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 30,
      y: config.y + (Math.random() - 0.5) * 10,
      vx: (Math.random() - 0.5) * 1.5,
      vy: -1 - Math.random() * 2,
      life: 2 + Math.random() * 2,
      size: 8 + Math.random() * 12,
      color: `hsl(${hue}, 70%, 40%)`,
      type: "shape",
      shape: "leaf",
      hue,
    });
  });
}

export function createSnow(config: EffectConfig) {
  return Array.from({ length: 15 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 80,
      y: config.y - Math.random() * 40,
      vx: (Math.random() - 0.5) * 0.3,
      vy: 1 + Math.random() * 1.5,
      life: 4 + Math.random() * 3,
      size: 4 + Math.random() * 8,
      color: "#ffffff",
      type: "shape",
      shape: "snowflake",
      hue: 0,
    });
  });
}

export function createRain(config: EffectConfig) {
  return Array.from({ length: 20 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 100,
      y: config.y - Math.random() * 20,
      vx: (Math.random() - 0.5) * 0.1,
      vy: 6 + Math.random() * 10,
      life: 0.5 + Math.random() * 0.3,
      size: 2 + Math.random() * 4,
      color: "#a0d0ff",
      type: "shape",
      shape: "raindrop",
      hue: 210,
    });
  });
}

export function createStars(config: EffectConfig) {
  const count = 10;
  return Array.from({ length: count }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 30,
      y: config.y + (Math.random() - 0.5) * 30,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      life: 2 + Math.random() * 1.5,
      size: 6 + Math.random() * 10,
      color: "#fffacd",
      type: "shape",
      shape: "star",
      hue: 55,
    });
  });
}

export function createClouds(config: EffectConfig) {
  return Array.from({ length: 5 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 40,
      y: config.y + (Math.random() - 0.5) * 10,
      vx: (Math.random() - 0.5) * 0.2,
      vy: -0.2 - Math.random() * 0.3,
      life: 4 + Math.random() * 2,
      size: 25 + Math.random() * 20,
      color: "rgba(255,255,255,0.8)",
      type: "shape",
      shape: "cloud",
      hue: 0,
    });
  });
}
