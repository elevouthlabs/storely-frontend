import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Buttons from "../../components/ui/Buttons";
import StepLoader from "../../components/ui/StepLoader";
import upload from "../../assets/Container.svg";
import AI from "../../assets/suggest.png";
import { useNavigate } from "react-router-dom";

const AddItems = ({ form, setForm }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  useEffect(() => {
    if (!form.phone || !form.whatsappNumber || !form.brandColor) {
      navigate("/contact-business");
    }
  }, [form, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.itemName || !form.itemDescription || !form.itemPrice) {
      setError("Item name, description, and price are required");
      return;
    }

    navigate("/launch");
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
      productImage: file,          
      productImagePreview: previewUrl,
      productImageName: file.name,
    }));

    setError("");
  };

  return (
    <div className="flex flex-col md:flex-row justify-center bg-[#F5F5F5]">
      <Sidebar />
      <div className="w-full lg:w-1/2 px-4 sm:px-6 md:px-0 my-[20px] md:my-[32px] md:mx-[28px]">
        {/* Step Loader */}
        <StepLoader currentStep={3} totalSteps={4} />
        {/* Step Loader end */}
        <div>
          <div className="mt-[20px] font-Inter text-center md:text-left">
            <h2 className="font-bold font-Inter text-[22px] sm:text-[25.5px] text-[#0F172A]">
              Add your first item
            </h2>
            <p className="text-[13px] sm:text-[13.6px] text-[#475569]">
              Create your first product or service listing
            </p>
          </div>

          {/* Form section */}
          <form className="mt-[28px] font-Inter flex flex-col gap-5 items-center md:items-start">
            <div className="w-full max-w-[560px]">
              <p className="font-Inter font-medium text-[#2E2E2E]">Item Name</p>
              <input
                type="text"
                value={form.itemName}
                placeholder="e.g. Classic White T-Shirt"
                required
                className="w-full h-[50px] rounded-lg p-[10px] mt-[10px]"
                onChange={(e) => setForm({ ...form, itemName: e.target.value })}
              />
            </div>
            <div className="w-full max-w-[560px]">
              <div className="flex items-center justify-between w-full font-Inter">
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
                value={form.itemDescription}
                placeholder="Describe your product..."
                required
                className="w-full h-[134px] rounded-lg p-[10px] mt-[10px]"
                onChange={(e) =>
                  setForm({ ...form, itemDescription: e.target.value })
                }
              />
            </div>
            <div className="w-full max-w-[560px]">
              <p className="font-Inter font-medium text-[#2E2E2E]">Price</p>
              <input
                type="number"
                value={form.itemPrice}
                placeholder="0.00"
                required
                className="w-full h-[50px] rounded-lg p-[10px] mt-[10px]"
                onChange={(e) => setForm({ ...form, itemPrice: e.target.value })}
              />
            </div>
            <div className="w-full max-w-[560px]">
              <p className="font-Inter font-medium text-[#2E2E2E]">
                Product Image
              </p>
              <div className="w-full h-[156px] border border-[#D9D9D9] rounded-lg mt-[10px] flex items-center justify-center relative">
                <div className="flex flex-col items-center gap-[10px] relative cursor-pointer w-full">
                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={handleImageUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  {form.productImage ? (
                    <div className="flex flex-col items-center gap-1.5">
                      <img
                        className="w-10 h-10"
                        src={form.productImagePreview}
                        alt=""
                      />
                      <p>{form.productImageName}</p>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-[10px] items-center cursor-pointer text-center px-2">
                      <img
                        className="w-10 cursor-pointer"
                        src={upload}
                        alt="upload logo"
                      />
                      <p className="text-[11.9px] text-[#2E2E2E] font-Inter">
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

            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Buttons onSubmit={handleSubmit} label={`Continue`} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
