"use client";

import { SessionProvider, useSession } from "next-auth/react";
import type { ReactNode } from "react";

/**
 * AuthProvider wraps its children with NextAuth's SessionProvider.
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

/**
 * useAuth hook provides access to the current session and authentication status.
 * Usage: const { data: session, status } = useAuth();
 */
export function useAuth() {
  return useSession();
}

