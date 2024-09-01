"use client"
import ForGotModal from "@/components/Modal/forgot";
import LoginModal from "@/components/Modal/login";
import { routing } from "@/i18n/routing";

import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";
import { signOut, useSession } from "next-auth/react";


export default function App() {
    const modal = useDisclosure();
    const { data: session, status } = useSession()

    return (
        <>


            {status === "unauthenticated" ?
                <div className="flex flex-wrap gap-3">
                    <Button onPress={() => { modal.onOpen() }}>Open Login</Button>
                </div>

                : <Button onClick={() => { signOut() }}>
                    Logout
                </Button>}

            {/* {JSON.stringify(session)} */}
    
            <LoginModal modal={modal} />


        </>
    );
}
