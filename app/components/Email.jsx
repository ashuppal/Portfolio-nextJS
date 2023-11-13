'use client';
import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../public/images/github2.png"
import LinkedinIcon from "../../public/images/LinkedIn.png"

const Email = () => {

  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
   const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    console.log(data);
    setEmailSubmitted(true);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);

    const resData = await response.json();

    if(response.status === 200){
      console.log("Email sent successfully");
    } else {
      console.log("Email failed to send");
   }
  };

  // Function to handle opening links in a new tab
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative">
      <div className="absolute w-80 h-80 z-0 "></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white myåç-2">Let's Connect</h5><br></br>
        <p className="text-[#ADB7BE] mb-4 max-w-md">

          I am always open to exploring new opportunities and partnerships. If you have a project in mind, a job opportunity, or just wish to discuss an idea, feel free to reach out.
          <br></br>
          I'm excited about the possibility of working together and discovering what we can achieve.
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
      {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <div class="mb-6">
          <label
            htmlfor="email"
            class="block mb-2 text-sm font-medium text-white"
          >
            Your email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            class="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"

            required
          />
        </div>
        <div class="mb-6">
          <label
            htmlfor="subject"
            class="block mb-2 text-sm font-medium text-white"
          >
            Subject
          </label>
          <input
            name="subject"
            type="text"
            id="subject"
            class="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"

          />
        </div>
        <div class="mb-6">
          <label
            htmlfor="subject"
            class="block mb-2 text-sm font-medium text-white"
          >
            Message
          </label>
          <textarea
            name="message"
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
      )}

    </section>
  );
}

export default Email
