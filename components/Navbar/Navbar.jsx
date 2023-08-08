"use client"
import React, { useState } from 'react';
import { BsList } from 'react-icons/bs';

import Modal from './NavbarModal';
import useScroll from './useScroll';
import NavigationLinks from './NavigationLinks';
import ModalContent from './NavbarModalContent';

const Navbar = () => {

  const [showModal, setShowModal] = useState(false);
  const { currentSection } = useScroll();

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <nav className='relative'>
      <div className='absolute md:hidden block'>
        <div className={`fixed top-0 z-[99999] w-full
        ${currentSection === '#header' ? '' : 'bg-gradient-to-b from-[#716cbf]/30 to-transparent'}`}>
          <div className='py-6'>
            <div className='flex justify-end px-8'>
              <button onClick={() => {
                setShowModal(true);
              }} className='inline-flex items-center justify-center w-[40px] h-[40px] rounded-md bg-[#43426d]
               hover:bg-[#4e4b82]/70
               focus-ring-inset focus:outline-none focus:ring-2 focus:ring-white'>
                <BsList size='24' className='fill-[#fce8ff]' />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id='navbar'
        className={`md:block hidden fixed transition-opacity duration-500 top-0 w-full z-50 justify-start
    ${currentSection === '#work-experiences' || currentSection === '#contact-me' ? '' : 'bg-gradient-to-b from-[#716cbf]/60 to-[#9da3dc]/5'
          }
    ${currentSection === '#header' || currentSection === '' ? 'opacity-0' : 'opacity-100'}`}
      >
        <NavigationLinks />
      </div>
      <Modal show={showModal} onClose={handleModalClose}>
        <ModalContent onClose={handleModalClose} />
      </Modal>
    </nav>
  );
};

export default Navbar;
