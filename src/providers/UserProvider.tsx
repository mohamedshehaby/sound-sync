"use client";

import { MyUserContextProvider } from "@/features/auth/useUser";
import React from "react";

interface UserProviderProps {
  children: React.ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
}

export default UserProvider;
