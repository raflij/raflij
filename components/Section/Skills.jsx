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
        <h1 className='relative text-6xl font-bold text-[#fd562a]'>
          <span className='relative z-10'>Skills</span>
          <span className='bg-gradient-to-r from-orange-300/80 to-orange-100/30 absolute left-0 bottom-0 sm:bottom-1 lg:bottom-2 z-0 h-[16px] sm:h-[22px] w-full rotate-[-2.2deg]'></span>
        </h1>

        <h2 className='sm:text-3xl text-2xl text-gray-500/90 mt-8'>Mostly using</h2>
        <div className='flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-6'>
          <SkillItem src="/images/react-js.png" alt="React JS" name="React JS" />
          <SkillItem src="/images/next.png" alt="Next JS" name="Next JS" />
          <SkillItem src="/images/dotnet.png" alt=".NET C#" name=".NET C#" />
          <SkillItem src="/images/graphqlLogoStack.png" alt="GraphQL" name="GraphQL" />
          <SkillItem src="/images/restapi.png" alt="REST API" name="REST API" />
          <SkillItem src="/images/docker.png" alt="Docker" name="Docker" />
          <SkillItem src="/images/git.png" alt="Git" name="Git" />
          <SkillItem src="/images/tailwindcss.svg" alt="TailwindCSS" name="TailwindCSS" />
          <SkillItem src="/images/kafka.png" alt="Kafka" name="Kafka" />
          <SkillItem src="/images/redis.png" alt="Redis" name="Redis" />
          <SkillItem src="/images/debezium.png" alt="Debezium" name="Debezium" />
          <SkillItem src="/images/kubernetes.png" alt="Kubernetes" name="Kubernetes" />
          <SkillItem src="/images/file-type-terraform.svg" alt="Terraform" name="Terraform" />
          <SkillItem src="/images/Ansible_logo.svg.png" alt="Ansible" name="Ansible" />
        </div>

        {/* <h2 className='sm:text-3xl text-2xl text-center text-gray-500/90 mt-8'>Currently studying</h2>
        <div className='flex flex-wrap justify-center items-center space-x-4 mt-6'>
          <SkillItem src="/images/kubernetes.png" alt="Kubernetes" name="Kubernetes" />
        </div> */}
      </div>
    </div>
  </div>
);

export default Skills;