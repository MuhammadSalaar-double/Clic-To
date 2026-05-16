"use client";
import { useState, useEffect } from "react";
import { AnimationEngine } from "@/lib/engine/AnimationEngine";

interface SettingsPanelProps {
  engine: AnimationEngine | null;
}

export default function SettingsPanel({ engine }: SettingsPanelProps) {
  const [speed, setSpeed] = useState(1);
  const [fadeTime, setFadeTime] = useState(2);
  const [size, setSize] = useState(1);
  const [color, setColor] = useState("#d4af37");

  useEffect(() => {
    if (engine) {
      engine.settings = { speed, fadeTime, size, color };
    }
  }, [speed, fadeTime, size, color, engine]);

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold uppercase text-gray-500">Settings</h3>
      <div>
        <label className="text-xs">Speed</label>
        <input type="range" min="0.5" max="2" step="0.1" value={speed} onChange={(e) => setSpeed(+e.target.value)} className="w-full" />
      </div>
      <div>
        <label className="text-xs">Fade Time</label>
        <input type="range" min="0.5" max="5" step="0.5" value={fadeTime} onChange={(e) => setFadeTime(+e.target.value)} className="w-full" />
      </div>
      <div>
        <label className="text-xs">Size</label>
        <input type="range" min="0.5" max="2" step="0.1" value={size} onChange={(e) => setSize(+e.target.value)} className="w-full" />
      </div>
      <div>
        <label className="text-xs">Color</label>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-full h-8" />
      </div>
    </div>
  );
}