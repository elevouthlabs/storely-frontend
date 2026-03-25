import dash from "../../assets/dash.png";
import check from "../../assets/check-circle.png";

const Solution = () => {
    return (
        <div className="h-auto pb-[100px] bg-[#FFFFFF] px-4 sm:px-6 lg:px-14 py-10">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-3 items-center lg:items-start">

                {/* LEFT CONTENT */}
                <div className="flex flex-col gap-3 w-full">

                    {/* Badge */}
                    <div className="flex items-center gap-2 w-full max-w-[157px] h-[38px] bg-white/80 border border-[#0000001A] rounded-full px-[12px] py-[15px]">
                        <div className="w-[8px] h-[8px] bg-[#00C950] rounded-full"></div>
                        <p className="font-Arimo font-normal text-[12px] sm:text-[14px] text-[#0A0A0A] leading-[20px]">
                            THE SOLUTION
                        </p>
                    </div>

                    {/* Heading */}
                    <div className="flex flex-col gap-3">
                        <h2 className="font-Inter font-semibold text-[32px] sm:text-[44px] lg:text-[64px] text-[#47444B] leading-[40px] sm:leading-[55px] lg:leading-[70px] w-full max-w-[656px]">
                            One platform to run
                            your entire business.
                        </h2>
                        <p className="font-Inter w-full max-w-[636px] font-normal text-[16px] sm:text-[18px] lg:text-[20px] text-[#28272A] leading-[24px] sm:leading-[26px] lg:leading-[28px]">
                            Storely combines operational infrastructure with AI-powered
                            intelligence to help businesses manage operations and grow faster.
                        </p>
                    </div>

                    {/* Operational Infrastructure */}
                    <div className="mt-[20px]">
                        <div className="flex items-center gap-2">
                            <div className="w-[6px] h-[32px] bg-[#4B0082] rounded-full"></div>
                            <p className="font-Inter font-semibold text-[20px] sm:text-[22px] lg:text-[24px] text-[#47444B] leading-[30px] sm:leading-[32px] lg:leading-[33.6px]">
                                Operational Infrastructure
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-16 lg:gap-28 mt-[16px]">
                            <div className="flex flex-col gap-3 ml-[10px]">
                                <div className="flex items-center gap-2">
                                    <img src={check} alt="" />
                                    <p className="font-Inter text-[14px] sm:text-[16px] text-[#28272A]">Inventory management</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={check} alt="" />
                                    <p className="font-Inter text-[14px] sm:text-[16px] text-[#28272A]">Customer management</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={check} alt="" />
                                    <p className="font-Inter text-[14px] sm:text-[16px] text-[#28272A]">Sales reporting</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 ml-[10px]">
                                <div className="flex items-center gap-2">
                                    <img src={check} alt="" />
                                    <p className="font-Inter text-[14px] sm:text-[16px] text-[#28272A]">Order tracking</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={check} alt="" />
                                    <p className="font-Inter text-[14px] sm:text-[16px] text-[#28272A]">Payment processing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[20px]">
                        <div className="flex items-center gap-2">
                            <div className="w-[6px] h-[32px] bg-[#4B0082] rounded-full"></div>
                            <p className="font-Inter font-semibold text-[20px] sm:text-[22px] lg:text-[24px] text-[#47444B] leading-[30px] sm:leading-[32px] lg:leading-[33.6px]">
                                AI Intelligence Layer
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-16 lg:gap-28 mt-[16px]">
                            <div className="flex flex-col gap-3 ml-[10px]">
                                <div className="flex items-center gap-2">
                                    <img src={check} alt="" />
                                    <p className="font-Inter text-[14px] sm:text-[16px] text-[#28272A]">Sales forecasting</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={check} alt="" />
                                    <p className="font-Inter text-[14px] sm:text-[16px] text-[#28272A]">Growth recommendations</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 ml-[10px]">
                                <div className="flex items-center gap-2">
                                    <img src={check} alt="" />
                                    <p className="font-Inter text-[14px] sm:text-[16px] text-[#28272A]">Inventory optimization</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={check} alt="" />
                                    <p className="font-Inter text-[14px] sm:text-[16px] text-[#28272A]">AI business assistant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[40px] lg:mt-[150px] w-full flex justify-center">
                    <img src={dash} alt="" className="w-full max-w-[500px] lg:max-w-none h-auto" />
                </div>
            </div>
        </div>
    )
}

export default Solution;