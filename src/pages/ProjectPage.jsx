import { useState, useRef, useEffect } from "react";
import FeaturedProjects from "../components/FeaturedProjects";
import CurrentlyWorking from "../components/CurrentlyWorking";
import JavaScript from "../components/JavaScript";
import React from "../components/React";
import AI from "../components/AI";
import { FaArrowDown } from "react-icons/fa";

const ProjectPage = () => {
  const [selectedSection, setSelectedSection] = useState("featured");
  const [showArrow, setShowArrow] = useState(true);
  const scrollRef = useRef(null);

  const sections = [
    { id: "featured", label: "Featured" },
    { id: "Currently Working", label: "In Development" },
    { id: "AI", label: "AI" },
    { id: "React", label: "React" },
    { id: "JavaScript", label: "JavaScript" },
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      // Show arrow only if there's content to scroll, we're near the top,
      // and it's NOT the "In Development" section
      if (
        scrollTop > 50 || 
        scrollHeight <= clientHeight
      ) {
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
      // Initial check
      handleScroll();
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, [selectedSection]);

  const renderSection = () => {
    switch (selectedSection) {
      case "featured":
        return <FeaturedProjects />;
      case "Currently Working":
        return <CurrentlyWorking />;
      case "AI":
        return <AI />;
      case "React":
        return <React />;
      case "JavaScript":
        return <JavaScript />;
      default:
        return <FeaturedProjects />;
    }
  };

  return (
    <div className="projects mt-5 ml-4 sm:mt-10 sm:ml-8 flex flex-col gap-4 relative h-[calc(100vh-100px)]">
      <h1 className="text-gray-100 text-xl sm:text-3xl font-semibold">
        Projects
        <span className="block w-8 sm:w-10 h-1 sm:h-1.5 bg-yellow-500 rounded mt-4"></span>
      </h1>

      <div className="project-nav mt-6">
        <ul className="flex flex-wrap gap-4 sm:gap-8 text-sm sm:text-base font-medium">
          {sections.map((section) => (
            <li
              key={section.id}
              className={`relative cursor-pointer transition-colors duration-300 pb-2 ${
                selectedSection === section.id
                  ? "text-yellow-500"
                  : "text-gray-400 hover:text-gray-200"
              }`}
              onClick={() => setSelectedSection(section.id)}
            >
              {section.label}
              {selectedSection === section.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 rounded-full transition-all duration-300"></span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div 
        ref={scrollRef}
        className="overflow-y-auto h-[calc(100vh-250px)] hide-scrollbar scroll-smooth mt-4 pb-10"
      >
        {renderSection()}
      </div>

      {showArrow && selectedSection !== "Currently Working" && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce text-yellow-500/80 pointer-events-none sm:bottom-10">
          <span className="text-[10px] uppercase tracking-widest font-bold">More</span>
          <FaArrowDown className="text-xl" />
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
