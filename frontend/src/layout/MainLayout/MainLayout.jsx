const MainLayout = ({ children, active, setActive }) => {
  return (
    <div className="flex h-auto bg-[#F5F5F5] overflow-hidden">
      <Dashsidebar active={active} setActive={setActive} />
      <main className="flex-1 p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};