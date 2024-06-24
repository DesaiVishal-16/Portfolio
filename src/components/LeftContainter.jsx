import { MdOutlineEmail } from "react-icons/md";
import { RiSuitcaseLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";

const LeftContainter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      id="left-container"
      className="left-container bg-neutral-800 border-2 border-gray-700 rounded-3xl bg-gray-800 w-full xl:w-72 h-auto order-1"
    >
      <button
        onClick={toggleButton}
        className={`xl:hidden fixed right-6 border-l-2 border-b-2 rounded-lg border-gray-500 ${
          isOpen ? "border-yellow-500 ease-in duration-500" : ""
        }`}
      >
        <span className="block sm:hidden">
          <RiArrowDropDownLine className="text-yellow-500 text-3xl" />
        </span>
        <span className="hidden sm:block text-yellow-500 text-xs py-2 px-4">
          Show Contacts
        </span>
      </button>
      {/* Profile */}
      <ul className="flex xl:flex-col justify-start items-center xl:justify-center items-center gap-2 sm:gap-5 py-5 px-5">
        <li className="">
          <img
            className="rounded-full w-14 sm:w-20 lg:w-24"
            src="https://placehold.co/100x100"
          />
        </li>
        <li className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-base pb-1 sm:text-2xl lg:text-4xl text-white">
            Vishal Desai
          </h1>
          <span
            id="position"
            className="text-xs lg:text-sm text-center border-none px-1 lg:px-14 py-1 lg:py-2 text-gray-300 rounded-lg"
          >
            Web developer
          </span>
        </li>
      </ul>

      {/* Contacts */}
      <div
        id="details"
        className={`transition-all duration-700 ease-in ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        } xl:max-h-screen xl:opacity-100 xl:block`}
      >
        {/* Horizontal line */}
        <div className="horizontal-line px-4">
          <span className="block w-full h-0.5  bg-gray-700"></span>
        </div>
        {/* Details */}
        <ul className="px-5 py-5 flex flex-col gap-4">
          <li id="Role" className="flex items-center gap-4">
            <div className="border-t-2 border-l-2 border-gray-700 rounded-lg p-1">
              <RiSuitcaseLine className="fill-yellow-500 text-xl" />
            </div>
            <div>
              <h1 className="text-gray-400 text-sm"> Currently Applying for</h1>{" "}
              <span className="text-gray-200">Frontend Role </span>
            </div>
          </li>
          <li id="Email" className="flex items-center gap-4">
            <div className="border-t-2 border-l-2 border-gray-700 rounded-lg p-1">
              <MdOutlineEmail className="fill-yellow-500 text-xl" />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-gray-400 text-sm">EMAIL</span>

              <div className="overflow-auto hide-scrollbar">
                <a
                  href="mailto:vishaldesaidotcom@gmail.com"
                  className="truncate text-gray-200 text-base overscroll-x-auto"
                >
                  vishaldesaidotcom@gmail.com
                </a>
              </div>
            </div>
          </li>
          <li id="phone" className="flex items-center gap-4">
            <div className="border-t-2 border-l-2 border-gray-700 rounded-lg p-1">
              <IoPhonePortraitOutline className="text-yellow-500 text-xl" />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-gray-400 text-sm">PHONE</span>

              <div className="overflow-auto hide-scrollbar">
                <span className="text-gray-200 text-base overscroll-x-auto">
                  +91 9082322165
                </span>
              </div>
            </div>
          </li>
          <li id="Location" className="flex items-center gap-4">
            <div className="border-t-2 border-l-2 border-gray-700 rounded-lg p-1">
              <IoLocationOutline className="text-yellow-500 text-xl" />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-gray-400 text-sm">LOCATION</span>

              <div className="overflow-auto hide-scrollbar">
                <span className="text-gray-200 text-base overscroll-x-auto">
                  Mumbai, Maharashtra, India
                </span>
              </div>
            </div>
          </li>
          {/* Horizontal line */}
          <div className="horizontal-line px-8">
            <span className="block w-full h-0.5 bg-gray-700"></span>
          </div>
          {/* Links */}
          <div className="flex pl-10 gap-10">
            <li id="Github" className="flex items-center gap-4" title="Github">
              <div className="border-t-2 border-l-2 border-gray-700 hover:border-yellow-500 rounded-lg p-1">
                <a href="https://github.com/DesaiVishal-16">
                  <FaGithub className="fill-yellow-500 text-xl" />
                </a>
              </div>
            </li>
            <li
              id="Leetcode"
              className="flex items-center gap-4"
              title="Leetcode"
            >
              <div className="border-t-2 border-l-2 border-gray-700 hover:border-yellow-500 rounded-lg p-1">
                <a href="https://leetcode.com/u/vishaldesaidotcom">
                  <SiLeetcode className="fill-yellow-500 text-xl" />
                </a>
              </div>
            </li>
            <li
              id="Linekdin"
              className="flex items-center gap-4"
              title="Linkedin"
            >
              <div className="border-t-2 border-l-2 border-gray-700 hover:border-yellow-500 rounded-lg p-1">
                <a href="https://www.linkedin.com/in/vishaldesai16">
                  <FaLinkedin className="fill-yellow-500 text-xl" />
                </a>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default LeftContainter;
