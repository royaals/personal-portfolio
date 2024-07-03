import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";
const Footer = () => {
  const date = new Date();
     const year = date.getFullYear();
  return (
    <footer className="w-full  pb-10 mb-[100px] md:mb-5" id="contact">
     
  
            

      {/* <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Connect with <span className="text-purple">me</span> 
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=royalsalins.dev@gmail.com&su=Let's%20get%20in%20touch">
     
        <div className="relative inline-flex group ">
                <div className="absolute flex justify-center items-center w-full transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r animate-pulse hover:animate-none from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
               
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                    }}
                    className="block"
                  >
                   Let&apos;s get in touch
                  </span>
                 
              </div>
            
</a>

      </div> */}
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-xs md:font-extralight font-extralight">
          Copyright © {year} Royal. All right reserved
        </p>

       
      </div>
    </footer>
  );
};

export default Footer;
