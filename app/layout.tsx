import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";



import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

import { getServerSession } from "next-auth";


import { getMessages } from 'next-intl/server';
import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options";
import { NextIntlClientProvider } from "next-intl";
import AuthProvider from "@/app/api/auth/[...nextauth]/auth-provider";
import { Providers } from "./providers";



export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico",
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default async function RootLayout({
    children,

}: {

    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions)
    const messages = await getMessages();

    return (

        <html suppressHydrationWarning lang="en" >
            <head />

            <body
                className={clsx(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable,
                )}
            >

                <NextIntlClientProvider messages={messages}>
                    {JSON.stringify(session)}
                    <AuthProvider session={session!}>
                        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }} >


                            {children}



                        </Providers>
                    </AuthProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
