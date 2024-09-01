"use client"
import React, { useState, useEffect, useRef } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Checkbox, Link } from "@nextui-org/react";
import { HiEye, HiOutlineEye, HiUsers } from "react-icons/hi2";

interface FormData {
    email: string;
    password: string;
    remember: boolean;
}

export default function ForGotModal({ modal }: { modal: any }) {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState<FormData>({ email: '', password: '', remember: false });
    const [valid, setValid] = useState<{ email: boolean; }>({ email: false });
    const formRef = useRef<HTMLFormElement>(null);

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
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const emailValid = formData.email.includes('@');


        setValid({ email: !emailValid });

        if (emailValid) {
            console.log("Form Data Submitted:", formData);
            // modal.onClose();
        }
    };



    return (
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
                        <ModalHeader className="flex flex-col">Forgot Passwords</ModalHeader>
                        <ModalBody>

                            <form onSubmit={handleSubmit} ref={formRef} >
                                <Input
                                  
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
                            </form>
                        </ModalBody>
                        <ModalFooter>

                            <Button fullWidth color="primary" onPress={handleSignInClick} type="submit">
                                Send
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
