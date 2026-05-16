"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import CanvasStage from "@/components/canvas/CanvasStage";
import EffectSelector from "@/components/canvas/EffectSelector";
import SettingsPanel from "@/components/canvas/SettingsPanel";
import SoundSelector from "@/components/canvas/SoundSelector";
import ModeToggle from "@/components/canvas/ModeToggle";
import ExportControls from "@/components/canvas/ExportControls";
import ImageUploader from "@/components/canvas/ImageUploader";
import VoiceInput from "@/components/canvas/VoiceInput";
import CursorGlow from "@/components/canvas/CursorGlow";
import { useCanvasEngine } from "@/hooks/useCanvasEngine";
import { useInputManager } from "@/hooks/useInputManager";
import { useSoundManager } from "@/hooks/useSoundManager";
import { useVoiceInput } from "@/hooks/useVoiceInput";
import { useTheme } from "@/hooks/useTheme";
import { EffectId } from "@/lib/types";

export default function CanvasPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedEffects, setSelectedEffects] = useState<EffectId[]>(["sparkles"]);
  const [mode, setMode] = useState<"single" | "multi">("single");
  const { theme, toggleTheme } = useTheme();

  const { engine, engineReady } = useCanvasEngine(canvasRef);
  const { playSound, setSoundType, soundEnabled, toggleSound } = useSoundManager();
  const { transcript, listening, startListening, stopListening } = useVoiceInput();

  // Input manager only active when engine ready
  useInputManager(canvasRef, engineReady ? engine : null, playSound, selectedEffects, mode);

  // Apply selected effects
  useEffect(() => {
    if (engine && engineReady) {
      engine.setActiveEffects(mode === "single" ? [selectedEffects[0]] : selectedEffects);
    }
  }, [selectedEffects, mode, engine, engineReady]);

  // Handle voice transcript as a custom text effect
  useEffect(() => {
    if (transcript && engine && engineReady) {
      engine.addEffect("customText", { x: window.innerWidth / 2, y: window.innerHeight / 2, text: transcript });
    }
  }, [transcript, engine, engineReady]);

  return (
    <div className={`min-h-screen ${theme === "neon" ? "bg-gray-900 text-white" : "bg-white text-luxury-charcoal"}`}>
      <CursorGlow />
      <div className="flex flex-col lg:flex-row">
        <aside className="w-full lg:w-80 p-6 glass m-4 space-y-6">
          <h2 className="font-serif text-2xl">Effects</h2>
          <EffectSelector selected={selectedEffects} onChange={setSelectedEffects} mode={mode} />
          <ModeToggle mode={mode} onChange={setMode} />
          <SettingsPanel engine={engine} />
          <SoundSelector onSelect={setSoundType} enabled={soundEnabled} onToggle={toggleSound} />
          <ImageUploader onImage={(img) => engine?.setCustomImage(img)} />
          <VoiceInput listening={listening} onStart={startListening} onStop={stopListening} />
          <ExportControls canvasRef={canvasRef} />
          <button
            onClick={toggleTheme}
            className="w-full rounded-full bg-luxury-gold py-2 text-white hover:bg-amber-600"
          >
            {theme === "light" ? "Neon Mode" : "Light Mode"}
          </button>
        </aside>
        <main className="relative flex-1 m-4 rounded-2xl overflow-hidden shadow-2xl">
          <CanvasStage ref={canvasRef} />
        </main>
      </div>
    </div>
  );
}
