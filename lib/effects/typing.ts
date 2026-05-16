// typing.ts
export function createCustomText(config: EffectConfig) {
  const text = config.text || "✨";
  return [new Particle({
    x: config.x,
    y: config.y,
    vx: 0, vy: -0.5,
    life: 2,
    size: 24,
    color: "#000",
    type: "text",
    text,
  })];
}
// calligraphy similar