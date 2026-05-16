// artistic.ts
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
// watercolor, smoke, neonPaint