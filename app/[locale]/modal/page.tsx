"use client"
import ForGotModal from "@/components/Modal/forgot";
import LoginModal from "@/components/Modal/login";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";
import { useSession } from "next-auth/react";



export default function App() {
    const modal = useDisclosure();
    const { data: session, status } = useSession()
    return (
        <>
            <div className="flex flex-wrap gap-3">
                <Button onPress={() => { modal.onOpen() }}>Open Login</Button>
            </div>
            {status}
            {JSON.stringify(session)}

            <LoginModal modal={modal} />

        </>
    );
}
