"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import AboutMeTabs from "./AboutMeTabs";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div>
        <ul className="list-disc pl-4 space-y-2">
          {" "}
          {/* Add space between list items */}
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>C#</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SQL</li>
          <li>React</li>
          <li>Express.js</li>
        </ul>
      </div>
    ),
  },

  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>MongoDB</li>
        <li>PostgreSQL </li>
        <li>AWS </li>
        <li>MUI </li>
        <li>Tailwind CSS </li>
        <li>Web sockets </li>
        <li>Bootstrap </li>
        <li>HTTP API Clients </li>
        <li>OpenAI GPT APIs </li>
        <li>Jest </li>
        <li>Auth0 Authentication </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Advanced Software Development in Full Stack JavaScript</li>
        <br></br>
        <li>Medical Coding and Billing Certification</li>
        <br></br>
        <li>Master of Business Administartion - Finance</li>
        <br></br>
        <li>Bachelor of Business/Commerce</li>
      </ul>
    ),
  },
];

function AboutMe() {
  const [tab, setTab] = useState("skills");
  const [ispending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white" id="about">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-4 xl:gap-6 mb-6">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-64 md:w-96">
              <Image
                src="/images/hero.png"
                alt="aboutme"
                width={600}
                height={600}
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left mt-2 md:mt-4">
            <h2 className="text-4xl font-bold mb-1">About Me</h2>
            <p className="text-base md:text-lg mb-6">
              My journey in the
              tech world is fueled by a desire to develop solutions that make a
              difference, backed by a solid foundation in both front-end and
              back-end development, and a commitment to delivering exceptional
              digital experiences. <br></br>By launching SuperQuiz,
              I've refined my leadership and innovation capabilities, specializing
              in the creation of engaging, AI-assisted quizzes tailored to enhance
              educational experiences. This experience has sharpened my skills in
              product development, enabling me to intuitively align software
              functionalities with customer needs, and to deliver personalized
              solutions that resonate with users.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center mt-8 md:mt-12">
          <div className="flex justify-center mt-4 mb-3 gap-6">
            <AboutMeTabs
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Languages and Frameworks
            </AboutMeTabs>
            <AboutMeTabs
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Tools and Skills
            </AboutMeTabs>
            <AboutMeTabs
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Education
            </AboutMeTabs>
          </div>
          <div className="mt-8 w-full flex justify-center">
            <div className="w-full max-w-xl px-4"> {/* Adjust max-width as necessary */}
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
