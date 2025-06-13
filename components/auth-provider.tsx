"use client";

import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import type { ReactNode } from "react";
import { useSession as useNextAuthSession } from "next-auth/react";

/**
 * AuthProvider wraps its children with NextAuth's SessionProvider.
 * Optionally accepts a session prop for SSR/SSG support.
 */
export function AuthProvider({
  children,
  session,
}: {
  children: ReactNode;
  session?: Session | null;
}) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

/**
 * useAuth hook provides access to the current session and authentication status.
 * Always checks for undefined to avoid destructuring errors.
 */
export function useAuth() {
  // Defensive: always return an object, never undefined
  const sessionResult = useNextAuthSession();
  return sessionResult || { data: null, status: "unauthenticated" as const };
}


