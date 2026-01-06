import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname.split("/")[1];
    const pageTitle = path
      ? `Vishal Desai - ${path.charAt(0).toUpperCase() + path.slice(1)}`
      : "Vishal Desai - About";
    document.title = pageTitle;
  }, [location]);
  return (
    <nav
      id="position"
      className="border-2 border-gray-700 h-auto 
      w-full fixed bottom-0 left-0 px-10 py-4 rounded-t-2xl bg-neutral-800/80 backdrop-blur-md z-20
      lg:absolute lg:top-0 lg:right-0 lg:bottom-auto lg:left-auto lg:w-fit lg:rounded-bl-2xl lg:rounded-tr-2xl lg:rounded-tl-none lg:px-10 lg:py-4 lg:border-t-0 lg:border-r-0"
    >
      <ul className="text-gray-300 text-xs sm:text-base flex gap-5 sm:gap-10 justify-center">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "hover:text-gray-400"
          }
          to="/about"
        >
          <li>About</li>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "hover:text-gray-400"
          }
          to="/resume"
        >
          <li>Resume</li>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "hover:text-gray-400"
          }
          to="/projects"
        >
          <li>Projects</li>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "hover:text-gray-400"
          }
          to="/blog"
        >
          <li>Blog</li>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "hover:text-gray-400"
          }
          to="/contact"
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
