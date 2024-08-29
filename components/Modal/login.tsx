"use client"
import React, { useState, useEffect, useRef } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Checkbox, Link, useDisclosure } from "@nextui-org/react";
import { HiEye, HiOutlineEye, HiUsers } from "react-icons/hi2";
import ForGotModal from "./forgot";
import { signIn } from "next-auth/react";

interface FormData {
    email: string;
    password: string;
    remember: boolean;
}

export default function LoginModal({ modal }: { modal: any }) {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState<FormData>({ email: '', password: '', remember: false });
    const [valid, setValid] = useState<{ email: boolean; password: boolean }>({ email: false, password: false });
    const formRef = useRef<HTMLFormElement>(null);
    const modalForgot = useDisclosure();
    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSignInClick = () => {

        if (formRef.current) {

            formRef.current.requestSubmit();
        }
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const emailValid = formData.email.includes('@');
        const passwordValid = formData.password.length > 0;

        setValid({ email: !emailValid, password: !passwordValid });
        const result = await signIn("credentials", {
            redirect: false,
            email: formData.email,
            password: formData.password,
            callbackUrl: `${window.location.origin}/`,
        })

        if (result?.error) {
            // จัดการกับข้อผิดพลาด
            console.error(result.error)
        } else {
            // ไปยังหน้า dashboard หรือหน้าอื่น ๆ ตาม callbackUrl
            window.location.href = result?.url || "/"
        }
        // if (emailValid && passwordValid) {
        //     console.log("Form Data Submitted:", formData);
        //     // modal.onClose();
        // }
    };




    return (<>
        <Modal
            isDismissable={false}
            backdrop="blur"
            isOpen={modal.isOpen}
            onOpenChange={modal.onOpenChange}
            placement="top-center"
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col">Log in</ModalHeader>
                        <ModalBody>

                            <form onSubmit={handleSubmit} ref={formRef} >
                                <Input
                                    autoFocus
                                    endContent={<HiUsers />}
                                    label="Email"
                                    placeholder="Enter your email"
                                    variant="bordered"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    // required
                                    isInvalid={valid.email}
                                    errorMessage="Please enter a valid email"
                                />
                                <Input
                                    label="Password"
                                    variant="underlined"
                                    placeholder="Enter your password"
                                    endContent={
                                        <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                                            {isVisible ? <HiEye /> : <HiOutlineEye />}
                                        </button>
                                    }
                                    // required
                                    type={isVisible ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    isInvalid={valid.password}
                                    errorMessage="Please enter a valid password"
                                />
                                <div className="flex py-2 px-1 justify-between">
                                    <Checkbox
                                        name="remember"
                                        classNames={{ label: "text-small" }}
                                        isSelected={formData.remember}
                                        onChange={handleChange}
                                    >
                                        Remember me
                                    </Checkbox>
                                    <Button variant="light" color="primary" href="#" size="sm" onPress={() => { modalForgot.onOpen() }}>
                                        Forgot password?
                                    </Button>
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter>

                            <Button fullWidth color="primary" onPress={handleSignInClick} type="submit">
                                Sign in
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>


        <ForGotModal modal={modalForgot} />
    </>
    );
}
