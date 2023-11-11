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
          <div className="flex items-center mb-4">
            <h1 className="text-3xl lg:text-6xl font-extrabold text-white inline">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-lime-500">
                Hello, I am Ashwini
              </span>
            </h1>
            <div className="flex gap-2 ml-4">
              <div className="cursor-pointer" onClick={() => openInNewTab('https://github.com/ashuppal')}>
                <Image
                  alt="GitHub logo"
                  src={GithubIcon}
                  width={30}
                  height={40}
                  layout="fixed"
                />
              </div>
              <div className="cursor-pointer" onClick={() => openInNewTab('https://www.linkedin.com/in/ashwini-uppal')}>
                <Image
                  alt="LinkedIn logo"
                  src={LinkedinIcon}
                  width={28}
                  height={30}
                  layout="fixed"
                />
              </div>
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
              style={{ fontSize: '1.625rem', lineHeight: '2.25rem', color:'white' }}
              speed={50}
              backSpeed={60}
              repeat={Infinity}
            />
        </div>

        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 p-4">
          <Link href="#contact" className="inline-flex justify-center items-center bg-gradient-to-br from-cyan-500 to-lime-500 text-charcoal rounded-full shadow-lg transition duration-150 ease-in-out transform hover:scale-105">
            <span className="block bg-charcoal hover:bg-cyan-500 hover:border-cyan-700 hover:border-2 hover:text-white rounded-full px-5 py-2 whitespace-nowrap">
              Hire Me
            </span>
          </Link>

          <span onClick={handleDownloadCV} className="inline-flex justify-center bg-gradient-to-br from-cyan-500 to-lime-500 text-charcoal rounded-full shadow-lg transition duration-150 ease-in-out cursor-pointer">
            <span className="block bg-charcoal hover:bg-cyan-500 hover:border-cyan-700 hover:border-2 hover:text-white rounded-full px-5 py-2 whitespace-nowrap">
              Download Resume
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
