import PropTypes from "prop-types";

const BlogCard = ({ BlogImg, BlogTitle, BlogDes, BlogDate }) => {
  return (
    <div className="shadow-lg shadow-black w-30 sm:w-96 rounded-xl">
      <a href="" className="z-5 border-none rounded-lg">
        <img src={BlogImg} className="w-full h-40 sm:h-52 rounded-xl" />

        <div className="flex flex-col gap-3 px-4 py-3 z-10">
          <span className="text-gray-400 text-xs sm:text-sm">
            &nbsp;&nbsp;{BlogDate}
          </span>
          <h1 className="text-gray-100 text-xs sm:text-lg">
            &nbsp;&nbsp;{BlogTitle}
          </h1>
          <span className="text-gray-300 text-xs sm:text-sm">
            &nbsp;&nbsp;
            {BlogDes}
          </span>
        </div>
      </a>
    </div>
  );
};
BlogCard.propTypes = {
  BlogImg: PropTypes.string.isRequired,
  BlogTitle: PropTypes.string.isRequired,
  BlogDes: PropTypes.string.isRequired,
  BlogDate: PropTypes.string.isRequired,
};
export default BlogCard;
