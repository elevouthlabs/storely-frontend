import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
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
    { name: "Dashboard", icon: dashboardIcon, path: "/dashboard" },

    {
        name: "Catalog",
        icon: catalogIcon,
        children: [
            { name: "Products", path: "product" },
            { name: "Categories", path: "categories" },
            { name: "Collections", path: "collections" },
        ],
    },

    { name: "Sales", icon: salesIcon, path: "/dashboard/sales" },
    { name: "Customers", icon: customerIcon, path: "/dashboard/customers" },
    { name: "Finance", icon: financeIcon, path: "/dashboard/finance" },
    { name: "Intelligence", icon: IntelligenceIcon, path: "/dashboard/intelligence" },
    { name: "Settings", icon: setingsIcon, path: "/dashboard/settings" },

    { name: "Ask Storely AI", icon: askIcon, noDropdown: true, path: "/dashboard/ai" },
];

const Dashsidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const [openMenu, setOpenMenu] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;



    useEffect(() => {
        menu.forEach((item) => {
            if (item.children) {
                const match = item.children.some(
                    (child) => currentPath === `/dashboard/${child.path}`
                );

                if (match) {
                    setOpenMenu(item.name);
                }
            }
        });
    }, [currentPath]);

    const getChildPath = (childPath) => `/dashboard/${childPath}`;

    const isChildActive = (childPath) => {
        return currentPath.startsWith(getChildPath(childPath));
    };

    const isParentActive = (item) => {
        if (!item.children) return false;

        return item.children.some((child) =>
            isChildActive(child.path)
        );
    };

    const isMainActive = (item) => {
        if (item.children) return isParentActive(item);
        return currentPath === item.path;
    };

    const toggleMenu = (name) => {
        setOpenMenu(openMenu === name ? null : name);
    };

    const { user } = useContext(AuthContext);

    const getInitials = (name = "") => {
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase();
    };



    return (
        <>
            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}


            <aside
                className={`
                    fixed lg:relative
                    top-0 left-0
                    z-50
                    h-auto min-h-screen
                    bg-[#2D1B4E]
                    flex flex-col
                    justify-between
                    transition-all
                    duration-300
                    ease-in-out
                    flex-shrink-0

                    ${sidebarOpen
                        ? "translate-x-0 w-[260px]"
                        : "lg:w-[80px] -translate-x-full lg:translate-x-0"
                    }
                `}
            >
                <div>
                    {/* Logo */}
                    <div
                        className={`flex items-center h-[72px] border-b border-[#B3B3B33D]
    ${sidebarOpen ? "px-6 gap-3" : "justify-center"}
`}
                    >
                        <img src={dashlogo} alt="" />

                        {sidebarOpen && (
                            <p className="font-bold text-[20px] text-[#EDEDED]">
                                Storely
                            </p>
                        )}
                    </div>

                    {/* Menu */}
                    <div className="flex flex-col gap-1 px-4 py-6 overflow-y-auto flex-1">
                        {menu.map((item) => (
                            <div key={item.name}>
                                {/* Main Item */}
                                <div
                                    onClick={() => {
                                        if (item.children && !item.noDropdown) {
                                            toggleMenu(item.name);
                                        } else {
                                            if (item.children && !item.noDropdown) {
                                                toggleMenu(item.name);
                                            } else if (item.path) {
                                                navigate(item.path);
                                                setSidebarOpen(false);
                                            };
                                        }
                                    }}
                                    className={`w-full h-[48px] flex items-center rounded-[8px] cursor-pointer transition-all
                                        ${sidebarOpen
                                            ? "justify-between px-4"
                                            : "justify-center px-0"
                                        }
                                        ${isMainActive(item)
                                            ? "bg-[#9654F4]"
                                            : "hover:bg-[#9654F4]"
                                        }`}
                                >
                                    <div
                                        className={`flex items-center ${sidebarOpen
                                            ? "gap-3"
                                            : "justify-center w-full"
                                            }`}
                                    >
                                        <img
                                            src={item.icon}
                                            alt=""
                                            className="w-5 h-5 flex-shrink-0"
                                        />

                                        {sidebarOpen && (
                                            <span className="text-white">
                                                {item.name}
                                            </span>
                                        )}
                                    </div>

                                    {sidebarOpen && item.children && !item.noDropdown && (
                                        <img
                                            src={openMenu === item.name ? closeIcon : openIcon}
                                            alt=""
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
                                                    setSidebarOpen(false);
                                                }}
                                                className={`font-Inter font-normal text-[16px] text-white py-2 px-3 cursor-pointer rounded-md
                                                ${isChildActive(child.path)
                                                        ? "bg-[#9654F4]"
                                                        : "hover:bg-[#9654F4]"
                                                    }`}
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
                <div
                    className={`py-8 ${sidebarOpen
                        ? "px-4 flex items-center gap-3"
                        : "flex justify-center"
                        }`}
                >
                    <div className="w-8 h-8 bg-[#7C3AED] rounded-full flex items-center justify-center">
                        <p className="font-Inter font-bold text-[12px] text-white">
                            {getInitials(user?.fullName || "User")}
                        </p>
                    </div>

                    {sidebarOpen && (
                        <div>
                            <p className="font-medium text-[16px] text-white">
                                {user?.fullName || "User"}
                            </p>

                            <p className="text-[10px] text-white">
                                Free Plan
                            </p>
                        </div>
                    )}
                </div>
            </aside>
        </>
    );
};

export default Dashsidebar;