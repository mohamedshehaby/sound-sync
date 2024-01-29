import { useQuery } from "@tanstack/react-query";
import { getUserDetails } from "@/api/queries/client/apiAuth";

export function useGetUserDetails(userId: string | null) {
  const {
    isLoading: isGettingUserDetails,
    data: userDetails,
    error,
  } = useQuery({
    queryKey: ["userDetails", userId],
    queryFn: () => {
      if (!userId) return Promise.reject("User Not logged in");
      return getUserDetails(userId);
    },
    staleTime: Infinity,
  });

  return { userDetails, error, isGettingUserDetails };
}
