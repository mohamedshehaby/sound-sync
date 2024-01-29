"use client";
import Box from "@/components/Box";
import { paths } from "@/utils/paths";
import { cn } from "@/utils/functions";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { BiHeart, BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

interface SidebarProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Sidebar({ children, className }: SidebarProps) {
  const pathname = usePathname();
  const routes = useMemo(() => {
    return [
      {
        name: "Home",
        href: paths.home(),
        active: pathname !== paths.search() && pathname !== paths.liked(),
        Icon: HiHome,
      },
      {
        name: "Search",
        href: paths.search(),
        active: pathname === paths.search(),
        Icon: BiSearch,
      },
      {
        name: "Liked Songs",
        href: paths.liked(),
        active: pathname === paths.liked(),
        Icon: BiHeart,
      },
    ];
  }, [pathname]);

  return (
    <aside className={cn("flex h-full", className)}>
      <div className="w-full flex flex-col gap-y-2 bg-black h-full">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((route, index) => (
              <SidebarItem key={index} {...route} />
            ))}
          </div>{" "}
        </Box>
        <Box className="flex-grow">
          <Library />
        </Box>
      </div>
    </aside>
  );
}
