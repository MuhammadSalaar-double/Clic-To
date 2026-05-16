// physics.ts
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
// liquid, magneticParticles (attract to pointer)