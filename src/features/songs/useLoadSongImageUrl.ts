import { useQuery } from "@tanstack/react-query";
import { getSongImageUrl } from "@/api/queries/client/apiSongs";

export const useLoadSongImageUrl = (imagePath: string) => {
  const { data: imageUrl } = useQuery({
    queryKey: ["imageUrl", imagePath],
    queryFn: () => getSongImageUrl(imagePath),
    staleTime: Infinity,
  });
  return imageUrl;
};
