import Sidebar from "../../components/Sidebar/Sidebar";
import success from "../../assets/success.png";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const RegisterSuccess = ({ form }) => {
  const navigate = useNavigate();
  const businessSlug = (form.name || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
  const storeUrl = `storely.com/${businessSlug || "your-store"}`;
  const formattedPrice = Number(form.itemPrice || 0).toLocaleString();
  const previewColor = form.brandColor || "#4B0082";
  const selectedCategory = form.category || "Category";
  const previewCategories =
    selectedCategory.toLowerCase() === "all"
      ? ["All"]
      : ["All", selectedCategory];

  return (
    <div className="flex flex-col md:flex-row h-auto bg-[#F5F5F5]">
      <Sidebar />
      <div className="w-full lg:w-1/2 px-4 sm:px-6 md:px-0 my-[20px] md:my-[32px] md:mx-[28px] font-Inter flex flex-col items-center md:items-start gap-[20px] md:gap-[27px]">
        <div className="flex flex-col items-center">
          <img src={success} alt="success" className="w-[60px] h-[60px]" />
          <p className="font-semibold text-[24px] text-[#2E2E2E] m">
            Your store is ready
          </p>
        </div>
        <div className="w-full max-w-[533px] rounded-[20px] border border-[#E2E8F0] bg-[#F8FAFC] p-[12px] sm:p-[16px]">
          <div className="rounded-[16px] border border-[#D5D9E0] bg-white overflow-hidden">
            <div className="h-[62px] border-b border-[#E5E7EB] px-4 flex items-center">
              <div className="h-[10px] w-[10px] rounded-full bg-[#FB7185] mr-1.5" />
              <div className="h-[10px] w-[10px] rounded-full bg-[#FBBF24] mr-1.5" />
              <div className="h-[10px] w-[10px] rounded-full bg-[#34D399] mr-4" />
              <div className="h-[34px] flex-1 rounded-[10px] bg-[#F1F5F9] px-3 flex items-center text-[11px] text-[#94A3B8]">
                {storeUrl}
              </div>
            </div>

            <div className="h-[58px] bg-white border-b border-[#E5E7EB] px-3 sm:px-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={logo} alt="storely-logo" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-[8px] border border-[#D1D5DB] flex items-center justify-center text-[13px]">
                  🛒
                </div>
                <div className="w-7 h-7 rounded-[8px] border border-[#D1D5DB] flex items-center justify-center text-[13px]">
                  ☰
                </div>
              </div>
            </div>
            <div className="h-[56px] bg-[#F8FAFC] border-b border-[#E5E7EB] px-2 sm:px-3 flex items-center gap-2 overflow-hidden">
              {previewCategories.map((category, index) => (
                <span
                  key={`${category}-${index}`}
                  className={`px-4 py-2 rounded-full text-[11px] font-medium whitespace-nowrap ${
                    category === selectedCategory
                      ? "text-white"
                      : "bg-white text-[#374151] border border-[#E5E7EB]"
                  }`}
                  style={
                    category === selectedCategory
                      ? {
                          background: `linear-gradient(180deg, ${previewColor} 0%, #8A2BE2 100%)`,
                        }
                      : undefined
                  }
                >
                  {category}
                </span>
              ))}
            </div>

            <div
              className="p-4"
              style={{
                background: `linear-gradient(180deg, ${previewColor}22 0%, ${previewColor}0F 100%)`,
              }}
            >
              <div className="bg-white rounded-[14px] p-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-[#111827] text-[18px]">
                    {form.name || "Your Store"}
                  </p>
                  <span
                    className="w-4 h-4 rounded-full border border-white"
                    style={{ backgroundColor: previewColor }}
                  />
                </div>
                <p className="text-[12px] text-[#6B7280] mt-0.5">
                  {form.category || "Category"}
                </p>

                <div className="mt-3 rounded-[12px] border border-[#E5E7EB] bg-white p-2">
                  <div className="w-full h-[190px] rounded-[10px] bg-[#F3F4F6] overflow-hidden">
                    {form.productImagePreview ? (
                      <img
                        src={form.productImagePreview}
                        alt={form.itemName || "Product"}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[12px] text-[#94A3B8]">
                        Product image preview
                      </div>
                    )}
                  </div>
                  <p className="mt-2 text-[17px] font-semibold text-[#111827]">
                    {form.itemName || "First Item"}
                  </p>
                  <p className="text-[20px] font-bold text-[#111827]">
                    ₦{formattedPrice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[533px] flex flex-col items-center md:items-start gap-[20px] md:gap-[25px]">
          <div className="w-full">
            <p className="font-Inter font-medium">Your Store URL</p>
            <input
              type="text"
              value={storeUrl}
              className="w-full h-[50px] rounded-lg p-[10px] mt-[10px]"
              readOnly
            />
          </div>
          <div className="w-full flex flex-col items-center gap-[8px]">
            <button className="w-full h-[56px] rounded-[8px] font-extrabold text-white bg-gradient-to-t from-[#4B0082] to-[#8A2BE2]">
              Go Live
            </button>
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="w-full h-[56px] rounded-[8px] font-extrabold text-[#2E2E2E] bg-white border border-[#E5E7EB]"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSuccess;
