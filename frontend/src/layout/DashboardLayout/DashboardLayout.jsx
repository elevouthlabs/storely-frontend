import { useState } from "react";
import Dashsidebar from "../../components/DashSidebar/DashSidebar.jsx";
import Header from "../../components/Header/Header.jsx";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-screen bg-[#F5F5F5]">

      {/* Sidebar */}
      {open && <Dashsidebar />}
      <div className="flex-1 flex flex-col">

        <Header toggleSidebar={() => setOpen(!open)} />

        <main className="p-6 overflow-y-auto flex-1">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;