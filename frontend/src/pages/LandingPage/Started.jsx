import storely1 from "../../assets/storely1.png";

const Started = () => {
    return (
        <div id="howitworks" className="h-[720px] bg-[#fff] ">
            <div className="mx-[60px] my-[30px]  flex justify-between  ">
                <div className="mt-[60px] flex flex-col gap-[20px]">
                    <div className="w-[155px] flex items-center gap-2 h-[38px] bg-white/80 rounded-full pt-[15px] pr-[17px] pb-[15px] pl-[17px] border border-t border-t-black/10">
                        <div className="w-[8px] h-[8px] bg-amber-500 rounded-full"></div>
                        <p>How it Works</p>
                    </div>
                    <h3 className="font-Inter w-[565px] font-semibold text-[40px] text-[#47444B] leading-[100%] tracking-normal">Get started in three simple steps</h3>
                    <div className="mt-[30px]">
                        <div className="flex gap-[25px]">
                            <h3 className="font-Outfit font-semibold text-[48px] leading-[100%] tracking-normal text-[#8A2BE2]">01</h3>
                            <div className="flex flex-col gap-[5px]">
                                <h4 className="font-Inter font-semibold text-[20px] leading-[100%] tracking-normal text-black">Create your store</h4>
                                <p className="font-OpenSans w-[475px] font-normal text-[20px] leading-[32.5px] tracking-normal text-[#505256]">Sign up and customize your business page in minutes</p>
                            </div>
                        </div>
                        <div className="w-[565px] mt-[35px] h-0 border border-[#DCDCDC]"></div>
                        <div className="flex gap-[25px] mt-[45px]">
                            <h3 className="font-Outfit font-semibold text-[48px] leading-[100%] tracking-normal text-[#8A2BE2]">02</h3>
                            <div className="flex flex-col gap-[5px]">
                                <h4 className="font-Inter font-semibold text-[20px] leading-[100%] tracking-normal text-black">Add products or services</h4>
                                <p className="font-OpenSans w-[353px] font-normal text-[20px] leading-[32.5px] tracking-normal text-[#505256]">Upload photos, set prices, and write descriptions</p>
                            </div>
                        </div>
                         <div className="w-[565px] mt-[35px] h-0 border border-[#DCDCDC]"></div>
                        <div className="flex gap-[25px] mt-[40px]">
                            <h3 className="font-Outfit font-semibold text-[48px] leading-[100%] tracking-normal text-[#8A2BE2]">03</h3>
                            <div className="flex flex-col gap-[5px]">
                                <h4 className="font-Inter font-semibold text-[20px] leading-[100%] tracking-normal text-black">Share link & get paid</h4>
                                <p className="font-OpenSans w-[353px] font-normal text-[20px] leading-[32.5px] tracking-normal text-[#505256]">Send your link anywhere and start receiving payments</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={storely1} alt="" className="ml-[34px] mt-[45px]" />
                </div>
            </div>
        </div>
    )
}

export default Started;