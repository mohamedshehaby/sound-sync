"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Box from "@/components/Box";
import Button from "@/components/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Box className="h-full flex-col gap-4  flex items-center justify-center">
      <h2 className="text-neutral-400 text-xl ">Something went wrong!</h2>
      <p>{error.message}</p>
      <Button className="w-auto " onClick={() => reset()}>
        Try again
      </Button>
    </Box>
  );
}
