"use client"
import Container from '@/components/Layout/container';
import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';
import React from 'react';
import { HiArrowLeft, HiExclamationCircle, HiOutlineFingerPrint } from 'react-icons/hi2';

const Custom404 = () => {
  const router = useRouter();
  return (
    <Container>
      <div className="flex flex-col items-center h-full justify-center gap-5">

        <p className='text-2xl font-bold'>Software <span>15</span></p>


        <HiOutlineFingerPrint size={100} />
        <h1 className='text-warning'>404 - Page Not Found</h1>
        <div className='grid gap-2 '>
          <p>Sorry, the page you are looking for does not exist.</p>
          <Button
            onPress={() => router.push("/")}
            variant="bordered" className='flex gap-x-2 items-center cursor-pointer justify-center text-danger'>
            <HiArrowLeft />Go Back</Button> </div>
      </div>

    </Container>
  );
};

export default Custom404;
