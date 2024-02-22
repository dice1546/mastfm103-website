"use client";
import {
  ChevronLeft,
  ChevronRight,
  PauseCircleIcon,
  PlayCircleIcon,
  Volume1Icon,
  Volume2Icon,
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

interface Track {
  [key: string]: string;
}

const tracks: Track = {
  "Faisalabad Live 24/7": "http://110.39.6.122:8000/http://110.36.229.158:8004",
  "Karachi Live 24/7": "http://110.39.6.122:8000/http://110.36.229.158:8008",
  "Lahore Live 24/7": "http://110.39.6.122:8000/http://www.mast103.com",
  "Multan Live 24/7": "http://110.39.6.122:8000/http://110.36.229.158:8006",
};

const Player: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(Object.keys(tracks)[0]);

  const playPauseToggle = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const newTime = parseFloat(e.target.value);
      setCurrentTime(newTime);
      audioRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleTrackChange = (trackName: string) => {
    if (audioRef.current) {
      setCurrentTrack(trackName);
      setIsPlaying(true); // Pause the audio when changing tracks
      audioRef.current.pause();
      audioRef.current.src = tracks[trackName];
      audioRef.current.load();
    }
  };

  const handleForward = () => {
    const trackNames = Object.keys(tracks);
    const currentIndex = trackNames.indexOf(currentTrack);
    const nextIndex = (currentIndex + 1) % trackNames.length;
    handleTrackChange(trackNames[nextIndex]);
  };

  const handleBackward = () => {
    const trackNames = Object.keys(tracks);
    const currentIndex = trackNames.indexOf(currentTrack);
    const prevIndex =
      (currentIndex - 1 + trackNames.length) % trackNames.length;
    handleTrackChange(trackNames[prevIndex]);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = tracks[currentTrack];
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrack, isPlaying]);

  return (
    <div className="fixed bottom-0 sm:w-full lg:w-2/3 text-black mt-4 flex items-center justify-around">
      <div className="flex items-center">
        <button onClick={handleBackward}>
          <ChevronLeft className="lg:h-10 lg:w-10 xs:h-6 xs:h-6 mb-2 lg:ml-10 ml-10" />
        </button>
        <button onClick={playPauseToggle} className="mb-2">
          {isPlaying ? (
            <PauseCircleIcon className="xl:h-10 xl:w-10 xs:h-8 xs:w-8 text-blue-600" />
          ) : (
            <PlayCircleIcon className="xl:h-10 xl:w-10 xs:h-8 xs:w-8 text-blue-600" />
          )}
        </button>
        <button onClick={handleForward}>
          <ChevronRight className="lg:h-10 lg:w-10 xs:h-6 xs:h-6 mb-2" />
        </button>
      </div>
      <div className="flex-1 mx-4">
        <div className="text-sm">{currentTrack}</div>
        <input
          type="range"
          value={currentTime}
          max={duration || 0}
          onChange={handleSliderChange}
          className="w-full"
        />
        <div className="flex justify-between">
          <span className="text-sm">{formatTime(currentTime)}</span>
        </div>
      </div>
      <div className="flex items-center mb-2">
        <Volume1Icon className="lg:h-8 lg:w-8 xs:h-6 xs:h-6 mr-2" />
        <input
          type="range"
          value={volume}
          min="0"
          max="1"
          step="0.01"
          onChange={handleVolumeChange}
          className="w-16"
        />
        <Volume2Icon className="lg:h-8 lg:w-8 xs:h-6 xs:h-6 ml-2" />
      </div>
      <audio
        ref={audioRef}
        src={tracks[currentTrack]}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleForward}
      />
    </div>
  );
};

// Helper function to format time
const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default Player;
