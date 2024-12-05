//@ts-nocheck
import { FiDownload } from "react-icons/fi";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from "next/link";
const Hero = () => {
  const openAndDownloadResume = (url, filename) => {
    
    const newTab = window.open(url, '_blank');
    if (newTab) {
      newTab.focus();
    }
  
   
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="py-60">
     
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white 
       absolute top-0 left-0 flex items-center justify-center"
      >
       
        <div
          
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <TextGenerateEffect
            words="Hi! I&apos;m Royal, a Full Stack Developer"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
          As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects, showcasing my expertise in full stack development.
          </p>
          <div className="flex gap-3">
          <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <a onClick={() => openAndDownloadResume('Royal_Resume.pdf', 'Royal_Resume.pdf')} style={{ cursor: 'pointer' }}>
        <MagicButton
          title="Resume"
          icon={<FiDownload />}
          position="right"
        />
      </a>

          </div>
          
          
        
        </div>
      </div>
    </div>
  );
};

export default Hero;
