"use client";
interface ModeToggleProps {
  mode: "single" | "multi";
  onChange: (mode: "single" | "multi") => void;
}

export default function ModeToggle({ mode, onChange }: ModeToggleProps) {
  return (
    <div className="flex rounded-full bg-gray-100 p-1">
      <button
        className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
          mode === "single" ? "bg-white shadow text-luxury-gold" : "text-gray-500"
        }`}
        onClick={() => onChange("single")}
      >
        Single Effect
      </button>
      <button
        className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
          mode === "multi" ? "bg-white shadow text-luxury-gold" : "text-gray-500"
        }`}
        onClick={() => onChange("multi")}
      >
        Multiple
      </button>
    </div>
  );
}
