import { useEffect, useRef, useCallback, useState } from "react";
import { AnimationEngine } from "@/lib/engine/AnimationEngine";

export function useCanvasEngine(canvasRef: React.RefObject<HTMLCanvasElement>) {
  const engineRef = useRef<AnimationEngine | null>(null);
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    if (canvasRef.current) {
      const engine = new AnimationEngine(canvasRef.current);
      engine.init();
      engineRef.current = engine;
      setEngineReady(true);
      engine.start();

      return () => {
        engine.destroy();
        engineRef.current = null;
        setEngineReady(false);
      };
    }
  }, [canvasRef]);

  return { engine: engineRef.current, engineReady };
}
