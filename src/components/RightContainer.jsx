import { Outlet } from "react-router-dom";

const RightContainer = () => {
  return (
    <div className="right-container bg-neutral-800 border-2 border-gray-700 rounded-3xl w-full h-full order-2 overflow-hidden flex flex-col">
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};
export default RightContainer;
