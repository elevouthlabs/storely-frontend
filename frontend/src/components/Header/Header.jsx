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
        <div className="w-full h-[81px] flex justify-between bg-white border-b border-[#D9D9D9] py-[20px] px-[40px]">
            <div className="flex items-center gap-4">
                <button onClick={toggleSidebar}>
                    <img src={sidebar} alt="" />
                </button>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Type to search"
                        className=" w-[272px] h-[40px] border border-[#B3B3B3] px-4  rounded-md placeholder:px-4 pb-1 placeholder:font-Inter placeholder:font-medium placeholder:text-xs placeholder:text-[#A1A1AA] placeholder:leading-5  outline-none"
                    />
                    <img src={search} alt="" className="absolute top-3 left-2" />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="relative cursor-pointer">
                    <div className="w-[42px] h-[42px] bg-[#E9EBF8] rounded-full p-[10px]">
                        <img src={bell} alt="notification-icon" />
                    </div>
                    <span className="absolute top-2 right-3 w-2 h-2 bg-red-500 rounded-full"></span>
                </div>

                <div className="relative">
                    <img
                        src={logoUrl || "https://i.pravatar.cc/40"}
                        alt="profile"
                        className="w-8 h-8 rounded-full object-cover cursor-pointer"
                        onClick={() => setShowDropdown(!showDropdown)}
                    />

                    {showDropdown && (
                        <div className="absolute right-0 top-12 w-40 bg-white rounded-lg shadow-lg border z-50">
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
    );
};

export default Header;