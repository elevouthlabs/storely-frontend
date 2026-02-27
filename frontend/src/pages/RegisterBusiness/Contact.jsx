import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Buttons from "../../components/ui/Buttons";
import StepLoader from "../../components/ui/StepLoader";
import { useNavigate } from "react-router-dom";
import upload from "../../assets/Container.svg";
import { BusinessRequests } from "../../api/axios";
const Contact = ({ form, setForm, back }) => {
  const Navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = new FormData();
    body.append("name", form.name);
    body.append("category", form.category);
    body.append("description", form.description);
    body.append("phone", form.phone);
    body.append("location", form.location);
    body.append("logo", form.logo);
    try {
      const response = await BusinessRequests.createBusiness(body);
      console.log(response);
      Navigate("/addItem");
    } catch (err) {
      console.log(err);
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

  console.log(form.logo);
  console.log(error);

  return (
    <div className="flex h-auto bg-[#F5F5F5]">
      <Sidebar />
      <div className="w-1/2 my-[32px] ml-[28px]">
        <StepLoader />
        <div>
          <div className="mt-[20px] font-Inter">
            <h2 className="font-bold font-Inter text-[25.5px] text-[#0F172A]">
              Content & Branding
            </h2>
            <p className="text-[13.6px] text-[#475569]">
              How can customers reach you?
            </p>
          </div>
          <form className="mt-[28px] font-Inter flex flex-col gap-5">
            <div>
              <p className="font-Inter font-medium text-[#2E2E2E]">
                Phone Number
              </p>
              <input
                type="number"
                value={form.phone}
                placeholder="+234678950506969"
                required
                className="w-[560px] h-[50px] rounded-lg p-[10px] mt-[10px]"
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            <div>
              <p className="font-Inter font-medium text-[#2E2E2E]">
                Whatsapp Number
              </p>
              <input
                type="number"
                value={form.whatsappNumber}
                placeholder="+234678950506969"
                required
                className="w-[560px] h-[50px] rounded-lg p-[10px] mt-[10px]"
                onChange={(e) =>
                  setForm({ ...form, whatsappNumber: e.target.value })
                }
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
              <div className="w-[560px] h-[156px] border border-[#D9D9D9] rounded-lg mt-[10px] flex items-center justify-center relative transition">
                <div className="flex flex-col gap-[10px] items-center relative cursor-pointer">
                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={handleImageUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  {form.logo ? (
                    <div className="flex flex-col items-center gap-1.5">
                      <img className="w-10 h-10" src={form.logo} alt="" />
                      <p>{form.logoName}</p>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-[10px] items-center cursor-pointer">
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
            <div>
              <p className="font-Inter font-medium text-[#2E2E2E]">
                Location (Optional)
              </p>
              <input
                type="text"
                value={form.location}
                placeholder="City, State or Country"
                className="w-[560px] h-[50px] rounded-lg p-[10px] mt-[10px]"
                onChange={(e) => setForm({ ...form, location: e.target.value })}
              />
            </div>

            <Buttons onSubmit={handleSubmit} label={`Continue`} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
