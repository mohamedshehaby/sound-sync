import { cn } from "@/utils/functions";
import React, { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, disabled, type = "button", className, ...props }, ref) => {
    return (
      <button
        type={type}
        className={cn(
          "w-full rounded-full bg-green-500 border border-transparent disabled:cursor-not-allowed disabled:opacity-50 px-3 py-3 text-black font-bold transition hover:opacity-75",
          className,
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
