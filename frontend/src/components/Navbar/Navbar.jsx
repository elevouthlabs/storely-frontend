import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import logo from "../../assets/logo.png";


function Navbar() {
    const [active, setActive] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    const [showDropdown, setShowDropdown] = useState(false);

    let business = {};

    try {
        const storedBusiness = localStorage.getItem("business");

        if (storedBusiness && storedBusiness !== "undefined") {
            business = JSON.parse(storedBusiness);
        }
    } catch {
        localStorage.removeItem("business");
    }

    const logoUrl = business.logoUrl;

    const handleClick = (link) => {
        setActive(link);
        setMenuOpen(false);

        if (link === "home") {
            navigate("/");

            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }, 100);
        }
    };

    useEffect(() => {
        const sections = ["home", "howitworks", "features", "community", "pricing"];

        const onScroll = () => {
            const scrollPos = window.scrollY + 20;
            for (let section of sections) {
                const el = document.getElementById(section);
                if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
                    setActive(section);
                }
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className="fixed mt-[40px] top-0 left-0 w-full z-[999999] h-[88px] bg-[#f3f4f6] px-[20px] lg:px-[60px] py-[20px] lg:py-[30px] flex justify-between items-center">
            <div>
                <img src={logo} alt="" className="w-[120px] md:w-auto" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-[49px]">
                <button
                    onClick={() => handleClick("home")}
                    className={`text-[14px] font-inter font-medium leading-[20px] tracking-normal ${active === "home" ? "text-[#5A00F0]" : "text-[#4A5565]"}`}
                >
                    Home
                </button>

                <a href="#howitworks" onClick={() => handleClick("howitworks")}
                    className={`text-[14px] font-inter font-medium leading-[20px] tracking-normal ${active === "howitworks" ? "text-[#5A00F0]" : "text-[#4A5565]"}`}>
                    How it works
                </a>

                <a href="#features" onClick={() => handleClick("features")}
                    className={`text-[14px] font-inter font-medium leading-[20px] tracking-normal ${active === "features" ? "text-[#5A00F0]" : "text-[#4A5565]"}`}>
                    Features
                </a>

                <a href="#community" onClick={() => handleClick("community")}
                    className={`text-[14px] font-inter font-medium leading-[20px] tracking-normal ${active === "community" ? "text-[#5A00F0]" : "text-[#4A5565]"}`}>
                    Community
                </a>

                <a href="#pricing" onClick={() => handleClick("pricing")}
                    className={`text-[14px] font-inter font-medium leading-[20px] tracking-normal ${active === "pricing" ? "text-[#5A00F0]" : "text-[#4A5565]"}`}>
                    Pricing
                </a>
            </div>
            <div className="hidden lg:flex items-center">
                {user ? (
                    <div className="relative">
                        <img
                            src={logoUrl || "https://i.pravatar.cc/40"}
                            alt="Business"
                            className="w-11 h-11 rounded-full object-cover cursor-pointer border"
                            onClick={() => setShowDropdown(!showDropdown)}
                        />

                        {showDropdown && (
                            <div className="absolute right-0 mt-3 w-52 bg-white rounded-lg shadow-lg border overflow-hidden">

                                <button
                                    onClick={() => {
                                        navigate("/dashboard");
                                        setShowDropdown(false);
                                    }}
                                    className="w-full text-left px-4 py-3 hover:bg-gray-100"
                                >
                                    Dashboard
                                </button>

                                <button
                                    onClick={() => {
                                        logout();
                                        localStorage.removeItem("business");
                                        localStorage.removeItem("storelyUser");
                                        navigate("/");
                                    }}
                                    className="w-full text-left px-4 py-3 hover:bg-gray-100 text-red-600"
                                >
                                    Logout
                                </button>

                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        <Link
                            to="/login"
                            className="w-[136px] h-[48px] bg-white border border-[#D9D9D9] rounded-[8px] px-[20px] py-[12px] text-center"
                        >
                            Login
                        </Link>

                        <Link
                            to="/register"
                            className="w-[202px] h-[48px] bg-[#2D1B4E] ml-5 text-white rounded-[8px] px-[20px] py-[12px] text-center"
                        >
                            Create Store for Free
                        </Link>
                    </>
                )}
            </div>

            <div className="lg:hidden flex items-center gap-3">
                {user && (
                    <div className="relative">
                        <img
                            src={logoUrl || "https://i.pravatar.cc/40"}
                            alt="Business"
                            className="w-10 h-10 rounded-full object-cover border cursor-pointer"
                            onClick={() => setShowDropdown(!showDropdown)}
                        />

                        {showDropdown && (
                            <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg border z-50">
                                <button
                                    onClick={() => {
                                        navigate("/dashboard");
                                        setShowDropdown(false);
                                    }}
                                    className="w-full text-left px-4 py-3 hover:bg-gray-100"
                                >
                                    Dashboard
                                </button>

                                <button
                                    onClick={() => {
                                        logout();
                                        localStorage.removeItem("business");
                                        localStorage.removeItem("storelyUser");
                                        navigate("/");
                                    }}
                                    className="w-full text-left px-4 py-3 hover:bg-gray-100 text-red-600"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                )}

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex flex-col gap-1"
                >
                    <span className={`w-6 h-[2px] bg-black transition ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`}></span>
                    <span className={`w-6 h-[2px] bg-black transition ${menuOpen ? "opacity-0" : ""}`}></span>
                    <span className={`w-6 h-[2px] bg-black transition ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}></span>
                </button>
            </div>


            {menuOpen && (
                <div className="absolute top-[88px] left-20 w-full bg-[#f3f4f6] flex flex-col items-start px-5  gap-6 py-6 lg:hidden">
                    <button onClick={() => handleClick("home")} className={active === "home" ? "text-[#5A00F0]" : ""}>Home</button>
                    <a href="#howitworks" onClick={() => handleClick("howitworks")}>How it works</a>
                    <a href="#features" onClick={() => handleClick("features")}>Features</a>
                    <a href="#community" onClick={() => handleClick("community")}>Community</a>
                    <a href="#pricing" onClick={() => handleClick("pricing")}>Pricing</a>

                    {!user && (
                        <>
                            <Link
                                to="/login"
                                className="w-[70%] text-center border py-2 rounded"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className="w-[70%]  text-center bg-[#2D1B4E] text-white py-2 rounded"
                            >
                                Create Store
                            </Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
}

export default Navbar;