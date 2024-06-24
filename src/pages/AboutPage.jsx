import iNeuronCertification from "../assets/iNeuron.png";

const AboutPage = () => {
  return (
    <div className="about mt-5 ml-4 sm:mt-10 sm:ml-8 flex flex-col gap-2 sm:gap-4">
      <h1 className="text-gray-100 text-xl sm:text-3xl font-semibold">
        About Me
        <span className="block w-8 sm:w-10 h-1 sm:h-1.5 bg-yellow-500 rounded mt-4"></span>
      </h1>

      <div className="about-details overflow-y-auto hide-scrollbar scroll-smooth pb-60">
        <div className="about-content mt-4">
          <p className="text-gray-300 text-xs sm:text-base pr-5">
            Hello, my name is Vishal Desai, and I am a dedicated web frontend
            developer with a Bachelor`s degree in Information Technology.
            <br />
            <br />I have developed extensive expertise in HTML, CSS, CSS
            frameworks, JavaScript, React, React-Redux Toolkit, and TypeScript.
            <br />
            <br /> I am passionate about creating intuitive and dynamic user
            interfaces and am currently expanding my knowledge in backend
            development. <br />
            <br />I am actively seeking a frontend development role where I can
            leverage my expertise to contribute to innovative web projects and
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
                JavaScript, TypeScript, C++, Sql
              </li>
            </ul>
            <ul className="css-frameworks text-yellow-500 text-xs sm:text-base flex flex-wrap gap-2">
              CSS Frameworks :
              <li className="text-gray-300">
                Tailwind, Bootstrap, Material UI
              </li>
            </ul>
            <ul className="javascript-frameworks text-yellow-500 text-xs sm:text-base flex flex-wrap gap-2">
              JavaScript Frameworks :<li className="text-gray-300">React</li>
            </ul>
            <ul className="state-management text-yellow-500 text-xs sm:text-base flex flex-wrap gap-2">
              State Management :
              <li className="text-gray-300">
                React-Context, Redux Toolkit, Zustand
              </li>
            </ul>
            <ul className="testing text-yellow-500 text-xs sm:text-base flex flex-wrap gap-2">
              Testing Framework :<li className="text-gray-300">Jest</li>
            </ul>
            <ul className="tools text-yellow-500 text-xs sm:text-base flex flex-wrap gap-2">
              Tools :
              <li className="text-gray-300">
                Git, Redux DevTools, Docker, Firebase
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
            <a href="https://drive.google.com/file/d/1-7543TdbgrMxAtpnLWeIceHPFqCfdNZP/view?usp=drive_link">
              <img src={iNeuronCertification} className=" mt-10" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
