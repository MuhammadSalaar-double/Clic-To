import { Particle } from "@/lib/engine/Particle";
import { EffectConfig } from "@/lib/types";

const confettiColors = ["#ff2d95", "#1ae2ff", "#ffd700", "#39ff14", "#a855f7"];

export function createConfetti(config: EffectConfig) {
  return Array.from({ length: 20 }, () => {
    return new Particle({
      x: config.x,
      y: config.y,
      vx: (Math.random() - 0.5) * 8,
      vy: -3 - Math.random() * 5,
      life: 1.5 + Math.random() * 1.5,
      size: 5 + Math.random() * 5,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      type: "circle",
    });
  });
}

export function createBubbles(config: EffectConfig) {
  return Array.from({ length: 15 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 10,
      y: config.y + (Math.random() - 0.5) * 10,
      vx: (Math.random() - 0.5) * 1,
      vy: -1 - Math.random() * 2,
      life: 2 + Math.random() * 1.5,
      size: 10 + Math.random() * 15,
      color: `hsla(${Math.random() * 60 + 180}, 70%, 70%, 0.4)`,
      type: "circle",
    });
  });
}

export function createHearts(config: EffectConfig) {
  // Hearts are circles in red/pink, will look like hearts with imagination
  return Array.from({ length: 12 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 5,
      y: config.y + (Math.random() - 0.5) * 5,
      vx: (Math.random() - 0.5) * 2,
      vy: -2 - Math.random() * 2,
      life: 1.5 + Math.random(),
      size: 8 + Math.random() * 8,
      color: `hsl(${Math.random() * 20 + 340}, 80%, 70%)`,
      type: "circle",
    });
  });
}

const emojiList = ["😊", "😂", "❤️", "🔥", "🎉", "✨", "🌟", "💎", "🍕", "🚀"];
export function createEmojis(config: EffectConfig) {
  return Array.from({ length: 8 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 10,
      y: config.y + (Math.random() - 0.5) * 10,
      vx: (Math.random() - 0.5) * 3,
      vy: -2 - Math.random() * 3,
      life: 1.5 + Math.random(),
      size: 18 + Math.random() * 10,
      color: "#000",
      type: "text",
      text: emojiList[Math.floor(Math.random() * emojiList.length)],
    });
  });
}

const memePhrases = ["Such wow", "Much art", "Very click", "So effect", "Many particles"];
export function createMemes(config: EffectConfig) {
  return Array.from({ length: 5 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 20,
      y: config.y + (Math.random() - 0.5) * 20,
      vx: (Math.random() - 0.5) * 1,
      vy: -1 - Math.random() * 1,
      life: 2,
      size: 20 + Math.random() * 10,
      color: "#000",
      type: "text",
      text: memePhrases[Math.floor(Math.random() * memePhrases.length)],
    });
  });
}
