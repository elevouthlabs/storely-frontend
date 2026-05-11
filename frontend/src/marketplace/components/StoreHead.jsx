import { useNavigate } from "react-router-dom";
import search from "../../assets/search.png";
import bell2 from "../../assets/bell2.png";

const StoreHeader = () => {
    const navigate = useNavigate();

    const handleSearchClick = () => {
        navigate("/search");
    };

    return (
        <div className="bg-[#4B0082] h-[80px] px-2 py-3 flex items-center justify-between border-b border-gray-200">
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-500 rounded-full py-3 px-3 font-bold text-white">
                    KF
                </div>

                <div>
                    <h1 className="text-white text-[18px] font-semibold leading-[22px]">
                        Kemi Fashion
                    </h1>

                    <p className="text-white text-[14px] font-semibold leading-[18px]">
                        Lagos, Nigeria
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                {/* Search */}
                <div className="w-12 h-[44px] bg-gray-100 rounded-[10px] flex items-center justify-center">
                    <button onClick={handleSearchClick}>
                        <img src={search} alt="search" className="w-6 h-6" />
                    </button>
                </div>

                {/* Notification */}
                <div className="relative w-12 h-[44px] bg-gray-100 rounded-[10px] flex items-center justify-center">
                    <button onClick={() => navigate("/cart")}>
                        <img src={bell2} alt="bell icon" className="w-6 h-6" />

                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                            2
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StoreHeader;