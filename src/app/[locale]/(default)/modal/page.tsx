"use client"
import LoginModal from "@/components/Modal/login";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";
import { signOut, useSession } from "next-auth/react";

export default function App() {
    const modal = useDisclosure();
    const { data: session, status } = useSession()

    return (
        <>


            {status === "authenticated" ?
                <Button onClick={() => { signOut() }}>
                    Logout
                </Button>

                :
                <Button onPress={() => { modal.onOpen() }}>Open Login</Button>

            }



            <LoginModal modal={modal} />


        </>
    );
}
