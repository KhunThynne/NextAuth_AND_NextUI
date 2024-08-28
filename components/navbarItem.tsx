"use client"
import NextLink from "next/link";
import { link as linkStyles } from "@nextui-org/theme";
import { NavbarItem } from "@nextui-org/navbar";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { NavItem } from "@/config/site";

export default function Item({ href, label }: NavItem) {
    const path = usePathname();


    const isActive = path === href;

    return (
        <NavbarItem key={href} isActive={isActive}>
            <NextLink
                className={clsx(
                    linkStyles({ color: "foreground" }),
                    isActive ? "text-primary font-medium" : ""
                )}
                href={href}
            >
                {label}
            </NextLink>
        </NavbarItem>
    );
}
