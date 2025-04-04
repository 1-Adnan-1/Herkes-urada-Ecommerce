import SatıcıSidebar from "../satıcı-paneli/sidebar";
import { Outlet } from "react-router-dom";

const SatıcıPaneli = () => {
  return (
    <div className="flex m-[0_200px_0_200px]">
      {/* Sidebar */}
      <SatıcıSidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default SatıcıPaneli;
