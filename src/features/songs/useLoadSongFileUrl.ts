import { useQuery } from "@tanstack/react-query";
import { getSongUrl } from "@/api/queries/client/apiSongs";

export function useLoadSongFileUrl(songPath: string) {
  const {
    data: songUrl,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["songUrl", songPath],
    queryFn: () => {
      if (!songPath) return Promise.resolve(null);
      return getSongUrl(songPath);
    },
    staleTime: Infinity,
  });

  return { isLoading, songUrl, error };
}
