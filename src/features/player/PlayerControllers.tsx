import React from "react";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import LoadingSpinner from "@/components/LoadingSpinner";
import Slider from "@/components/Slider";
import { formatTimeFromTotalSeconds } from "@/utils/functions";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";

interface PlayerControllersProps {
  onPlayNext: () => void;
  onPlayPrevious: () => void;
  togglePlayPause: () => void;
  pos: number;
  seek: (value: number) => void;
  duration: number;
  isReady: boolean;
  isPlaying: boolean;
}

const PlayerControllers = ({
  isPlaying,
  onPlayPrevious,
  onPlayNext,
  togglePlayPause,
  seek,
  pos,
  duration,
  isReady,
}: PlayerControllersProps) => {
  const Icon = isPlaying ? BsPauseFill : BsPlayFill;

  if (!isReady)
    return (
      <div className="w-full flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="  h-full md:flex flex-col justify-self-center justify-center items-center w-full max-w-[722px] gap-x-6 ">
      <div className="flex flex-row gap-1 justify-center items-center mb-2">
        <AiFillStepBackward
          onClick={onPlayPrevious}
          size={30}
          className=" text-neutral-400 cursor-pointer hover:text-white transition "
        />

        <div
          onClick={togglePlayPause}
          className=" flex items-center justify-center h-10 w-10 rounded-full bg-white p-1 cursor-pointer"
        >
          <Icon size={30} className="text-black" />
        </div>

        <AiFillStepForward
          onClick={onPlayNext}
          size={30}
          className=" text-neutral-400 cursor-pointer  hover:text-white  transition "
        />
      </div>

      <div className="flex flex-row gap-2 justify-center items-center ">
        <div className="w-80 md:w-36 lg:w-96">
          <Slider value={pos} onChange={seek} max={duration} step={1} />
        </div>
        <div className="space-x-1">
          <span className="text-sm md:text-base">
            {formatTimeFromTotalSeconds(Math.ceil(duration - pos))}
          </span>
          <span className="text-sm md:text-base">/</span>
          <span className="text-sm md:text-base">
            {formatTimeFromTotalSeconds(Math.ceil(duration))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlayerControllers;
