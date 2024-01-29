"use client";

import { Song } from "@/types/types";
import { useLoadSongImageUrl } from "@/features/songs/useLoadSongImageUrl";
import Image from "next/image";

interface MediaItemProps {
  song: Song;
  onClick?: () => void;
}

function MediaItem({ song, onClick }: MediaItemProps) {
  const imageUrl = useLoadSongImageUrl(song.image_path);

  return (
    <div
      onClick={onClick}
      className="
        flex
        items-center
        gap-x-3
        cursor-pointer
        hover:bg-neutral-800/50
        w-full
        p-2
        rounded-md
      "
    >
      <div
        className="
          relative
          rounded-md
          min-h-[48px]
          min-w-[48px]
          overflow-hidden
        "
      >
        <Image
          fill
          src={imageUrl || "/images/music-placeholder.png"}
          alt="MediaItem"
          className="object-cover"
          sizes={"100%"}
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{song.title}</p>
        <p className="text-neutral-400 text-sm truncate">By {song.author}</p>
      </div>
    </div>
  );
}

export default MediaItem;
