import React from 'react'

const WorkExperience = () => {
    return (

        <div className='flex items-center justify-center bg-[#100e20] py-24'>
            <div className='flex flex-col items-start sm:items-center sm:px-0 px-6'>
                <h2 className='text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight text-cyan-50 md:flex items-start md:items-center'>
                    <span className='text-4xl sm:text-6xl md:text-6xl lg:text-7xl block sm:inline-block mb-2 md:mb-0'>💼 </span>
                    <span className='relative'>
                        <span className='relative z-10'>Work Experiences</span>
                        <span className='bg-gradient-to-r from-[#878cf2]/80 to-[#a9b3f8]/10 absolute left-0 bottom-0 z-0 h-[16px] md:h-[20px] w-full rotate-[-1.8deg]'></span>
                    </span>
                </h2>
                <p className='pt-12 text-[#545a79] sm:text-center text-xl sm:text-2xl max-w-[720px]'>
                    I have previously worked on freelance as a full stack web developer, and held a full-time job as a software engineer.
                </p>
                <div className='relative mx-auto max-w-[1240px] sm:pt-32 sm:pb-32 sm:px-9 xl:px-0'>
                    <div className='relative sm:hidden h-[3px] bg-[#090811]'></div>
                    <div className='sm:rounded-2xl py-20 sm:shadow-md pb-24 sm:pb-0 sm:border-[2px] bg-[#090811] border-[#2d2a62]'>
                        <div className='sm:px-24 px-18'>
                            <div className="flex items-center">
                                <div className='flex items-center justify-center w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] bg-teal-600 rounded-full mr-2'>
                                    <span className='text-white text-2xl sm:text-3xl font-semibold'>T</span>
                                </div>
                                <span className='text-3xl sm:text-4xl font-medium text-teal-600 tracking-tight md:tracking-normal'>Andal Software</span>
                            </div>
                            <div className='mt-10'>
                                <p className='text-lg sm:text-2xl'>
                                    Mediset is a transcription and translation service that specializes in transforming spoken words into written excellence with a dedicated focus on precision, confidentiality, and client satisfaction in Bahasa Indonesia, English, and Spanish.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience
