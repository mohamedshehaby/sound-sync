import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addSongToLikedSongs } from "@/api/queries/client/apiLiked";
import toast from "react-hot-toast";

export function useAddSongToLiked() {
  const queryClient = useQueryClient();

  const { mutate: addSongToLiked } = useMutation({
    mutationFn: ({ songId, userId }: { songId: string; userId: string }) => {
      return addSongToLikedSongs(userId, songId);
    },
    onSuccess(_, { songId, userId }: { songId: string; userId: string }) {
      void queryClient.refetchQueries({
        queryKey: ["liked_song", userId, songId],
      });
    },
    onError() {
      toast.dismiss();
      toast.error("Failed to add song to liked songs!");
    },
  });

  return addSongToLiked;
}
