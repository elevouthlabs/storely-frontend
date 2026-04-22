import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Buttons from "../../components/ui/Buttons";
import StepLoader from "../../components/ui/StepLoader";
import { useNavigate } from "react-router-dom";
import upload from "../../assets/Container.svg";
import toast, { Toaster } from "react-hot-toast";

const Contact = ({ form, setForm, back }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const brandColors = [
    "#4B0082",
    "#3CE2C2",
    "#EF4444",
    "#F59E0B",
    "#10B981",
    "#3B82F6",
  ];

  useEffect(() => {
    if (!form.name || !form.businessType || !form.category || !form.description) {
      navigate("/register-business");
    }
  }, [form, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.phone || !form.whatsappNumber || !form.brandColor) {
      toast.error("Phone, WhatsApp, and brand color are required.");
      return;
    }

    navigate("/addItem");
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

    setForm((prev) => ({
      ...prev,
      logo: file,            
      logoPreview: previewUrl, 
      logoName: file.name,
    }));

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
                value={form?.phone || ""}
                placeholder="+2348069248565"
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
                placeholder="+234806948565"
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
                {brandColors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    aria-label={`Select ${color} as brand color`}
                    onClick={() => setForm({ ...form, brandColor: color })}
                    className={`w-[40px] h-[40px] rounded-full border-2 ${
                      form.brandColor === color
                        ? "border-[#1E293B] scale-105"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
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
                      <img className="w-10 h-10" src={form.logoPreview} alt="" />
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
      <Toaster />
    </div>
  );
};

export default Contact;
