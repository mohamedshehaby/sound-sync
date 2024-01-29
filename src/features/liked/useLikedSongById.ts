import { useQuery } from "@tanstack/react-query";
import { getLikedSongById } from "@/api/queries/client/apiLiked";

export function useLikedSongById(songId: string, userId: string) {
  const {
    isLoading,
    data: likedSong,
    error,
  } = useQuery({
    queryKey: ["liked_song", userId, songId],
    queryFn: () => {
      if (userId === "") return Promise.reject("User not logged in");
      return getLikedSongById(userId, songId);
    },
  });

  return { likedSong, error };
}
