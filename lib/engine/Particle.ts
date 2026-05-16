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
  type: "circle" | "image" | "text" | "shape";
  shape?: string; // "butterfly" | "flower" | "leaf" | "heart" | "star" | "diamond" | "cloud" | "raindrop" | "snowflake" | "bubble" | "glowOrb" | "crystal" | "confetti" | "smoke" | "waterBlob" | "sparkle"
  image?: HTMLImageElement;
  text?: string;
  rotation: number;
  rotationSpeed: number;
  hue: number; // for rich color variation

  constructor(opts: ParticleOptions & { shape?: string; hue?: number }) {
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
    this.shape = opts.shape;
    this.image = opts.image;
    this.text = opts.text;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.15;
    this.hue = opts.hue ?? Math.random() * 360;
  }

  update(dt: number, speedFactor = 1, fadeFactor = 1) {
    this.x += this.vx * dt * 60 * speedFactor;
    this.y += this.vy * dt * 60 * speedFactor;
    this.life -= dt * fadeFactor;
    this.rotation += this.rotationSpeed * dt * 60;
    const lifeRatio = Math.max(0, this.life / this.maxLife);
    // Bloom effect: grow rapidly at first, then slowly shrink
    if (lifeRatio > 0.9) {
      this.size = this.baseSize * (1 + (1 - lifeRatio) * 3); // overshoot
    } else {
      this.size = this.baseSize * (0.5 + 0.5 * lifeRatio);
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    const alpha = Math.max(0, this.life / this.maxLife);
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    if (this.type === "shape" && this.shape) {
      this.drawShape(ctx);
    } else if (this.type === "circle") {
      this.drawCircle(ctx);
    } else if (this.type === "image" && this.image) {
      ctx.drawImage(this.image, -this.size, -this.size, this.size * 2, this.size * 2);
    } else if (this.type === "text" && this.text) {
      ctx.fillStyle = this.color;
      ctx.font = `${this.size * 2}px "Inter", sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(this.text, 0, 0);
    }
    ctx.restore();
  }

  // ────────── SHAPE RENDERERS ──────────

  private drawCircle(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(0, 0, this.size, 0, Math.PI * 2);
    ctx.fill();
  }

  private drawShape(ctx: CanvasRenderingContext2D) {
    switch (this.shape) {
      case "butterfly": this.drawButterfly(ctx); break;
      case "flower": this.drawFlower(ctx); break;
      case "leaf": this.drawLeaf(ctx); break;
      case "heart": this.drawHeart(ctx); break;
      case "star": this.drawStar(ctx); break;
      case "diamond": this.drawDiamond(ctx); break;
      case "cloud": this.drawCloud(ctx); break;
      case "raindrop": this.drawRaindrop(ctx); break;
      case "snowflake": this.drawSnowflake(ctx); break;
      case "bubble": this.drawBubble(ctx); break;
      case "glowOrb": this.drawGlowOrb(ctx); break;
      case "crystal": this.drawCrystal(ctx); break;
      case "confetti": this.drawConfetti(ctx); break;
      case "smoke": this.drawSmoke(ctx); break;
      case "waterBlob": this.drawWaterBlob(ctx); break;
      case "sparkle": this.drawSparkle(ctx); break;
      default: this.drawCircle(ctx);
    }
  }

  private drawButterfly(ctx: CanvasRenderingContext2D) {
    const s = this.size;
    const wingHue = this.hue;
    // Left wing
    ctx.fillStyle = `hsl(${wingHue}, 80%, 65%)`;
    ctx.beginPath();
    ctx.ellipse(-s * 0.5, 0, s * 0.6, s * 0.35, -0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = `hsl(${wingHue}, 90%, 40%)`;
    ctx.lineWidth = 1;
    ctx.stroke();
    // Right wing
    ctx.fillStyle = `hsl(${wingHue + 10}, 80%, 65%)`;
    ctx.beginPath();
    ctx.ellipse(s * 0.5, 0, s * 0.6, s * 0.35, 0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    // Body
    ctx.fillStyle = `hsl(${wingHue}, 30%, 30%)`;
    ctx.fillRect(-1.5, -s * 0.3, 3, s * 0.6);
  }

  private drawFlower(ctx: CanvasRenderingContext2D) {
    const s = this.size;
    const petals = 7;
    const petalHue = this.hue;
    for (let i = 0; i < petals; i++) {
      const angle = (Math.PI * 2 / petals) * i;
      ctx.save();
      ctx.rotate(angle);
      ctx.fillStyle = `hsl(${petalHue + i * 8}, 75%, ${60 + (i % 3) * 8}%)`;
      ctx.beginPath();
      ctx.ellipse(0, -s * 0.55, s * 0.25, s * 0.55, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    // Center
    const cg = ctx.createRadialGradient(0, 0, 0, 0, 0, s * 0.2);
    cg.addColorStop(0, "#fff");
    cg.addColorStop(0.5, `hsl(${petalHue}, 90%, 75%)`);
    cg.addColorStop(1, `hsl(${petalHue}, 90%, 45%)`);
    ctx.fillStyle = cg;
    ctx.beginPath();
    ctx.arc(0, 0, s * 0.2, 0, Math.PI * 2);
    ctx.fill();
  }

  private drawLeaf(ctx: CanvasRenderingContext2D) {
    const s = this.size;
    ctx.fillStyle = `hsl(${this.hue}, 70%, 40%)`;
    ctx.beginPath();
    ctx.ellipse(0, 0, s * 0.5, s * 0.18, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = `hsl(${this.hue}, 80%, 30%)`;
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.moveTo(0, -s * 0.15);
    ctx.lineTo(0, s * 0.15);
    ctx.stroke();
  }

  private drawHeart(ctx: CanvasRenderingContext2D) {
    const s = this.size;
    ctx.fillStyle = `hsl(${this.hue}, 80%, 65%)`;
    ctx.beginPath();
    const topCurveHeight = s * 0.3;
    ctx.moveTo(0, s * 0.4);
    ctx.bezierCurveTo(0, topCurveHeight, -s * 0.5, topCurveHeight, -s * 0.5, 0);
    ctx.bezierCurveTo(-s * 0.5, -s * 0.3, 0, -s * 0.5, 0, -s * 0.2);
    ctx.bezierCurveTo(0, -s * 0.5, s * 0.5, -s * 0.3, s * 0.5, 0);
    ctx.bezierCurveTo(s * 0.5, topCurveHeight, 0, topCurveHeight, 0, s * 0.4);
    ctx.fill();
  }

  private drawStar(ctx: CanvasRenderingContext2D) {
    const s = this.size;
    const spikes = 5;
    const outerR = s;
    const innerR = s * 0.4;
    ctx.fillStyle = `hsl(${this.hue}, 90%, 70%)`;
    ctx.beginPath();
    for (let i = 0; i < spikes * 2; i++) {
      const r = i % 2 === 0 ? outerR : innerR;
      const angle = (Math.PI * 2 / (spikes * 2)) * i - Math.PI / 2;
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
  }

  private drawDiamond(ctx: CanvasRenderingContext2D) {
    const s = this.size;
    ctx.fillStyle = `hsl(${this.hue}, 20%, 85%)`;
    ctx.beginPath();
    ctx.moveTo(0, -s);
    ctx.lineTo(s * 0.5, 0);
    ctx.lineTo(0, s);
    ctx.lineTo(-s * 0.5, 0);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = `hsl(${this.hue}, 30%, 60%)`;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  private drawCloud(ctx: CanvasRenderingContext2D) {
    const s = this.size;
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    const circles = [
      [0, 0, s * 0.5],
      [s * 0.4, -s * 0.15, s * 0.4],
      [-s * 0.4, -s * 0.1, s * 0.35],
      [s * 0.25, s * 0.15, s * 0.35],
      [-s * 0.25, s * 0.1, s * 0.3],
    ];
    circles.forEach(([cx, cy, r]) => {
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  private drawRaindrop(ctx: CanvasRenderingContext2D) {
    const s = this.size;
    ctx.fillStyle = `hsl(210, 70%, 70%)`;
    ctx.beginPath();
    ctx.moveTo(0, -s);
    ctx.bezierCurveTo(s * 0.4, -s * 0.3, s * 0.6, s * 0.2, 0, s);
    ctx.bezierCurveTo(-s * 0.6, s * 0.2, -s * 0.4, -s * 0.3, 0, -s);
    ctx.fill();
  }

  private drawSnowflake(ctx: CanvasRenderingContext2D) {
    const s = this.size;
    ctx.strokeStyle = "rgba(255,255,255,0.9)";
    ctx.lineWidth = 1.5;
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      ctx.save();
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -s);
      ctx.stroke();
      // Branch
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.5);
      ctx.lineTo(s * 0.15, -s * 0.65);
      ctx.moveTo(0, -s * 0.5);
      ctx.lineTo(-s * 0.15, -s * 0.65);
      ctx.stroke();
      ctx.restore();
    }
  }

  private drawBubble(ctx: CanvasRenderingContext2D) {
    const s = this.size;
    const g = ctx.createRadialGradient(-s * 0.2, -s * 0.25, s * 0.1, 0, 0, s);
    g.addColorStop(0, "rgba(255,255,255,0.8)");
    g.addColorStop(0.4, "rgba(200,230,255,0.3)");
    g.addColorStop(1, "rgba(150,200,255,0.1)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(0, 0, s, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.5)";
    ctx.lineWidth = 0.8;
    ctx.stroke();
  }

  private drawGlowOrb(ctx: CanvasRenderingContext2D) {
    const s = this.size;
    const g = ctx.createRadialGradient(0, 0, s * 0.1, 0, 0, s);
    g.addColorStop(0, "rgba(255,255,255,0.9)");
    g.addColorStop(0.5, this.color);
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(0, 0, s, 0, Math.PI * 2);
    ctx.fill();
  }

  private drawCrystal(ctx: CanvasRenderingContext2D) {
    const s = this.size;
    ctx.fillStyle = `hsl(${this.hue}, 30%, 80%)`;
    ctx.beginPath();
    ctx.moveTo(0, -s);
    ctx.lineTo(s * 0.4, -s * 0.2);
    ctx.lineTo(s * 0.5, s * 0.4);
    ctx.lineTo(0, s * 0.7);
    ctx.lineTo(-s * 0.5, s * 0.4);
    ctx.lineTo(-s * 0.4, -s * 0.2);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.6)";
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  private drawConfetti(ctx: CanvasRenderingContext2D) {
    const s = this.size;
    ctx.fillStyle = this.color;
    ctx.fillRect(-s * 0.6, -s * 0.2, s * 1.2, s * 0.4);
  }

  private drawSmoke(ctx: CanvasRenderingContext2D) {
    const s = this.size;
    const g = ctx.createRadialGradient(0, 0, 0, 0, 0, s);
    g.addColorStop(0, "rgba(180,180,180,0.5)");
    g.addColorStop(1, "rgba(180,180,180,0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(0, 0, s, 0, Math.PI * 2);
    ctx.fill();
  }

  private drawWaterBlob(ctx: CanvasRenderingContext2D) {
    const s = this.size;
    ctx.fillStyle = `hsla(${this.hue}, 70%, 55%, 0.6)`;
    ctx.beginPath();
    // Organic irregular blob
    const points = 8;
    for (let i = 0; i < points; i++) {
      const angle = (Math.PI * 2 / points) * i;
      const r = s * (0.6 + Math.sin(i * 2.5) * 0.4);
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
  }

  private drawSparkle(ctx: CanvasRenderingContext2D) {
    const s = this.size;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    for (let i = 0; i < 4; i++) {
      const angle = (Math.PI / 2) * i;
      const x = Math.cos(angle) * s;
      const y = Math.sin(angle) * s;
      ctx.lineTo(x, y);
      const bx = Math.cos(angle + 0.3) * s * 0.4;
      const by = Math.sin(angle + 0.3) * s * 0.4;
      ctx.lineTo(bx, by);
    }
    ctx.closePath();
    ctx.fill();
  }
}
