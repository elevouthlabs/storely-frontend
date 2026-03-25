import check2 from "../../assets/check2.png";
import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";
import feature3 from "../../assets/feature3.png";
import feature4 from "../../assets/feature4.png";

const Features = () => {
    return (
        <div id="features" className="h-auto pb-[60px] bg-[#F4F4F8]">
            <div className="flex flex-col items-center justify-center gap-2 px-4">
                <div className="w-[127px] flex items-center gap-2 mt-[45px] h-[38px] bg-white/80 border-t border-[#0000001A] rounded-full px-[16px] py-[15px]">
                    <div className="w-[8px] h-[8px] bg-[#00C950] rounded-full"></div>
                    <p className="font-Arimo font-normal text-[14px] text-[#0A0A0A] leading-[20px]">FEATURES</p>
                </div>

                <div>
                    <h2 className="font-Inter w-full max-w-[1010px] font-semibold text-[32px] md:text-[48px] lg:text-[64px] text-[#47444B] leading-[40px] md:leading-[60px] lg:leading-[70px] text-center">
                        Everything your business needs, built in.
                    </h2>
                    <p className="font-OpenSans mx-auto w-full max-w-[757px] font-normal text-[16px] md:text-[18px] lg:text-[20px] text-[#28272A] leading-[28px] md:leading-[30px] lg:leading-[32.5px] text-center">
                        Powerful features designed to help you grow, without the complexity of traditional e-commerce platforms.
                    </p>
                </div>
            </div>

            <div className="mt-[30px]">
                <div className="flex flex-col lg:flex-row gap-8 p-6 md:p-10 lg:p-14">
                    <div className="flex flex-col gap-4">
                        <div className="w-[147px] h-[38px] flex items-center gap-2 bg-[#F3EAFC] border border-[#0000001A] rounded-full px-[14px] py-[15px]">
                            <div className="w-[8px] h-[8px] bg-[#F59E0B] rounded-full"></div>
                            <p>OPERATIONAL</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="font-Inter font-bold text-[24px] text-[#47444B] leading-[20px]">Smart Inventory</h4>

                            <p className="font-Inter w-full lg:w-[593px] font-normal text-[16px] md:text-[18px] lg:text-[20px] text-[#28272A] leading-[28px] lg:leading-[32.5px]">
                                Track stock levels, manage variants, and get low-stock alerts
                                before you run out. Know exactly what you have, where it is,
                                and when to reorder.
                            </p>

                            <div className="flex flex-col gap-4">
                                {[1, 2, 3, 4].map((_, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <img src={check2} alt="" />
                                        <p className="font-Inter text-[16px] text-[#28272A]">Real-time stock level tracking</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img src={feature1} alt="" className="w-full max-w-[500px] lg:max-w-none" />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 p-6 md:p-10 lg:p-14">
                    <div className="flex justify-center order-2 lg:order-1">
                        <img src={feature2} alt="" className="w-full max-w-[500px] lg:max-w-none" />
                    </div>

                    <div className="flex flex-col gap-4 order-1 lg:order-2">
                        <div className="w-[136px] h-[38px] flex items-center gap-2 bg-[#F3EAFC] border border-[#0000001A] rounded-full px-[14px] py-[15px]">
                            <div className="w-[8px] h-[8px] bg-[#F59E0B] rounded-full"></div>
                            <p>OPERATIONS</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="font-Inter font-bold text-[24px] text-[#47444B] leading-[20px]">Order Management</h4>

                            <p className="font-Inter w-full lg:w-[583px] text-[16px] md:text-[18px] lg:text-[20px] text-[#28272A] leading-[28px] lg:leading-[32.5px]">
                                Manage all your orders from one place. Update statuses, track deliveries, and keep customers informed — automatically.
                            </p>

                            <div className="flex flex-col gap-5 mt-[7px]">
                                {[
                                    "Unified order dashboard",
                                    "One-click status updates",
                                    "Delivery tracking integration",
                                    "Automatic customer notifications"
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <img src={check2} alt="" />
                                        <p className="font-Inter text-[16px] text-[#28272A]">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 p-6 md:p-10 lg:p-14">
                    <div className="flex flex-col gap-4">
                        <div className="w-[81px] h-[38px] flex items-center gap-2 bg-[#F3EAFC] border border-[#0000001A] rounded-full px-[14px] py-[15px]">
                            <div className="w-[8px] h-[8px] bg-[#F59E0B] rounded-full"></div>
                            <p>CRM</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="font-Inter font-bold text-[24px] text-[#47444B] leading-[20px]">Customer Management</h4>

                            <p className="font-Inter w-full lg:w-[583px] text-[16px] md:text-[18px] lg:text-[20px] text-[#28272A] leading-[28px] lg:leading-[32.5px]">
                                Understand your customers deeply. Track purchase history, segment your audience, and build lasting relationships that drive repeat sales.
                            </p>

                            <div className="flex flex-col gap-4">
                                {[
                                    "Complete customer profiles",
                                    "Purchase history & lifetime value",
                                    "Behavioral insights & segmentation",
                                    "Repeat purchase tracking"
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <img src={check2} alt="" />
                                        <p className="font-Inter text-[16px] text-[#28272A]">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img src={feature3} alt="" className="w-full max-w-[500px] lg:max-w-none" />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 p-6 md:p-10 lg:p-14">
                    <div className="flex justify-center order-2 lg:order-1">
                        <img src={feature4} alt="" className="w-full max-w-[500px] lg:max-w-none" />
                    </div>

                    <div className="flex flex-col gap-5 order-1 lg:order-2">
                        <div className="w-[140px] h-[38px] flex items-center gap-2 bg-[#F3EAFC] border border-[#0000001A] rounded-full px-[14px] py-[15px]">
                            <div className="w-[8px] h-[8px] bg-[#F59E0B] rounded-full"></div>
                            <p>AI POWERED</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="font-Inter font-bold text-[24px] text-[#47444B] leading-[20px]">AI Business Assistant</h4>

                            <p className="font-Inter w-full lg:w-[583px] text-[16px] md:text-[18px] lg:text-[20px] text-[#28272A] leading-[28px] lg:leading-[32.5px]">
                                Ask questions about your business in plain language and receive intelligent, data-backed insights. Your 24/7 business analyst built right in.
                            </p>

                            <div className="flex flex-col mt-[5px] gap-6">
                                {[
                                    "Natural language business queries",
                                    "Real-time data analysis",
                                    "Predictive recommendations",
                                    "Automated insight reports"
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <img src={check2} alt="" />
                                        <p className="font-Inter text-[16px] text-[#28272A]">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Features;