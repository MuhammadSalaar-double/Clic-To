import { useRef, useState } from "react";

export default function ExportControls({ canvasRef }: { canvasRef: React.RefObject<HTMLCanvasElement> }) {
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const downloadPNG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "clic-to-art.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  const startRecording = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const stream = canvas.captureStream(30);
    const recorder = new MediaRecorder(stream, { mimeType: "video/webm" });
    const chunks: BlobPart[] = [];
    recorder.ondataavailable = (e) => chunks.push(e.data);
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "clic-to-recording.webm";
      a.click();
    };
    recorder.start();
    mediaRecorderRef.current = recorder;
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  return (
    <div className="flex flex-col gap-2">
      <button onClick={downloadPNG} className="glass px-4 py-2 rounded-full text-sm">
        📸 Export PNG
      </button>
      {!recording ? (
        <button onClick={startRecording} className="glass px-4 py-2 rounded-full text-sm">
          ⏺ Record Video
        </button>
      ) : (
        <button onClick={stopRecording} className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm">
          ⏹ Stop Recording
        </button>
      )}
    </div>
  );
}