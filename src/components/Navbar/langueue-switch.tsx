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
        <button onClick={switchLocale} className="border cursor-pointer  rounded " >
            <p className={`text-sm  rounded p-[.2em] hover:opacity-90  
               font-bold text-[rgb(113, 113, 122)]`}>
                {locale === "en" ? "EN" : "TH"}
            </p>
        </button>
    );
}
