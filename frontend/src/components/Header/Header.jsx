import sidebar from "../../assets/sidebar.png";
import search from "../../assets/search.png";
import bell from "../../assets/bell.png";

const Header = ({ toggleSidebar }) => {
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