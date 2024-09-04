"use client";
import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    User,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import TabContainer from "@/components/Tabs/tab-container";

const HeadCard = () => {
    const t = useTranslations('Introduce');
    return (<Card>
        <CardHeader>
            <div>
                <User
                    avatarProps={{
                        src: "https://avatars.githubusercontent.com/u/88494232?s=96&v=4",
                    }}
                    description="Development"
                    name="Chanathip Parnsa-ard"
                />
                <div className="font-bold">{t("head")} </div>
            </div>
        </CardHeader>
        <CardBody className="indent-10 leading-8">
            {t('description')}

        </CardBody>
    </Card>)
}

const ContactCard = () => {
    const t = useTranslations('Introduce');
    return (<Card>
        <CardHeader>
            <div>
                <User
                    avatarProps={{
                        src: "https://avatars.githubusercontent.com/u/88494232?s=96&v=4",
                    }}
                    description="Development"
                    name="Chanathip Parnsa-ard"
                />
                <div className="font-bold">{t("head")} </div>
            </div>
        </CardHeader>
        <CardBody className="indent-10 leading-8">
            {t('description')}

        </CardBody>
    </Card>)
}

export const Introduce = () => {
    const t = useTranslations('Introduce');
    return (<div className="grid lg:grid-cols-5 gird-col-1 gap-5  ">
        <div className="lg:col-span-3">
            <HeadCard />
        </div>
        <div className="lg:col-span-2 ">
            <ContactCard />
        </div>
        <div className="lg:col-span-2">
            <Card>
                <CardHeader >
                    <div>
                        <User
                            avatarProps={{
                                src: "https://avatars.githubusercontent.com/u/88494232?s=96&v=4",
                            }}
                            description="Development"
                            name="Chanathip Parnsa-ard"
                        />
                        <div className="font-bold">{`Hello! I'm Thynne`} </div>
                    </div>
                </CardHeader>
                <CardBody >
                    {`
          A passionate and experienced freelance web developer. I specialize
          in creating modern, responsive websites and web applications using
          the latest technologies. Whether you need a full-stack solution, a
          front-end interface, or back-end support, I’m here to help bring
          your ideas to life. If you’re looking for a reliable developer to
          collaborate on your next project, feel free to get in touch. Let’s
          build something amazing together! `  }
                </CardBody>
                <CardFooter>
                    <Button color="primary" variant="bordered">
                        Contact Me
                    </Button>
                </CardFooter>
            </Card>
        </div>
        <div className="lg:col-span-3 ">
            <div className="border rounded-2xl p-5 shadow ">
                <div>
                    <User
                        avatarProps={{
                            src: "https://avatars.githubusercontent.com/u/88494232?s=96&v=4",
                        }}
                        description="Development"
                        name={t("head")}
                    />
                    <div className="font-bold">{t("head")} </div>
                </div>

                <p className="indent-10 leading-8">
                    {`
          A passionate and experienced freelance web developer. I specialize
          in creating modern, responsive websites and web applications using
          the latest technologies. Whether you need a full-stack solution, a
          front-end interface, or back-end support, I’m here to help bring
          your ideas to life. If you’re looking for a reliable developer to
          collaborate on your next project, feel free to get in touch. Let’s
          build something amazing together! `  }
                </p>
            </div>
        </div>


    </div>)
}
