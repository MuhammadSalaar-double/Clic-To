import { useRef } from "react";

interface ImageUploaderProps {
  onImage: (img: HTMLImageElement) => void;
}

export default function ImageUploader({ onImage }: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        onImage(img);
        URL.revokeObjectURL(url);
      };
      img.src = url;
    }
  };

  return (
    <div>
      <button
        onClick={() => inputRef.current?.click()}
        className="glass px-4 py-2 rounded-full text-sm w-full"
      >
        Upload Image
      </button>
      <input ref={inputRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
    </div>
  );
}