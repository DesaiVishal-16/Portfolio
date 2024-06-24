import LeftContainter from "../components/LeftContainter";
import RightContainer from "../components/RightContainer";

const HomePage = () => {
  return (
    <div className="main-container py-5 px-5 xl:py-16 xl:px-40 flex flex-col xl:flex-row gap-6 h-screen">
      <LeftContainter />
      <RightContainer />
    </div>
  );
};

export default HomePage;
