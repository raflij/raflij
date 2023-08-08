import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { RxArrowTopRight } from 'react-icons/rx';
import { BsTropicalStorm } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';

const Project1 = () => {
    const projectImgList = [
        { id: 1, src: '/images/iziiuse/1.png', alt: 'IziiUSE Home', bg: 'bg-gradient-to-tr from-white via-purple-600/10 to-teal-600/20', class: 'rounded-xl md:rounded-2xl w-full h-full' },
        { id: 2, src: '/images/iziiuse/5.png', alt: 'IziiUSE Payment', bg: 'bg-gradient-to-tr from-white via-purple-600/10 to-teal-600/20', class: 'rounded-xl md:rounded-2xl' },
        { id: 3, src: '/images/iziiuse/3.png', alt: 'IziiUSE Garap Airdrop', bg: 'bg-gradient-to-r from-sky-500 to-blue-600', class: 'rounded-xl md:rounded-2xl scale-90' },
        { id: 4, src: '/images/iziiuse/2.png', alt: 'IziiUSE Add Airdrop', bg: 'bg-gradient-to-tr from-teal-600/10 via-purple-600/10 to-teal-600/20', class: 'rounded-xl md:rounded-2xl w-full h-full' },
        { id: 5, src: '/images/iziiuse/4.png', alt: 'IziiUSE Add Pasukan', bg: 'bg-gradient-to-tr from-teal-600/10 via-purple-600/10 to-teal-600/20', class: 'rounded-xl md:rounded-2xl w-full h-full' },
    ]
    const projectImg = projectImgList.map((hasil, i) =>
        <div className="snap-center shrink-0" key={i}>
            <div className={`flex items-center p-4 md:p-6 rounded-2xl md:rounded-3xl w-[332px] h-[382px] md:w-[394px] md:h-[441px] ${hasil.bg}`}>
                <Image src={hasil.src} width={394} height={441} alt={hasil.alt} className={hasil.class} />
            </div>
        </div>
    );
    return (

        <div className='relative mx-auto max-w-[1240px] sm:pb-32 sm:px-9 xl:px-0'>
            <div className='relative sm:hidden h-[3px] bg-gradient-to-r from-[#b2b9ef] to-white'></div>
            <div className='sm:rounded-3xl py-20 sm:shadow-md pb-24 sm:pb-0 sm:border-[2px] sm:border-[#b2b9ef] bg-gradient-to-r sm:bg-gradient-to-br from-[#f0f2fd]/80 sm:via-transparent to-white sm:to-[#f0f2fd]/80'>
                <div className='sm:px-8 px-6'>
                    <div className="flex items-center">
                        <span className='mr-2 mt-1'><BsTropicalStorm size='34' className='text-black' /></span>
                        <span className='text-3xl sm:text-4xl font-medium text-[#1d9bf0] tracking-tight md:tracking-normal'>IziUSE</span>
                    </div>
                    <div className='mt-10'>
                        <p className='text-lg sm:text-2xl'>
                            <span className='font-semibold'>Introducing IziUSE</span> - a service provides a comprehensive
                            solution for cryptocurrency airdrop enthusiasts, simplifying the process of completing
                            airdrop tasks and storing their important data on our platform.
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
                            Why create this project? There is still no service that helps cryptocurrency <span className='font-semibold'
                            >airdrop enthusiasts </span>
                            efficiently <span className='font-semibold'
                            >manage their tasks</span>. It offers remarkable convenience compared to the outdated approach
                            of <span className='font-semibold'
                            >storing data </span> in notepad or spreadsheet.
                            <br />
                            <br />
                            Also, within this system, their data is impeccably organized and effortlessly accessible with <span className='font-semibold'
                            >strict security </span> measures.
                        </p>
                    </div>
                    <div className='mt-16'>
                        <Link href="https://iziuse.web.app" target="_blank">
                            <div className='rounded-2xl sm:rounded-3xl p-5 md:p-7 bg-gradient-to-r from-sky-800 to-sky-900 w-full md:w-[496px] shadow-md'>
                                <div>
                                    <div className='flex items-start justify-between'>
                                        <div>
                                            <div className='flex items-center mb-2'>
                                                <div className='md:h-[10px] md:w-[10px] h-[8px] w-[8px] rounded-full bg-teal-300 mr-2 md:mr-3'></div>
                                                <span className='text-teal-300 text-lg md:text-2xl tracking-tight font-semibold'>Live in production</span>
                                            </div>
                                            <span className='text-teal-50 font-semibold text-3xl md:text-5xl tracking-tight'>iziuse.web.app</span>
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
                                <FaReact size='20' className='w-full h-full fill-cyan-500' />
                            </span>
                            <span className='sm:w-[66px] sm:h-[66px] w-[60px] h-[60px] flex items-center'>
                                <Image src='/images/firebase.png' width={360} height={360} alt="Firebase" className='w-full h-full' />
                            </span>
                            <span className='sm:w-[66px] sm:h-[66px] w-[60px] h-[60px] flex items-center'>
                                <Image src='/images/express.png' width={360} height={360} alt="Express JS" className='w-full h-full' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project1
