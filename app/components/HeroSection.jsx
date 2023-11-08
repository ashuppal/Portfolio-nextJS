"use client";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-12 my-4">
      <div className="col-span-7 grid lg:place-items-start">
        {/* Content container with padding at the bottom to push up the text */}
        <div className="pb-20"> {/* Adjust the padding value as needed */}
          <h1 className="whitespace-nowrap max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-lime-500 lg:text-6xl text-4xl">
              Hello, I am Ashwini
            </span>
            <br></br>
            <TypeAnimation  style={{ fontSize: '26px' }}
              sequence={['Full Stack Web Developer', 2000, 'Creator of SuperQuiz  ', 1000, 'Experience in JavaScript, TypeScript, C#, Python', 1000, 'React, React Native, Express.js', 1000, 'MongoDB, PostgreSQL, AWS, MUI, Tailwind CSS', 1000, 'HTTP API Clients, OpenAI GPT APIs, Auth0 Authentication ', 1000]}
              wrapper="span"
              speed={50}
              backSpeed={60}
              repeat={Infinity}
            />
          </h1>
        </div>
        {/* Buttons container with absolute positioning */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center lg:justify-start p-4">
          <button className="bg-gradient-to-br from-cyan-500 to-lime-500 hover:bg-gray-300 text-charcoal px-6 py-3 rounded-full mr-4 shadow-lg transition duration-150 ease-in-out">
            Hire Me
          </button>
          <button className="bg-gradient-to-br from-cyan-500 to-lime-500 px-1 py-1 text-charcoal rounded-full shadow-lg transition duration-150 ease-in-out">
            <span className="block bg-charcoal hover:bg-gray-900 rounded-full px-5 py-2">
              Download CV
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
