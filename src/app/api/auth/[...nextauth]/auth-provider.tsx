'use client';

import { Session } from 'next-auth';
import { SessionContextValue, SessionProvider } from 'next-auth/react';
import { useEffect } from 'react';

export default function AuthProvider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}): JSX.Element {

  useEffect(() => {

    console.log("TEst")
  }, [session])

  return <SessionProvider session={session} >{children}</SessionProvider>;
}
