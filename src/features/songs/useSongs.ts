import { useQuery } from "@tanstack/react-query";
import { getSongs } from "@/api/queries/client/apiSongs";

export function useSongs() {
  const { data: songs, isPending: isLoading } = useQuery({
    queryKey: ["songs"],
    queryFn: getSongs,
  });

  return {
    songs,
    isLoading,
  };
}
