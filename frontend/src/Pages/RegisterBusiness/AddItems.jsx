import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Buttons from "../../components/ui/buttons";
import StepLoader from "../../components/ui/StepLoader";
import upload from "../../assets/Container.svg";
import AI from "../../assets/suggest.png";
import { useNavigate } from "react-router-dom";

const AddItems = () => {
  const Navigate = useNavigate();
  const [form, setForm] = useState({
    itemName: "",
    description: "",
    price: "",
    productImage: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    Navigate("/launch");
    console.log("works perfectly");
  };

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
                value={form.itemName}
                placeholder="e.g. Classic White T-Shirt"
                className="w-[560px] h-[50px] rounded-lg p-[10px] mt-[10px]"
                onChange={(e) => setForm({ ...form, itemName: e.target.value })}
              />
            </div>
            <div>
              <div className="flex items-center justify-between w-[560px] font-Inter">
                <p className="font-Inter font-medium text-[#2E2E2E]">
                  Description
                </p>
                <span className="p-[6px] flex items-center gap-1 px-3 text-[10.2px] rounded-full bg-gradient-to-t from-[#4B0082] to-[#8A2BE2] text-white">
                  <img className="w-3 h-3" src={AI} alt="suggest" /> Improve
                  with AI
                </span>
              </div>
              <textarea
                type="text"
                value={form.description}
                placeholder="Describe your product..."
                className="w-[560px] h-[134px] rounded-lg p-[10px] mt-[10px]"
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </div>
            <div>
              <p className="font-Inter font-medium text-[#2E2E2E]">Price</p>
              <input
                type="number"
                value={form.price}
                placeholder="0.00"
                className="w-[560px] h-[50px] rounded-lg p-[10px] mt-[10px]"
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />
            </div>
            <div>
              <p className="font-Inter font-medium text-[#2E2E2E]">
                Product Image
              </p>
              <div className="w-[560px] h-[156px] border border-[#D9D9D9] rounded-lg mt-[10px] flex items-center justify-center">
                <div className="flex flex-col items-center gap-[10px]">
                  <img className="w-10" src={upload} alt="upload logo" />
                  <p className="text-[11.9px] text-[#2E2E2E] font-Inter">
                    Upload your logo
                  </p>
                  <p className="text-[10.2px] text-[#9CA3AF]">
                    PNG, JPG up to 2MB
                  </p>
                </div>
              </div>
            </div>

            <Buttons onSubmit={handleSubmit} label={`Continue`} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
