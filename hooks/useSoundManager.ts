import { useRef, useCallback, useState } from "react";
import { SoundManager } from "@/lib/sounds/SoundManager";

export function useSoundManager() {
  const soundManager = useRef<SoundManager | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const initSound = () => {
    if (!soundManager.current) {
      soundManager.current = new SoundManager();
    }
  };

  const playSound = useCallback(() => {
    if (soundEnabled && soundManager.current) {
      soundManager.current.play();
    }
  }, [soundEnabled]);

  const setSoundType = useCallback((type: string) => {
    initSound();
    soundManager.current?.setActive(type);
  }, []);

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => !prev);
  }, []);

  return { playSound, setSoundType, soundEnabled, toggleSound };
}