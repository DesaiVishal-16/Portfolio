import { IoMdBook } from "react-icons/io";
import { FaCircle } from "react-icons/fa";

const ResumePage = () => {
  return (
    <div className="resume mt-5 ml-4 sm:mt-10 sm:ml-8 flex flex-col gap-2 sm:gap-4 overflow-auto">
      <h1 className="text-gray-100 text-xl sm:text-3xl font-semibold">
        Resume
        <span className="block w-8 sm:w-10 h-1 sm:h-1.5 bg-yellow-500 rounded mt-4"></span>
      </h1>
      {/* Resume-details */}
      <div className="resume-details mt-5 overflow-y-auto hide-scrollbar scroll-smooth pb-80 h-screen">
        {/* Education */}
        <div className="education">
          {/* Schooling */}
          <p className="flex gap-5 items-center ml-0.5">
            <span className="border-t-2 border-l-2 border-gray-500 p-3 rounded-xl">
              <IoMdBook className="fill-yellow-400 text-base sm:text-xl" />
            </span>
            <span className="text-lg sm:text-2xl text-gray-100 font-semibold">
              Education
            </span>
          </p>
          <span className="block w-0.5 h-10 bg-gray-700 ml-6"></span>
          <p className="flex gap-8 ml-4 items-center relative bottom-7 right-0.5">
            <span className="border-2  border-gray-500  p-1 rounded-full">
              <FaCircle className="fill-yellow-400 text-xs" />
            </span>
            <p className="flex flex-col relative top-6">
              <span className="text-xs sm:text-base text-gray-100 font-semibold">
                Anudatt Vidyalaya School
              </span>
              <span className="text-xs sm:text-base text-gray-300">
                Attended from 1<sup>st</sup> to 10<sup>th</sup> Standard
                (2007-2017)
              </span>
              <span className="text-gray-300">
                <b className="text-yellow-500 text-xs sm:text-base">79.23 %</b>
                &nbsp;&nbsp;in 10th{" "}
              </span>
            </p>
          </p>
          {/* High-school */}
          <span className="block w-0.5 h-20 bg-gray-700 ml-6 relative bottom-14"></span>
          <p className="flex gap-8 ml-4 items-center relative bottom-24 sm:bottom-20 right-0.5">
            <span className="border-2  border-gray-500  p-1 rounded-full">
              <FaCircle className="fill-yellow-400 text-xs" />
            </span>
            <p className="flex flex-col relative top-6">
              <span className="text-xs sm:text-base text-gray-100 font-semibold">
                Shri T P Bhatia College of Science
              </span>
              <span className="text-xs sm:text-base text-gray-300">
                Attended from 11<sup>th</sup> to 12<sup>th</sup> Standard
                (20017-2019)
              </span>
              <span className="text-xs text-gray-300 sm:text-base">
                <b className="text-yellow-500">71 %</b>&nbsp;&nbsp;in 12th
              </span>
            </p>
          </p>
          {/* Bachelor */}
          <span className="block w-0.5 h-20 bg-gray-700 ml-6 relative mt-3 sm:mt-2 bottom-32 sm:bottom-28"></span>
          <p className="flex gap-8 ml-4 items-center relative mt-2 sm:mt-0 bottom-44 sm:bottom-36 right-0.5">
            <span className="border-2  border-gray-500  p-1 rounded-full">
              <FaCircle className="fill-yellow-400 text-xs" />
            </span>
            <p className="flex flex-col relative top-10 sm:top-6">
              <span className="text-xs sm:text-base text-gray-100 font-semibold">
                Dhirajlal Talakchand Sankalchand Shah College
              </span>
              <span className="text-xs sm:text-base text-gray-300">
                Graduated with a Bachelor`s degree in Information Technology
                (2020-2023)
              </span>
              <span className="text-xs sm:text-base text-gray-300">
                <b className="text-yellow-500">8.03</b>&nbsp;&nbsp;CGPA
              </span>
            </p>
          </p>
        </div>
        {/* Experience */}
        <div className="experience relative bottom-20 sm:bottom-10">
          <p className="flex gap-5 items-center ml-0.5">
            <span className="border-t-2 border-l-2 border-gray-500 p-3 rounded-xl">
              <IoMdBook className="fill-yellow-400 text-base sm:text-xl" />
            </span>
            <span className="text-lg sm:text-2xl text-gray-100 font-semibold">
              Experience
            </span>
          </p>
          {/* Freelance */}
          <span className="block w-0.5 h-10 bg-gray-700 ml-6"></span>
          <p className="flex gap-8 ml-4 items-center relative bottom-10 sm:bottom-7 right-0.5">
            <span className="border-2  border-gray-500  p-1 rounded-full">
              <FaCircle className="fill-yellow-400 text-xs" />
            </span>
            <p className="flex flex-col mt-8 gap-1">
              <span className="text-xs sm:text-base text-gray-100 font-semibold">
                Freelance Web developer
              </span>
              <span className="text-gray-300 text-xs sm:text-base">
                Developed a comprehensive website for an elevator service
                company.
              </span>
            </p>
          </p>
        </div>
        {/* Resume button Download */}
        <div className="resume-download-btn ml-10 sm:ml-16 relative bottom-16 sm:bottom-0">
          <a href="https://drive.google.com/file/d/1-7543TdbgrMxAtpnLWeIceHPFqCfdNZP/view?usp=drive_link">
            <button className="border-2 border-gray-800 text-white bg-yellow-500 hover:bg-yellow-400 py-2 px-4 rounded-xl font-semibold">
              Access Resume on Drive
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
