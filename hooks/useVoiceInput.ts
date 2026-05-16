"use client";
import { useState, useRef, useCallback } from "react";

export function useVoiceInput() {
  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);
  // Using any because SpeechRecognition is not in standard TypeScript types
  const recognitionRef = useRef<any>(null);

  const initRecognition = useCallback(() => {
    if (typeof window === "undefined") return null;
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return null;

    const rec = new SpeechRecognition();
    rec.continuous = false;
    rec.interimResults = false;

    rec.onresult = (event: any) => {
      const last = event.results[event.results.length - 1];
      if (last) {
        setTranscript(last[0].transcript);
      }
      setListening(false);
    };

    rec.onerror = () => {
      setListening(false);
      recognitionRef.current = null;
    };

    rec.onend = () => {
      setListening(false);
    };

    return rec;
  }, []);

  const startListening = useCallback(() => {
    const rec = initRecognition();
    if (!rec) return;

    recognitionRef.current = rec;

    try {
      rec.start();
      setListening(true);
    } catch (err) {
      console.warn("Speech recognition start failed", err);
      recognitionRef.current = null;
      setListening(false);
    }
  }, [initRecognition]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setListening(false);
  }, []);

  return { transcript, listening, startListening, stopListening };
}
