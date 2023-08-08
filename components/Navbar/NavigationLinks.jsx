import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const links = [
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'work-experiences', label: 'Work Experiences' },
  { id: 'contact-me', label: 'Contact Me' },
];

const NavLink = ({ href, to, children }) => (
  <div className='font-semibold text-[#695dce]'>
    <ScrollLink href={href} to={to} smooth spy duration={500} activeClass="active" hashSpy={true}>
      {children}
    </ScrollLink>
  </div>
);

const NavigationLinks = () => (
  <div className='flex space-x-8 md:px-16 px-8 py-6 max-w-[1240px]'>
    {links.map((link) => (
      <NavLink key={link.id} href={`#${link.id}`} to={link.id}>
        {link.label}
      </NavLink>
    ))}
  </div>
);

export default NavigationLinks;
