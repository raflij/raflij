import React from 'react'
import Image from 'next/image';

const WorkExperience = () => {
    return (
        <>
        <div className='flex items-center justify-center bg-[#100e20] pt-24 pb-12'>
            <div className='flex flex-col items-start sm:items-center sm:px-0 px-6'>
                <h2 className='text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight text-cyan-50 md:flex items-start md:items-center'>
                    <span className='text-4xl sm:text-6xl md:text-6xl lg:text-7xl block sm:inline-block mb-2 md:mb-0'>💼 </span>
                    <span className='relative'>
                        <span className='relative z-10'>Work Experiences</span>
                        <span className='bg-gradient-to-r from-[#878cf2]/80 to-[#a9b3f8]/10 absolute left-0 bottom-0 z-0 h-[16px] md:h-[20px] w-full rotate-[-1.8deg]'></span>
                    </span>
                </h2>
                <p className='pt-12 text-indigo-200 font-normal sm:text-center text-xl sm:text-2xl max-w-[720px]'>
                    I have previously worked on freelance as a full stack web developer, and held a full-time job as a software engineer.
                </p>
            </div>
        </div>
        <div class="sm:hidden block relative top-0 h-[3px] bg-gradient-to-r from-[#878cf2] via-[#090811] to-[#090811]"></div>
        <div className='flex items-center justify-center bg-[#100e20] pb-24'>
            <div className='flex flex-col items-start sm:items-center sm:px-0 px-6'>
                <div className='relative sm:pt-32 sm:pb-32 sm:px-9 xl:px-0'>
                    <div className='sm:rounded-2xl py-20 sm:shadow-md sm:border-[2px] bg-transparent sm:bg-[#090811] border-[#2d2a62] mx-auto max-w-[1240px] sm:min-w-[1240px] min-w-full'>
                        <div className='sm:px-24 px-18'>
                            <div className='sm:flex-row flex-col flex sm:items-center items-start sm:justify-between justify-start'>
                                <div className="flex items-center">
                                    <div className='flex items-center justify-center w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] rounded-lg mr-4 sm:mr-6'>
                                        <Image src='https://media.licdn.com/dms/image/v2/D560BAQEfJnWXLKeOvw/company-logo_100_100/company-logo_100_100/0/1707967991547/andalsoftwaresejahtera_logo?e=1736985600&v=beta&t=TWJCPcN9NqX0BmdYAJZGmByrqjn2egG6qDzPTFqeCw0' width={46} height={46} alt='Andal Software' className='w-full h-full rounded-lg' />
                                    </div>
                                    <span className='text-2xl sm:text-4xl font-medium text-white tracking-tight md:tracking-normal'>Andal Software</span>
                                </div>
                                <div className='rounded-2xl border-indigo-600 border-2 px-3 py-2 sm:mt-0 mt-6 w-fit'>
                                    <span className='font-bold text-purple-50 sm:text-lg md:text-xl'>Software Engineer</span>
                                </div>
                            </div>
                            <div className='mt-16'>
                                <h4 className='font-semibold text-lg sm:text-xl text-violet-400'>November 2023 - Present</h4>
                                <p className='mt-10 text-lg sm:text-xl text-violet-50 max-w-[570px]'>
                                    Working on the backend team, building and scaling SaaS platforms, with a secondary focus on DevOps
                                </p>
                                <ul className='mt-10 max-w-[774px] space-y-5 sm:text-base md:text-lg !leading-[180%] pl-4 text-violet-300 list-disc marker:text-violet-200'>
                                    <li>Actively contributed to technical design and run scalable solutions for complex engineering challengs</li>
                                    <li>Actively participated in code reviews, ensuring high quality code and adherence to coding standards</li>
                                    <li>Collaborated in Agile Team with worked closely with cross-functional teams Dev Ops, QA, and PO</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default WorkExperience
