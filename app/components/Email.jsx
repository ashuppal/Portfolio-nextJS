'use client'; 
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../public/images/github2.png"
import LinkedinIcon from "../../public/images/LinkedIn.png"

const Email = () => {
  // Function to handle opening links in a new tab
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative">
      <div className="absolute w-80 h-80 z-0 "></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="flex gap-2">
          <div className="cursor-pointer" onClick={() => openInNewTab('https://github.com/ashuppal')}>
            <Image
              alt="GitHub logo"
              src={GithubIcon}
              width={50}
              height={50}
              layout="fixed"
            />
          </div>
          <div className="cursor-pointer" onClick={() => openInNewTab('https://www.linkedin.com/in/ashwini-uppal')}>
            <Image
              alt="LinkedIn logo"
              src={LinkedinIcon}
              width={45}
              height={45}
              layout="fixed"
            />
          </div>
        </div>
      </div>
        <form>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              class="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              
            />
          </div>
          <div class="mb-6">
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              class="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
            
            />
          </div>
          <div class="mb-6">
            <button
              type="submit"
              class="bg-gradient-to-r from-cyan-500 to-lime-500 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              {" "}
              Send message{" "}
            </button>
          </div>
        </form>

    </section>
  );
}

export default Email
