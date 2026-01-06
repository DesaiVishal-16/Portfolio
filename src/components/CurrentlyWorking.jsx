import Card from "./Card";
import builderImg from "../assets/blog_horizon.png";

const CurrentlyWorking = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-20">
      <Card
        projectName="WebsiteBuilder"
        liveLink="https://github.com/DesaiVishal-16/WebsiteBuilder"
        githubLink="https://github.com/DesaiVishal-16/WebsiteBuilder"
        src={builderImg}
        title="No-Code Builder"
        des="A drag-and-drop website builder that allows users to create professional sites without writing code. Features customizable templates and real-time preview."
        tags="React, DnD-Kit, Tailwind, Firebase"
      />
    </div>
  );
};

export default CurrentlyWorking;
