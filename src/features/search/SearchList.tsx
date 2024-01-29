"use client";
import { useSongsByTitle } from "@/features/songs/useSongsByTitle";
import ListPlaceHolder from "@/components/ListPlaceHolder";
import MediaItem from "@/components/MediaItem";
import { Song } from "@/types/types";
import LikeButton from "@/components/LikeButton";
import usePlayer from "@/features/player/usePlayer";

function SearchList() {
  const { isLoading, songs } = useSongsByTitle();
  const player = usePlayer();

  if (isLoading) return <ListPlaceHolder />;

  if (songs?.length === 0 || !songs) {
    return (
      <div className=" flex flex-col gap-y-2 w-full px-6 text-neutral-400 ">
        No songs found.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((song: Song) => (
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
}

export default SearchList;
