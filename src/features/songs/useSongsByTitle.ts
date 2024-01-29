import { useQuery } from "@tanstack/react-query";
import { getSongs, getSongsByTitle } from "@/api/queries/client/apiSongs";
import { useSearchParams } from "next/navigation";

export function useSongsByTitle() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");

  const { isPending: isLoading, data: songs } = useQuery({
    queryKey: ["songs", title],
    queryFn: () => {
      if (title) {
        return getSongsByTitle(title);
      } else {
        return getSongs();
      }
    },
  });

  return { isLoading, songs };
}
