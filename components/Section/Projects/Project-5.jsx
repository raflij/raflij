import React from 'react'
import Image from 'next/image';
import { FaReact } from 'react-icons/fa';

const Project5 = () => {
    const projectImgList = [
        { id: 1, src: '/images/system-inventory/1.png', alt: 'Desktop Dashboard View', bg: 'bg-gradient-to-tr from-white via-blue-300/40 to-fuchsia-500/40', class: 'rounded-xl md:rounded-2xl w-full h-full' },
        { id: 2, src: '/images/system-inventory/2.png', alt: 'Desktop Dashboard View', bg: 'bg-gradient-to-tr from-white via-blue-500/40 to-blue-300/50', class: 'rounded-xl md:rounded-2xl w-full h-full' },
        { id: 3, src: '/images/system-inventory/4.jpg', alt: 'Responsive Sidebar', bg: 'bg-gradient-to-tr from-fuchsia-600/30 via-blue-400/30 to-fuchsia-500/40', class: 'rounded-xl md:rounded-2xl w-full h-full' },
        { id: 4, src: '/images/system-inventory/3.jpg', alt: 'Responsive Menu', bg: 'bg-gradient-to-tr from-blue-400/20 via-fuchsia-600/20 to-fuchsia-500/30', class: 'rounded-xl md:rounded-2xl w-full h-full' },
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
            <div className='relative sm:hidden h-[3px] bg-gradient-to-r from-indigo-300 to-white'></div>
            <div className='sm:rounded-3xl py-20 sm:shadow-md pb-24 sm:pb-0 sm:border-[2px] sm:border-indigo-300 bg-gradient-to-r sm:bg-gradient-to-br from-indigo-50/80 sm:via-transparent to-white sm:to-indigo-50/80'>
                <div className='sm:px-8 px-6'>
                    <div className="flex items-center">
                        <div className='flex items-center justify-center w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] bg-indigo-600 rounded-full mr-2'>
                            <span className='text-white text-2xl sm:text-3xl font-semibold'>M</span>
                        </div>
                        <span className='text-2xl sm:text-4xl font-medium text-indigo-600 tracking-tight md:tracking-normal'>Mixue Inventory System</span>
                    </div>
                    <div className='mt-10'>
                        <p className='text-lg sm:text-2xl'>
                            Mixue inventory system <span className='font-semibold'>empowers owners to effectively</span> track ingredient stock levels, identify discrepancies between system calculations and manual counts, and monitor overall inventory health.
                        </p>
                    </div>
                    <div className='mt-16 relative overflow-auto md:mb-0 mb-3'>
                        <div className='w-full flex items-center snap-x overflow-x-auto space-x-4 py-4'>
                            {projectImg}
                        </div>
                    </div>
                    <div className='mt-16'>
                        <p className='text-lg sm:text-2xl'>
                            The system provides <span className='font-semibold'>detailed reports</span> on each ingredient, including potential issues and the calculated discrepancies.
                            <br />
                            <br />
                            This allows owners to maintain <span className='font-semibold'>accurate inventory records, minimize waste, and optimize</span> ingredient ordering processes for smoother operations.
                        </p>
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

export default Project5
