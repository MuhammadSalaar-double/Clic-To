"use client";
import { forwardRef } from "react";

const CanvasStage = forwardRef<HTMLCanvasElement>((_props, ref) => {
  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full"
      style={{ touchAction: "none" }}
    />
  );
});

CanvasStage.displayName = "CanvasStage";
export default CanvasStage;
