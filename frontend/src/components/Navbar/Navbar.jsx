import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";

function Navbar() {
    const [active, setActive] = useState("home");

    const handleClick = (link) => {
        setActive(link);
        if (link === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
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
        <nav className="fixed top-0 left-0 w-full z-[999999] h-[88px] bg-[#f3f4f6] px-[60px] py-[30px] flex justify-between items-center">
            <div>
                <img src={logo} alt="" />
            </div>

            <div className="flex gap-[49px]">
                <button
                    onClick={() => handleClick("home")}
                    className={`text-[14px] font-inter font-medium leading-[20px] tracking-normal ${active === "home" ? "text-[#5A00F0]" : "text-[#4A5565]"
                        }`}
                >
                    Home
                </button>

                <a
                    href="#howitworks"
                    onClick={() => handleClick("howitworks")}
                    className={`text-[14px] font-inter font-medium leading-[20px] tracking-normal ${active === "howitworks" ? "text-[#5A00F0]" : "text-[#4A5565]"
                        }`}
                >
                    How it works
                </a>

                <a
                    href="#features"
                    onClick={() => handleClick("features")}
                    className={`text-[14px] font-inter font-medium leading-[20px] tracking-normal ${active === "features" ? "text-[#5A00F0]" : "text-[#4A5565]"
                        }`}
                >
                    Features
                </a>

                <a
                    href="#community"
                    onClick={() => handleClick("community")}
                    className={`text-[14px] font-inter font-medium leading-[20px] tracking-normal ${active === "community" ? "text-[#5A00F0]" : "text-[#4A5565]"
                        }`}
                >
                    Community
                </a>

                <a
                    href="#pricing"
                    onClick={() => handleClick("pricing")}
                    className={`text-[14px] font-inter font-medium leading-[20px] tracking-normal ${active === "pricing" ? "text-[#5A00F0]" : "text-[#4A5565]"
                        }`}
                >
                    Pricing
                </a>
            </div>

            <div className="flex gap-[16px] items-center">
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
        </nav>
    );
}

export default Navbar;