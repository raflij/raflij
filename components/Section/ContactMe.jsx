import React from 'react';
import Image from 'next/image';
import { FaTelegramPlane } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const ContactMe = () => {
    return (
        <>
            <div className='relative top-0 h-[3px] bg-gradient-to-r from-[#878cf2] via-[#090811] to-[#090811]'></div>
            <div className="lg:px-40 md:px-16 sm:px-10 z-50 px-5 py-24 bg-[#090811]">
                <div className='relative mx-auto max-w-[1240px]'>
                    <div className='absolute bottom-[190px] left-[160px] sm:left-[218px]'>
                        <div className='h-[118px] w-[118px] rounded-md bg-gradient-to-t from-[#14131b]/40 to-transparent'></div>
                    </div>
                    <div className='absolute top-[50px] sm:top-0 right-0 sm:right-[216px]'>
                        <div className='h-[118px] w-[118px] rounded-md bg-gradient-to-b from-[#14131b]/40 to-transparent'></div>
                    </div>
                    <div className='absolute bottom-[94px] right-[256px]'>
                        <div className='h-[118px] w-[118px] rounded-md bg-[#14131b]/20'></div>
                    </div>
                    <div className='absolute bottom-[8px] right-[36px]'>
                        <div className='h-[118px] w-[118px] rounded-md bg-gradient-to-l from-[#14131b]/40 to-transparent'></div>
                    </div>
                    <div className='absolute top-[500px] md:top-[280px] right-[170px]'>
                        <div className='w-[1px] h-[146px] bg-gradient-to-b from-[#afaed2]/10 to-[#f6d4fa] '></div>
                    </div>
                    <div className='absolute bottom-0 right-[60px]'>
                        <div className='w-[1px] h-[90px] bg-gradient-to-b from-[#afaed2]/10 to-[#f6d4fa] '></div>
                    </div>
                    <div className='absolute top-[182px] right-[12px]'>
                        <div className='w-[1px] h-[110px] bg-gradient-to-b from-[#afaed2]/10 to-[#f6d4fa] '></div>
                    </div>
                    <div className='relative z-20'>
                        <h2 className='text-3xl font-semibold md:font-bold'>
                            <span className='mr-2 block md:inline-block mb-3 md:mb-0'>👋</span>
                            <span className='relative z-10 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#f4f4f9]/90 to-[#5e5da4]/50'>Let&apos;s get in touch</span>
                        </h2>
                        <div className='mt-14 mb-4 md:mt-10 text-[46px] sm:text-[64px] lg:text-[82px] md:text-[64px] font-semibold tracking-tighter sm:tracking-tight lg:tracking-tight md:tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[#f4f4f9] to-[#5e5da4]/40'>
                            <p className='mt-4 sm:leading-[85%] lg:leading-[75%] md:leading-[80%] leading-[95%]'>Info agenda ngopi lurrr?</p>
                            <p className='mt-5 sm:leading-[85%] lg:leading-[75%] md:leading-[80%] leading-[95%]'>Have any project ideas?</p>
                            <p className='mt-5 pb-6 sm:leading-[85%] lg:leading-[75%] md:leading-[80%] leading-[95%]'>Ask something?</p>
                        </div>
                        <div className='mt-24'>
                            <div className='md:flex items-start'>
                                <div className='relative h-[98px] w-[98px] md:h-[128px] md:w-[128px] items-center justify-center rounded-full'>
                                    <Image src='/images/r-square.jpg' alt='' width={128} height={128} className='w-full h-full rounded-full' />
                                </div>
                                <div className='mt-6 md:mt-0 md:ml-6'>
                                    <p className='text-xl md:text-2xl font-normal text-[#99a0e1]/90'>Contact me via</p>
                                    <div className='mt-4 md:mt-6 space-y-1 text-md md:text-2xl text-[#d9dbee] flex flex-col items-start font-medium md:font-normal'>
                                        <div className='flex items-center space-x-3'>
                                            <div className='h-4 w-4'>
                                                <SiGmail size='20' />
                                            </div>
                                            <span className='md:tracking-wider'>raflijjunior@gmail.com</span>
                                        </div>
                                        <div className='flex items-center space-x-3'>
                                            <div className='h-4 w-4'>
                                                <FaTelegramPlane size='22' />
                                            </div>
                                            <span className='md:tracking-wider'>@raflijjunior</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactMe
