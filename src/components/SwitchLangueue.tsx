"use client";
import { Button } from "@nextui-org/button";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
export default function SwitchLangueue() {
    const router = useRouter();
    const { locale } = useParams();

    const switchLocale = useCallback(() => {
        const newLocale = locale === "en" ? "th" : "en";

        const pathname = window.location.pathname;
        const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
 
        router.push(newPathname);
        router.refresh();
    }, [locale]);

    return (
        <div className="flex gap-2">
            <Button size="sm" onClick={switchLocale} >
                Switch to   {locale === "en" ? " TH" : " EN"}
            </Button>
        </div>
    );
}
