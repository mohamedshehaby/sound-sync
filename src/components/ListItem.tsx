"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { FaPlay } from "react-icons/fa";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

export default function ListItem({ image, name, href }: ListItemProps) {
  const router = useRouter();

  const onClick = () => {
    // Todo::  Add Auth before push
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      className="relative   group flex items-center rounded-md overflow-hidden gap-x-4 hover:bg-neutral-100/20 bg-neutral-100/10 cursor-pointer pr-4 transition"
    >
      <div className="relative min-h-[4rem] min-w-[4rem]">
        <Image
          src={image}
          fill
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          sizes={"100%"}
          alt={`image of ${name}`}
        />
      </div>
      <p className="font-medium truncate py-5 ">{name}</p>
      <div className="p-4 z-0   absolute transition  opacity-0 rounded-full flex items-center justify-center bg-green-500 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110 ">
        <FaPlay className="text-black" />
      </div>
    </button>
  );
}
