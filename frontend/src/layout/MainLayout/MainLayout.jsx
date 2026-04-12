import Dashsidebar from "../../components/DashSidebar/DashSidebar.jsx";

const MainLayout = ({ children, active, setActive }) => {
  return (
    <div className="flex h-screen bg-[#F5F5F5]">
      <Dashsidebar active={active} setActive={setActive} />
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}

export default MainLayout;