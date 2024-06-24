import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const RightContainer = () => {
  return (
    <div className="right-container bg-neutral-800 border-2 border-gray-700 rounded-3xl bg-gray-800 w-full h-auto order-2 overflow-hidden">
      <Navbar />
      <div className="overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};
export default RightContainer;
