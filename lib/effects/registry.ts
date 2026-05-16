import { EffectId, EffectConfig } from "@/lib/types";
import { Particle } from "@/lib/engine/Particle";
import { createSparkles, createFlowers, createLeaves, createButterflies, createSnow, createRain, createStars, createClouds } from "./nature";
import { createConfetti, createBubbles, createHearts, createEmojis, createMemes } from "./fun";
import { createGoldenParticles, createDiamonds, createCrystal, createGlowingOrbs } from "./luxury";
import { createInkDiffusion, createWatercolor, createSmoke, createNeonPaint } from "./artistic";
import { createCustomText, createCalligraphy } from "./typing";
import { createBouncingBalls, createLiquid, createMagneticParticles } from "./physics";
import { createCursorTrail, createInkSplash, createCustomImage } from "./custom";

export const effectRegistry: Record<EffectId, (config: EffectConfig, customImage?: HTMLImageElement | null, settings?: any) => Particle[]> = {
  sparkles: createSparkles,
  flowers: createFlowers,
  leaves: createLeaves,
  butterflies: createButterflies,
  snow: createSnow,
  rain: createRain,
  stars: createStars,
  clouds: createClouds,
  confetti: createConfetti,
  bubbles: createBubbles,
  hearts: createHearts,
  emojis: createEmojis,
  memes: createMemes,
  goldenParticles: createGoldenParticles,
  diamonds: createDiamonds,
  crystal: createCrystal,
  glowingOrbs: createGlowingOrbs,
  inkDiffusion: createInkDiffusion,
  watercolor: createWatercolor,
  smoke: createSmoke,
  neonPaint: createNeonPaint,
  customText: createCustomText,
  calligraphy: createCalligraphy,
  bouncingBalls: createBouncingBalls,
  liquid: createLiquid,
  magneticParticles: createMagneticParticles,
  cursorTrail: createCursorTrail,
  inkSplash: createInkSplash,
  customImage: createCustomImage,
};
