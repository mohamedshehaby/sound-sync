import supabaseBrowserClient from "@/api/supbaseClients/supabaseBrowserClient";

export async function getLikedSongsByUserId(userId: string) {
  const { data: likedSongs, error } = await supabaseBrowserClient
    .from("liked_songs")
    .select("*,  songs(*)")
    .eq("user_id", userId);

  if (error) {
    throw new Error(error.message);
  }

  if (!likedSongs) return [];

  return likedSongs.map((item) => ({
    ...item.songs,
  }));
}

export async function getLikedSongById(userId: string, songId: string) {
  const { data: likedSong, error } = await supabaseBrowserClient
    .from("liked_songs")
    .select("*")
    .eq("user_id", userId)
    .eq("song_id", songId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return likedSong;
}

export async function addSongToLikedSongs(userId: string, songId: string) {
  const { data: likedSong, error } = await supabaseBrowserClient
    .from("liked_songs")
    .insert({ user_id: userId, song_id: songId });

  if (error) {
    throw new Error(error.message);
  }

  return likedSong;
}

export async function removeSongFromLikedSongs(userId: string, songId: string) {
  const { error } = await supabaseBrowserClient
    .from("liked_songs")
    .delete()
    .eq("user_id", userId)
    .eq("song_id", songId);

  if (error) {
    throw new Error(error.message);
  }
}
