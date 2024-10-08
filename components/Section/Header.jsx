import React from 'react'

const Header = () => {
    return (
        <>

            <div className="relative h-[12px] w-full bg-[#2b2a37] z-50"></div>
            <div className="sm:px-12 md:px-16 z-50 px-6 py-10 md:py-24 bg-gradient-to-b from-[#151326] to-[#181726]">
                <div className="relative mx-auto max-w-[1240px]">
                    <div className='absolute top-0 right-[480px]'>
                        <div className='h-[118px] w-[118px] rounded-md bg-gradient-to-br from-[#cfd3ee]/5 to-transparent'></div>
                    </div>
                    <div className='absolute bottom-0 left-[120px]'>
                        <div className='h-[118px] w-[118px] rounded-md bg-gradient-to-t from-[#cfd3ee]/5 to-transparent'></div>
                    </div>
                    <div className='absolute bottom-[160px] right-[120px]'>
                        <div className='h-[118px] w-[118px] rounded-md bg-gradient-to-bl from-[#cfd3ee]/5 to-transparent'></div>
                    </div>
                    <div className="relative z-20">
                        <h1 className="text-5xl md:text-6xl font-semibold md:font-bold text-white pb-4 md:pb-8">rafli <span className='text-[#fd562a]'>j</span></h1>
                        <p className="text-[66px] leading-[100%] md:leading-snug font-bold text-white pb-12 md:pb-24">
                            <span className="z-50 tracking-[-0.06em]">
                                a <span className="relative">
                                    <span className="z-50 relative">happy</span>
                                    <span className="absolute block w-full inset-0 h-[46px] bg-gradient-to-r from-amber-700 to-orange-400/80 z-0 -left-1 top-8 rotate-[2.2deg]">
                                    </span></span> software enginee<span className='text-[#fd562a]'>r</span>
                            </span>
                            <br />
                            <span className='mt-8 md:mt-0 tracking-tighter md:text-[66px] text-3xl font-medium md:font-bold md:inline inline-block md:max-w-auto max-w-[360px]'>
                                <span>
                                    <span className='text-[#fd562a]'>always</span> eager to take on
                                    <span className='text-[#fd562a]'> new</span> challenges </span>
                                <span>
                                    and <span className='text-[#fd562a]'>expand</span> my knowledge
                                </span>
                            </span>
                        </p>
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug md:leading-relaxed text-[#7477bd]/90">
                            <span className=' md:max-w-auto max-w-[430px]'>
                                <span className="font-semibold">I am a self-taught</span> <span>Software Engineer with a strong track record</span>
                                <br className='hidden lg:block' />
                                <span> of creating scalable, high-performance systems</span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
