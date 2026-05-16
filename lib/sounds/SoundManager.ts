export class SoundManager {
  private audioCtx: AudioContext | null = null;
  private initialized = false;
  activeSound: string = "asmrClick";

  private getContext(): AudioContext {
    if (!this.audioCtx) {
      const AC = window.AudioContext || (window as any).webkitAudioContext;
      if (!AC) throw new Error("No AudioContext");
      this.audioCtx = new AC();
    }
    // Resume aggressively on every call — this is the fix for mobile
    if (this.audioCtx.state === "suspended") {
      this.audioCtx.resume().catch(() => {});
    }
    return this.audioCtx;
  }

  setActive(type: string) {
    this.activeSound = type;
  }

  play(soundName?: string) {
    const name = soundName || this.activeSound;
    try {
      switch (name) {
        case "asmrClick": this.asmrClick(); break;
        case "softBloom": this.softBloom(); break;
        case "waterRipple": this.waterRipple(); break;
        case "ambientPad": this.ambientPad(); break;
        case "relaxingPiano": this.relaxingPiano(); break;
        case "glassChime": this.glassChime(); break;
        case "sparklePing": this.sparklePing(); break;
        case "windWash": this.windWash(); break;
        case "cosmicHum": this.cosmicHum(); break;
        default: this.asmrClick();
      }
    } catch (e) {
      // Silently fail — audio is optional
    }
  }

  private asmrClick() {
    const ctx = this.getContext();
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(1400, t);
    osc.frequency.exponentialRampToValueAtTime(500, t + 0.1);
    gain.gain.setValueAtTime(0.15, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(t); osc.stop(t + 0.15);
  }

  private softBloom() {
    const ctx = this.getContext();
    const t = ctx.currentTime;
    [0, 0.1, 0.2].forEach((d, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = 350 + i * 250;
      gain.gain.setValueAtTime(0.07, t + d);
      gain.gain.exponentialRampToValueAtTime(0.001, t + d + 0.6);
      osc.connect(gain); gain.connect(ctx.destination);
      osc.start(t + d); osc.stop(t + d + 0.6);
    });
  }

  private waterRipple() {
    const ctx = this.getContext();
    const t = ctx.currentTime;
    for (let i = 0; i < 8; i++) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = 700 + Math.random() * 500;
      gain.gain.setValueAtTime(0.04, t + i * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.07 + 0.35);
      osc.connect(gain); gain.connect(ctx.destination);
      osc.start(t + i * 0.07); osc.stop(t + i * 0.07 + 0.35);
    }
  }

  private ambientPad() {
    const ctx = this.getContext();
    const t = ctx.currentTime;
    [261.63, 329.63, 392.0].forEach((f) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = f;
      gain.gain.setValueAtTime(0.05, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 2.5);
      osc.connect(gain); gain.connect(ctx.destination);
      osc.start(t); osc.stop(t + 2.5);
    });
  }

  private relaxingPiano() {
    const ctx = this.getContext();
    const t = ctx.currentTime;
    const notes = [523.25, 587.33, 659.25, 698.46, 783.99];
    notes.forEach((f, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = f;
      gain.gain.setValueAtTime(0.1, t + i * 0.18);
      gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.18 + 1.5);
      osc.connect(gain); gain.connect(ctx.destination);
      osc.start(t + i * 0.18); osc.stop(t + i * 0.18 + 1.5);
    });
  }

  private glassChime() {
    const ctx = this.getContext();
    const t = ctx.currentTime;
    [1046.5, 1318.5, 1568.0].forEach((f, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = f;
      gain.gain.setValueAtTime(0.08, t + i * 0.15);
      gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.15 + 1.2);
      osc.connect(gain); gain.connect(ctx.destination);
      osc.start(t + i * 0.15); osc.stop(t + i * 0.15 + 1.2);
    });
  }

  private sparklePing() {
    const ctx = this.getContext();
    const t = ctx.currentTime;
    for (let i = 0; i < 10; i++) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = 1800 + Math.random() * 3500;
      gain.gain.setValueAtTime(0.03, t + i * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.05 + 0.2);
      osc.connect(gain); gain.connect(ctx.destination);
      osc.start(t + i * 0.05); osc.stop(t + i * 0.05 + 0.2);
    }
  }

  private windWash() {
    const ctx = this.getContext();
    const t = ctx.currentTime;
    const len = ctx.sampleRate * 2;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
    }
    const src = ctx.createBufferSource();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    src.buffer = buf;
    filter.type = "lowpass";
    filter.frequency.value = 600;
    gain.gain.setValueAtTime(0.1, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 2);
    src.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
    src.start(t); src.stop(t + 2);
  }

  private cosmicHum() {
    const ctx = this.getContext();
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(60, t);
    osc.frequency.linearRampToValueAtTime(180, t + 3);
    gain.gain.setValueAtTime(0.08, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 3);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(t); osc.stop(t + 3);
  }
}
