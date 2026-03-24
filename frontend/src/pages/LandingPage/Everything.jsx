import paystack from "../../assets/paystack.png";
import flutter from "../../assets/flutter.png";
import monie from "../../assets/monie.png";
import interswitch from "../../assets/interswitch.png";
import whatsapp from "../../assets/whatsapp.png";

const Everything = () => {
    return (
        <div className="h-auto pb-[60px] bg-[#fff] flex flex-col gap-14">
            <div className="flex justify-center items-center pt-10">
                <p className="font-Inter font-medium text-[16px] text-[#6A7282] leading-[25.6px] text-center">Trusted by modern businesses</p>
            </div>
            <div className="flex items-center gap-[112px] justify-center">
                <div>
                    <img src={paystack} alt="" />
                </div>
                <div>
                    <img src={flutter} alt="" />
                </div>
                <div>
                    <img src={monie} alt="" />
                </div>
                <div>
                    <img src={interswitch} alt="" />
                </div>
                <div>
                    <img src={whatsapp} alt="" />
                </div>
            </div>
            <div>
                <p className="font-Inter font-medium text-[16px] text-[#6A7282] leading-[25.6px] text-center">Built for SMEs across Africa and beyond</p>
            </div>
        </div>
    )
}

export default Everything;