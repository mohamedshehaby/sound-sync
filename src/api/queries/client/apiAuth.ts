import supabaseBrowserClient from "@/api/supbaseClients/supabaseBrowserClient";
import { UserDetails } from "@/types/types";

export async function getUserDetails(userId: string) {
  const { data: userDetails, error } = await supabaseBrowserClient
    .from("users")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return userDetails as UserDetails;
}
