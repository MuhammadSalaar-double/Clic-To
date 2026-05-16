import { useEffect, RefObject } from "react";
import { AnimationEngine } from "@/lib/engine/AnimationEngine";
import { EffectId } from "@/lib/types";

let lastTrailTime = 0;

export function useInputManager(
  canvasRef: RefObject<HTMLCanvasElement>,
  engine: AnimationEngine | null,
  playSound: () => void,
  activeEffects: EffectId[],
  mode: "single" | "multi"
) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !engine) return;

    const getPos = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handlePointerDown = (e: PointerEvent) => {
      const pos = getPos(e);
      const effect = activeEffects[0] || "sparkles";
      engine.addEffect(effect, pos);
      playSound();
    };

    const handlePointerMove = (e: PointerEvent) => {
      const now = performance.now();
      if (now - lastTrailTime < 50) return; // throttle
      lastTrailTime = now;
      const pos = getPos(e);
      engine.addEffect("cursorTrail", pos);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.length === 1) {
        engine.addEffect("customText", { x: 300, y: 300, text: e.key });
        playSound();
      }
    };

    let touchStartTime = 0;
    const handleTouchStart = () => { touchStartTime = Date.now(); };
    const handleTouchEnd = (e: TouchEvent) => {
      const duration = Date.now() - touchStartTime;
      if (duration > 500) {
        const rect = canvas.getBoundingClientRect();
        const x = e.changedTouches[0].clientX - rect.left;
        const y = e.changedTouches[0].clientY - rect.top;
        engine.addEffect("inkSplash", { x, y });
      }
    };

    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchend", handleTouchEnd);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEnd);
    };
  }, [canvasRef, engine, playSound, activeEffects, mode]);
}