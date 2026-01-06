import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";

const Card = ({ liveLink, githubLink, projectName, src, title, des, tags }) => {
  return (
    <div className="group relative bg-[#1e1e1f] border border-gray-800 rounded-2xl overflow-hidden transition-all duration-500 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/10 mt-6 mx-2">
      {/* Project Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img 
          src={src} 
          alt={projectName}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center px-6 translate-y-4 group-hover:translate-y-0">
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
            {des}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.split(',').map((tag, index) => (
              <span key={index} className="text-[10px] sm:text-xs bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded-md border border-yellow-500/30">
                {tag.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-5 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h3 className="text-gray-100 font-semibold text-lg sm:text-xl truncate">
            {projectName}
          </h3>
          <div className="flex gap-3">
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-1.5 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-500"
              title="View Source"
            >
              <FaGithub className="text-lg" />
            </a>
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500 transition-colors p-1.5 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-yellow-500/30"
              title="Live Demo"
            >
              <FaExternalLinkAlt className="text-base" />
            </a>
          </div>
        </div>
        <p className="text-gray-400 text-xs sm:text-sm font-medium">
          {title}
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  liveLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default Card;
