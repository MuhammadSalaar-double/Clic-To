import { Particle } from "@/lib/engine/Particle";
import { EffectConfig } from "@/lib/types";

export function createConfetti(config: EffectConfig) {
  const colors = ["#ff2d95", "#1ae2ff", "#ffd700", "#39ff14", "#a855f7"];
  return Array.from({ length: 25 }, () => {
    return new Particle({
      x: config.x,
      y: config.y,
      vx: (Math.random() - 0.5) * 10,
      vy: -4 - Math.random() * 6,
      life: 1.5 + Math.random() * 1.5,
      size: 6 + Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      type: "shape",
      shape: "confetti",
      hue: Math.random() * 360,
    });
  });
}

export function createBubbles(config: EffectConfig) {
  return Array.from({ length: 12 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 15,
      y: config.y + (Math.random() - 0.5) * 15,
      vx: (Math.random() - 0.5) * 1.5,
      vy: -1.5 - Math.random() * 2,
      life: 2 + Math.random() * 1.5,
      size: 12 + Math.random() * 15,
      color: "rgba(200,230,255,0.6)",
      type: "shape",
      shape: "bubble",
      hue: 200,
    });
  });
}

export function createHearts(config: EffectConfig) {
  return Array.from({ length: 8 }, () => {
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 10,
      y: config.y + (Math.random() - 0.5) * 10,
      vx: (Math.random() - 0.5) * 2,
      vy: -2 - Math.random() * 2,
      life: 1.5 + Math.random() * 1,
      size: 12 + Math.random() * 10,
      color: `hsl(${Math.random() * 20 + 340}, 80%, 65%)`,
      type: "shape",
      shape: "heart",
      hue: 350,
    });
  });
}

const emojiList = ["😊", "😂", "❤️", "🔥", "🎉", "✨", "🌟", "💎", "🍕", "🚀"];
export function createEmojis(config: EffectConfig) {
  return Array.from({ length: 6 }, () => {
    const emoji = emojiList[Math.floor(Math.random() * emojiList.length)];
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 15,
      y: config.y + (Math.random() - 0.5) * 15,
      vx: (Math.random() - 0.5) * 3,
      vy: -2 - Math.random() * 3,
      life: 1.5 + Math.random() * 1,
      size: 18 + Math.random() * 12,
      color: "#000",
      type: "text",
      text: emoji,
      hue: 0,
    });
  });
}

const memePhrases = ["Such wow", "Much art", "Very click", "So effect", "Many particles"];
export function createMemes(config: EffectConfig) {
  return Array.from({ length: 4 }, () => {
    const text = memePhrases[Math.floor(Math.random() * memePhrases.length)];
    return new Particle({
      x: config.x + (Math.random() - 0.5) * 25,
      y: config.y + (Math.random() - 0.5) * 25,
      vx: (Math.random() - 0.5) * 1,
      vy: -1 - Math.random() * 1,
      life: 2.5,
      size: 22 + Math.random() * 8,
      color: "#333",
      type: "text",
      text,
      hue: 0,
    });
  });
}
