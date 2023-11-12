'use client';
import Image from "next/image";
import GithubIcon from "../../public/images/github2.png";
import LinkedinIcon from "../../public/images/LinkedIn.png";

const Footer = () => {
  // Function to handle opening links in a new tab
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-4 flex justify-between items-center">
        <span className="text-muted">Ashwini Uppal</span>
        {/* Group the logos together in a div */}
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
    </footer>
  );
};

export default Footer;
