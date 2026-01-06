import { IoMdBook } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ResumePage = () => {
  return (
    <div className="resume mt-5 ml-4 sm:mt-10 sm:ml-8 flex flex-col gap-2 sm:gap-4 overflow-hidden">
      <div className="flex justify-between items-center pr-4 sm:pr-10">
        <h1 className="text-gray-100 text-xl sm:text-3xl font-semibold">
          Resume
          <span className="block w-8 sm:w-10 h-1 sm:h-1.5 bg-yellow-500 rounded mt-4"></span>
        </h1>
        <NavLink
          to="https://drive.google.com/file/d/1PMkpVPvG7Zq_k-0nGn53tMcwMTCK0SZA/view?usp=sharing"
          className="border-2 border-gray-800 text-white bg-yellow-500 hover:bg-yellow-400 py-2 px-4 sm:py-2.5 sm:px-6 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-300"
        >
          Access Resume on Drive
        </NavLink>
      </div>
      {/* Resume-details */}
      <div className="relative resume-details pt-5 overflow-y-auto h-[calc(100vh-250px)] hide-scrollbar scroll-smooth pb-20">
        {/* Experience */}
        <div className="experience mt-10">
          <div className="flex gap-5 items-center mb-8">
            <div className="border-t-2 border-l-2 border-gray-700 p-3 rounded-xl bg-neutral-800 shadow-sm">
              <IoMdBook className="fill-yellow-400 text-xl sm:text-2xl" />
            </div>
            <h2 className="text-xl sm:text-2xl text-gray-100 font-semibold">
              Experience
            </h2>
          </div>

          <div className="timeline-list ml-6 border-l-2 border-gray-700">
            {/* Udayam AI Labs */}
            <div className="timeline-item relative pb-10 pl-8">
              <div className="absolute -left-[9px] top-0 border-2 border-gray-700 p-1 rounded-full bg-neutral-800">
                <FaCircle className="fill-yellow-400 text-[8px]" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm sm:text-base text-gray-100 font-semibold">
                  Web Developer Intern - Udayam AI Labs (Remote)
                </h3>
                <span className="text-yellow-500/80 text-xs sm:text-sm font-medium">
                  Aug 2025 -- Present
                </span>
                <p className="text-gray-300 text-xs sm:text-base leading-relaxed">
                  Redesigned and revamped the entire company website, enhancing UI/UX and overall performance. Designed and developed responsive dashboards for students and teachers/trainers with role-based access and functionality. Developed and integrated an AI-powered chatbot to improve customer engagement and support.
                </p>
              </div>
            </div>

            {/* TechNova Solutions */}
            <div className="timeline-item relative pb-10 pl-8">
              <div className="absolute -left-[9px] top-0 border-2 border-gray-700 p-1 rounded-full bg-neutral-800">
                <FaCircle className="fill-yellow-400 text-[8px]" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm sm:text-base text-gray-100 font-semibold">
                  Frontend Developer Intern - TechNova Solutions (Remote)
                </h3>
                <span className="text-yellow-500/80 text-xs sm:text-sm font-medium">
                  Jan 2025 -- June 2025
                </span>
                <p className="text-gray-300 text-xs sm:text-base leading-relaxed">
                  Collaborated with a team to develop dynamic, mobile-responsive UIs using React and Tailwind CSS. Built reusable components and optimized existing codebase to improve performance and maintainability. Worked closely with designers using Figma to implement pixel-perfect UI.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="education mt-10">
          <div className="flex gap-5 items-center mb-8">
            <div className="border-t-2 border-l-2 border-gray-700 p-3 rounded-xl bg-neutral-800 shadow-sm">
              <IoMdBook className="fill-yellow-400 text-xl sm:text-2xl" />
            </div>
            <h2 className="text-xl sm:text-2xl text-gray-100 font-semibold">
              Education
            </h2>
          </div>

          <div className="timeline-list ml-6 border-l-2 border-gray-700">
            {/* Bachelor */}
            <div className="timeline-item relative pb-10 pl-8">
              <div className="absolute -left-[9px] top-0 border-2 border-gray-700 p-1 rounded-full bg-neutral-800">
                <FaCircle className="fill-yellow-400 text-[8px]" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm sm:text-base text-gray-100 font-semibold">
                  Mumbai University
                </h3>
                <span className="text-gray-300 text-xs sm:text-base">
                  Bachelor of Science in Information Technology (Bsc IT)
                </span>
                <span className="text-xs sm:text-base text-gray-300">
                  <b className="text-yellow-500">8.03</b>&nbsp;&nbsp;CGPA
                </span>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default ResumePage;
