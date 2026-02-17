import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Buttons from "../../components/ui/buttons";
import StepLoader from "../../components/ui/StepLoader";

const Contact = () => {
  const [form, setForm] = useState({
    businessName: "",
    businessType: "",
    category: "",
    storeURL: "",
    description: "",
  });

  return (
    <div className="flex h-screen bg-[#F5F5F5]">
      <Sidebar />
      {/* Beginning of the RHS */}
      <div className="w-1/2 my-[32px] ml-[28px]">
        {/* Step Loader */}
        <StepLoader />
        {/* Step Loader end */}
        <div>
          <div className="mt-[22.5px] font-Inter">
            <h2 className="font-bold font-Inter text-[25.5px] text-[#0F172A]">
              Content & Branding
            </h2>
            <p className="text-[13.6px] text-[#475569]">
              How can customers reach you?
            </p>
          </div>

          {/* Form section */}
          <form className="mt-[48px] font-Inter flex flex-col gap-5">
            <div>
              <p className="font-Inter font-medium text-[#2E2E2E]">
                Phone Number
              </p>
              <input
                type="number"
                value={``}
                placeholder="+234678950506969"
                className="w-[560px] h-[50px] rounded-lg p-[10px] mt-[10px]"
              />
            </div>
            <div>
              <p className="font-Inter font-medium text-[#2E2E2E]">
                Whatsapp Number
              </p>
              <input
                type="number"
                value={``}
                placeholder="+234678950506969"
                className="w-[560px] h-[50px] rounded-lg p-[10px] mt-[10px]"
              />
            </div>
            <div>
              <p className="font-Inter font-medium text-[#2E2E2E]">
                Brand Color
              </p>
              <div className="mt-[10px] flex gap-3">
                <div className="w-[40px] h-[40px] rounded-full bg-[#4B0082] border-2"></div>
                <div className="w-[40px] h-[40px] rounded-full bg-[#3CE2C2] border-2"></div>
                <div className="w-[40px] h-[40px] rounded-full bg-[#EF4444] border-2"></div>
                <div className="w-[40px] h-[40px] rounded-full bg-[#F59E0B] border-2"></div>
                <div className="w-[40px] h-[40px] rounded-full bg-[#10B981] border-2"></div>
                <div className="w-[40px] h-[40px] rounded-full bg-[#3B82F6] border-2"></div>
              </div>
            </div>
            <div>
              <p className="font-Inter font-medium text-[#2E2E2E]">
                Logo (Optional)
              </p>
              <div className="w-[560px] h-[156px] border border-[#D9D9D9] rounded-lg mt-[10px] flex items-center justify-center">
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[11.9px] text-[#2E2E2E] font-Inter">
                    Upload your logo
                  </p>
                  <p className="text-[10.2px] text-[#9CA3AF]">
                    PNG, JPG up to 2MB
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-Inter font-medium text-[#2E2E2E]">
                Location (Optional)
              </p>
              <input
                type="text"
                value={``}
                placeholder="City, State or Country"
                className="w-[560px] h-[50px] rounded-lg p-[10px] mt-[10px]"
              />
            </div>

            <Buttons link="/addItem" label={`Continue`} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
