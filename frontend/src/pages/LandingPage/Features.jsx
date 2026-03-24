import check2 from "../../assets/check2.png";
import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";
import feature3 from "../../assets/feature3.png";
import feature4 from "../../assets/feature4.png";

const Features = () => {
    return (
        <div id="features" className="h-auto pb-[60px] bg-[#F4F4F8]">
            <div className="flex flex-col items-center justify-center gap-2">
                <div className="w-[127px] flex items-center gap-2 mt-[45px] h-[38px] bg-white/80 border-t border-[#0000001A] rounded-full px-[16px] py-[15px]">
                    <div className="w-[8px] h-[8px] bg-[#00C950] rounded-full"></div>
                    <p className="font-Arimo font-normal text-[14px] text-[#0A0A0A] leading-[20px]">FEATURES</p>
                </div>
                <div>
                    <h2 className="font-Inter w-[1010px]  font-semibold text-[64px] text-[#47444B] leading-[70px] text-center align-middle">Everything your business needs, built in.</h2>
                    <p className="font-OpenSans mx-auto w-[757px] font-normal text-[20px] text-[#28272A] leading-[32.5px] text-center">Powerful features designed to help you grow, without the complexity of traditional e-commerce platforms.</p>
                </div>
            </div>
            <div className="mt-[30px]">
                <div className="flex  gap-8 p-14">
                    <div className="flex flex-col gap-4">
                        <div className="w-[147px] h-[38px] flex items-center gap-2 bg-[#F3EAFC] border border-[#0000001A] rounded-full px-[14px] py-[15px]">
                            <div className="w-[8px] h-[8px] bg-[#F59E0B] rounded-full"></div>
                            <p>OPERATIONAL</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-Inter font-bold text-[24px] text-[#47444B] leading-[20px]">Smart Inventory</h4>
                            <p className="font-Inter  w-[593px] font-normal text-[20px] text-[#28272A] leading-[32.5px]">Track stock levels, manage variants, and get low-stock alerts
                                before you run out. Know exactly what you have, where it is,
                                and when to reorder.
                            </p>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2">
                                    <img src={check2} alt="" />
                                    <p className="font-Inter font-normal text-[16px] text-[#28272A] leading-[24px]">Real-time stock level tracking</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={check2} alt="" />
                                    <p className="font-Inter font-normal text-[16px] text-[#28272A] leading-[24px]">Real-time stock level tracking</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={check2} alt="" />
                                    <p className="font-Inter font-normal text-[16px] text-[#28272A] leading-[24px]">Real-time stock level tracking</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={check2} alt="" />
                                    <p className="font-Inter font-normal text-[16px] text-[#28272A] leading-[24px]">Real-time stock level tracking</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={feature1} alt="" />
                    </div>
                </div>
                <div className="flex  gap-8 p-14">
                    <div>
                        <img src={feature2} alt="" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="w-[136px] h-[38px] flex items-center gap-2 bg-[#F3EAFC] border border-[#0000001A] rounded-full px-[14px] py-[15px]">
                            <div className="w-[8px] h-[8px] bg-[#F59E0B] rounded-full"></div>
                            <p>OPERATIONS</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-Inter font-bold text-[24px] text-[#47444B] leading-[20px]">Order Management</h4>
                            <p className="font-Inter  w-[583px] font-normal text-[20px] text-[#28272A] leading-[32.5px]">
                                Manage all your orders from one place. Update statuses, track deliveries, and keep customers informed — automatically.
                            </p>
                            <div className="flex flex-col gap-5 mt-[7px]">
                                <div className="flex items-center gap-2">
                                    <img src={check2} alt="" />
                                    <p className="font-Inter font-normal text-[16px] text-[#28272A] leading-[24px]">Unified order dashboard</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={check2} alt="" />
                                    <p className="font-Inter font-normal text-[16px] text-[#28272A] leading-[24px]">One-click status updates</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={check2} alt="" />
                                    <p className="font-Inter font-normal text-[16px] text-[#28272A] leading-[24px]">Delivery tracking integration</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={check2} alt="" />
                                    <p className="font-Inter font-normal text-[16px] text-[#28272A] leading-[24px]">Automatic customer notifications</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex  gap-8 p-14">
                    <div className="flex flex-col gap-4">
                        <div className="w-[81px] h-[38px] flex items-center gap-2 bg-[#F3EAFC] border border-[#0000001A] rounded-full px-[14px] py-[15px]">
                            <div className="w-[8px] h-[8px] bg-[#F59E0B] rounded-full"></div>
                            <p>CRM</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-Inter font-bold text-[24px] text-[#47444B] leading-[20px]">Customer Management</h4>
                            <p className="font-Inter  w-[583px] font-normal text-[20px] text-[#28272A] leading-[32.5px]">
                                Understand your customers deeply. Track purchase history, segment your audience, and build lasting relationships that drive repeat sales.
                            </p>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2">
                                    <img src={check2} alt="" />
                                    <p className="font-Inter font-normal text-[16px] text-[#28272A] leading-[24px]">Complete customer profiles</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={check2} alt="" />
                                    <p className="font-Inter font-normal text-[16px] text-[#28272A] leading-[24px]">Purchase history & lifetime value</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={check2} alt="" />
                                    <p className="font-Inter font-normal text-[16px] text-[#28272A] leading-[24px]">Behavioral insights & segmentation</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={check2} alt="" />
                                    <p className="font-Inter font-normal text-[16px] text-[#28272A] leading-[24px]">Repeat purchase tracking</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={feature3} alt="" />
                    </div>
                </div>
                <div className="flex  gap-8 p-14">
                    <div>
                        <img src={feature4} alt="" />
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="w-[140px] h-[38px] flex items-center gap-2 bg-[#F3EAFC] border border-[#0000001A] rounded-full px-[14px] py-[15px]">
                            <div className="w-[8px] h-[8px] bg-[#F59E0B] rounded-full"></div>
                            <p>AI POWERED</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-Inter font-bold text-[24px] text-[#47444B] leading-[20px]">AI Business Assistant</h4>
                            <p className="font-Inter  w-[583px] font-normal text-[20px] text-[#28272A] leading-[32.5px]">
                                Ask questions about your business in plain language and receive intelligent, data-backed insights. Your 24/7 business analyst built right in.
                            </p>
                            <div className="flex flex-col mt-[5px] gap-6">
                                <div className="flex items-center gap-2">
                                    <img src={check2} alt="" />
                                    <p className="font-Inter font-normal text-[16px] text-[#28272A] leading-[24px]">Natural language business queries</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={check2} alt="" />
                                    <p className="font-Inter font-normal text-[16px] text-[#28272A] leading-[24px]">Real-time data analysis</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={check2} alt="" />
                                    <p className="font-Inter font-normal text-[16px] text-[#28272A] leading-[24px]">Predictive recommendations</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={check2} alt="" />
                                    <p className="font-Inter font-normal text-[16px] text-[#28272A] leading-[24px]">Automated insight reports</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;