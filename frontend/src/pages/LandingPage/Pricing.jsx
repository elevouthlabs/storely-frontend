import tik from "../../assets/tik.png";
import tickkk from "../../assets/tickkk.png";
import black from "../../assets/black.png";

const Pricing = () => {
    return (
        <div id="pricing" className="h-auto px-[60px] py-[60px] bg-[#FFFFFF]">
            <div className="flex flex-col gap-4 justify-center items-center">
                <div className="w-[104px] flex items-center gap-2 h-[38px] bg-white/80 rounded-full px-[13px] py-[15px] border border-t border-t-black/10">
                    <div className="w-[8px] h-[8px] bg-[#F59E0B] rounded-full"></div>
                    <p className="font-Arimo font-normal text-[14px] text-[#0A0A0A] leading-[20px] tracking-normal">PRICING</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="font-Inter font-semibold text-[64px] text-black leading-[70px] tracking-normal">Simple, transparent pricing.</h2>
                    <p className="font-Inter font-normal text-[20px] text-center text-[#6A7282] leading-[22px] tracking-normal">Start free, scale as you grow. No hidden fees, no surprises.</p>
                </div>
            </div>
            <div className="flex  gap-4 mt-[60px]">
                <div className="w-[411px] h-[509px] bg-[#F5F5F5] rounded-[16px] p-[20px] flex flex-col gap-5">
                    <div className="w-[47px] h-[17px] bg-[#E8EFE9] rounded-[30px] px-[10px]">
                        <p className="font-Inter font-normal text-[10px] text-[#1B5E20] leading-[16px] tracking-normal">FREE</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-Inter font-bold text-[20.4px] text-[#1A1A1A] leading-[32px] tracking-normal">Starter</h4>
                        <p className="font-Inter font-normal text-[14px] text-[#6B7280] leading-[20px] tracking-normal">Best for new businesses just getting started.</p>
                    </div>
                    <div className="font-Inter mt-[10px] font-semibold text-[32px] text-black leading-[28px] tracking-normal text-center">Free</div>
                    <div className="flex flex-col gap-4 mt-[30px]">
                        <div className="flex items-center gap-2">
                            <div>
                                <img src={tik} alt="" />
                            </div>
                            <p className="font-Inter font-normal text-[16px] text-[#525252] leading-[20px] tracking-normal">Basic storefront</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div>
                                <img src={tik} alt="" />
                            </div>
                            <p className="font-Inter font-normal text-[16px] text-[#525252] leading-[20px] tracking-normal">Product catalog (up to 20)</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div>
                                <img src={tik} alt="" />
                            </div>
                            <p className="font-Inter font-normal text-[16px] text-[#525252] leading-[20px] tracking-normal">Order management</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div>
                                <img src={tik} alt="" />
                            </div>
                            <p className="font-Inter font-normal text-[16px] text-[#525252] leading-[20px] tracking-normal">Customer database</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div>
                                <img src={tik} alt="" />
                            </div>
                            <p className="font-Inter font-normal text-[16px] text-[#525252] leading-[20px] tracking-normal">Basic analytics</p>
                        </div>
                    </div>
                    <div className="w-[370.67px] mt-[10px] h-[50px] bg-[#F5F5F5] border border-[#1A1A1A] rounded-[8px] px-[149px] py-[13px]">
                        <a href="" className="font-Inter font-medium text-[13.6px] text-[#1A1A1A] leading-[24px] tracking-normal text-center">Buy Now</a>
                    </div>
                </div>
                <div className="w-[411px] h-[559.75px] bg-[#4B0082] rounded-[16px] p-[20px] flex flex-col gap-5">
                    <div class="w-[149px] flex items-center gap-2 px-[10px] h-[28px] bg-[#F59E0B] rounded-full">
                        <div>
                            <img src={black} alt="" />
                        </div>
                        <p classname="font-Inter font-medium text-[14px] text-[#28272A] leading-[20px] tracking-[0px]">Recommended</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-Inter font-bold text-[20.4px] text-[#FFFFFF] leading-[32px] tracking-normal">Growth</h4>
                        <p className="font-Inter font-normal text-[14px] text-[#FFFFFFB5] leading-[20px] tracking-normal">For growing businesses ready to scale operations.</p>
                    </div>
                    <div className="font-Inter mt-[10px] font-semibold text-[36px] text-[#FFFFFF] leading-[40px] tracking-normal text-center">₦8,000 <span className="font-Inter font-normal text-[20px] text-[#fff] leading-[40px] tracking-normal">/month</span></div>
                    <div className="flex flex-col gap-4 mt-[15px]">
                        <div className="flex items-center gap-2">
                            <div>
                                <img src={tickkk} alt="" />
                            </div>
                            <p className="font-Inter font-normal text-[16px] text-[#FFFFFF] leading-[24px] tracking-normal">Inventory automation</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div>
                                <img src={tickkk} alt="" />
                            </div>
                            <p className="font-Inter font-normal text-[16px] text-[#FFFFFF] leading-[24px] tracking-normal">Advanced analytics</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div>
                                <img src={tickkk} alt="" />
                            </div>
                            <p className="font-Inter font-normal text-[16px] text-[#FFFFFF] leading-[24px] tracking-normal">Custom branding</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div>
                                <img src={tickkk} alt="" />
                            </div>
                            <p className="font-Inter font-normal text-[16px] text-[#FFFFFF] leading-[24px] tracking-normal">Unlimited products</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div>
                                <img src={tickkk} alt="" />
                            </div>
                            <p className="font-Inter font-normal text-[16px] text-[#FFFFFF] leading-[24px] tracking-normal">Priority support</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div>
                                <img src={tickkk} alt="" />
                            </div>
                            <p className="font-Inter font-normal text-[16px] text-[#FFFFFF] leading-[24px] tracking-normal">Multi-channel selling</p>
                        </div>
                    </div>
                    <div className="w-[371px] h-[50px] mt-[10px] bg-white rounded-[8px] pt-3 pr-[106px] pb-4 pl-[136px]">
                        <a href="#" className="font-Inter font-semibold text-[16px] text-[#4B0082] leading-[24px] tracking-[0px] text-center align-middle">
                            Get Started
                        </a>
                    </div>
                </div>
                <div className="w-[411px] h-[509px] bg-[#F5F5F5] rounded-[16px] p-[20px] flex flex-col gap-5">
                    <div className="w-[47px] h-[17px] bg-[#E8EFE9] rounded-[30px] px-[13px]">
                        <p className="font-Inter font-normal text-[10px] text-[#1B5E20] leading-[16px] tracking-normal">Pro</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-Inter font-bold text-[20.4px] text-[#1A1A1A] leading-[32px] tracking-normal">Pro</h4>
                        <p className="font-Inter font-normal text-[14px] text-[#6B7280] leading-[20px] tracking-normal">For scaling businesses that need AI-powered intelligence.</p>
                    </div>
                    <div className="font-Inter mt-[10px] font-semibold text-[32px] text-black leading-[28px] tracking-normal text-center">₦25,000 <span className="font-Inter font-normal text-[20px] text-[#1A1A1A] leading-[40px] tracking-normal">/month</span></div>
                    <div className="flex flex-col gap-4 mt-[15px]">
                        <div className="flex items-center gap-2">
                            <div>
                                <img src={tik} alt="" />
                            </div>
                            <p className="font-Inter font-normal text-[16px] text-[#525252] leading-[20px] tracking-normal">AI insights & forecasting</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div>
                                <img src={tik} alt="" />
                            </div>
                            <p className="font-Inter font-normal text-[16px] text-[#525252] leading-[20px] tracking-normal">Advanced reporting</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div>
                                <img src={tik} alt="" />
                            </div>
                            <p className="font-Inter font-normal text-[16px] text-[#525252] leading-[20px] tracking-normal">Priority support</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div>
                                <img src={tik} alt="" />
                            </div>
                            <p className="font-Inter font-normal text-[16px] text-[#525252] leading-[20px] tracking-normal">Dedicated account manager</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div>
                                <img src={tik} alt="" />
                            </div>
                            <p className="font-Inter font-normal text-[16px] text-[#525252] leading-[20px] tracking-normal">White-label option</p>
                        </div>
                    </div>
                    <div className="w-[370.67px] mt-[10px] h-[50px] bg-[#F5F5F5] border border-[#1A1A1A] rounded-[8px] px-[149px] py-[13px]">
                        <a href="" className="font-Inter font-medium text-[13.6px] text-[#1A1A1A] leading-[24px] tracking-normal text-center">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;