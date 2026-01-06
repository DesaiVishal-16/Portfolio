import Card from "./Card";
import udayamImg from "../assets/udayam_dashboard.png";
import alandiImg from "../assets/alandi_vivah.png";
import blogImg from "../assets/blog_horizon.png";
import chatifyImg from "../assets/chatify.png";
import infraImg from "../assets/zabarwan.png";

const FeaturedProjects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-20">
      <Card
        projectName="LMS Dashboard"
        liveLink="https://github.com/DesaiVishal-16/udayam-dashboard"
        githubLink="https://github.com/DesaiVishal-16/udayam-dashboard"
        src={udayamImg}
        title="LMS Platform"
        des="Comprehensive Learning Management System dashboard for students and teachers. Features role-based access, progress tracking, and interactive learning modules."
        tags="React, Tailwind CSS, Node.js, MongoDB"
      />
      <Card
        projectName="Alandi Vivah Sanstha"
        liveLink="https://courtmarriagealandi.com"
        githubLink="https://github.com/DesaiVishal-16/alandi-vivah-sanstha"
        src={alandiImg}
        title="Matrimonial Platform"
        des="A full-scale matrimonial website with user profiles, advanced search filters, and secure communication channels. Built for a local community organization."
        tags="WordPress, Elementor"
      />
      <Card
        projectName="BlogHorizon"
        liveLink="https://blogHorizon.vishaldesai.xyz"
        githubLink="https://github.com/DesaiVishal-16/BlogHorizon"
        src={blogImg}
        title="Full-Stack Blog"
        des="Modern blogging platform with Astro for performance and React for interactivity. Features include MDX support, comments, and user authentication."
        tags="Astro, React, Express, MongoDB"
      />
      <Card
        projectName="Chatify"
        liveLink="https://chatify.vishaldesai.xyz"
        githubLink="https://github.com/DesaiVishal-16/Chatify"
        src={chatifyImg}
        title="Real-Time Chat"
        des="Instant messaging app with real-time updates using WebSockets. Supports private rooms, file sharing, and presence indicators."
        tags="React, Socket.io, Node.js, Firebase"
      />
      <Card
        projectName="Zabarwan Infratech"
        liveLink="https://zabarwan.vishaldesai.xyz"
        githubLink="https://github.com/DesaiVishal-16/zabarwan-infratech"
        src={infraImg}
        title="Corporate Site"
        des="A modern corporate website for an infrastructure company. Focuses on performance, SEO, and a premium visual experience."
        tags="WordPress, Elementor"
      />
    </div>
  );
};

export default FeaturedProjects;
