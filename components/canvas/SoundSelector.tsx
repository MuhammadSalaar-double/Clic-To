"use client";
interface SoundSelectorProps {
  onSelect: (sound: string) => void;
  enabled: boolean;
  onToggle: () => void;
}

const sounds = ["softBloom", "waterRipple", "ambientPad", "asmrClick", "relaxingPiano", "glassChime", "sparklePing", "windWash", "cosmicHum"];

export default function SoundSelector({ onSelect, enabled, onToggle }: SoundSelectorProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase text-gray-500">Sound</h3>
        <button onClick={onToggle} className={`text-xs px-3 py-1 rounded-full ${enabled ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-500"}`}>
          {enabled ? "ON" : "OFF"}
        </button>
      </div>
      {enabled && (
        <select
          onChange={(e) => onSelect(e.target.value)}
          className="w-full rounded-lg border-gray-200 bg-white p-2 text-sm"
          defaultValue="asmrClick"
        >
          {sounds.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      )}
    </div>
  );
}
