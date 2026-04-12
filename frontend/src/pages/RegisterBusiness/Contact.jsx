import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Buttons from "../../components/ui/Buttons";
import StepLoader from "../../components/ui/StepLoader";
import { useNavigate } from "react-router-dom";
import upload from "../../assets/Container.svg";
import { BusinessRequests } from "../../api/axios";
import toast, { Toaster } from "react-hot-toast";

const Contact = ({ form, setForm, back }) => {
  const Navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Reegistering your business...");

    const body = new FormData();
    body.append("name", form.name);
    body.append("category", form.category);
    body.append("description", form.description);
    body.append("phone", form.phone);
    body.append("location", form.location);
    body.append("logo", form.logo);
    try {
      const response = await BusinessRequests.createBusiness(body);
      toast.success("Business Registered Successfully!", { id: toastId });

      console.log(response);
      Navigate("/addItem");
    } catch (err) {
      console.log(err);
      if (err?.response?.status >= 500) {
        toast.error("Server error. Please try again later.", { id: toastId });
        return;
      }
      console.log(err);
      const message =
        err?.response?.data?.message || "Invalid inputs, try again.";
      toast.error(message, { id: toastId });
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowedType = ["image/png", "image/jpeg"];
    const maxSize = 2 * 1024 * 1024;

    if (!allowedType.includes(file.type)) {
      setError("Only PNG and JPG images are allowed");
      return;
    }

    if (file.size > maxSize) {
      setError("Image must be less than 2MB");
      return;
    }
    const previewUrl = URL.createObjectURL(file);
    setForm((prev) => ({ ...prev, logo: previewUrl, logoName: file.name }));

    setError("");
  };

  return (
    <div className="flex flex-col md:flex-row justify-center h-auto bg-[#F5F5F5]">
      <Sidebar />
      <div className=" w-full lg:w-1/2 px-4 sm:px-6 md:px-0 my-[20px] md:my-[32px] md:mx-[28px]">

        <StepLoader currentStep={2} totalSteps={4} />

        <div>
          <div className="mt-[20px] font-Inter text-center md:text-left">
            <h2 className="font-bold text-[22px] sm:text-[25.5px] text-[#0F172A]">
              Content & Branding
            </h2>
            <p className="text-[13px] sm:text-[13.6px] text-[#475569]">
              How can customers reach you?
            </p>
          </div>

          <form className="mt-[28px] font-Inter flex flex-col gap-5 items-center md:items-start">

            <div className="w-full max-w-[560px]">
              <p className="font-medium text-[#2E2E2E]">Phone Number</p>
              <input
                type="number"
                value={form.phone}
                placeholder="+234678950506969"
                required
                className="w-full h-[50px] rounded-lg p-[10px] mt-[10px]"
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            <div className="w-full max-w-[560px]">
              <p className="font-medium text-[#2E2E2E]">Whatsapp Number</p>
              <input
                type="number"
                value={form.whatsappNumber}
                placeholder="+234678950506969"
                required
                className="w-full h-[50px] rounded-lg p-[10px] mt-[10px]"
                onChange={(e) =>
                  setForm({ ...form, whatsappNumber: e.target.value })
                }
              />
            </div>

            <div className="w-full max-w-[560px]">
              <p className="font-medium text-[#2E2E2E]">Brand Color</p>
              <div className="mt-[10px] flex flex-wrap gap-3">
                <div className="w-[40px] h-[40px] rounded-full bg-[#4B0082] border-2"></div>
                <div className="w-[40px] h-[40px] rounded-full bg-[#3CE2C2] border-2"></div>
                <div className="w-[40px] h-[40px] rounded-full bg-[#EF4444] border-2"></div>
                <div className="w-[40px] h-[40px] rounded-full bg-[#F59E0B] border-2"></div>
                <div className="w-[40px] h-[40px] rounded-full bg-[#10B981] border-2"></div>
                <div className="w-[40px] h-[40px] rounded-full bg-[#3B82F6] border-2"></div>
              </div>
            </div>

            <div className="w-full max-w-[560px]">
              <p className="font-medium text-[#2E2E2E]">Logo (Optional)</p>
              <div className="w-full h-[156px] border border-[#D9D9D9] rounded-lg mt-[10px] flex items-center justify-center relative transition">
                <div className="flex flex-col gap-[10px] items-center relative cursor-pointer w-full">
                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={handleImageUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  {form.logo ? (
                    <div className="flex flex-col items-center gap-1.5">
                      <img className="w-10 h-10" src={form.logo} alt="" />
                      <p className="text-xs text-center break-all">
                        {form.logoName}
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-[10px] items-center cursor-pointer text-center px-2">
                      <img
                        className="w-10 cursor-pointer"
                        src={upload}
                        alt="upload logo"
                      />
                      <p className="text-[11.9px] text-[#2E2E2E]">
                        Upload your logo
                      </p>
                      <p className="text-[10.2px] text-[#9CA3AF]">
                        PNG, JPG up to 2MB
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full max-w-[560px]">
              <p className="font-medium text-[#2E2E2E]">
                Location (Optional)
              </p>
              <input
                type="text"
                value={form.location}
                placeholder="City, State or Country"
                className="w-full h-[50px] rounded-lg p-[10px] mt-[10px]"
                onChange={(e) =>
                  setForm({ ...form, location: e.target.value })
                }
              />
            </div>

            <div className="w-full max-w-[560px]">
              <Buttons onSubmit={handleSubmit} label={`Continue`} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
