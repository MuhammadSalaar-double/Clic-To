import { ParticleOptions } from "@/lib/types";

export class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  baseSize: number;
  color: string;
  type: "circle" | "image" | "text";
  image?: HTMLImageElement;
  text?: string;
  rotation: number;
  rotationSpeed: number;

  constructor(opts: ParticleOptions) {
    this.x = opts.x;
    this.y = opts.y;
    this.vx = opts.vx ?? 0;
    this.vy = opts.vy ?? 0;
    this.life = opts.life ?? 1;
    this.maxLife = this.life;
    this.baseSize = opts.size ?? 10;
    this.size = this.baseSize;
    this.color = opts.color ?? "#d4af37";
    this.type = opts.type ?? "circle";
    this.image = opts.image;
    this.text = opts.text;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.2;
  }

  update(dt: number, speedFactor = 1, fadeFactor = 1) {
    this.x += this.vx * dt * 60 * speedFactor;
    this.y += this.vy * dt * 60 * speedFactor;
    this.life -= dt * fadeFactor;
    this.rotation += this.rotationSpeed * dt * 60;
    this.size = this.baseSize * (0.5 + 0.5 * (this.life / this.maxLife)); // shrink
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.life / this.maxLife);
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    if (this.type === "circle") {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(0, 0, this.size, 0, Math.PI * 2);
      ctx.fill();
    } else if (this.type === "image" && this.image) {
      ctx.drawImage(this.image, -this.size, -this.size, this.size * 2, this.size * 2);
    } else if (this.type === "text" && this.text) {
      ctx.fillStyle = this.color;
      ctx.font = `${this.size * 2}px "Inter", sans-serif`;
      ctx.textAlign = "center";
      ctx.fillText(this.text, 0, 0);
    }
    ctx.restore();
  }
}