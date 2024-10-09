import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { RxArrowTopRight } from 'react-icons/rx';
import { BsGithub } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';

const Project6 = () => {
    const projectImgList = [
        { id: 1, src: '/images/transmediset/1.png', alt: 'Desktop Landing View', bg: 'bg-gradient-to-tr from-white via-emerald-300/40 to-rose-500/40', class: 'rounded-xl md:rounded-2xl w-full h-full' },
        { id: 2, src: '/images/transmediset/2.png', alt: 'Desktop Landing View', bg: 'bg-gradient-to-tr from-white via-emerald-500/40 to-emerald-300/50', class: 'rounded-xl md:rounded-2xl w-full h-full' }
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
            <div className='relative sm:hidden h-[3px] bg-gradient-to-r from-teal-300 to-white'></div>
            <div className='sm:rounded-3xl py-20 sm:shadow-md pb-24 sm:pb-0 sm:border-[2px] sm:border-teal-300 bg-gradient-to-r sm:bg-gradient-to-br from-teal-50/80 sm:via-transparent to-white sm:to-teal-50/80'>
                <div className='sm:px-8 px-6'>
                    <div className="flex items-center">
                        <div className='flex items-center justify-center w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] bg-teal-600 rounded-full mr-2'>
                            <span className='text-white text-2xl sm:text-3xl font-semibold'>T</span>
                        </div>
                        <span className='text-3xl sm:text-4xl font-medium text-teal-600 tracking-tight md:tracking-normal'>Transmediset</span>
                    </div>
                    <div className='mt-10'>
                        <p className='text-lg sm:text-2xl'>
                            Mediset is a transcription and translation service that specializes in transforming spoken words into written excellence with a dedicated focus on precision, confidentiality, and client satisfaction in Bahasa Indonesia, English, and Spanish.
                        </p>
                    </div>
                    <div className='mt-16 relative overflow-auto md:mb-0 mb-3'>
                        <div className='w-full flex items-center snap-x overflow-x-auto space-x-4 py-4'>
                            {projectImg}
                        </div>
                    </div>
                    <div className='mt-12 pb-28'>
                        <h1 className='text-2xl sm:text-3xl font-medium md:font-semibold text-sky-950'>Tech stack used</h1>
                        <div className='mt-6 sm:mt-8 flex flex-wrap items-center space-x-6 sm:space-y-0 space-y-2 sm:space-x-8'>
                            <span className='sm:h-[66px] h-[56px] sm:flex items-center'>
                                <Image src='/images/nextJSLogoStack.png' width={360} height={360} alt="Next JS" className='w-full h-full' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project6
