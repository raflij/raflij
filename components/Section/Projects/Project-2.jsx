import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { RxArrowTopRight } from 'react-icons/rx';

const Project1 = () => {
    const projectImgList = [
        { id: 1, src: '/images/menugg/1.png', alt: 'MenuGG Home', bg: 'bg-gradient-to-tr from-white via-orange-600/10 to-green-600/20', class: 'rounded-xl md:rounded-2xl w-full h-full' },
        { id: 2, src: '/images/menugg/2.png', alt: 'Menu List', bg: 'bg-gradient-to-tr from-white via-orange-600/10 to-green-600/20', class: 'rounded-xl md:rounded-2xl' },
        { id: 3, src: '/images/menugg/3.png', alt: 'Menu Detail', bg: 'bg-gradient-to-r from-amber-400 to-yellow-600', class: 'rounded-xl md:rounded-2xl scale-90' },
        { id: 4, src: '/images/menugg/4.png', alt: 'Checkout', bg: 'bg-gradient-to-tr from-teal-600/10 via-yellow-600/40 to-green-600/20', class: 'rounded-xl md:rounded-2xl w-full h-full' },
        { id: 5, src: '/images/menugg/5.png', alt: 'Order Success', bg: 'bg-gradient-to-tr from-teal-600/10 via-green-600/10 to-purple-600/20', class: 'rounded-xl md:rounded-2xl w-full h-full' },
    ]
    const projectImg = projectImgList.map((hasil, i) =>
        <div className="snap-center shrink-0" key={i}>
            <div className={`flex items-center p-4 md:p-6 rounded-2xl md:rounded-3xl w-[280px] h-[342px] md:w-[342px] md:h-[401px] ${hasil.bg}`}>
                <Image src={hasil.src} width={394} height={441} alt={hasil.alt} className={hasil.class} />
            </div>
        </div>
    );
    return (

        <div className='relative mx-auto max-w-[1240px] sm:pb-32 sm:px-9 xl:px-0'>
            <div className='relative sm:hidden h-[3px] bg-gradient-to-r from-amber-300 to-white'></div>
            <div className='sm:rounded-3xl py-20 sm:shadow-md pb-24 sm:pb-0 sm:border-[2px] sm:border-amber-300 bg-gradient-to-r sm:bg-gradient-to-br from-yellow-50/80 sm:via-transparent to-white sm:to-yellow-50/80'>
                <div className='sm:px-8 px-6'>
                    <div className="flex items-center">
                        <div className='flex items-center justify-center w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] bg-yellow-600 rounded-full mr-2'>
                            <span className='text-white text-2xl sm:text-3xl font-semibold'>M</span>
                        </div>
                        <span className='text-3xl sm:text-4xl font-medium text-yellow-600 tracking-tight md:tracking-normal'>MenuGG</span>
                    </div>
                    <div className='mt-10'>
                        <p className='text-lg sm:text-2xl'>
                            <span className='font-semibold'>Introducing MenuGG</span> - a platform for paperless digital menu, accessible
                            to millions worldwide without requiring an application (APK).
                            It offers user-friendly and efficient usage, allowing real-time updates and changes.
                        </p>
                    </div>
                    <div className='mt-16 relative overflow-auto md:mb-0 mb-3'>
                        <div className='w-full flex items-center snap-x overflow-x-auto space-x-4 py-4'>
                            {projectImg}
                        </div>
                    </div>
                    <div className='mt-16'>
                        <p className='text-lg sm:text-2xl'>
                            <span className=''></span>
                            This platform <span className='font-semibold'>provides significant advantages</span> over the conventional methods of printed menus or physical displays.
                            <span className='font-semibold'> Setup</span>, <span className='font-semibold'>managing menu</span> lists, <span className='font-semibold'>orders</span>,
                            and <span className='font-semibold'>business analysis</span> are all easily adjustable with with MenuGG.
                            <br />
                            <br />
                            MenuGG makes sure that <span className='font-semibold'>the digital menu can be up and running in a matter of minutes.</span>
                        </p>
                    </div>
                    <div className='mt-16'>
                        <Link href="https://menugg.vercel.app" target="_blank">
                            <div className='rounded-2xl sm:rounded-3xl p-5 md:p-7 bg-gradient-to-r from-sky-800 to-sky-900 w-full md:w-[536px] shadow-md'>
                                <div>
                                    <div className='flex items-start justify-between'>
                                        <div>
                                            <div className='flex items-center mb-2'>
                                                <div className='md:h-[10px] md:w-[10px] h-[8px] w-[8px] rounded-full bg-teal-300 mr-2 md:mr-3'></div>
                                                <span className='text-teal-300 text-lg md:text-2xl tracking-tight font-semibold'>Live in production</span>
                                            </div>
                                            <span className='text-teal-50 font-semibold text-3xl md:text-5xl tracking-tight'>menugg.vercel.app</span>
                                        </div>
                                        <span className='w-[42px] h-[42px] bg-sky-800/80 rounded-md flex items-center justify-center
            shadow-md'><RxArrowTopRight size='28' className=' text-white' /></span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='mt-20 pb-28'>
                        <h1 className='text-2xl sm:text-3xl font-medium md:font-semibold text-sky-950'>Tech stack used</h1>
                        <div className='mt-8 flex items-center space-x-8'>
                            <span className='sm:w-[66px] sm:h-[66px] w-[60px] h-[60px] flex items-center'>
                                <Image src='/images/svelteLogoStack.png' width={360} height={360} alt="Svelte JS" className='w-full h-full' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project1
