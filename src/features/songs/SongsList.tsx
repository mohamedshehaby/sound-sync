"use client";

import SongItem from "@/features/songs/SongItem";
import { Song } from "@/types/types";
import usePlayer from "@/features/player/usePlayer";

function SongsList({ songs }: { songs: Song[] }) {
  const player = usePlayer();

  if (songs.length === 0 || !songs)
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="mt-4  text-neutral-400">No songs available</div>
      </div>
    );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-col-8 gap-4 mt-4 ">
      {songs.map((song) => (
        <SongItem
          key={song.id}
          song={song}
          onClick={() => {
            player.onPlay(
              song.id,
              songs.map((song) => song.id),
            );
          }}
        />
      ))}
    </div>
  );
}

export default SongsList;
