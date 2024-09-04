"use client"

import Container from "@/components/Layout/container";
import { Navbar } from "@/components/Navbar/navbar";
import { useSession } from "next-auth/react";
import React from "react";

export default function Layout({ children, unauthenticated }: { children: React.ReactNode, unauthenticated: React.ReactNode }) {
    const { data: session, status } = useSession()

    return (<>

        {status === "authenticated" ?
            <>
                <Navbar />

                <Container>
                    {children}
                </Container>
            </>


            :

            <>


                <Container>

                    {unauthenticated}
                </Container>
            </>

        }








    </>)

}