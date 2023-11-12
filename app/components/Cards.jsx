'use client';
import React from 'react';
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const Cards = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  // Function to open URLs in a new tab
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      <div className="bg-[#181818] rounded-b-xl py-6 px-4 text-white">
        <h5 className="font-lg font-semibold">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
      <div
        className="group rounded-t-xl h-52 md:h-72 bg-center relative overflow-hidden"
        style={{ background: `url(${imgUrl}) no-repeat center center`, backgroundSize: "contain" }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
          {/* Use div and handle click event */}
          <div
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white mr-4 cursor-pointer"
            onClick={() => openInNewTab(previewUrl)}
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] hover:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white cursor-pointer"
            onClick={() => openInNewTab(gitUrl)}
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] hover:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
