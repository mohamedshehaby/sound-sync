"use client";

import { useState } from "react";
import { createBrowserClient } from "@supabase/ssr";
import { Database } from "@/types/supabase_types_db";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

interface SupabaseProviderProps {
  children: React.ReactNode;
}

function SupabaseProvider({ children }: SupabaseProviderProps) {
  const [supbaseClient] = useState(() =>
    createBrowserClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    ),
  );

  return (
    <SessionContextProvider supabaseClient={supbaseClient}>
      {children}
    </SessionContextProvider>
  );
}

export default SupabaseProvider;
