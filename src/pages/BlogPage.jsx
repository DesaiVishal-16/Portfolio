import BlogCard from "../components/BlogCard";

const BlogPage = () => {
  return (
    <div className="blog sm:px-8 sm:py-10 px-4 py-5 flex flex-col gap-4 overflow-auto">
      <h1 className="text-gray-100  text-xl sm:text-3xl font-semibold">
        Blog
        <span className="block w-6 sm:w-10 h-1 sm:h-1.5 bg-yellow-500 rounded mt-4"></span>
      </h1>
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
    </div>
  );
};

export default BlogPage;
