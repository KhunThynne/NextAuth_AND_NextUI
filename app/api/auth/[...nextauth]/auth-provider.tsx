'use client';

import { Session } from 'next-auth';
import { SessionContextValue, SessionProvider } from 'next-auth/react';

export default function AuthProvider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}): JSX.Element {


  return <SessionProvider session={session}>{children}</SessionProvider>;
}
