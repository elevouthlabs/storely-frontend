import dash from "../../assets/dash.png";
import check from "../../assets/check-circle.png";

const Solution = () => {
    return (
        <div className="h-auto pb-[100px] bg-[#FFFFFF] p-14">
            <div className="flex gap-3">
                <div className="flex flex-col gap-3">
                    <div className=" flex items-center gap-2 items-center w-[157px] h-[38px] bg-white/80 border border-[#0000001A] rounded-full px-[12px] py-[15px]">
                        <div className="w-[8px] h-[8px] bg-[#00C950] rounded-full"></div>
                        <p className="font-Arimo font-normal text-[14px] text-[#0A0A0A] leading-[20px]">THE SOLUTION</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h2 className="font-Inter font-semibold text-[64px] text-[#47444B] leading-[70px] w-[656px]">One platform to run
                            your entire business.
                        </h2>
                        <p className="font-Inter w-[636px] font-normal text-[20px] text-[#28272A] leading-[28px]">Storely combines operational infrastructure with AI-powered
                            intelligence to help businesses manage operations and grow faster.</p>
                    </div>
                    <div className="mt-[20px]">
                        <div className="flex items-center gap-2">
                            <div className="w-[6px] h-[32px] bg-[#4B0082] rounded-full"></div>
                            <p className="font-Inter font-semibold text-[24px] text-[#47444B] leading-[33.6px]">Operational Infrastructure</p>
                        </div>
                        <div className="flex gap-28 mt-[16px]">
                            <div className="flex flex-col gap-3 ml-[10px]">
                                <div className="flex items-center gap-2">
                                    <img src={check} alt="" />
                                    <p className="font-Inter font-normal text-[16px] text-[#28272A] leading-[24px]">Inventory management</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={check} alt="" />
                                    <p className="font-Inter font-normal text-[16px] text-[#28272A] leading-[24px]">Customer management</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={check} alt="" />
                                    <p className="font-Inter font-normal text-[16px] text-[#28272A] leading-[24px]">Sales reporting</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-2">
                                    <img src={check} alt="" />
                                    <p className="font-Inter font-normal text-[16px] text-[#28272A] leading-[24px]">Order tracking</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={check} alt="" />
                                    <p className="font-Inter font-normal text-[16px] text-[#28272A] leading-[24px]">Payment processing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[20px]">
                        <div className="flex items-center gap-2">
                            <div className="w-[6px] h-[32px] bg-[#4B0082] rounded-full"></div>
                            <p className="font-Inter font-semibold text-[24px] text-[#47444B] leading-[33.6px]">AI Intelligence Layer</p>
                        </div>
                        <div className="flex gap-28 mt-[16px]">
                            <div className="flex flex-col gap-3 ml-[10px]">
                                <div className="flex items-center gap-2">
                                    <img src={check} alt="" />
                                    <p className="font-Inter font-normal text-[16px] text-[#28272A] leading-[24px]">Sales forecasting</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={check} alt="" />
                                    <p className="font-Inter font-normal text-[16px] text-[#28272A] leading-[24px]">Growth recommendations</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-2">
                                    <img src={check} alt="" />
                                    <p className="font-Inter font-normal text-[16px] text-[#28272A] leading-[24px]">Inventory optimization</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={check} alt="" />
                                    <p className="font-Inter font-normal text-[16px] text-[#28272A] leading-[24px]">AI business assistant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[150px]">
                    <img src={dash} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Solution;