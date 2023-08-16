import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Breadcrumb from "../Breadcrumb";
// import backGround from "../../assets/logo/MaskGroup.svg";

const Layout = () => {
  return (
    <div className="relative">
      <Breadcrumb />
      <Navbar />
      {/* <img src={backGround} alt="Your Image" class="w-full h-auto" /> */}
      <div className="mx-auto w-max h-auto">
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
