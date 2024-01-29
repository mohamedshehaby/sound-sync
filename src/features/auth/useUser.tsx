import { User } from "@supabase/gotrue-js";
import { UserDetails } from "@/types/types";
import { createContext, useContext } from "react";
import {
  useSessionContext,
  useUser as useSupaUser,
} from "@supabase/auth-helpers-react";
import { useGetUserDetails } from "@/features/auth/useGetUserDetails";

type UserContextType = {
  accessToken: string | null;
  user: User | null;
  userDetails: UserDetails | null | undefined;
  isLoading: boolean;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export interface props {
  [propName: string]: any;
}

export const MyUserContextProvider = (props: props) => {
  const {
    isLoading: isLoadingUser,
    session,
    supabaseClient: supabase,
  } = useSessionContext();

  const user = useSupaUser();

  const accessToken = session?.access_token ?? null;

  const { userDetails, error, isGettingUserDetails } = useGetUserDetails(
    user ? user.id : null,
  );

  const isLoadingData = isGettingUserDetails || isLoadingUser;

  let value: UserContextType;

  if (!error) {
    value = {
      accessToken,
      user,
      userDetails,
      isLoading: isLoadingUser || isLoadingData,
    };
  } else {
    value = {
      accessToken,
      user,
      userDetails: null,
      isLoading: isLoadingUser || isLoadingData,
    };
  }

  return <UserContext.Provider value={value} {...props} />;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserContextProvider");
  }
  return context;
};
