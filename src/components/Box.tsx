import { cn } from "@/utils/functions";
import React from "react";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export default function Box({ children, className }: BoxProps) {
  return (
    <div className={cn("bg-neutral-900 rounded-lg w-full h-fit", className)}>
      {children}
    </div>
  );
}
