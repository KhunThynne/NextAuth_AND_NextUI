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

export default function DocumentPage() {
  return (
    <div className="md:flex grid gap-10 ">
      <div className="md:w-[90%] ">
        <Card>
          <CardHeader>
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
          <CardBody>
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

      <div className="border rounded-2xl p-5 shadow ">
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
  );
}
