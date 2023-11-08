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
    <section className="text-white">
      <div className="gap-8  py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16 mt-4">
      
        <Image src="/images/hero.png" width={700} height={700} alt="aboutme" />
    
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white texxt-base md:text-lg">
            As a seasoned Full-Stack Software Developer with a diverse
            background that spans finance, education, and healthcare, I bring a
            unique perspective to the tech industry.My journey in the
            tech world is fueled by a desire to develop solutions that make a
            difference, backed by a solid foundation in both front-end and
            back-end development, and a commitment to delivering exceptional
            digital experiences. <br></br>Launching SuperQuiz as its founder,
            I've refined my leadership and innovation capabilities, specializing
            in the creation of engaging, AI-assisted quizzes tailored to enhance
            educational experiences. This experience has sharpened my skills in
            product development, enabling me to intuitively align software
            functionalities with customer needs, and to deliver personalized
            solutions that resonate with users. My role has also expanded my
            expertise in SaaS platforms, where I've embraced the dynamic process
            of bringing a product to market, continually iterating based on user
            feedback to fine-tune features and user interface for optimal
            engagement and customer satisfaction.
          </p>
          <div className="flex flex-row justify-start mt-8">
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
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
