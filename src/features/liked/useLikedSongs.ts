import { useQuery } from "@tanstack/react-query";
import { getLikedSongsByUserId } from "@/api/queries/client/apiLiked";

export function useLikedSongs(userId: string) {
  const {
    data: songs,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["liked_songs", userId],
    queryFn: () => {
      if (userId === "") return Promise.reject("User not logged in");
      return getLikedSongsByUserId(userId);
    },
  });

  return { songs, error, isLoading };
}
