"use client";
import Link from 'next/link';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Image from "next/image";
import GithubIcon from "../../public/images/github2.png"
import LinkedinIcon from "../../public/images/LinkedIn.png"


const HeroSection = () => {

    
  const handleDownloadCV = () => {
    window.open('/resume.pdf', '_blank');
  };
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
<section className="relative grid grid-cols-1 lg:grid-cols-12 my-4">
  <div className="col-span-7">
    <div className="pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center mb-4">
        <div className="col-span-2 lg:col-span-4 flex items-center">
          <h1 className="text-4xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold text-white whitespace-nowrap mr-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-lime-500">
              Hello, I am Ashwini
            </span>
          </h1>
        </div>

        <div className="col-span-1 lg:col-span-1 flex justify-end lg:justify-start lg:ml-4">

              <Link href="#contact" className="inline-flex justify-center items-center bg-gradient-to-br from-cyan-500 to-lime-500 text-charcoal rounded-full shadow-lg transition duration-150 ease-in-out transform hover:scale-105">
                <span className="block bg-charcoal hover:bg-cyan-500 hover:border-cyan-700 hover:border-2 hover:text-white rounded-full px-5 py-2 whitespace-nowrap">
                  Hire Me
                </span>
              </Link>
              <span onClick={handleDownloadCV} className="inline-flex justify-center bg-gradient-to-br from-cyan-500 to-lime-500 text-charcoal rounded-full shadow-lg transition duration-150 ease-in-out cursor-pointer ml-4">
                <span className="block bg-charcoal hover:bg-cyan-500 hover:border-cyan-700 hover:border-2 hover:text-white rounded-full px-5 py-2 whitespace-nowrap">
                  Download Resume
                </span>
              </span>
            </div>
          </div>
          
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
            style={{ fontSize: '1.8rem', lineHeight: '2.25rem', color: 'white' }}
            speed={50}
            backSpeed={60}
            repeat={Infinity}
          />

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
