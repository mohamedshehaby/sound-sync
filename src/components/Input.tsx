import React, { forwardRef } from "react";
import input from "@/components/Input";
import { cn } from "@/lib/utils";

interface InputInterfaceProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputInterfaceProps>(
  ({ id, className, type = "text", disabled, placeholder, ...props }, ref) => {
    return (
      <input
        id={id}
        className={cn(
          " flex w-full rounded-md bg-neutral-700 border border-transparent px-3 py-3  text-sm  transition hover:opacity-75 file:border-0 file:bg-transparent  file:text-sm file:font-medium placeholder:text-neutral-400  focus:outline-none focus:ring-0 focus:border-transparent",
          className,
          {
            "cursor-not-allowed opacity-50": disabled,
          },
          {},
        )}
        placeholder={placeholder}
        disabled={disabled}
        ref={ref}
        type={type}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
