"use client";
import React from "react";
import { useUser } from "@/features/auth/useUser";
import { useLikedSongs } from "@/features/liked/useLikedSongs";
import MediaItem from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";
import ListPlaceHolder from "@/components/ListPlaceHolder";
import usePlayer from "@/features/player/usePlayer";

const LikedSongsList = () => {
  const { user } = useUser();
  const { isLoading, songs, error } = useLikedSongs(!user ? "" : user.id);
  const player = usePlayer();

  if (!user)
    return (
      <div className=" flex flex-col gap-y-2 w-full px-6 text-neutral-400 ">
        Please login to see liked songs.
      </div>
    );

  if (isLoading) return <ListPlaceHolder />;

  if (songs?.length === 0) {
    return (
      <div className=" flex flex-col gap-y-2 w-full px-6 text-neutral-400 ">
        No liked songs.
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-y-2 w-full p-6">
      {songs?.map((song: any) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem
              onClick={() => {
                player.onPlay(
                  song.id,
                  songs.map((song) => song.id),
                );
              }}
              song={song}
            />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default LikedSongsList;
