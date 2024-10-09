import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeaderSection from '../components/Section/Header';
import SkillSection from '../components/Section/Skills';
import ProjectSection from '../components/Section/Projects/Project';
import WorkExperienceSection from '../components/Section/WorkExperience';
import ContactMeSection from '../components/Section/ContactMe';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden">
        <section id="header" className="relative w-full">
          <HeaderSection/>
        </section>
        <section id="skills" className='relative'>
          <SkillSection/>
        </section>
        <section id="projects" className='relative'>
          <ProjectSection/>
        </section>
        <section id="work-experiences" className='relative'>
          <WorkExperienceSection/>
        </section>
        <section id="contact-me" className='relative'>
          <ContactMeSection/>
        </section>
      </main>
    </>
  )
}
