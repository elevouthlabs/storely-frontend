import Sidebar from "../../components/Sidebar/Sidebar";
import Buttons from "../../components/ui/Buttons";
import StepLoader from "../../components/ui/StepLoader";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const AboutBusiness = ({ form, setForm, next }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row justify-center w-full h-auto bg-[#F5F5F5]">
      <Sidebar />
      <div className="w-full lg:w-1/2 px-4 sm:px-6 md:px-0 my-[20px] md:my-[32px] md:mx-[28px]">

        <StepLoader currentStep={1} totalSteps={4} />

        <div>
          <div className="mt-[20px] font-Inter text-center md:text-left">
            <h2 className="font-bold text-[22px] sm:text-[25.5px] text-[#0F172A]">
              Tell us about your business
            </h2>
            <p className="text-[13px] sm:text-[13.6px] text-[#475569]">
              Helps us customize your store experience
            </p>
          </div>

          <form
            className="mt-[28px] font-Inter flex flex-col gap-5 items-center md:items-start"
            onSubmit={(e) => {
              e.preventDefault();

              if (
                !form.name ||
                !form.businessType ||
                !form.category ||
                !form.description
              ) {
                toast.error("Please fill all fields");
                return;
              }

              if (next) {
                next();
                return;
              }
              navigate("/contact-business");
            }}
          >
            <div className="w-full max-w-[560px]">
              <p className="font-medium">Business Name</p>
              <input
                type="text"
                value={form.name}
                placeholder="Name@company.com"
                required
                className="w-full h-[50px] rounded-lg p-[10px] mt-[10px]"
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />
            </div>

            <div className="w-full max-w-[560px]">
              <p className="font-medium text-[#2E2E2E]">
                What type of business
              </p>
              <select
                className="w-full cursor-pointer h-[50px] rounded-lg p-[10px] mt-[10px]"
                value={form.businessType}
                required
                onChange={(e) =>
                  setForm({ ...form, businessType: e.target.value })
                }
              >
                <option value="">Select a type of business</option>
                <option value="Product">Product</option>
                <option value="Service">Service</option>
                <option value="Hybrid">Hybrid (Product & Service)</option>
              </select>
            </div>

            <div className="w-full max-w-[560px]">
              <p className="font-medium text-[#2E2E2E]">Category</p>
              <select
                className="w-full cursor-pointer h-[50px] rounded-lg p-[10px] mt-[10px]"
                value={form.category}
                required
                onChange={(e) =>
                  setForm({ ...form, category: e.target.value })
                }
              >
                <option value="">Select a category</option>
                <option value="Clothes">Clothes</option>
                <option value="Shoes">Shoes</option>
                <option value="Bags">Bags</option>
                <option value="Food Vendor">Food Vendor</option>
                <option value="Cakes & Pastries">Cakes & Pastries</option>
                <option value="Catering">Catering</option>
                <option value="Hair Salon">Hair Salon</option>
                <option value="Makeup">Makeup</option>
                <option value="Nails">Nails</option>
                <option value="Wig Sales">Wig Sales</option>
                <option value="Hair Installation">Hair Installation</option>
                <option value="Barbing">Barbing</option>
                <option value="Phones">Phones</option>
                <option value="Phone Accessories">Phone Accessories</option>
                <option value="Repairs">Repairs</option>
                <option value="Gadgets">Gadgets</option>
                <option value="Home Appliances">Home Appliances</option>
                <option value="Kitchen Items">Kitchen Items</option>
                <option value="Home Decor">Home Decor</option>
                <option value="Baby Clothes">Baby Clothes</option>
                <option value="Baby Products">Baby Products</option>
                <option value="Foodstuff">Foodstuff</option>
                <option value="Drinks">Drinks</option>
                <option value="Pharmacy">Pharmacy</option>
                <option value="Supplements">Supplements</option>
                <option value="Personal Training">Personal Training</option>
                <option value="Cleaning Services">Cleaning Services</option>
                <option value="Laundry">Laundry</option>
                <option value="Electrical">Electrical</option>
                <option value="Plumbing">Plumbing</option>
                <option value="AC Repairs">AC Repairs</option>
                <option value="Car Sales">Car Sales</option>
                <option value="Car Rentals">Car Rentals</option>
                <option value="Photography & Video">Photography & Video</option>
                <option value="Graphics & Branding">Graphics & Branding</option>
                <option value="Decoration">Decoration</option>
                <option value="Planning">Planning</option>
                <option value="Tutoring & Lessons">Tutoring & Lessons</option>
              </select>
            </div>

            <div className="w-full max-w-[560px]">
              <p className="font-medium text-[#2E2E2E]">
                Business Description
              </p>
              <textarea
                value={form.description}
                placeholder="Enter Business Description"
                required
                className="w-full h-[134px] rounded-lg p-[10px] mt-[10px]"
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </div>

            <div className="w-full  max-w-[560px]">
              <Buttons label="Continue" type="submit" />
            </div>
          </form>
        </div>
      </div>

      <Toaster />
    </div>
  );
};

export default AboutBusiness;