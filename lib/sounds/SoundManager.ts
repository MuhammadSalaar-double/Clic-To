export class SoundManager {
  private audioCtx: AudioContext | null = null;
  activeSound: string = "asmrClick";

  private getContext(): AudioContext {
    if (!this.audioCtx) {
      this.audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    // Browsers require explicit resume after user gesture
    if (this.audioCtx.state === "suspended") {
      this.audioCtx.resume().catch((e) =>
        console.warn("Audio context resume failed", e)
      );
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
        case "asmrClick":
          this.playTone(800, 0.1);
          break;
        case "softBloom":
          this.playTone(400, 0.3, "sine");
          break;
        case "glassChime":
          this.playChime();
          break;
        default:
          this.playTone(600, 0.15);
      }
    } catch (e) {
      /* audio context may not be available */
    }
  }

  private playTone(
    freq: number,
    duration: number,
    type: OscillatorType = "sine"
  ) {
    const ctx = this.getContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      ctx.currentTime + duration
    );
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  }

  private playChime() {
    const ctx = this.getContext();
    [523.25, 659.25, 783.99].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.05, ctx.currentTime + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(
        0.001,
        ctx.currentTime + i * 0.1 + 0.3
      );
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.1);
      osc.stop(ctx.currentTime + i * 0.1 + 0.3);
    });
  }
}
