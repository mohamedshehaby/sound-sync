"use client";
import { cn } from "@/utils/functions";
import { useRouter } from "next/navigation";
import React from "react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "@/components/Button";
import useAuthModal from "@/stores/useAuthModal";
import { useUser } from "@/features/auth/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { FaUserAlt } from "react-icons/fa";
import { paths } from "@/utils/paths";
import LoadingSpinner from "@/components/LoadingSpinner";
import toast from "react-hot-toast";
import usePlayer from "@/features/player/usePlayer";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function Header({ children, className }: HeaderProps) {
  const router = useRouter();
  const { user, isLoading } = useUser();
  const { onOpen } = useAuthModal();
  const player = usePlayer();

  const supabaseClient = useSupabaseClient();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();

    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged out successfully");
      player.reset();
    }
  };

  return (
    <div
      className={cn("h-fit bg-gradient-to-b from-emerald-800 p-6", className)}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center hover:opacity-75 rounded-full bg-black transition"
          >
            <RxCaretLeft size={36} className="text-white" />
          </button>
          <button className="flex items-center justify-center hover:opacity-75 rounded-full bg-black transition">
            <RxCaretRight
              onClick={() => {
                router.forward();
              }}
              size={36}
              className="text-white"
            />
          </button>
        </div>

        <div className="flex md:hidden gap-x-2 items-center transition">
          <button
            onClick={() => {
              router.push(paths.home());
            }}
            className="rounded-full p-2 bg-white flex items-center hover:opacity-75 justify-center"
          >
            <HiHome size={20} className="text-black " />
          </button>
          <button
            onClick={() => {
              router.push(paths.search());
            }}
            className="rounded-full p-2 bg-white flex items-center hover:opacity-75 justify-center"
          >
            <BiSearch size={20} className="text-black " />
          </button>
        </div>

        {isLoading ? (
          <LoadingSpinner />
        ) : user ? (
          <div className="flex gap-x-4 items-center">
            <Button onClick={handleLogout} className="bg-white px-6 py-2">
              Log out
            </Button>
            <Button
              className="bg-white w-auto"
              onClick={() => router.push(paths.account())}
            >
              <FaUserAlt />
            </Button>
          </div>
        ) : (
          <div className="flex justify-between items-center gap-x-4 ">
            <>
              <div>
                <Button
                  onClick={onOpen}
                  className="bg-transparent text-neutral-300 font-medium"
                >
                  Sign up
                </Button>
              </div>
              <div>
                <Button onClick={onOpen} className="bg-white px-6 py-2">
                  Log in
                </Button>
              </div>
            </>
          </div>
        )}

        {}
      </div>
      {children}
    </div>
  );
}
