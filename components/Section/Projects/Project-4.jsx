import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { RxArrowTopRight } from 'react-icons/rx';
import { BsGithub } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';

const Project4 = () => {
    const projectImgList = [
        { id: 1, src: '/images/menugg-cms/1.png', alt: 'Desktop Dashboard View', bg: 'bg-gradient-to-tr from-white via-yellow-300/40 to-teal-500/40', class: 'rounded-xl md:rounded-2xl w-full h-full' },
        { id: 2, src: '/images/menugg-cms/2.jpg', alt: 'Responsive Login View', bg: 'bg-gradient-to-tr from-white via-yellow-500/40 to-yellow-300/50', class: 'rounded-xl md:rounded-2xl w-full h-full' },
        { id: 3, src: '/images/menugg-cms/3.jpg', alt: 'Responsive Dashboard', bg: 'bg-gradient-to-r from-lime-400 to-lime-600', class: 'rounded-xl md:rounded-2xl w-full h-full' },
        { id: 4, src: '/images/menugg-cms/4.jpg', alt: 'Responsive Sidebar', bg: 'bg-gradient-to-tr from-teal-600/30 via-yellow-400/30 to-teal-500/40', class: 'rounded-xl md:rounded-2xl w-full h-full' },
        { id: 4, src: '/images/menugg-cms/5.jpg', alt: 'Responsive Menu', bg: 'bg-gradient-to-tr from-yellow-400/20 via-teal-600/20 to-teal-500/30', class: 'rounded-xl md:rounded-2xl w-full h-full' },
    ]
    const projectImg = projectImgList.map((hasil, i) =>
        <div className="snap-center shrink-0" key={i}>
            <div className={`flex items-center p-4 md:p-6 rounded-2xl md:rounded-3xl h-[382px] md:h-[441px] ${hasil.bg}`}>
                <Image src={hasil.src} width={394} height={441} alt={hasil.alt} className={hasil.class} />
            </div>
        </div>
    );
    return (

        <div className='relative mx-auto max-w-[1240px] sm:pb-32 sm:px-9 xl:px-0'>
            <div className='relative sm:hidden h-[3px] bg-gradient-to-r from-lime-300 to-white'></div>
            <div className='sm:rounded-3xl py-20 sm:shadow-md pb-24 sm:pb-0 sm:border-[2px] sm:border-lime-300 bg-gradient-to-r sm:bg-gradient-to-br from-lime-50/80 sm:via-transparent to-white sm:to-lime-50/80'>
                <div className='sm:px-8 px-6'>
                    <div className="flex items-center">
                        <div className='flex items-center justify-center w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] bg-lime-600 rounded-full mr-2'>
                            <span className='text-white text-2xl sm:text-3xl font-semibold'>M</span>
                        </div>
                        <span className='text-3xl sm:text-4xl font-medium text-lime-600 tracking-tight md:tracking-normal'>MenuGG CMS</span>
                    </div>
                    <div className='mt-10'>
                        <p className='text-lg sm:text-2xl'>
                            <span className='font-semibold'>MenuGG CMS</span> - is a continuation of my previous work in fullstack development for MenuGG (Digital Menu Paperless), which I have already completed.
                        </p>
                    </div>
                    <div className='mt-16 relative overflow-auto md:mb-0 mb-3'>
                        <div className='w-full flex items-center snap-x overflow-x-auto space-x-4 py-4'>
                            {projectImg}
                        </div>
                    </div>
                    <div className='mt-16 mb-8'>
                        <Link href="https://menugg-cms.web.app/" target="_blank">
                            <div className='rounded-2xl sm:rounded-3xl p-5 md:p-7 bg-gradient-to-r from-sky-800 to-sky-900 w-full md:w-[666px] shadow-md'>
                                <div>
                                    <div className='flex items-start justify-between'>
                                        <div>
                                            <div className='flex items-center mb-2'>
                                                <div className='md:h-[10px] md:w-[10px] h-[8px] w-[8px] rounded-full bg-teal-300 mr-2 md:mr-3'></div>
                                                <span className='text-teal-300 text-lg md:text-2xl tracking-tight font-semibold'>Live in development</span>
                                            </div>
                                            <span className='text-teal-50 font-semibold text-2xl md:text-5xl tracking-tight'>menugg-cms.web.app</span>
                                        </div>
                                        <span className='w-[42px] h-[42px] bg-sky-800/80 rounded-md flex items-center justify-center shadow-md'>
                                            <RxArrowTopRight size='28' className=' text-white' />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className=''>
                        <Link href="https://github.com/raflij/menugg-cms-frontend" target="_blank">
                            <div className='p-5 md:p-7 w-full md:w-[596px]'>
                                <div className='flex flex-col justify-start items-start'>
                                    <div className='mb-2'>
                                        <span className='font-semibold text-2xl text-stone-900'>MenuGG CMS</span>
                                    </div>
                                    <div className='flex justify-start items-start font-semibold text-xl text-stone-800/90'>
                                        <span className='mr-1'>on</span>
                                        <span className='mr-1'>
                                            <BsGithub size='24' />
                                        </span>
                                        <span className='mr-1'>github.com</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='mt-12 pb-28'>
                        <h1 className='text-2xl sm:text-3xl font-medium md:font-semibold text-sky-950'>Tech stack used</h1>
                        <div className='mt-6 sm:mt-8 flex flex-wrap items-center space-x-6 sm:space-y-0 space-y-2 sm:space-x-8'>
                            <span className='sm:w-[66px] sm:h-[66px] w-[44px] h-[44px] sm flex items-center'>
                                <FaReact size='20' className='w-full h-full fill-cyan-500' />
                            </span>
                            <span className='sm:h-[66px] h-[56px] sm:flex items-center'>
                                <Image src='/images/express.png' width={360} height={360} alt="Express JS" className='w-full h-full' />
                            </span>
                            <span className='sm:w-[66px] sm:h-[66px] w-[44px] h-[44px] flex items-center'>
                                <Image src='/images/sequelizeLogoStack.png' width={360} height={360} alt="Sequelize" className='w-full h-full' />
                            </span>
                            <span className='sm:w-[66px] sm:h-[66px] w-[44px] h-[44px] flex items-center'>
                                <Image src='/images/PostgreSQL.png' width={360} height={360} alt="PostgreSQL" className='w-full h-full' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project4
