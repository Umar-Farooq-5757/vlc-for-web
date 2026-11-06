import type React from "react";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

const Video: React.FC = () => {
  const { videoRef } = useAppContext();
  const [video, setVideo] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (video) URL.revokeObjectURL(video);
    };
  }, [video]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setVideo(fileUrl);
    }
    e.target.value = "";
  };

  return (
    <div className="grow min-h-0 border-y-2 border-[#ddd] flex items-center justify-center relative">
      {!video && (
        <label className="w-1/2 h-1/3 bg-[#ddd] text-[#444] border-[1.5px] border-dashed border-[#bbb] cursor-pointer">
          <div className="flex items-center justify-center flex-col h-full">
            <p>No video selected</p>
            <p>Click here to open a video</p>
          </div>

          <input
            className="hidden"
            type="file"
            accept="video/*"
            onChange={handleFileChange}
          />
        </label>
      )}
      <video
        ref={videoRef}
        src={video ?? undefined}
        playsInline
        controls={false}
        className={`w-full h-full object-contain bg-black ${
          video ? "block" : "hidden"
        }`}
      />
    </div>
  );
};

export default Video;
