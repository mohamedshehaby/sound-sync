"use client";

import Box from "@/components/Box";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <Box className="h-full flex items-center justify-center">
          <h2 className="text-neutral-400 ">Something went wrong!</h2>
          <p>{error.message}</p>
          <button onClick={() => reset()}>Try again</button>
        </Box>
      </body>
    </html>
  );
}
