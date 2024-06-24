import { MdOnlinePrediction } from "react-icons/md";
import { FaGithubAlt } from "react-icons/fa6";
// import { IoIosInformationCircleOutline } from "react-icons/io";
import PropTypes from "prop-types";

const Card = ({ liveLink, githubLink, projectName, src, title, des, tags }) => {
  return (
    <div className="relative w-64 sm:w-96 mt-5 shadow-lg shadow-yellow-400">
      <div className="bg-gray-400 flex z-10 rounded-t-xl  justify-between px-2 sm:px-4">
        <span className="flex">
          <a className="flex gap-2 items-center" href={liveLink}>
            <MdOnlinePrediction className="fill-red-500 hover:fill-red-400 text-sm sm:text-xl" />
            <b className="text-red-500 hover:text-red-400 text-xs sm:text-base">
              Live
            </b>
          </a>
        </span>
        <b className="text-gray-100 text-xs sm:text-base">{projectName}</b>
        <span className="flex">
          <a className="flex gap-2 items-center" href={githubLink}>
            <FaGithubAlt className="fill-indigo-600  hover:fill-indigo-500" />
            <b className="text-indigo-600 hover:text-indigo-500 text-xs sm:text-base">
              Github
            </b>
          </a>
        </span>
      </div>

      <div className="card relative z-1 group">
        <img src={src} className="card-image w-96 sm:w-96 h-40 sm:h-60" />
        <div className="absolute inset-0 bg-black bg-opacity-55 flex flex-col gap-3 pt-3 pl-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full">
          <span className="text-gray-200 text-xs sm:text-base">
            Title : &nbsp;&nbsp;{title}
          </span>
          <span className="text-gray-200 text-xs sm:text-sm">
            Key Features : &nbsp;&nbsp;
            {des}
          </span>
          <span className="text-gray-200 text-xs sm:text-sm">
            Technology : &nbsp;&nbsp;{tags}
          </span>
        </div>
      </div>

      <div className="bg-gray-500 p-2"></div>
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
