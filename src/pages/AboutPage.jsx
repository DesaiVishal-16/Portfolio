import { useState, useRef, useEffect } from "react";
import iNeuronCertification from "../assets/iNeuron.png";
import { FaArrowDown } from "react-icons/fa";

const AboutPage = () => {
  const [showArrow, setShowArrow] = useState(true);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      if (scrollTop > 50 || scrollHeight <= clientHeight) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="about mt-5 ml-4 sm:mt-10 sm:ml-8 flex flex-col gap-2 sm:gap-4 relative">
      <h1 className="text-gray-100 text-xl sm:text-3xl font-semibold">
        About Me
        <span className="block w-8 sm:w-10 h-1 sm:h-1.5 bg-yellow-500 rounded mt-4"></span>
      </h1>

      <div 
        ref={scrollRef}
        className="about-details overflow-y-auto h-[calc(100vh-250px)] hide-scrollbar scroll-smooth pb-60"
      >
        <div className="about-content mt-4">
          <p className="text-gray-300 text-xs sm:text-base pr-5">
            Hello, my name is Vishal Desai, and I am a dedicated web developer
            with a Bachelor`s degree in Information Technology.
            <br />
            <br />I have developed expertise in HTML, CSS, JavaScript,
            TypeScript, NextJS, React, Astro, Express.js, Node.js, and MongoDB.
            <br />
            <br /> I am passionate about creating intuitive and dynamic user
            interfaces and robust backend systems. <br />
            <br />I am actively seeking a web development role where I can
            leverage my expertise to contribute to innovative projects and
            drive user engagement.
          </p>
        </div>
        <div className="skills mt-10">
          <h1 className="text-gray-300 text-base sm:text-xl font-semibold">
            My Skills
          </h1>
          <span className="block w-8 lg:w-10 h-1 lg:h-1.5 bg-yellow-500 rounded mt-3"></span>
          <div className="skills-details mt-5 flex flex-col gap-2 ">
            <ul className="languages text-yellow-500 text-xs sm:text-base flex flex-wrap gap-2">
              Languages :
              <li className="text-gray-300">
                TypeScript, JavaScript, C/C++, SQL
              </li>
            </ul>
            <ul className="databases text-yellow-500 text-xs sm:text-base flex flex-wrap gap-2">
              Databases :
              <li className="text-gray-300">MySQL, MongoDB</li>
            </ul>
            <ul className="javascript-frameworks text-yellow-500 text-xs sm:text-base flex flex-wrap gap-2">
              JS Frameworks :
              <li className="text-gray-300">NextJs, React, Astro</li>
            </ul>
            <ul className="ui-frameworks text-yellow-500 text-xs sm:text-base flex flex-wrap gap-2">
              UI Frameworks :
              <li className="text-gray-300">Tailwind CSS, Bootstrap, Shadcn ui</li>
            </ul>
            <ul className="backend text-yellow-500 text-xs sm:text-base flex flex-wrap gap-2">
              Backend :
              <li className="text-gray-300">Express.js, Node.js</li>
            </ul>
            <ul className="tools text-yellow-500 text-xs sm:text-base flex flex-wrap gap-2">
              Other technologies :
              <li className="text-gray-300">
                AWS, Docker, Git, Firebase, Wordpress, Framer
              </li>
            </ul>
          </div>
        </div>
        <div className="certifications mt-10">
          <h1 className="text-gray-300 text-base sm:text-xl font-semibold">
            Certifications
            <span className="block w-8 lg:w-10 h-1 lg:h-1.5 bg-yellow-500 rounded mt-3"></span>
          </h1>
          <div className="certification-link grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 justify-center items-center pr-10">
            <a href="https://drive.google.com/file/d/1QyjiBiP8hPfVoPoRt8ccjJPA84IWyl0R/view?usp=sharing">
              <img src={iNeuronCertification} className=" mt-10" />
            </a>
          </div>
        </div>
      </div>

      {showArrow && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce text-yellow-500/80 pointer-events-none">
          <span className="text-[10px] uppercase tracking-widest font-bold">More</span>
          <FaArrowDown className="text-xl" />
        </div>
      )}
    </div>
  );
};

export default AboutPage;
