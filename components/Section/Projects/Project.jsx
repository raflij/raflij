import React from 'react'
import ProjectSatu from './Project-1'
import ProjectDua from './Project-2'
import ProjectTiga from './Project-3'
import ProjectEmpat from './Project-4'
import ProjectLima from './Project-5'
import ProjectEnam from './Project-6'

const Project = () => {
    return (
        <>
            <div className="sm:px-12 md:px-16 z-50 px-6 py-24">
                <div className='relative mx-auto max-w-[1240px]'>
                    <div>
                        <h1 className='text-[32px] sm:text-5xl lg:text-6xl font-bold'>
                            <span className='block sm:inline-block sm:ml-0 -ml-1 mb-2 sm:mb-0 mr-0 sm:mr-2'>☀️</span>
                            <span className='relative'>
                                <span className='relative z-10 text-[#151326]/90 tracking-tight sm:tracking-normal'>Outstanding Projects</span>
                                <span className='bg-gradient-to-r from-[#bac2e7]/80 to-[#bac2e7]/30 absolute left-0 bottom-0 sm:bottom-1 lg:bottom-2 z-0 h-[16px] sm:h-[22px] w-full rotate-[-2.2deg]'></span>
                            </span></h1>
                    </div>
                    <div className='max-w-[720px] mt-10 md:mt-6'>
                        <p className='text-[20px] md:text-[22px] leading-8 tracking-wide'>I have been involved in deverse projects, consistently delivering
                            innovative features and functionalities, then I am also ready to
                            <br className='hidden lg:block' /> work with any team and I am open to new opportunities</p>
                    </div>
                </div>
            </div>
            <div className='mt-[10px]'></div>
            {/* <ProjectEnam/> */}
            <ProjectLima/>
            {/* <ProjectEmpat/> */}
            <ProjectTiga/>
            <ProjectDua/>
            <ProjectSatu/>
            <div className='h-[3px] bg-gradient-to-r from-[#878cf2] to-[#38327d]'></div>
        </>
    )
}

export default Project
