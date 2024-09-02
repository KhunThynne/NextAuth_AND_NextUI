"use client";
import { Button } from "@nextui-org/button";
import { useParams, useRouter } from "next/navigation";
import { useCallback } from "react";
export default function SwitchLangueue() {
    const router = useRouter();
    const { locale } = useParams();

    const switchLocale = useCallback(() => {
        // Check current locale and switch to the other one
        const newLocale = locale === "en" ? "th" : "en";

        // Get current pathname
        const pathname = window.location.pathname;


        const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);

        router.push(newPathname);
        router.refresh();
    }, []);

    return (
        <div className="flex gap-2">
            <Button size="sm" onClick={switchLocale} >
                Switch to   {locale === "en" ? " TH" : " EN"}
            </Button>
        </div>
    );
}
