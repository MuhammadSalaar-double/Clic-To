import { Mic, MicOff } from "lucide-react"; // optional, can use emoji

interface VoiceInputProps {
  listening: boolean;
  onStart: () => void;
  onStop: () => void;
}

export default function VoiceInput({ listening, onStart, onStop }: VoiceInputProps) {
  return (
    <button
      onClick={listening ? onStop : onStart}
      className={`w-full flex items-center justify-center gap-2 rounded-full py-2 text-sm font-medium transition ${
        listening ? "bg-red-100 text-red-700" : "glass text-gray-700 hover:bg-white/80"
      }`}
    >
      {listening ? "🛑 Stop Voice" : "🎤 Voice Input"}
    </button>
  );
}