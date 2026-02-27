import { Link } from "react-router-dom";
import bottom from "../../assets/bottom.png";
import logo from "../../assets/logo.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";

const Footer = () => {
    return (
        <div className="h-[642px] relative bg-[#F5F5F5] overflow-hidden">
            <div className="flex gap-[150px] ml-[60px] mt-[60px]">
                <div className="flex flex-col gap-[25px]">
                    <div className="flex items-center gap-[20px]">
                        <div>
                            <img src={logo} alt="" />
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <a href="#" target="_blank" className="w-[40px] h-[40px] p-[10px] rounded-[42.86px] border-[0.71px] border-[#0000001A]">
                                <img src={twitter} alt="" />
                            </a>
                            <a href="#" target="_blank" className="w-[40px] h-[40px] p-[10px] rounded-[42.86px] border-[0.71px] border-[#0000001A]">
                                <img src={instagram} alt="" />
                            </a>
                            <a href="#" target="_blank" className="w-[40px] h-[40px] p-[12px] rounded-[42.86px] border-[0.71px] border-[#0000001A]">
                                <img src={linkedin} alt="" />
                            </a>
                        </div>
                    </div>
                    <p className="font-Urbanist font-semibold text-[18px] text-[#2E2E2E] leading-[130%] tracking-[-0.02em]">Subscribe to Chainex</p>
                    <div className="relative w-[300px] md:w-[400px]">
                        <input
                            type="text"
                            placeholder="Enter your Email"
                            className="w-[340px] h-[66px] rounded-[40px] border border-[#0000001A] px-4 focus:outline-none placeholder:font-Urbanist placeholder:font-medium placeholder:text-[18px] placeholder:text-[#6B7280] placeholder:leading-[130%] placeholder:tracking-[-0.02em] px-4 h-[66px] w-[340px] rounded-[40px] border border-[#0000001A]"
                        />
                        <button
                            className="absolute top-1/2 right-20 -translate-y-1/2 w-[106px] h-[50px] rounded-[24px] border border-[#FFFFFF1A] bg-[#8A2BE2] font-Urbanist font-medium text-[18px] text-white leading-[130%] tracking-[-0.02em] flex items-center justify-center"
                        >
                            Sign up
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <h4 className="font-Urbanist font-semibold text-[18px] text-[#2E2E2E] leading-[100%] tracking-[-0.02em]">Explore</h4>
                    <Link to="/" className="font-Urbanist font-normal text-[18px] text-[#6B7280] leading-[100%] tracking-normal">Home</Link>
                    <Link to="/" className="font-Urbanist font-normal text-[18px] text-[#6B7280] leading-[100%] tracking-normal">About Us</Link>
                    <Link to="/" className="font-Urbanist font-normal text-[18px] text-[#6B7280] leading-[100%] tracking-normal">Solutions</Link>
                    <Link to="/" className="font-Urbanist font-normal text-[18px] text-[#6B7280] leading-[100%] tracking-normal">Blog</Link>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <h4 className="font-Urbanist font-semibold text-[18px] text-[#2E2E2E] leading-[100%] tracking-[-0.02em]">Solutions</h4>
                    <Link to="/" className="font-Urbanist font-normal text-[18px] text-[#6B7280] leading-[100%] tracking-normal">Freight Management</Link>
                    <Link to="/" className="font-Urbanist font-normal text-[18px] text-[#6B7280] leading-[100%] tracking-normal">Order Tracking</Link>
                    <Link to="/" className="font-Urbanist font-normal text-[18px] text-[#6B7280] leading-[100%] tracking-normal">Carrier Integration</Link>
                    <Link to="/" className="font-Urbanist font-normal text-[18px] text-[#6B7280] leading-[100%] tracking-normal">Analytics Dashboard</Link>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <h4 className="font-Urbanist font-semibold text-[18px] text-[#2E2E2E] leading-[100%] tracking-[-0.02em]">Resources</h4>
                    <Link to="/" className="font-Urbanist font-normal text-[18px] text-[#6B7280] leading-[100%] tracking-normal">Help Center</Link>
                    <Link to="/" className="font-Urbanist font-normal text-[18px] text-[#6B7280] leading-[100%] tracking-normal">FAQs</Link>
                    <Link to="/" className="font-Urbanist font-normal text-[18px] text-[#6B7280] leading-[100%] tracking-normal">Terms of Service</Link>
                    <Link to="/" className="font-Urbanist font-normal text-[18px] text-[#6B7280] leading-[100%] tracking-normal">Privacy Policy</Link>
                </div>
            </div>
            <div className=" mx-[60px] mt-[70px] flex justify-between">
                <Link to="/" className="font-Urbanist font-normal text-[16px] text-[#13173599] leading-[100%] tracking-normal underline decoration-solid decoration-[0px] decoration-offset-[0px]">Terms & Condition </Link>
                <div>
                    <p className="font-Urbanist font-normal text-[16px] text-[#13173599] leading-[100%] tracking-normal">
                        ©{new Date().getFullYear()} ShipX. All Rights Reserved.
                    </p>
                </div>
            </div>
            <div>
                <img src={bottom} alt="" className="absolute top-[352px] left-[40px]" />
            </div>
        </div>
    )
}

export default Footer;