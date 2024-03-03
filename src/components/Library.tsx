"use client";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/stores/useAuthModal";
import { useUser } from "@/features/auth/useUser";
import useUploadModal from "@/stores/useUploadModal";
import ListPlaceHolder from "@/components/ListPlaceHolder";
import { useSongsByUserId } from "@/features/songs/useSongsByUserId";
import MediaItem from "@/components/MediaItem";
import usePlayer from "@/features/player/usePlayer";

export default function Library() {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();
  const { isLoading, songs } = useSongsByUserId(user?.id);
  const player = usePlayer();

  const onClick = () => {
    if (!user) {
      authModal.onOpen();
      return;
    }

    uploadModal.onOpen();
  };

  if (isLoading) return <ListPlaceHolder />;

  return (
    <div className="flex flex-col ">
      <div className="flex items-center  px-5 pt-4 ">
        <div className="items-center flex gap-x-2 ">
          <TbPlaylist size={22} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-sm">Your library </p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="text-neutral-400 ml-auto hover:text-white cursor-pointer transition-all"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {!user ? (
          <p> Please login to view your library </p>
        ) : !songs ? (
          <p> No songs found in your library </p>
        ) : (
          songs?.map((song) => (
            <MediaItem
              key={song.id}
              song={song}
              onClick={() => {
                player.onPlay(
                  song.id,
                  songs.map((song) => song.id),
                );
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}
