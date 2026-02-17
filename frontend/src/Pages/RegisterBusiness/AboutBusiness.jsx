import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Buttons from "../../components/ui/buttons";
import StepLoader from "../../components/ui/StepLoader";

const AboutBusiness = () => {
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
              Tell us about your business
            </h2>
            <p className="text-[13.6px] text-[#475569]">
              Helps us customize your store experience
            </p>
          </div>

          {/* Form section */}
          <form className="mt-[48px] font-Inter flex flex-col gap-5">
            <div>
              <p className="font-Inter font-medium">Business Name</p>
              <input
                type="text"
                value={``}
                placeholder="Name@company.com"
                className="w-[560px] h-[50px] rounded-lg p-[10px] mt-[10px]"
              />
            </div>
            <div>
              <p className="font-Inter font-medium text-[#2E2E2E]">
                What type of business
              </p>
              <select className="w-[560px] h-[50px] rounded-lg p-[10px] mt-[10px]">
                <option>Select a type of business</option>
              </select>
            </div>
            <div>
              <p className="font-Inter font-medium text-[#2E2E2E]">Category</p>
              <select className="w-[560px] h-[50px] rounded-lg p-[10px] mt-[10px]">
                <option>Select a category</option>
              </select>
            </div>
            <div>
              <p className="font-Inter font-medium text-[#2E2E2E]">
                Store URL (Optional)
              </p>
              <input
                type="text"
                value={``}
                placeholder="storely.com/your-store"
                className="w-[560px] h-[50px] rounded-lg p-[10px] mt-[10px]"
              />
            </div>
            <div>
              <p className="font-Inter font-medium text-[#2E2E2E]">
                Business Description
              </p>
              <textarea
                type="text"
                value={``}
                placeholder="Enter Business Description"
                className="w-[560px] h-[134px] rounded-lg p-[10px] mt-[10px]"
              />
            </div>

            <Buttons link="/contact-business" label={`Sign in`} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutBusiness;
