import paystack from "../../assets/paystack.png";
import flutter from "../../assets/flutter.png";
import monie from "../../assets/monie.png";
import interswitch from "../../assets/interswitch.png";
import whatsapp from "../../assets/whatsapp.png";

const Everything = () => {
    return (
        <div className="h-auto pb-[60px] bg-[#fff] flex flex-col gap-10 sm:gap-14 px-4 sm:px-6 lg:px-0">
            <div className="flex justify-center items-center pt-10">
                <p className="font-Inter font-medium text-[14px] sm:text-[16px] text-[#6A7282] leading-[22px] sm:leading-[25.6px] text-center">
                    Trusted by modern businesses
                </p>
            </div>
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 lg:gap-[112px] justify-center">
                <div>
                    <img src={paystack} alt="" className="w-[80px] sm:w-[100px] lg:w-auto h-auto" />
                </div>
                <div>
                    <img src={flutter} alt="" className="w-[80px] sm:w-[100px] lg:w-auto h-auto" />
                </div>
                <div>
                    <img src={monie} alt="" className="w-[80px] sm:w-[100px] lg:w-auto h-auto" />
                </div>
                <div>
                    <img src={interswitch} alt="" className="w-[80px] sm:w-[100px] lg:w-auto h-auto" />
                </div>
                <div>
                    <img src={whatsapp} alt="" className="w-[80px] sm:w-[100px] lg:w-auto h-auto" />
                </div>
            </div>

            <div>
                <p className="font-Inter font-medium text-[14px] sm:text-[16px] text-[#6A7282] leading-[22px] sm:leading-[25.6px] text-center px-2">
                    Built for SMEs across Africa and beyond
                </p>
            </div>
        </div>
    )
}

export default Everything;