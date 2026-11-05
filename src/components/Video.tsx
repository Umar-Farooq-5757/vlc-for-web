import type React from "react";
import { useState } from "react";

const Video: React.FC = () => {
  const [video, setVideo] = useState<string | null>(null);
  // console.log(video);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Create a local object URL for the uploaded video file
      const fileUrl = URL.createObjectURL(file);
      setVideo(fileUrl);
    }
  };

  return (
    <>
      {!video && (
        <div className="grow border-y-2 border-[#ddd] flex items-center justify-center px-3">
          <label className="w-1/2 h-1/3 bg-[#ededed] text-[#444] border-[1.5px] border-dashed border-[#bbb]">
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
        </div>
      )}
      {video && (
        <div className="grow border-y-2 border-[#ddd] flex items-center justify-center">
          <video
            src={video}
            playsInline
            controls={false}
            className="w-full h-full object-contain bg-black"
          />
        </div>
      )}
    </>
  );
};

export default Video;
