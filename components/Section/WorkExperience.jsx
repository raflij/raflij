import React from 'react'

const WorkExperience = () => {
    return (

        <div className='flex items-center justify-center h-full bg-[#100e20]'>
            <div className='flex flex-col items-start sm:items-center sm:px-0 px-6'>
                <h2 className='text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight text-cyan-50 md:flex items-start md:items-center'>
                    <span className='text-4xl sm:text-6xl md:text-6xl lg:text-7xl block sm:inline-block mb-2 md:mb-0'>🚀</span>
                    <span className='relative'>
                        <span className='relative z-10'>Ready</span>
                        <span className='bg-gradient-to-r from-[#878cf2]/80 to-[#a9b3f8]/10 absolute left-0 bottom-0 z-0 h-[16px] md:h-[20px] w-full rotate-[-1.8deg]'></span>
                    </span>
                </h2>
                <p className='pt-12 text-[#cad2fb] sm:text-center text-xl sm:text-2xl max-w-[720px]'>
                    I am available and ready for new challenges and opportunities
                    <span> as a full-stack developer</span>
                </p>
            </div>
        </div>
    )
}

export default WorkExperience
