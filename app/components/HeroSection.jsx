"use client";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-12 my-4">
      <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
        {/* Content container with padding at the bottom to push up the text */}
        <div className="pb-20"> {/* Adjust the padding value as needed */}
          <h1 className="whitespace-nowrap max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-lime-500 lg:text-6xl text-4xl">
              Hello, I am{' '}
            </span>
            <br></br>
            <TypeAnimation
              sequence={['Ashwini', 2000, 'Full Stack Web Developer', 1000]}
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


// import React from "react";
// import Image from "next/image";
// import { TypeAnimation } from 'react-type-animation';


// const HeroSection = () => {
//   return (
//     <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
//       <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
//       <h1 className="whitespace-nowrap max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold text-white">
//       <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-lime-500 lg:text-6xl text-4xl">
//             Hello, I am {" "}
//           </span>
//           <br></br>
//           <TypeAnimation
//       sequence={[
//         // Same substring at the start will only be typed out once, initially
//         'Ashwini',
//         2000, 
//         'Full Stack Web Developer',
//         1000,
    

//       ]}
//       wrapper="span"
//       speed={50}
//       backSpeed={60}
//       repeat={Infinity}
//     />
        
//         </h1>
//         {/* <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
//           voluptatum.
//         </p> */}
//         <div>
//   <button className="bg-gradient-to-br from-cyan-500 to-lime-500 hover:bg-gray-300 text-charcoal px-6 py-3 rounded-full mr-4 shadow-lg transition duration-150 ease-in-out">
//     Hire Me
//   </button>
//   <button className="m-4 bg-gradient-to-br from-cyan-500 to-lime-500 px-1 py-1 text-charcoal rounded-full shadow-lg transition duration-150 ease-in-out">
//     <span className="block bg-charcoal hover:bg-gray-900 rounded-full px-5 py-2">
//       Download CV
//     </span>
//   </button>
// </div>


//       </div>
//       {/* <div className="col-span-5 place-self-center mt-8 lg:mt-8">
//   <div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] flex justify-center items-center relative overflow-hidden"> */}
//     {/* <Image
//       src="/images/hero.png"
//       alt="hero image"
//       className="object-contain w-full h-full" // Adjusted classes here
//       width={300}
//       height={300}
//     /> */}
//   {/* </div> */}
// </section>



//   );
// };

// export default HeroSection;