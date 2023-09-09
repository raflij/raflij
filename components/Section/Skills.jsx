import React from 'react';
import Image from 'next/image';

const SkillItem = ({ src, alt, name }) => (
  <div className='w-auto md:mb-0 mb-3'>
    <div className='rounded-full border border-gray-400/50 px-3 py-1 sm:px-5 sm:py-2 bg-slate-50 text-base'>
      <div className='flex justify-center items-center space-x-2'>
        <Image src={src} width={18} height={20} alt={alt} />
        <span className='font-sanz font-semibold'>{name}</span>
      </div>
    </div>
  </div>
);

const Skills = () => (
  <div className='sm:px-12 md:px-16 z-50 px-6 py-24'>
    <div className='relative mx-auto max-w-[1240px]'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-6xl font-bold text-[#fd562a]'>Skills</h1>

        <h2 className='sm:text-3xl text-2xl text-gray-500/90 mt-8'>Mostly using</h2>
        <div className='flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-6'>
          <SkillItem src="/images/react-js.png" alt="React JS" name="React JS" />
          <SkillItem src="/images/reduxLogoStack.png" alt="React Redux" name="React Redux" />
          <SkillItem src="/images/next.png" alt="Next JS" name="Next JS" />
          <SkillItem src="/images/vue.png" alt="Vue JS" name="Vue JS" />
          <SkillItem src="/images/piniaLogoStack.png" alt="Pinia" name="Pinia" />
          <SkillItem src="/images/svelte.png" alt="Svelte JS" name="Svelte JS" />
          <SkillItem src="/images/tailwindcss.svg" alt="TailwindCSS" name="TailwindCSS" />
          <SkillItem src="/images/ginLogoStack.png" alt="Gin Golang" name="Golang Gin" />
          <SkillItem src="/images/express.png" alt="Express JS" name="Express JS" />
          <SkillItem src="/images/graphqlLogoStack.png" alt="GraphQL" name="GraphQL" />
          <SkillItem src="/images/restapi.png" alt="Rest API" name="Rest API" />
        </div>

        <h2 className='sm:text-3xl text-2xl text-center text-gray-500/90 mt-8'>Rarely using / currently studying</h2>
        <div className='flex flex-wrap justify-center items-center space-x-4 mt-6'>
          <SkillItem src="/images/nuxt.png" alt="Nuxt JS" name="Nuxt JS" />
          <SkillItem src="/images/laravel.png" alt="Laravel" name="Laravel" />
          <SkillItem src="/images/ci.png" alt="Codeigniter" name="Codeigniter" />
        </div>
      </div>
    </div>
  </div>
);

export default Skills;