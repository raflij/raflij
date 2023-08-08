import React from 'react';
import { BsList } from 'react-icons/bs';

const MobileNavButton = ({ onClick }) => {
  return (
    <div className='flex justify-end px-8'>
      <button
        onClick={onClick}
        className='inline-flex items-center justify-center w-[40px] h-[40px] rounded-md bg-[#43426d]
          hover:bg-[#4e4b82]/70 focus-ring-inset focus:outline-none focus:ring-2 focus:ring-white'
        aria-label='Toggle Navigation'
      >
        <BsList size='24' className='fill-[#fce8ff]' />
      </button>
    </div>
  );
};

export default MobileNavButton;