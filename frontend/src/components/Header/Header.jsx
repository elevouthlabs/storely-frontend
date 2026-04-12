import { Menu, Bell } from "lucide-react";

const Header = ({ toggleSidebar }) => {
    return (
        <div className="flex items-center justify-between bg-white px-6 py-3 border-b">

            {/* LEFT */}
            <div className="flex items-center gap-4">
                {/* Sidebar toggle */}
                <button onClick={toggleSidebar}>
                    <Menu size={20} />
                </button>

                {/* Search */}
                <input
                    type="text"
                    placeholder="Type to search"
                    className="bg-gray-100 px-4 py-2 rounded-md w-[300px] text-sm outline-none"
                />
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">
                {/* Notification */}
                <div className="relative cursor-pointer">
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </div>

                {/* Profile */}
                <img
                    src="https://i.pravatar.cc/40"
                    alt="profile"
                    className="w-8 h-8 rounded-full object-cover"
                />
            </div>
        </div>
    );
};

export default Header;