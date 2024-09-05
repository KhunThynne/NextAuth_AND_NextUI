"use client"
import LoginModal from "@/components/Modal/login";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";


export default function App() {
    const modal = useDisclosure();

    return (
        <>


            <Button onPress={() => { modal.onOpen() }}>Open Login</Button>




            <LoginModal modal={modal} />


        </>
    );
}
