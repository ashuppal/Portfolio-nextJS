"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

import Image from "next/image";
import GithubIcon from "../../public/images/github2.png";
import LinkedinIcon from "../../public/images/LinkedIn.png";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (

    <nav className="fixed w-full border border-[#33353F] top-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="container mx-auto px-0 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <Link href={"/"} className="text-2xl md:text-2xl text-white font-semibold mr-4">
            Ashwini Uppal
          </Link>

          <div onClick={() => openInNewTab('https://github.com/ashuppal')} className="cursor-pointer mr-2">
            <Image
              alt="GitHub logo"
              src={GithubIcon}
              width={40}
              height={40}
              layout="fixed"
            />
          </div>
          <div onClick={() => openInNewTab('https://www.linkedin.com/in/ashwini-uppal')} className="cursor-pointer">
            <Image
              alt="LinkedIn logo"
              src={LinkedinIcon}
              width={38}
              height={38}
              layout="fixed"
            />
          </div>

        </div>

        <div className="menu hidden md:flex md:items-center" id="navbar">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;