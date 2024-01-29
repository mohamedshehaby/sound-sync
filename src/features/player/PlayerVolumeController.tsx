import React from "react";
import Slider from "@/components/Slider";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

interface PlayerVolumeControllerProps {
  volume: number;
  setVolume: (value: number) => void;
}

const PlayerVolumeController = ({
  volume,
  setVolume,
}: PlayerVolumeControllerProps) => {
  const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;

  function toggleMute() {
    if (volume === 0) {
      setVolume(1);
    } else {
      setVolume(0);
    }
  }

  return (
    <>
      <VolumeIcon onClick={toggleMute} className="cursor-pointer" size={34} />
      <Slider value={volume} onChange={setVolume} />
    </>
  );
};

export default PlayerVolumeController;
