import type React from "react";
import { useState } from "react";

const Video: React.FC = () => {
  const [video, setVideo] = useState("");
  return (
    <>
      {!video && (
        <div className="grow border-y-2 border-[#ddd] flex items-center justify-center">
          <label className="w-1/2 h-1/3 bg-[#ededed] text-[#444] border-[1.5px] border-dashed border-[#bbb]">
            <div className="flex items-center justify-center flex-col h-full">
              <p>No video selected</p>
              <p>Click here to open a video</p>
            </div>
            <input className="hidden" type="file" />
          </label>
        </div>
      )}
    </>
  );
};

export default Video;
