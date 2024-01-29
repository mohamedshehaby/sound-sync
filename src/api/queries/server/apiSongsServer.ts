import { Song } from "@/types/types";
import supabaseServerClient from "@/api/supbaseClients/supabaseServerClient";

export async function getSongs(): Promise<Song[]> {
  const { data, error } = await supabaseServerClient()
    .from("songs")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  return data as Song[];
}
