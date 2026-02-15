import { Outlet } from "react-router-dom";
import AuthSideBar from "./AuthSidebar";

const AuthLayout = () => {
  return (
    <div className="relative">
      <nav className="fixed w-[620px] h-full bg-gradient-to-t from-[#8A2BE2] to-[#4B0082] p-[48px]">
        <AuthSideBar />
      </nav>
      <aside className="bg-[#f5f5f5] ml-[620px] pl-[32px] h-screen flex items-center">
        <Outlet />
      </aside>
    </div>
  );
};

export default AuthLayout;
