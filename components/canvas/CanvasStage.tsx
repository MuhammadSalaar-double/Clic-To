import { forwardRef } from "react";

const CanvasStage = forwardRef<HTMLCanvasElement>((props, ref) => {
  return (
    <canvas
      ref={ref}
      className="w-full h-full bg-white rounded-2xl shadow-inner"
      style={{ touchAction: "none" }} // prevent scroll on touch
    />
  );
});

CanvasStage.displayName = "CanvasStage";
export default CanvasStage;
