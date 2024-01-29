"use client";

import { useLikedSongById } from "@/features/liked/useLikedSongById";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import useAuthModal from "@/stores/useAuthModal";
import { useUser } from "@/features/auth/useUser";
import { useAddSongToLiked } from "@/features/liked/useAddSongToLiked";
import { useRemoveSongsFromLiked } from "@/features/liked/useRemoveSongsFromLiked";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface LikeButtonProps {
  songId: string;
}

function LikeButton({ songId }: LikeButtonProps) {
  const { user } = useUser();
  const { likedSong, error } = useLikedSongById(songId, !user ? "" : user.id);
  const [isLiked, setIsLiked] = useState(false);

  const authModal = useAuthModal();
  const addSongToLiked = useAddSongToLiked();
  const removeSongFromLiked = useRemoveSongsFromLiked();
  const router = useRouter();
  const Icon = isLiked ? AiFillHeart : AiOutlineHeart;

  useEffect(() => {
    if (likedSong && !error) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [error, likedSong]);

  function handleLike() {
    if (!user) {
      authModal.onOpen();
      return;
    }

    const variables = {
      songId,
      userId: !user ? "" : user.id,
    };

    if (isLiked) {
      removeSongFromLiked(variables, {
        onSuccess: () => {
          setIsLiked(false);
        },
      });
    } else {
      addSongToLiked(variables, {
        onSuccess: () => {
          setIsLiked(true);
        },
      });
    }

    router.refresh();
  }

  return (
    <button
      className="
        cursor-pointer
        hover:opacity-75
        transition
      "
      onClick={handleLike}
    >
      <Icon color={isLiked ? "#22c55e" : "white"} size={25} />
    </button>
  );
}

export default LikeButton;
