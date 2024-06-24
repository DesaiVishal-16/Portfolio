import { useState } from "react";
import FeaturedProjects from "../components/FeaturedProjects";
import CurrentlyWorking from "../components/CurrentlyWorking";
import JavaScript from "../components/JavaScript";
import React from "../components/React";
// import ChromeExtension from "../components/ChromeExtension";

const ProjectPage = () => {
  const [selectedSection, setSelectedSection] = useState("featured");

  const renderSection = () => {
    switch (selectedSection) {
      case "Featured":
        return <FeaturedProjects />;
      case "Currently Working":
        return <CurrentlyWorking />;
      case "React":
        return <React />;
      case "JavaScript":
        return <JavaScript />;
      // case "Chrome Extensions":
      //   return <ChromeExtension />;
      default:
        return <FeaturedProjects />;
    }
  };
  return (
    <div className="projects mt-5 ml-4 sm:mt-10 sm:ml-8 flex flex-col gap-4 ">
      <h1 className="text-gray-100 text-xl sm:text-3xl font-semibold">
        Projects
        <span className="block w-8 sm:w-10 h-1 sm:h-1.5 bg-yellow-500 rounded mt-4"></span>
      </h1>

      <div className="project-nav mt-4">
        <ul className="grid grid-cols-2 sm:flex gap-3 sm:gap-10 text-xs sm:text-base text-gray-100">
          <li
            className={`cursor-pointer ${
              selectedSection === "featured"
                ? "text-yellow-500"
                : "hover:text-gray-400"
            }`}
            onClick={() => setSelectedSection("featured")}
          >
            Featured
          </li>
          <li
            className={`cursor-pointer ${
              selectedSection === "Currently Working"
                ? "text-yellow-500"
                : "hover:text-gray-400"
            }`}
            onClick={() => setSelectedSection("Currently Working")}
          >
            In Development
          </li>
          <li
            className={`cursor-pointer ${
              selectedSection === "React"
                ? "text-yellow-500"
                : "hover:text-gray-400"
            }`}
            onClick={() => setSelectedSection("React")}
          >
            React
          </li>
          <li
            className={`cursor-pointer ${
              selectedSection === "JavaScript"
                ? "text-yellow-500"
                : "hover:text-gray-400"
            }`}
            onClick={() => setSelectedSection("JavaScript")}
          >
            JavaScript
          </li>
          {/* <li
            className={`cursor-pointer ${
              selectedSection === "Chrome Extensions"
                ? "text-yellow-500"
                : "hover:text-gray-400"
            }`}
            onClick={() => setSelectedSection("Chrome Extensions")}
          >
            Chrome Extensions
          </li> */}
        </ul>
      </div>
      <div className="overflow-y-auto h-screen hide-scrollbar scroll-smooth">
        {renderSection()}
      </div>
    </div>
  );
};

export default ProjectPage;
