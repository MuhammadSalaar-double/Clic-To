import { Particle } from "@/lib/engine/Particle";
import { EffectConfig } from "@/lib/types";

export function createConfetti(config: EffectConfig) {
  const colors = ["#ff2d95", "#1ae2ff", "#ffd700", "#39ff14", "#a855f7"];
  return Array.from({ length: 20 }, () => {
    return new Particle({
      x: config.x,
      y: config.y,
      vx: (Math.random() - 0.5) * 8,
      vy: -3 - Math.random() * 5,
      life: 1.5 + Math.random() * 1.5,
      size: 5 + Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      type: "circle",
    });
  });
}

// bubbles, hearts, emojis, memes...