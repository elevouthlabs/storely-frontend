import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar() {
    return (
        <nav className="h-[88px] bg-[#f3f4f6]  px-[80px] py-[30px] flex  flex justify-between items-center">
            <div>
                <img src={logo} alt="" />
            </div>
            <div className="flex gap-[49px]">
                <div className="flex gap-[49px]">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-[16px] font-Inter font-medium leading-[20px] tracking-normal ${isActive ? "text-[#5A00F0]" : "text-[#4A5565]"
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/howitworks"
                        className={({ isActive }) =>
                            `text-[16px] font-Inter font-medium leading-[20px] tracking-normal ${isActive ? "text-[#5A00F0]" : "text-[#4A5565]"
                            }`
                        }
                    >
                        How it works
                    </NavLink>
                    <NavLink
                        to="/features"
                        className={({ isActive }) =>
                            `text-[16px] font-Inter font-medium leading-[20px] tracking-normal ${isActive ? "text-[#5A00F0]" : "text-[#4A5565]"
                            }`
                        }
                    >
                        Features
                    </NavLink>
                </div>
            </div>
            <div className="flex gap-[16px] items-center">
                <Link to="/login" className="w-[156px] h-[48px] rounded-full border border-[#D9D9D9] text-[16px] font-Inter font-medium leading-[24px] tracking-normal text-[#2E2E2E] bg-[#fff]  flex items-center justify-center rounded-md">Login</Link>
                <Link to="/createstore"  className="w-[156px] h-[48px] bg-[#5A00F0] rounded-full border border-[#D9D9D9] text-[16px] text-[#fff] font-Inter font-bold leading-[24px] tracking-normal text-[#2E2E2E] bg-[#fff]  flex items-center justify-center rounded-md">Create Store</Link>
            </div>
        </nav>
    );
}

export default Navbar;
