"use client";

import { useRef, useState } from "react";
import Spinner from "./Spinner";
import PlayIcon from "./PlayIcon";
import PauseIcon from "./PauseIcon";

export default function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  const seekBarRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [seekValue, setSeekValue] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  const updateVideoState = (playing) => {
    const video = videoRef.current;

    if (playing) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handlePlayPause = () => {
    const newIsPlaying = !isPlaying;

    setIsPlaying(newIsPlaying);
    updateVideoState(newIsPlaying);
  };

  const handleSeekChange = () => {
    const video = videoRef.current;
    const seekBar = seekBarRef.current;
    const newSeekValue = seekBar.value;

    setSeekValue(newSeekValue);
    video.currentTime = newSeekValue;
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    setSeekValue(video.currentTime);
  };
  const handleFullScreen = () => {
    const video = videoRef.current;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  };

  const togglePlaybackSpeed = () => {
    const video = videoRef.current;

    const playbackSpeeds = [0.5, 1, 1.5, 1.75, 2];
    const currentSpeedIndex = playbackSpeeds.indexOf(playbackSpeed);

    const newSpeed =
      currentSpeedIndex === playbackSpeeds.length - 1
        ? playbackSpeeds[0]
        : playbackSpeeds[currentSpeedIndex + 1];

    setPlaybackSpeed(newSpeed);
    video.playbackRate = newSpeed;
  };

  console.log(isPlaying, +seekValue);

  return (
    <>
      {src && (
        <div className="relative">
          <video
            ref={videoRef}
            width="100%"
            height="100%"
            autoPlay
            onTimeUpdate={handleTimeUpdate}
            onClick={handlePlayPause}
          >
            <source src={src} type="video/mp4" />
            Not supported.
          </video>
          <div className="flexCenter gap-2 absolute w-full top-[90%] bg-black text-white p-3">
            {isPlaying ? (
              <span onClick={handlePlayPause}>
                <PauseIcon />
              </span>
            ) : (
              <span onClick={handlePlayPause}>
                <PlayIcon />
              </span>
            )}
            <input
              ref={seekBarRef}
              type="range"
              min="0"
              max={videoRef.current?.duration || 0}
              value={seekValue}
              onChange={handleSeekChange}
              className="bg-red-500"
            />
            <span onClick={togglePlaybackSpeed} className="cursor-pointer">
              {playbackSpeed}x
            </span>
          </div>
        </div>
      )}

      {!src && <Spinner />}
    </>
  );
}
