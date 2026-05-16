import { Particle } from "./Particle";
import { EffectId, EffectConfig } from "@/lib/types";
import { effectRegistry } from "@/lib/effects/registry";

export class AnimationEngine {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  particles: Particle[] = [];
  animationId: number = 0;
  activeEffects: EffectId[] = ["sparkles"];
  customImage: HTMLImageElement | null = null;
  settings = { speed: 1, fadeTime: 2, size: 1, color: "#d4af37" };
  private lastTime = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")!;
    this.resize = this.resize.bind(this);
    window.addEventListener("resize", this.resize);
    this.resize();
  }

  resize() {
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;
  }

  init() {}

  setActiveEffects(effects: EffectId[]) {
    this.activeEffects = effects;
  }

  setCustomImage(img: HTMLImageElement) {
    this.customImage = img;
  }

  addEffect(effectId: EffectId, config: Partial<EffectConfig> = {}) {
    const factory = effectRegistry[effectId];
    if (!factory) return;
    const particles = factory(
      { x: this.canvas.width / 2, y: this.canvas.height / 2, ...config },
      this.customImage,
      this.settings
    );
    this.particles.push(...particles);
  }

  start() {
    this.lastTime = performance.now();
    this.loop(performance.now());
  }

  stop() {
    cancelAnimationFrame(this.animationId);
  }

  private loop = (now: number) => {
    const dt = Math.min((now - this.lastTime) / 1000, 0.1); // cap dt
    this.lastTime = now;
    this.update(dt);
    this.draw();
    this.animationId = requestAnimationFrame(this.loop);
  };

  private update(dt: number) {
    const fadeFactor = 1 / Math.max(0.1, this.settings.fadeTime);
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].update(dt, this.settings.speed, fadeFactor);
      if (this.particles[i].life <= 0) {
        this.particles.splice(i, 1);
      }
    }
  }

  private draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (const p of this.particles) {
      p.draw(this.ctx);
    }
  }

  destroy() {
    this.stop();
    window.removeEventListener("resize", this.resize);
  }
}
