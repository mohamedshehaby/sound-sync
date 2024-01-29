import { useQuery } from "@tanstack/react-query";
import { getSongById } from "@/api/queries/client/apiSongs";

export function useGetSongById(songId: string) {
  const {
    error,
    isLoading,
    data: song,
  } = useQuery({
    queryKey: ["song", songId],
    queryFn: () => {
      if (!songId) return Promise.resolve(null);
      return getSongById(songId);
    },
    staleTime: Infinity,
  });

  return { isLoading, song, error };
}
