import storely1 from "../../assets/storely1.png";

const Started = () => {
    return (
        <div id="howitworks" className="h-auto py-[60px] lg:h-auto bg-[#fff]">
            <div className="mx-[20px] md:mx-[40px] lg:mx-[60px] my-[20px] flex flex-col lg:flex-row justify-between gap-10">
                <div className="mt-[40px] lg:mt-[60px] flex flex-col gap-[20px]">
                    <div className="w-[155px] flex items-center gap-2 h-[38px] bg-white/80 rounded-full pt-[15px] pr-[17px] pb-[15px] pl-[17px] border border-t border-t-black/10">
                        <div className="w-[8px] h-[8px] bg-amber-500 rounded-full"></div>
                        <p>How it Works</p>
                    </div>

                    <h3 className="font-Inter w-full max-w-[565px] font-semibold text-[28px] md:text-[34px] lg:text-[40px] text-[#47444B] leading-[100%] tracking-normal">
                        Get started in three simple steps
                    </h3>

                    <div className="mt-[20px] lg:mt-[30px]">
                        <div className="flex gap-[20px] md:gap-[25px]">
                            <h3 className="font-Outfit font-semibold text-[36px] md:text-[42px] lg:text-[48px] text-[#8A2BE2]">01</h3>
                            <div className="flex flex-col gap-[5px]">
                                <h4 className="font-Inter font-semibold text-[18px] md:text-[20px] text-black">Create your store</h4>
                                <p className="font-OpenSans w-full max-w-[475px] text-[16px] md:text-[18px] lg:text-[20px] leading-[28px] lg:leading-[32.5px] text-[#505256]">
                                    Sign up and customize your business page in minutes
                                </p>
                            </div>
                        </div>

                        <div className="w-full max-w-[565px] mt-[30px] lg:mt-[35px] h-0 border border-[#DCDCDC]"></div>
                        <div className="flex gap-[20px] md:gap-[25px] mt-[30px] lg:mt-[45px]">
                            <h3 className="font-Outfit font-semibold text-[36px] md:text-[42px] lg:text-[48px] text-[#8A2BE2]">02</h3>
                            <div className="flex flex-col gap-[5px]">
                                <h4 className="font-Inter font-semibold text-[18px] md:text-[20px] text-black">Add products or services</h4>
                                <p className="font-OpenSans w-full max-w-[353px] text-[16px] md:text-[18px] lg:text-[20px] leading-[28px] lg:leading-[32.5px] text-[#505256]">
                                    Upload photos, set prices, and write descriptions
                                </p>
                            </div>
                        </div>
                        <div className="w-full max-w-[565px] mt-[30px] lg:mt-[35px] h-0 border border-[#DCDCDC]"></div>
                        <div className="flex gap-[20px] md:gap-[25px] mt-[30px] lg:mt-[40px]">
                            <h3 className="font-Outfit font-semibold text-[36px] md:text-[42px] lg:text-[48px] text-[#8A2BE2]">03</h3>
                            <div className="flex flex-col gap-[5px]">
                                <h4 className="font-Inter font-semibold text-[18px] md:text-[20px] text-black">Share link & get paid</h4>
                                <p className="font-OpenSans w-full max-w-[353px] text-[16px] md:text-[18px] lg:text-[20px] leading-[28px] lg:leading-[32.5px] text-[#505256]">
                                    Send your link anywhere and start receiving payments
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex justify-center lg:block">
                    <img
                        src={storely1}
                        alt=""
                        className="mt-[30px] lg:mt-[45px] ml-0 lg:ml-[34px] w-full max-w-[500px] lg:max-w-none"
                    />
                </div>

            </div>
        </div>
    )
}

export default Started;