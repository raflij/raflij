import React from 'react';
import { RxCross1 } from 'react-icons/rx';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';

const ModalContent = ({ onClose }) => {
    return (
        <>
            <div className='flex justify-between items-center px-2'>
                <div className='h-12 w-12'>
                    <Image src='/images/r-square.jpg' alt='' width={128} height={128} className='w-full h-full rounded-full' />
                </div>
                <div className="h-[40px] w-[40px] rounded-lg hover:bg-[#f9d0fe]/40 flex items-center justify-center
          ">
                    <button onClick={onClose}>
                        <RxCross1 size='18' className="text-[#f379f9]" />
                    </button>
                </div>
            </div>
            <div className='pt-5 pb-6'>
                <div className='space-y-1 text-[#43426d]/90'>
                    <div className='py-2 px-3 hover:bg-[#f9d0fe]/20 rounded-md'>
                        <ScrollLink
                            href="#skills"
                            to="skills"
                            smooth={true}
                            spy={true}
                            duration={500}
                            activeClass="active"
                            hashSpy={true}

                        >
                            Skills
                        </ScrollLink>
                    </div>
                    <div className='py-2 px-3 hover:bg-[#f9d0fe]/20 rounded-md'>
                        <ScrollLink
                            href="#projects"
                            to="projects"
                            smooth={true}
                            spy={true}
                            duration={500}
                            activeClass="active"
                            hashSpy={true}

                        >
                            Projects
                        </ScrollLink>
                    </div>
                    <div className='py-2 px-3 hover:bg-[#f9d0fe]/20 rounded-md'>
                        <ScrollLink
                            href="#work-experiences"
                            to="work-experiences"
                            smooth={true}
                            spy={true}
                            duration={500}
                            activeClass="active"
                            hashSpy={true}

                        >
                            Work Experiences
                        </ScrollLink>
                    </div>
                    <div className='py-2 px-3 hover:bg-[#f9d0fe]/20 rounded-md'>
                        <ScrollLink
                            href="#contact-me"
                            to="contact-me"
                            smooth={true}
                            spy={true}
                            duration={500}
                            activeClass="active"
                            hashSpy={true}

                        >
                            Contact Me
                        </ScrollLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalContent
