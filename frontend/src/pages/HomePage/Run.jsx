import dashboard from "../../assets/dashboard.png";
import tick from "../../assets/tick.png";

const Run = () => {
    return (
        <div className="h-[500px] bg-white">
            <div className="flex gap-[20px] ml-[60px] mt-[60px]">
                <div className="flex flex-col gap-[40px]">
                    <h3 className="font-Inter w-[510px] font-semibold text-[40px] leading-[48px] tracking-normal text-[#101828]">Run Your Business From One Simple Dashboard</h3>
                    <p className="font-OpenSans w-[530px] font-normal text-[20px] leading-[32.5px] tracking-normal text-[#505256] align-middle">Everything you need to manage your store, track orders, and grow your sales — all in one place.</p>
                    <div>
                        <div className="flex gap-[10px]">
                            <div>
                                <img src={tick} alt="check-icon" />
                            </div>
                            <p className="font-OpenSans font-normal text-[20px] leading-[32.5px] tracking-normal text-[#505256]">Add, edit, hide products & services</p>
                        </div>
                        <div className="flex gap-[10px] mt-[30px]">
                            <div>
                                <img src={tick} alt="check-icon" />
                            </div>
                            <p className="font-OpenSans font-normal text-[20px] leading-[32.5px] tracking-normal text-[#505256]">View and manage orders</p>
                        </div>
                        <div className="flex gap-[10px] mt-[30px]">
                            <div>
                                <img src={tick} alt="check-icon" />
                            </div>
                            <p className="font-OpenSans font-normal text-[20px] leading-[32.5px] tracking-normal text-[#505256]">Update order status</p>
                        </div>
                        <div className="flex gap-[10px] mt-[30px]">
                            <div>
                                <img src={tick} alt="check-icon" />
                            </div>
                            <p className="font-OpenSans font-normal text-[20px] leading-[32.5px] tracking-normal text-[#505256]">Share store link anytime</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={dashboard} alt="dashboard" />
                </div>
            </div>
        </div>
    )
}

export default Run;