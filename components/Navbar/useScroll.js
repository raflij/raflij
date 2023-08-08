import { useEffect, useState } from 'react';
import { Events } from 'react-scroll';

const useScroll = () => {
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerSection = document.getElementById('header');
      const skillsSection = document.getElementById('skills');
      const projectsSection = document.getElementById('projects');
      const workExperiencesSection = document.getElementById('work-experiences');
      const contactMeSection = document.getElementById('contact-me');

      if (headerSection !== null) {
        if (scrollPosition < headerSection.offsetTop + headerSection.offsetHeight) {
          setCurrentSection('#header');
        } else if (
          skillsSection !== null &&
          scrollPosition >= skillsSection.offsetTop &&
          scrollPosition < skillsSection.offsetTop + skillsSection.offsetHeight
        ) {
          setCurrentSection('#skills');
        } else if (
          projectsSection !== null &&
          scrollPosition >= projectsSection.offsetTop &&
          scrollPosition < projectsSection.offsetTop + projectsSection.offsetHeight
        ) {
          setCurrentSection('#projects');
        } else if (
          workExperiencesSection !== null &&
          scrollPosition >= workExperiencesSection.offsetTop &&
          scrollPosition < workExperiencesSection.offsetTop + workExperiencesSection.offsetHeight
        ) {
          setCurrentSection('#work-experiences');
        } else if (
          contactMeSection !== null &&
          scrollPosition >= contactMeSection.offsetTop &&
          scrollPosition < contactMeSection.offsetTop + contactMeSection.offsetHeight
        ) {
          setCurrentSection('#contact-me');
        }
      }
    };

    Events.scrollEvent.register('begin', () => {
      setCurrentSection('');
    });

    Events.scrollEvent.register('end', () => {
      handleScroll();
    });

    // Trigger initial scroll to determine current section on page load
    window.scrollTo(0, 0);
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return { currentSection };
};

export default useScroll;
