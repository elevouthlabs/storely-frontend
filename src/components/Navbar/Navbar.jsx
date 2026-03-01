import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Storely from "../../assets/storely full.png";
import { motion } from "framer-motion";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      setIsMenuOpen(false);
      document.body.style.overflow = "auto";
    }
  });

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-500 px-4 py-4 mb-5 flex items-center justify-between">
      <NavLink to="/">
        <img src={Storely} alt="Storely Logo" className="h-6 w-auto" />
      </NavLink>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-1">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? "text-[#8a2be2] font-semibold" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? "text-[#8a2be2] font-semibold" : ""}`
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/solutions"
          className={({ isActive }) =>
            `text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? "text-[#8a2be2] font-semibold" : ""}`
          }
        >
          Solutions
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? "text-[#8a2be2] font-semibold" : ""}`
          }
        >
          Blog
        </NavLink>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-3">
        <NavLink to={"/auth/login"}>
          <button className="text-[#8a2be2] border border-[#8a2be2] px-5 py-2 rounded-[40px] text-sm font-medium hover:bg-purple-50 transition-colors">
            Login
          </button>
        </NavLink>
        <NavLink to={"/auth/register"}>
          <button className="bg-[#8a2be2] text-white px-5 py-2 rounded-[40px] text-sm font-medium hover:bg-purple-700 transition-colors">
            Create Account
          </button>
        </NavLink>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0 }}
          className="fixed md:hidden left-0 top-0 w-full bg-[#00000040] flex flex-col items-start"
        >
          <svg
            onClick={toggleMenu}
            className="absolute right-4 top-4 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-.83 12.3c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2.3-2.3-2.3 2.3c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.3-2.3-2.3-2.3a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 2.3-2.3c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.3 2.3 2.3 2.3Z"
              fill="#697689"
            />
          </svg>
          <div className="h-[100vh] w-full bg-white">
            <ul className="flex flex-col bg-white text-gray-600 w-[80%] p-4 pt-10">
              <NavLink
                to="/home"
                onClick={toggleMenu}
                className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={toggleMenu}
                className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                About Us
              </NavLink>
              <NavLink
                to="/solutions"
                onClick={toggleMenu}
                className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Solutions
              </NavLink>
              <NavLink
                to="/blog"
                onClick={toggleMenu}
                className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Blog
              </NavLink>
            </ul>
            <div className="bg-white w-[80%] p-4 flex items-center gap-3">
              <NavLink to={"/auth/login"} onClick={toggleMenu}>
                <button className="text-[#8a2be2] border border-[#8a2be2] px-5 py-2 rounded-[40px] text-sm font-medium">
                  Login
                </button>
              </NavLink>
              <NavLink to={"/auth/register"} onClick={toggleMenu}>
                <button className="bg-[#8a2be2] text-white px-4 py-2 rounded-[40px] text-sm font-medium">
                  Create Account
                </button>
              </NavLink>
            </div>
          </div>
        </motion.div>
      )}

      {/* Hamburger Icon (mobile only) */}
      <svg
        onClick={toggleMenu}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        className="cursor-pointer md:hidden"
      >
        <path
          d="M3 7h18M3 12h18M3 17h18"
          stroke="#697689"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default Navbar;
