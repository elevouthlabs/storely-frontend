import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import sidebar from "../../assets/sidebar.png";
import search from "../../assets/search.png";
import bell from "../../assets/bell.png";

const Header = ({ toggleSidebar }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();

        localStorage.removeItem("business");
        localStorage.removeItem("storelyUser");

        navigate("/");
    };

    const business = JSON.parse(localStorage.getItem("business") || "{}");
    const logoUrl = business?.logoUrl;

    return (
        <header className="w-full bg-white border-b border-[#D9D9D9] px-4 sm:px-6 lg:px-10 py-4">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 flex-1">
                    <button
                        onClick={toggleSidebar}
                        className="p-2 rounded-md hover:bg-gray-100 transition"
                    >
                        <img
                            src={sidebar}
                            alt="Toggle Sidebar"
                            className="w-5 h-5"
                        />
                    </button>

                    {/* Search */}
                    <div className="relative hidden sm:block w-full max-w-[272px]">
                        <input
                            type="text"
                            placeholder="Type to search"
                            className="w-full h-10 border border-[#B3B3B3] rounded-md pl-10 pr-4 text-sm outline-none focus:border-[#4B0082]"
                        />

                        <img
                            src={search}
                            alt=""
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                        />
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3 sm:gap-4">
                    {/* Mobile Search */}
                    <button className="sm:hidden p-2 rounded-md hover:bg-gray-100">
                        <img src={search} alt="Search" className="w-5 h-5" />
                    </button>

                    {/* Notifications */}
                    <button className="relative">
                        <div className="w-10 h-10 bg-[#E9EBF8] rounded-full flex items-center justify-center">
                            <img src={bell} alt="Notifications" />
                        </div>

                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    {/* Profile */}
                    <div className="relative">
                        <img
                            src={logoUrl || "https://i.pravatar.cc/40"}
                            alt="Profile"
                            className="w-10 h-10 rounded-full object-cover cursor-pointer"
                            onClick={() => setShowDropdown(!showDropdown)}
                        />

                        {showDropdown && (
                            <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg border z-50">
                                <button
                                    onClick={handleLogout}
                                    className="w-full text-left px-4 py-3 hover:bg-gray-100 text-red-600 font-medium"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            </div>

            {/* Mobile Search Input */}
            <div className="sm:hidden mt-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Type to search"
                        className="w-full h-10 border border-[#B3B3B3] rounded-md pl-10 pr-4 text-sm outline-none focus:border-[#4B0082]"
                    />

                    <img
                        src={search}
                        alt=""
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;