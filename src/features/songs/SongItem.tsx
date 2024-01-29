"use client";

import { Song } from "@/types/types";
import Image from "next/image";
import { useLoadSongImageUrl } from "@/features/songs/useLoadSongImageUrl";
import PlayButton from "@/components/PlayButton";

interface SongItemProps {
  song: Song;
  onClick: () => void;
}

function SongItem({ song, onClick }: SongItemProps) {
  const imageUrl = useLoadSongImageUrl(song.image_path);

  return (
    <div
      onClick={onClick}
      className=" relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3 "
    >
      <div className=" relative aspect-square w-full h-full rounded-md overflow-hidden ">
        <Image
          className="group-hover:scale-105 transition-all duration-300"
          src={imageUrl || "/images/music-placeholder.png"}
          fill
          alt={`Cover of the song ${song.title}`}
          sizes={"100%"}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">{song.title}</p>
        <p className="text-neutral-400 text-sm  pb-4 w-full truncate ">
          By {song.author}
        </p>
      </div>
      <div className=" absolute bottom-24 right-5 ">
        <PlayButton />
      </div>
    </div>
  );
}

export default SongItem;
