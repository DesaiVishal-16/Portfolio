import LeftContainter from "../components/LeftContainter";
import RightContainer from "../components/RightContainer";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="main-container py-5 px-5 lg:py-16 lg:px-20 xl:px-40 flex flex-col lg:flex-row gap-6 min-h-screen relative">
      <LeftContainter />
      <div className="flex-1 flex flex-col gap-6 relative">
        <Navbar />
        <RightContainer />
      </div>
    </div>
  );
};

export default HomePage;
