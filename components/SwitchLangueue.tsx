"use client";

import { useRouter } from "@/i18n/routing";
import { Button } from "@nextui-org/button";
import { useParams } from "next/navigation";

export default function IndexPage() {
    const router = useRouter();
    const { locale } = useParams();

    const switchLocale = () => {
        // Check current locale and switch to the other one
        const newLocale = locale === "en" ? "th" : "en";

        // Get current pathname
        const pathname = window.location.pathname;

        // Replace locale in pathname
        const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);

        // Push to the new path with updated locale
        router.push(newPathname, { locale: newLocale });
    };

    return (
        <div className="flex gap-2">
            <Button onClick={switchLocale} size="sm">
                {locale === "en" ? "Switch to Thai" : "Switch to English"}
            </Button>
        </div>
    );
}
