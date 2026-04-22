import { useState } from "react";
import dashlogo from "../../assets/dashlogo.png";
import dashboardIcon from "../../assets/dashboardIcon.png";
import catalogIcon from "../../assets/catalogIcon.png";
import salesIcon from "../../assets/salesIcon.png";
import customerIcon from "../../assets/customerIcon.png";
import financeIcon from "../../assets/financeIcon.png";
import IntelligenceIcon from "../../assets/IntelligenceIcon.png";
import setingsIcon from "../../assets/settingsIcon.png";
import askIcon from "../../assets/askIcon.png";

const menu = [
    { name: "Dashboard", icon: dashboardIcon },
    { name: "Catalog", icon: catalogIcon },
    { name: "Sales", icon: salesIcon },
    { name: "Customers", icon: customerIcon },
    { name: "Finance", icon: financeIcon },
    { name: "Intelligence", icon: IntelligenceIcon },
    { name: "Settings", icon: setingsIcon },
    { name: "Ask Storely AI", icon: askIcon },
];


const Dashsidebar = ({ active, setActive }) => {
    return (
        <aside className="w-[260px] min-h-screen bg-[#2D1B4E] flex flex-col justify-between">

            {/* TOP SECTION */}
            <div>
                <div className="w-[260px] flex items-center gap-[10px] h-[72px] py-[18px] px-[32px] border-b border-[#B3B3B33D]">
                    <img src={dashlogo} alt="" />
                    <p className="font-Inter font-bold text-[20px] text-[#EDEDED] leading-[100%] tracking-[0.2px]">
                        Storely
                    </p>
                </div>

                <div className="flex flex-col gap-[4px] px-3 py-10">
                    {menu.map((item) => (
                        <div
                            key={item.name}
                            onClick={() => setActive(item.name)}
                            className="w-[207px] h-[48px] flex items-center gap-3 px-4 cursor-pointer hover:bg-[#9654F4] hover:rounded-[8px]"
                        >
                            <img src={item.icon} alt="" className="w-5 h-5" />
                            <span className="font-Inter font-normal text-[16px] text-white leading-[24px]">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="px-4 py-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-[#7C3AED] rounded-full flex items-center justify-center">
                    <p className="font-Inter font-bold text-[12px] text-white">
                        JD
                    </p>
                </div>

                <div>
                    <p className="font-Inter font-medium text-[16px] text-white">
                        Jane Doe
                    </p>
                    <p className="font-Inter font-normal text-[10px] text-white">
                        Free Plan
                    </p>
                </div>
            </div>

        </aside>
    );
}

export default Dashsidebar;