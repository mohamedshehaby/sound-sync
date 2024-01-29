import { useQuery } from "@tanstack/react-query";
import { getSongsByUserId } from "@/api/queries/client/apiSongs";

export function useSongsByUserId(userId: string | undefined) {
  const { isPending: isLoading, data: songs } = useQuery({
    queryKey: ["library", userId],
    queryFn: () => {
      if (userId) {
        return getSongsByUserId(userId);
      }
    },
  });

  return { isLoading, songs };
}
