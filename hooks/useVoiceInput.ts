import { useState, useRef, useCallback } from "react";

export function useVoiceInput() {
  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const initRecognition = () => {
    if (typeof window !== "undefined" && !recognitionRef.current) {
      const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.onresult = (event: any) => {
          const last = event.results[event.results.length - 1][0].transcript;
          setTranscript(last);
          setListening(false);
        };
        recognitionRef.current.onerror = () => setListening(false);
        recognitionRef.current.onend = () => setListening(false);
      }
    }
  };

  const startListening = useCallback(() => {
    initRecognition();
    if (recognitionRef.current) {
      setListening(true);
      recognitionRef.current.start();
    }
  }, []);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setListening(false);
  }, []);

  return { transcript, listening, startListening, stopListening };
}