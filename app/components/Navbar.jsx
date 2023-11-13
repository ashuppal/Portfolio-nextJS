"use client"; import React, { useState } from "react";
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

  // Check if the "Contact" link is active
  const isContactActive = window.location.hash === "#contact";

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
              width={30}
              height={30}
              layout="fixed"
            />
          </div>
          <div onClick={() => openInNewTab('https://www.linkedin.com/in/ashwini-uppal')} className="cursor-pointer">
            <Image
              alt="LinkedIn logo"
              src={LinkedinIcon}
              width={28}
              height={28}
              layout="fixed"
            />
          </div>
        </div>

        {/* Render the mobile menu button */}
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(true)}
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(false)}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Render the navigation links */}
        <div className="hidden md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex p-4 md:p-0  rounded-lg flex-row md:space-x-8 mt-0">
            {navLinks.map((link) => {
              // Only render the "Contact" link if it's not active
              if (link.title === "Contact" && isContactActive) {
                return null;
              }

              return (
                <li key={link.title}>
                  <NavLink
                    title={link.title}
                    href={link.path}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
}

export default Navbar;
