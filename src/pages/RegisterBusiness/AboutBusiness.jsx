import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Buttons from "../../components/ui/buttons";
import StepLoader from "../../components/ui/StepLoader";
import { useNavigate } from "react-router-dom";

const AboutBusiness = ({ form, setForm, next }) => {
  const Navigate = useNavigate();

  return (
    <div className="flex h-auto bg-[#F5F5F5]">
      <Sidebar />
      <div className="w-1/2 my-[32px] ml-[28px]">
        <StepLoader />
        <div>
          <div className="mt-[20px] font-Inter">
            <h2 className="font-bold font-Inter text-[25.5px] text-[#0F172A]">
              Tell us about your business
            </h2>
            <p className="text-[13.6px] text-[#475569]">
              Helps us customize your store experience
            </p>
          </div>
          <form className="mt-[28px] font-Inter flex flex-col gap-5">
            <div>
              <p className="font-Inter font-medium">Business Name</p>
              <input
                type="text"
                value={form.name}
                placeholder="Name@company.com"
                required
                className="w-[560px] h-[50px] rounded-lg p-[10px] mt-[10px]"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <p className="font-Inter font-medium text-[#2E2E2E]">
                What type of business
              </p>
              <select
                className="w-[560px] h-[50px] rounded-lg p-[10px] mt-[10px]"
                value={form.businessType}
                required
                onChange={(e) =>
                  setForm({ ...form, businessType: e.target.value })
                }
              >
                <option>Select a type of business</option>
                <option>Agriculture</option>
              </select>
            </div>
            <div>
              <p className="font-Inter font-medium text-[#2E2E2E]">Category</p>
              <select
                className="w-[560px] h-[50px] rounded-lg p-[10px] mt-[10px]"
                value={form.category}
                required
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              >
                <option>Select a category</option>
                <option>Finance</option>
                <option>Education</option>
                <option>Commerce</option>
              </select>
            </div>
            <div>
              <p className="font-Inter font-medium text-[#2E2E2E]">
                Business Description
              </p>
              <textarea
                type="text"
                value={form.description}
                placeholder="Enter Business Description"
                required
                className="w-[560px] h-[134px] rounded-lg p-[10px] mt-[10px]"
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </div>

            <Buttons
              onSubmit={(e) => {
                e.preventDefault();
                next();
              }}
              label={`Sign in`}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutBusiness;
