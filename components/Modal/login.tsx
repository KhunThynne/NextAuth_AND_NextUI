import React, { useState, useEffect, useRef } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Checkbox, Link } from "@nextui-org/react";
import { HiEye, HiOutlineEye, HiUsers } from "react-icons/hi2";

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
   
        const emailValid = formData.email.includes('@'); // ตัวอย่างการตรวจสอบอีเมลเบื้องต้น
        const passwordValid = formData.password.length > 0; // ตัวอย่างการตรวจสอบรหัสผ่านเบื้องต้น
    
        setValid({ email: !emailValid, password: !passwordValid });

        if (emailValid && passwordValid) {
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
                                    <Link color="primary" href="#" size="sm">
                                        Forgot password?
                                    </Link>
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="flat" onPress={onClose}>
                                Close
                            </Button>
                            <Button color="primary" onPress={handleSignInClick} type="submit">
                                Sign in
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
