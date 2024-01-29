"use client";

import React, { useEffect } from "react";

import LikeButton from "../../components/LikeButton";
import MediaItem from "../../components/MediaItem";
import { Song } from "@/types/types";
import usePlayer from "@/features/player/usePlayer";
import { useAudioPlayer } from "react-use-audio-player";
import { useAudioTime } from "@/features/player/useAudioTime";
import PlayerVolumeController from "@/features/player/PlayerVolumeController";
import PlayerControllers from "@/features/player/PlayerControllers";

interface PlayerContentProps {
  song: Song;
  songUrl: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({ song, songUrl }) => {
  const player = usePlayer();

  const {
    load,
    setVolume,
    volume,
    getPosition,
    seek,
    duration,
    cleanup,
    isReady,
    playing,
    togglePlayPause,
  } = useAudioPlayer();

  const pos = useAudioTime(getPosition);

  useEffect(() => {
    load(songUrl, {
      autoplay: true,
      format: "mp3",
    });

    return cleanup;
  }, [cleanup, load, songUrl]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-2 h-full">
      <div className="flex w-full justify-start">
        <div className="flex items-center gap-x-4">
          <MediaItem song={song} />
          <LikeButton songId={song.id} />
        </div>
      </div>

      <PlayerControllers
        onPlayNext={player.onPlayNext}
        onPlayPrevious={player.onPlayPrevious}
        togglePlayPause={togglePlayPause}
        pos={pos}
        seek={seek}
        duration={duration}
        isReady={isReady}
        isPlaying={playing}
      />

      <div className="hidden md:flex w-full justify-end pr-2">
        <div className="flex items-center gap-x-2 w-[120px]">
          <PlayerVolumeController volume={volume} setVolume={setVolume} />
        </div>
      </div>
    </div>
  );
};

export default PlayerContent;
