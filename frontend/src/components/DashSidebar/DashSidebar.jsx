import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dashlogo from "../../assets/dashlogo.png";
import dashboardIcon from "../../assets/dashboardIcon.png";
import catalogIcon from "../../assets/catalogIcon.png";
import salesIcon from "../../assets/salesIcon.png";
import customerIcon from "../../assets/customerIcon.png";
import financeIcon from "../../assets/financeIcon.png";
import IntelligenceIcon from "../../assets/IntelligenceIcon.png";
import setingsIcon from "../../assets/settingsIcon.png";
import askIcon from "../../assets/askIcon.png";
import openIcon from "../../assets/open.png";
import closeIcon from "../../assets/close.png";

const menu = [
    { name: "Dashboard", icon: dashboardIcon },
    {
        name: "Catalog",
        icon: catalogIcon,
        children: [
            { name: "Products", path: "product" },
            { name: "Categories", path: "categories" },
            { name: "Collections", path: "collections" },
        ],
    },
    { name: "Sales", icon: salesIcon },
    { name: "Customers", icon: customerIcon },
    { name: "Finance", icon: financeIcon },
    { name: "Intelligence", icon: IntelligenceIcon },
    { name: "Settings", icon: setingsIcon },
    { name: "Ask Storely AI", icon: askIcon, noDropdown: true },
];

const Dashsidebar = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const navigate = useNavigate();

    const toggleMenu = (name) => {
        setOpenMenu(openMenu === name ? null : name);
    };



    return (
        <aside className="w-[260px] min-h-screen bg-[#2D1B4E] flex flex-col justify-between">
            <div>
                {/* Logo */}
                <div className="w-[260px] flex items-center gap-[10px] h-[72px] py-[18px] px-[32px] border-b border-[#B3B3B33D]">
                    <img src={dashlogo} alt="" />
                    <p className="font-Inter font-bold text-[20px] text-[#EDEDED]">
                        Storely
                    </p>
                </div>

                {/* Menu */}
                <div className="flex flex-col gap-[4px] px-3 py-10">
                    {menu.map((item) => (
                        <div key={item.name}>
                            {/* Main Item */}
                            <div
                                onClick={() => {
                                    if (item.children && !item.noDropdown) {
                                        toggleMenu(item.name);
                                    } else {
                                        navigate("/dashboard");
                                    }
                                }}
                                className="w-[207px] h-[48px] flex items-center justify-between gap-3 px-4 cursor-pointer hover:bg-[#9654F4] hover:rounded-[8px]"
                            >
                                <div className="flex items-center gap-3">
                                    <img src={item.icon} alt="" className="w-5 h-5" />
                                    <span className="font-Inter text-[16px] text-white">
                                        {item.name}
                                    </span>
                                </div>

                                {item.children && !item.noDropdown && (
                                    <img
                                        src={openMenu === item.name ? closeIcon : openIcon}
                                        alt="dropdown"
                                        className="w-3 h-2"
                                    />
                                )}
                            </div>

                            {item.children && openMenu === item.name && (
                                <div className="ml-8 mt-1 flex flex-col gap-1">
                                    {item.children.map((child) => (
                                        <div
                                            key={child.name}
                                            onClick={() => {
                                                navigate(`/dashboard/${child.path}`);
                                            }}
                                            className="font-Inter font-normal text-[16px] leading-[24px] tracking-[0px] text-white py-2 px-3 cursor-pointer hover:bg-[#9654F4] rounded-md"
                                        >
                                            {child.name}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* User */}
            <div className="px-4 py-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-[#7C3AED] rounded-full flex items-center justify-center">
                    <p className="font-Inter font-bold text-[12px] text-white">JD</p>
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
};

export default Dashsidebar;