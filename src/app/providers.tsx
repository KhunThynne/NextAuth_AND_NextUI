"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";


import { ToastContainer } from "react-toastify";
import AuthProvider from "@/app/api/auth/[...nextauth]/auth-provider";
import { NextIntlClientProvider } from "next-intl";
import { Session } from "next-auth";



export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
  session: Session;
  messages: any;
}

export function Providers({ children, themeProps, session, messages }: ProvidersProps) {
  const router = useRouter();


  return (


    <NextIntlClientProvider messages={messages!} locale="en">
      <AuthProvider session={session}>
        <NextUIProvider navigate={router.push}>
          <NextThemesProvider {...themeProps}>
            {children}
            <ToastContainer />
          </NextThemesProvider>
        </NextUIProvider>
      </AuthProvider>
    </NextIntlClientProvider>

  );
}
