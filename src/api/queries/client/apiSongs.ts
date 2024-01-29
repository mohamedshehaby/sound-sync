import { Song } from "@/types/types";
import supabaseBrowserClient from "@/api/supbaseClients/supabaseBrowserClient";

export async function getSongs(): Promise<Song[]> {
  const { data, error } = await supabaseBrowserClient
    .from("songs")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export function getSongImageUrl(imagePath: string) {
  const { data: imageData } = supabaseBrowserClient.storage
    .from("images")
    .getPublicUrl(imagePath);

  return imageData.publicUrl;
}

export function getSongUrl(songPath: string) {
  const { data: songData } = supabaseBrowserClient.storage
    .from("songs")
    .getPublicUrl(songPath);

  return songData.publicUrl;
}

export async function getSongsByUserId(userId: string): Promise<Song[]> {
  const { data: songs, error } = await supabaseBrowserClient
    .from("songs")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  return songs;
}

export async function getSongsByTitle(title: string) {
  const { data: songs, error } = await supabaseBrowserClient
    .from("songs")
    .select("*")
    .ilike("title", `%${title}%`)
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  return songs;
}

export async function getSongById(songId: string) {
  const { data: song, error } = await supabaseBrowserClient
    .from("songs")
    .select("*")
    .eq("id", songId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return song as Song;
}
