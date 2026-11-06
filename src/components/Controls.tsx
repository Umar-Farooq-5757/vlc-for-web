import type React from "react";
import { useAppContext } from "../context/AppContext";
import { useEffect, useState } from "react";
import { IoPauseSharp, IoPlaySharp } from "react-icons/io5";
import formatTime from "../utils/formatTime";

const Controls: React.FC = () => {
  const { videoRef } = useAppContext();

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleLoadedMetadata = () => {
      setDuration(Number.isFinite(video.duration) ? video.duration : 0);
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [videoRef]);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const newTime = Number(e.target.value);
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="h-16 px-3">
      <div>
        <p>{formatTime(currentTime)}</p>
        {/* Progress Bar */}
        <input
          className="w-full"
          type="range"
          min={0}
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
        />
      </div>
      <div>
        <button onClick={togglePlay}>
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>
      </div>
    </div>
  );
};

export default Controls;
