"use client";
import React from "react";
import usePlayer from "@/features/player/usePlayer";
import { useGetSongById } from "@/features/player/useGetSongById";
import { useLoadSongFileUrl } from "@/features/songs/useLoadSongFileUrl";
import PlayerContent from "@/features/player/PlayerContent";

const Player = () => {
  const { ids, activeId } = usePlayer();
  const {
    song,
    isLoading: isGettingSong,
    error: songError,
  } = useGetSongById(activeId || "");

  const {
    songUrl,
    isLoading,
    error: urlError,
  } = useLoadSongFileUrl(song?.song_path || "");

  if (!song || !songUrl || !activeId) return null;

  return (
    <div className="fixed bottom-0 bg-black w-full py-2 md:py-3 xl:py-4  px-4 ">
      <PlayerContent song={song} songUrl={songUrl} />
    </div>
  );
};

export default Player;
