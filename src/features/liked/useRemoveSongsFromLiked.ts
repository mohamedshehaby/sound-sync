import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeSongFromLikedSongs } from "@/api/queries/client/apiLiked";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";
import { paths } from "@/utils/paths";

export function useRemoveSongsFromLiked() {
  const pathName = usePathname();
  const queryClient = useQueryClient();

  const { mutate: removeSongFromLiked } = useMutation({
    mutationFn: ({ songId, userId }: { songId: string; userId: string }) => {
      return removeSongFromLikedSongs(userId, songId);
    },
    onSuccess(_, { songId, userId }: { songId: string; userId: string }) {
      void queryClient.refetchQueries({
        queryKey: ["liked_song", userId, songId],
      });

      if (pathName === paths.liked()) {
        void queryClient.refetchQueries({
          queryKey: ["liked_songs", userId],
        });
      }
    },
    onError() {
      toast.dismiss();
      toast.error("Failed to remove song to liked songs!");
    },
  });

  return removeSongFromLiked;
}
