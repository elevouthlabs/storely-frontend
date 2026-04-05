import React from "react";
import storely from "../../assets/storely.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import avatar from "../../assets/avatar.png";

const Sidebar = () => {
  return (
    <div className="w-full lg:flex w-1/2 h-auto bg-gradient-to-b from-[#4B0082] to-[#8A2BE2] flex-col justify-center px-6 xl:px-8 2xl:max-w-[550px] 2xl:max-h-[770px]">

      <div className="flex flex-col h-full py-8 xl:py-10">
        <div className="flex flex-col gap-6 xl:gap-[30px]">

          {/* Logo */}
          <div className="flex gap-[6px] items-center">
            <img src={storely} alt="" className="w-[28px] xl:w-auto" />
            <h1 className="font-bold text-[24px] xl:text-[30px] leading-[36px] tracking-[-0.75px] text-white font-Inter">
              Storely
            </h1>
          </div>

          {/* Heading */}
          <div>
            <h2 className="font-Inter mt-[10px] xl:mt-[20px] font-bold text-[28px] xl:text-[36px] leading-[36px] xl:leading-[45px] text-white">
              Launch Your Online Store <br /> in Minutes
            </h2>

            <p className="font-OpenSans w-full xl:w-[465px] mt-[12px] xl:mt-[20px] text-[16px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-white/80">
              Join thousands of SMEs growing their business online with
              Storely's powerful platform.
            </p>
          </div>

          {/* Features */}
          <div className="mt-[10px] xl:mt-[20px] flex flex-col gap-4">

            {/* Feature 1 */}
            <div className="flex gap-[10px]">
              <img src={icon1} alt="" className="w-[20px] xl:w-auto h-fit" />
              <div>
                <h4 className="font-Inter font-bold text-[16px] xl:text-lg leading-6 xl:leading-7 text-white">
                  Easy Setup
                </h4>
                <p className="font-OpenSans text-[14px] xl:text-base leading-5 xl:leading-6 text-white/70">
                  Get your store live in under 10 minutes with our <br className="hidden xl:block" />
                  guided onboarding
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-[10px]">
              <img src={icon2} alt="" className="w-[20px] xl:w-auto h-fit" />
              <div>
                <h4 className="font-Inter font-bold text-[16px] xl:text-lg leading-6 xl:leading-7 text-white">
                  Grow Revenue
                </h4>
                <p className="font-OpenSans text-[14px] xl:text-base leading-5 xl:leading-6 text-white/70">
                  Powerful tools to help you scale and reach more customers
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-[10px]">
              <img src={icon3} alt="" className="w-[20px] xl:w-auto h-fit" />
              <div>
                <h4 className="font-Inter font-bold text-[16px] xl:text-lg leading-6 xl:leading-7 text-white">
                  Lightning Fast
                </h4>
                <p className="font-OpenSans text-[14px] xl:text-base leading-5 xl:leading-6 text-white/70">
                  Optimized for speed and performance on all devices
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center mt-[30px] xl:mt-[40px] gap-[10px]">
          <img src={avatar} alt="" className="w-[28px] xl:w-auto" />
          <p className="font-Inter text-[13px] xl:text-sm leading-5 text-white/60">
            Trusted by 10,000+ SMEs worldwide
          </p>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;