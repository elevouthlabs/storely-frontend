import Sidebar from "../../components/Sidebar/Sidebar";
import success from "../../assets/success.png";
import container from "../../assets/Container.png";
import { useState } from "react";

const RegisterSuccess = () => {
  const [storeUrl, setStoreUrl] = useState();

  return (
    <div className="flex h-auto bg-[#F5F5F5]">
      <Sidebar />
      <div className=" flex flex-col justify-center items-center gap-[27px] my-[32px] mx-[28px] font-Inter">
        <div className="flex flex-col items-center">
          <img src={success} alt="success" className="w-[60px] h-[60px]" />
          <p className="font-semibold text-[24px] text-[#2E2E2E] m">
            Your store is ready
          </p>
        </div>
        <img src={container} alt="" className="w-[533px]" />
        <div className="flex flex-col items-center gap-[25px]">
          <div>
            <p className="font-Inter font-medium">Your Store URL</p>
            <input
              type="text"
              value={storeUrl}
              placeholder="Name@company.com"
              required
              className="w-[533px] h-[50px] rounded-lg p-[10px] mt-[10px]"
              onChange={(e) => setStoreUrl({ storeUrl: e.target.value })}
            />
          </div>
          <div className="flex flex-col items-center gap-[8px]">
            <button className="w-[533px] h-[56px] rounded-[8px] font-extrabold text-white bg-gradient-to-t from-[#4B0082] to-[#8A2BE2]">
              Go Live
            </button>
            <button className="w-[533px] h-[56px] rounded-[8px] font-extrabold text-[#2E2E2E] bg-white border border-[#E5E7EB]">
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSuccess;
