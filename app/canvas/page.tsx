"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CanvasStage from "@/components/canvas/CanvasStage";
import EffectSelector from "@/components/canvas/EffectSelector";
import SettingsPanel from "@/components/canvas/SettingsPanel";
import SoundSelector from "@/components/canvas/SoundSelector";
import ModeToggle from "@/components/canvas/ModeToggle";
import ExportControls from "@/components/canvas/ExportControls";
import ImageUploader from "@/components/canvas/ImageUploader";
import VoiceInput from "@/components/canvas/VoiceInput";
import { useCanvasEngine } from "@/hooks/useCanvasEngine";
import { useInputManager } from "@/hooks/useInputManager";
import { useSoundManager } from "@/hooks/useSoundManager";
import { useVoiceInput } from "@/hooks/useVoiceInput";
import { useTheme } from "@/hooks/useTheme";
import { EffectId } from "@/lib/types";

export default function CanvasPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedEffects, setSelectedEffects] = useState<EffectId[]>(["sparkles"]);
  const [mode, setMode] = useState<"single" | "multi">("multi");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [interactionCount, setInteractionCount] = useState(0);
  const { theme, toggleTheme } = useTheme();

  const { engine, engineReady } = useCanvasEngine(canvasRef);
  const { playSound, setSoundType, soundEnabled, toggleSound } = useSoundManager();
  const { transcript, listening, startListening, stopListening } = useVoiceInput();

  // Count interactions and auto‑hide sidebar after 3 taps
  const onInteraction = useCallback(() => {
    playSound();
    setInteractionCount((c) => c + 1);
    if (interactionCount >= 2) {
      setSidebarOpen(false);
    }
  }, [playSound, interactionCount]);

  useInputManager(canvasRef, engineReady ? engine : null, onInteraction, selectedEffects, mode);

  useEffect(() => {
    if (engine && engineReady) {
      const active =
        mode === "single"
          ? [selectedEffects[0] || "sparkles"]
          : selectedEffects;
      engine.setActiveEffects(active);
    }
  }, [selectedEffects, mode, engine, engineReady]);

  useEffect(() => {
    if (transcript && engine && engineReady) {
      engine.addEffect("customText", {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        text: transcript,
      });
    }
  }, [transcript, engine, engineReady]);

  return (
    <div className="fixed inset-0 overflow-hidden bg-black">
      {/* Canvas fills the entire screen */}
      <CanvasStage ref={canvasRef} />

      {/* Floating toggle button – always visible */}
      <button
        onClick={() => setSidebarOpen((o) => !o)}
        className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/80 backdrop-blur-xl shadow-lg flex items-center justify-center text-lg hover:bg-white transition-all"
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? "✕" : "☰"}
      </button>

      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 left-4 z-50 px-4 py-2 rounded-full bg-white/80 backdrop-blur-xl shadow-lg text-sm font-medium hover:bg-white transition-all"
      >
        {theme === "light" ? "🌙 Neon" : "☀️ Light"}
      </button>

      {/* Interaction hint – fades out after first click */}
      <AnimatePresence>
        {interactionCount === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 flex items-center justify-center pointer-events-none"
          >
            <p className="text-white/60 text-2xl font-serif tracking-wide">
              tap anywhere to begin
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating sidebar – slides in from left */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -400, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed left-4 top-20 bottom-4 z-40 w-80 glass overflow-y-auto p-6 space-y-5 shadow-2xl"
          >
            <h2 className="font-serif text-2xl text-luxury-charcoal">Effects</h2>
            <ModeToggle mode={mode} onChange={setMode} />
            <EffectSelector
              selected={selectedEffects}
              onChange={setSelectedEffects}
              mode={mode}
            />
            <SettingsPanel engine={engine} />
            <SoundSelector
              onSelect={setSoundType}
              enabled={soundEnabled}
              onToggle={toggleSound}
            />
            <ImageUploader onImage={(img) => engine?.setCustomImage(img)} />
            <VoiceInput
              listening={listening}
              onStart={startListening}
              onStop={stopListening}
            />
            <ExportControls canvasRef={canvasRef} />
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
