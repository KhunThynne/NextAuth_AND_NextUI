"use client"
import LoginModal from "@/components/Modal/login";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";



export default function App() {
    const modal = useDisclosure();
    return (
        <>
            <div className="flex flex-wrap gap-3">
                <Button onPress={() => { modal.onOpen() }}>Open Login</Button>
            </div>
            <LoginModal modal={modal} />
        </>
    );
}
