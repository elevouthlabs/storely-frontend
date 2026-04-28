import { useEffect, useContext } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Buttons from "../../components/ui/Buttons";
import StepLoader from "../../components/ui/StepLoader";
import { useNavigate } from "react-router-dom";
import { BusinessRequests } from "../../api/axios";
import { AuthContext } from "../../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const Launch = ({ form }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!form.itemName || !form.itemDescription || !form.itemPrice) {
      navigate("/addItem");
    }
  }, [form, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login to launch your store.");
      navigate("/login");
      return;
    }

    if (!form.name || !form.businessType || !form.category || !form.description) {
      toast.error("Complete your business details before launch.");
      navigate("/register-business");
      return;
    }

    if (!form.phone) {
      toast.error("Phone number is required before launch.");
      navigate("/contact-business");
      return;
    }

    const toastId = toast.loading("Launching your store...");
    const body = new FormData();
    body.append("name", form.name || "");
    body.append("type", form.businessType || "");
    body.append("description", form.description || "");
    body.append("phone", form.phone || "");
    body.append("email", form.email || "");
    body.append("website", form.storeUrl || "");
    body.append("location", form.location || "");
    if (form.logo) {
      body.append("logo", form.logo);
    }

    try {
      await BusinessRequests.createBusiness(body);
      toast.success("Business created successfully!", { id: toastId });
      navigate("/register-success");
    } catch (err) {
      console.log('Business creation error:', err.response?.data);
      console.log('Form data being sent:', body);
      const message =
        err?.response?.data?.message || "Could not launch store. Try again.";
      toast.error(message, { id: toastId });
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center bg-[#F5F5F5]">
      <Sidebar />
      <div className="w-full lg:w-1/2 px-4 sm:px-6 md:px-0 my-[20px] md:my-[32px] md:mx-[28px] font-Inter">
        {/* Step Loader */}
        <StepLoader currentStep={4} totalSteps={4} />
        {/* Step Loader end */}
        <div>
          <div className="mt-[20px] font-Inter text-center md:text-left">
            <h2 className="font-bold font-Inter text-[22px] sm:text-[25.5px] text-[#0F172A]">
              Ready to launch?
            </h2>
            <p className="text-[13px] sm:text-[13.6px] text-[#475569]">
              Review your details before going live
            </p>
          </div>
          <div className="mt-[28px] w-full max-w-[560px] rounded-[12px] p-[10px] bg-white mx-auto md:mx-0">
            {/* Upper part of the table */}
            <div className="flex items-center justify-between mb-[20px]">
              <h2 className="font-semibold text-[13.6px]">Store Summary</h2>
              <button
                type="button"
                onClick={() => navigate("/register-business")}
                className="text-[10.2px] text-[#4B0082] font-medium"
              >
                Edit
              </button>
            </div>
            {/* Bottom part of the table */}
            <div className="flex items-center justify-between border-b py-[10px] border-black">
              <h2 className="text-[11.9px] text-[#505256]">Store Name</h2>
              <p className="text-[11.9px] font-medium">{form.name || "-"}</p>
            </div>
            <div className="flex items-center justify-between border-b py-[10px] border-black">
              <h2 className="text-[11.9px] text-[#505256]">Business Type</h2>
              <p className="text-[11.9px] font-medium">
                {form.businessType || "-"}
              </p>
            </div>
            <div className="flex items-center justify-between border-b py-[10px] border-black">
              <h2 className="text-[11.9px] text-[#505256]">Industry</h2>
              <p className="text-[11.9px] font-medium">{form.category || "-"}</p>
            </div>
            <div className="flex items-center justify-between py-[10px]">
              <h2 className="text-[11.9px] text-[#505256]">First Product</h2>
              <p className="text-[11.9px] font-medium">
                {form.itemName
                  ? `${form.itemName} (₦${Number(form.itemPrice || 0).toFixed(2)})`
                  : "-"}
              </p>
            </div>
          </div>
          <div className="w-full max-w-[560px] mx-auto md:mx-0">
            <Buttons onSubmit={handleSubmit} label="Launch Store" />
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Launch;
