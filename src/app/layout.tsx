import Sidebar from "@/components/Sidebar";
import { cn } from "@/utils/functions";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import React from "react";
import "./globals.css";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import Player from "@/features/player/Player";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sound Sync",
  description:
    "Immerse yourself in a world of seamless audio streaming with SoundSync. Explore curated playlists, personalized recommendations, and effortless sync features. Elevate your music experience today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(figtree.className, "flex flex-col  ")}>
        <ToasterProvider />
        <SupabaseProvider>
          <ReactQueryProvider>
            <UserProvider>
              <ModalProvider />
              <div className="flex flex-grow px-2 py-4 gap-6 ">
                <Sidebar className="w-[18rem] hidden md:block" />
                <main className="flex-auto">{children}</main>
              </div>
              <Player />
            </UserProvider>
          </ReactQueryProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
