import { Link } from "react-router-dom";
import bottom from "../../assets/bottom.png";
import logo from "../../assets/logo.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";

const Footer = () => {
    return (
        <div className="relative bg-[#F5F5F5] md:h-[642px] h-[1090px] overflow-hidden px-6 md:px-[60px] py-10 md:py-10">
            <div className="flex flex-col md:flex-row gap-10 md:gap-[10px]">
                <div className="flex flex-col gap-6 md:gap-[25px] md:flex-1">
                    <div className="flex items-center gap-4 md:gap-[20px]">
                        <img src={logo} alt="logo" className="w-[102px] md:w-auto" />
                        <div className="flex gap-2 md:gap-[10px]">
                            <a href="#" target="_blank" className="w-[40px] h-[40px] p-[10px] rounded-full border-[0.71px] border-[#0000001A] flex items-center justify-center">
                                <img src={twitter} alt="twitter" />
                            </a>
                            <a href="#" target="_blank" className="w-[40px] h-[40px] p-[10px] rounded-full border-[0.71px] border-[#0000001A] flex items-center justify-center">
                                <img src={instagram} alt="instagram" />
                            </a>
                            <a href="#" target="_blank" className="w-[40px] h-[40px] p-[12px] rounded-full border-[0.71px] border-[#0000001A] flex items-center justify-center">
                                <img src={linkedin} alt="linkedin" />
                            </a>
                        </div>
                    </div>

                    <p className="font-Urbanist font-semibold text-[18px] text-[#2E2E2E] leading-[130%] tracking-[-0.02em]">
                        Subscribe to Chainex
                    </p>
                    <div className="relative w-full max-w-[400px]">
                        <input
                            type="text"
                            placeholder="Enter your Email"
                            className="w-full h-[66px] rounded-[40px] border border-[#0000001A] px-4 focus:outline-none placeholder:font-Urbanist placeholder:font-medium placeholder:text-[18px] placeholder:text-[#6B7280] placeholder:leading-[130%] placeholder:tracking-[-0.02em]"
                        />
                        <button
                            className="absolute top-1/2 right-4 md:right-4 -translate-y-1/2 w-[106px] h-[50px] rounded-[24px] border border-[#FFFFFF1A] bg-[#8A2BE2] font-Urbanist font-medium text-[18px] text-white flex items-center justify-center"
                        >
                            Sign up
                        </button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-10 md:gap-[150px] md:flex-1">
                    <div className="flex flex-col gap-4 md:gap-[20px]">
                        <h4 className="font-Urbanist font-semibold text-[18px] text-[#2E2E2E] leading-[100%] tracking-[-0.02em]">Product</h4>
                        <a href="#features" className="font-Urbanist font-normal text-[18px] text-[#6B7280]">Features</a>
                        <a href="#pricing" className="font-Urbanist font-normal text-[18px] text-[#6B7280]">Pricing</a>
                        <a href="#AI-insight" className="font-Urbanist font-normal text-[18px] text-[#6B7280]">AI Insights</a>
                        <a href="/" className="font-Urbanist font-normal text-[18px] text-[#6B7280]">Integrations</a>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-[20px]">
                        <h4 className="font-Urbanist font-semibold text-[18px] text-[#2E2E2E] leading-[100%] tracking-[-0.02em]">Company</h4>
                        <Link to="/" className="font-Urbanist font-normal text-[18px] text-[#6B7280]">About</Link>
                        <Link to="/" className="font-Urbanist font-normal text-[18px] text-[#6B7280]">Careers</Link>
                        <Link to="/" className="font-Urbanist font-normal text-[18px] text-[#6B7280]">Blog</Link>
                        <Link to="/" className="font-Urbanist font-normal text-[18px] text-[#6B7280]">Contact</Link>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-[20px]">
                        <h4 className="font-Urbanist font-semibold text-[18px] text-[#2E2E2E] leading-[100%] tracking-[-0.02em]">Resources</h4>
                        <Link to="/" className="font-Urbanist font-normal text-[18px] text-[#6B7280]">Help Center</Link>
                        <Link to="/" className="font-Urbanist font-normal text-[18px] text-[#6B7280]">FAQs</Link>
                        <Link to="/" className="font-Urbanist font-normal text-[18px] text-[#6B7280]">Terms of Service</Link>
                        <Link to="/" className="font-Urbanist font-normal text-[18px] text-[#6B7280]">Privacy Policy</Link>
                    </div>
                </div>
            </div>
            <div className="mt-10 md:mt-[70px] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <Link to="/" className="font-Urbanist font-normal text-[16px] text-[#13173599] underline">
                    Terms & Condition
                </Link>
                <p className="font-Urbanist font-normal text-[16px] text-[#13173599]">
                    ©{new Date().getFullYear()} ShipX. All Rights Reserved.
                </p>
            </div>
            <div>
                <img src={bottom} alt="" className="absolute left-[10px] md:top-[352px] md:left-[40px]" />
            </div>
        </div>
    )
}

export default Footer;