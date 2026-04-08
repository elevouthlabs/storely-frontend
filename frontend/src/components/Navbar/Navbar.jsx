import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";

function Navbar() {
    const [active, setActive] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

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
        <nav className="fixed mt-[40px] top-0 left-0 w-full z-[999999] h-[88px] bg-[#f3f4f6] px-[20px] md:px-[60px] py-[20px] md:py-[30px] flex justify-between items-center">

            <div>
                <img src={logo} alt="" className="w-[120px] md:w-auto" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-[49px]">
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

            {/* Desktop Buttons */}
            <div className="hidden md:flex gap-[16px] items-center">
                <Link
                    to="/login"
                    className="w-[136px] h-[48px] bg-white border border-[#D9D9D9] rounded-[8px] px-[20px] py-[12px] font-Inter font-medium text-[16px] text-[#2E2E2E] leading-[24px] text-center"
                >
                    Login
                </Link>
                <Link
                    to="/register"
                    className="w-[202px] h-[48px] bg-[#2D1B4E] text-white rounded-[8px] px-[20px] py-[12px] font-Inter font-semibold text-[16px] leading-[24px] text-center"
                >
                    Create Store for Free
                </Link>
            </div>

            {/* Hamburger */}
            <div className="md:hidden flex flex-col gap-1 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                <span className={`w-6 h-[2px] bg-black transition ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`}></span>
                <span className={`w-6 h-[2px] bg-black transition ${menuOpen ? "opacity-0" : ""}`}></span>
                <span className={`w-6 h-[2px] bg-black transition ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}></span>
            </div>


            {menuOpen && (
                <div className="absolute top-[88px] left-20 w-full bg-[#f3f4f6] flex flex-col items-start px-5  gap-6 py-6 md:hidden">
                    <button onClick={() => handleClick("home")} className={active === "home" ? "text-[#5A00F0]" : ""}>Home</button>
                    <a href="#howitworks" onClick={() => handleClick("howitworks")}>How it works</a>
                    <a href="#features" onClick={() => handleClick("features")}>Features</a>
                    <a href="#community" onClick={() => handleClick("community")}>Community</a>
                    <a href="#pricing" onClick={() => handleClick("pricing")}>Pricing</a>

                    <Link to="/login" className="w-[70%] text-center border py-2 rounded">Login</Link>
                    <Link to="/register" className="w-[70%] text-center bg-[#2D1B4E] text-white py-2 rounded">
                        Create Store
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;