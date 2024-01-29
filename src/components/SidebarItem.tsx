import { cn } from "@/utils/functions";
import Link from "next/link";
import { IconType } from "react-icons";

interface SidebarItemProps {
  Icon: IconType;
  name: string;
  href: string;
  active: boolean;
}

export default function SidebarItem({
  Icon,
  name,
  href,
  active,
}: SidebarItemProps) {
  return (
    <Link
      className={cn(
        "flex  h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer transition hover:text-white text-neutral-400 py-1",
        {
          "text-white": active,
        },
      )}
      href={href}
    >
      <Icon size={26} />
      <p className="truncate w-full">{name}</p>
    </Link>
  );
}
