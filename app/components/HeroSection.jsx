"use client";
import Link from 'next/link';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-12 my-4">
      <div className="col-span-7">
        <div className="pb-20">
          <h1 className="mb-4 text-3xl lg:text-6xl font-extrabold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-lime-500">
              Hello, I am Ashwini
            </span>
        
            <TypeAnimation
              sequence={[
                'Full Stack Web Developer', 2000, 
                'Creator of SuperQuiz', 1000, 
                'Experience in JavaScript, TypeScript, C#, Python', 1000, 
                'React, React Native, Express.js', 1000, 
                'MongoDB, PostgreSQL, AWS, MUI, Tailwind CSS', 1000, 
                'HTTP API Clients, OpenAI GPT APIs, Auth0 Authentication', 1000
              ]}
              wrapper="div"
              style={{ fontSize: '1.625rem', lineHeight: '2.25rem' }}
              speed={50}
              backSpeed={60}
              repeat={Infinity}
            />
          </h1>
        </div>
  
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 p-4">
          <Link href="#contact" className="inline-flex justify-center bg-gradient-to-br from-cyan-500 to-lime-500 text-charcoal rounded-full shadow-lg transition duration-150 ease-in-out">
            <span className="block bg-charcoal hover:bg-gray-900 rounded-full px-5 py-2 whitespace-nowrap">
              Hire Me
            </span>
          </Link>
          <Link href="/" className="inline-flex justify-center bg-gradient-to-br from-cyan-500 to-lime-500 text-charcoal rounded-full shadow-lg transition duration-150 ease-in-out">
            <span className="block bg-charcoal hover:bg-gray-900 rounded-full px-5 py-2 whitespace-nowrap">
              Download CV
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
