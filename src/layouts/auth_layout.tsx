import Sidebar from "@/components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <main className=" flex items-center justify-center h-[100vh] w-full 2xl:mx-auto">
        <div className="flex items-center justify-center w-full 2xl:border   2xl:rounded-[30px]  md:overflow-hidden 2xl:w-fit 2xl:shadow-lg ">
          <Sidebar />
          <Outlet />
        </div>
      </main>
    </>
  );
}
