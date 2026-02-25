import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="relative">
      <aside className="fixed w-[260px] h-full">
        <DashboardSidebar />
      </aside>
      <main className="ml-[260px]">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
