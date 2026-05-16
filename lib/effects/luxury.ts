// luxury.ts
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
// others: diamonds, crystal, glowingOrbs