import "styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";


import { getServerSession } from "next-auth";
import { getMessages } from 'next-intl/server';
import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options";
import { Providers } from "@/app/providers";

import { Link } from "@nextui-org/link";
import { fontSans } from "config/fonts";
import { siteConfig } from "config/site";

import { cookies } from "next/headers";
import { Navbar } from "@/components/Navbar/navbar";

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
    const session = await getServerSession(authOptions);
    const messages = await getMessages();
    const localeCookie = cookies().get('NEXT_LOCALE');
    const locale = localeCookie ? localeCookie.value : 'en';
    return (
        <html suppressHydrationWarning lang={locale}>
            <head />
            <body
                className={clsx(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable,
                )}
            >

                <Providers
                    session={session!}
                    messages={messages}
                    themeProps={{ attribute: "class", defaultTheme: "dark" }}
                >


                    <div className="relative flex flex-col h-screen">
                     

                       
                            {children}
                        
                        <footer className="w-full flex items-center justify-center py-3">
                            <Link
                                isExternal
                                className="flex items-center gap-1 text-current"
                                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                                title="nextui.org homepage"
                            >
                                <span className="text-default-600">Powered by</span>
                                <p className="text-primary">NextUI</p>
                            </Link>
                        </footer>
                    </div>

                </Providers>

            </body>

        </html>
    );
}







