import Box from "@/components/Box";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import SongsList from "@/features/songs/SongsList";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { getSongs } from "@/api/queries/server/apiSongsServer";

export default async function Home() {
  const songs = await getSongs();

  return (
    <Box className="h-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">Welcome back</h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-col-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4 ">
            <ListItem
              name={"Liked Songs"}
              href="/liked"
              image="/images/liked.png"
            />
          </div>
        </div>
      </Header>

      <div className="mt-2 m-7 ">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold  ">Newest Songs</h1>
        </div>
        <Suspense fallback={<LoadingSpinner />}>
          <SongsList songs={songs} />
        </Suspense>
      </div>
    </Box>
  );
}
