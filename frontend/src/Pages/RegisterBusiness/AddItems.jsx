import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Buttons from "../../components/ui/buttons";
import StepLoader from "../../components/ui/StepLoader";

const AddItems = () => {
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
              Add your first item
            </h2>
            <p className="text-[13.6px] text-[#475569]">
              Create your first product or service listing
            </p>
          </div>

          {/* Form section */}
          <form className="mt-[48px] font-Inter flex flex-col gap-5">
            <div>
              <p className="font-Inter font-medium text-[#2E2E2E]">Item Name</p>
              <input
                type="text"
                value={``}
                placeholder="e.g. Classic White T-Shirt"
                className="w-[560px] h-[50px] rounded-lg p-[10px] mt-[10px]"
              />
            </div>
            <div>
              <div className="flex items-center justify-between w-[560px] font-Inter">
                <p className="font-Inter font-medium text-[#2E2E2E]">
                  Description
                </p>
                <span className="p-[6px] px-3 text-[10.2px] rounded-full bg-gradient-to-t from-[#4B0082] to-[#8A2BE2] text-white">
                  Improve with AI
                </span>
              </div>
              <textarea
                type="text"
                value={``}
                placeholder="Describe your product..."
                className="w-[560px] h-[134px] rounded-lg p-[10px] mt-[10px]"
              />
            </div>
            <div>
              <p className="font-Inter font-medium text-[#2E2E2E]">Price</p>
              <input
                type="number"
                value={``}
                placeholder="0.00"
                className="w-[560px] h-[50px] rounded-lg p-[10px] mt-[10px]"
              />
            </div>
            <div>
              <p className="font-Inter font-medium text-[#2E2E2E]">
                Product Image
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

            <Buttons label={`Continue`} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
