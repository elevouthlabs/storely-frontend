import storely1 from "../../assets/storely1.png";

const Started = () => {
    return (
        <div className="h-[720px] bg-[#F5F5F5] ">
            <div className="ml-[60px]  flex gap-[213px] ">
                <div className="mt-[70px] flex flex-col gap-[20px]">
                    <div className="w-[114px] h-[36px] py-[10px] px-[15px] rounded-[40px] border border-[#DCDCDC] font-Outfit font-normal text-[14px] leading-[100%] tracking-normal text-black">How it Works</div>
                    <h3 className="font-Inter w-[443px] font-semibold text-[40px] leading-[100%] tracking-normal text-black">Get started in three simple steps</h3>
                    <div className="mt-[30px]">
                        <div className="flex gap-[25px]">
                            <h3 className="font-Outfit font-semibold text-[48px] leading-[100%] tracking-normal text-[#8A2BE2]">01</h3>
                            <div className="flex flex-col gap-[5px]">
                                <h4 className="font-Inter font-semibold text-[20px] leading-[100%] tracking-normal text-black">Create your store</h4>
                                <p className="font-OpenSans w-[353px] font-normal text-[20px] leading-[32.5px] tracking-normal text-[#505256]">Sign up and customize your business page in minutes</p>
                            </div>
                        </div>
                        <div className="flex gap-[25px] mt-[70px]">
                            <h3 className="font-Outfit font-semibold text-[48px] leading-[100%] tracking-normal text-[#8A2BE2]">02</h3>
                            <div className="flex flex-col gap-[5px]">
                                <h4 className="font-Inter font-semibold text-[20px] leading-[100%] tracking-normal text-black">Add products or services</h4>
                                <p className="font-OpenSans w-[353px] font-normal text-[20px] leading-[32.5px] tracking-normal text-[#505256]">Upload photos, set prices, and write descriptions</p>
                            </div>
                        </div>
                        <div className="flex gap-[25px] mt-[70px]">
                            <h3 className="font-Outfit font-semibold text-[48px] leading-[100%] tracking-normal text-[#8A2BE2]">03</h3>
                            <div className="flex flex-col gap-[5px]">
                                <h4 className="font-Inter font-semibold text-[20px] leading-[100%] tracking-normal text-black">Share link & get paid</h4>
                                <p className="font-OpenSans w-[353px] font-normal text-[20px] leading-[32.5px] tracking-normal text-[#505256]">Send your link anywhere and start receiving payments</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[565px] h-[619px] rounded-[24px] mt-[70px] bg-white">
                    <img src={storely1} alt="" className="ml-[34px] mt-[45px]" />
                </div>
            </div>
        </div>
    )
}

export default Started;