import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Buttons from "../../components/ui/Buttons";
import StepLoader from "../../components/ui/StepLoader";
import { useNavigate } from "react-router-dom";
import upload from "../../assets/Container.svg";

const Launch = () => {
  const Navigate = useNavigate();
  const [form, setForm] = useState({
    phoneNumber: "",
    whatsappNumber: "",
    color: "",
    logo: "",
    location: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex h-screen bg-[#F5F5F5]">
      <Sidebar />
      {/* Beginning of the RHS */}
      <div className="w-1/2 my-[32px] ml-[28px] font-Inter">
        {/* Step Loader */}
        <StepLoader />
        {/* Step Loader end */}
        <div>
          <div className="mt-[22.5px] font-Inter">
            <h2 className="font-bold font-Inter text-[25.5px] text-[#0F172A]">
              Ready to launch?
            </h2>
            <p className="text-[13.6px] text-[#475569]">
              Review your details before going live
            </p>
          </div>
          <div className="mt-[50px] w-[543px] rounded-[12px] p-[10px] bg-white">
            {/* Upper part of the table */}
            <div className="flex items-center justify-between mb-[20px]">
              <h2 className="font-semibold text-[13.6px]">Store Summary</h2>
              <button className="text-[10.2px] text-[#4B0082] font-medium">
                Edit
              </button>
            </div>
            {/* Bottom part of the table */}
            <div className="flex items-center justify-between border-b py-[10px] border-black">
              <h2 className="text-[11.9px] text-[#505256]">Store Name</h2>
              <p className="text-[11.9px] font-medium">Acme Clothin Co.</p>
            </div>
            <div className="flex items-center justify-between border-b py-[10px] border-black">
              <h2 className="text-[11.9px] text-[#505256]">Business Type</h2>
              <p className="text-[11.9px] font-medium">Product</p>
            </div>
            <div className="flex items-center justify-between border-b py-[10px] border-black">
              <h2 className="text-[11.9px] text-[#505256]">Industry</h2>
              <p className="text-[11.9px] font-medium">Fashion & Apparel</p>
            </div>
            <div className="flex items-center justify-between py-[10px]">
              <h2 className="text-[11.9px] text-[#505256]">First Product</h2>
              <p className="text-[11.9px] font-medium">
                Classic Cotton T-Shirt ($29.00)
              </p>
            </div>
          </div>
          <Buttons onSubmit={handleSubmit} label="Launch Store" />
        </div>
      </div>
    </div>
  );
};

export default Launch;
