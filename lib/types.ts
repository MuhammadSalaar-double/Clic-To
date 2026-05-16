export type EffectId =
  | "sparkles" | "flowers" | "leaves" | "butterflies" | "snow" | "rain" | "stars" | "clouds"
  | "emojis" | "memes" | "confetti" | "bubbles" | "hearts"
  | "goldenParticles" | "diamonds" | "crystal" | "glowingOrbs"
  | "inkDiffusion" | "watercolor" | "smoke" | "neonPaint"
  | "customText" | "calligraphy"
  | "bouncingBalls" | "liquid" | "magneticParticles"
  | "cursorTrail" | "inkSplash" | "customImage";

export interface EffectConfig {
  x: number;
  y: number;
  text?: string;
  image?: HTMLImageElement;
}

export interface ParticleOptions {
  x: number;
  y: number;
  vx?: number;
  vy?: number;
  life?: number;
  size?: number;
  color?: string;
  type?: "circle" | "image" | "text";
  image?: HTMLImageElement;
  text?: string;
}
