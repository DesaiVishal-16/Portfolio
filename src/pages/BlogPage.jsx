import BlogCard from "../components/BlogCard";

const BlogPage = () => {
  return (
    <div className="blog sm:px-8 sm:py-10 px-4 py-5 flex flex-col gap-4 overflow-hidden">
      <h1 className="text-gray-100  text-xl sm:text-3xl font-semibold">
        Blog
        <span className="block w-6 sm:w-10 h-1 sm:h-1.5 bg-yellow-500 rounded mt-4"></span>
      </h1>
      <div className="flex flex-col items-center justify-center mt-20 gap-4">
        <div className="p-6 bg-gray-800/30 rounded-full border border-gray-700/50 backdrop-blur-sm">
          <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2zM14 4v4h4" />
          </svg>
        </div>
        <div className="text-center">
          <h2 className="text-gray-300 text-lg sm:text-xl font-medium">No blogs yet</h2>
          <p className="text-gray-500 text-sm sm:text-base mt-1">Will upload soon. Stay tuned!</p>
        </div>
      </div>

      {/* 
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center mt-5 overflow-y-auto h-screen hide-scrollbar scroll-smooth pb-96">
        <BlogCard
          BlogImg="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/blog-1.jpg"
          BlogTitle="TypeScript"
          BlogDes="dddd"
          BlogDate="June 23 2024"
        />
        <BlogCard
          BlogImg="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/blog-1.jpg"
          BlogTitle="TypeScript"
          BlogDes="dddd"
          BlogDate="June 23 2024"
        />
        <BlogCard
          BlogImg="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/blog-1.jpg"
          BlogTitle="TypeScript"
          BlogDes="dddd"
          BlogDate="June 23 2024"
        />
        <BlogCard
          BlogImg="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/blog-1.jpg"
          BlogTitle="TypeScript"
          BlogDes="dddd"
          BlogDate="June 23 2024"
        />
      </div>
      */}
    </div>
  );
};

export default BlogPage;
