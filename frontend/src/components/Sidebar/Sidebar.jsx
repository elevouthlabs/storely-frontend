import React from "react";
import storely from "../../assets/storely.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import avatar from "../../assets/avatar.png";

const Sidebar = () => {
  return (
    <div className="w-1/2 bg-gradient-to-b from-[#4B0082] to-[#8A2BE2] flex flex-col justify-between pt-12 pl-12">
      <div>
        <div className="flex gap-[6px]">
          <div>
            <img src={storely} alt="" />
          </div>
          <div>
            <h1 className="mt-[6px] font-bold text-[30px] leading-[36px] tracking-[-0.75px] text-white font-Inter">
              Storely
            </h1>
          </div>
        </div>
        <div>
          <h2 className="font-Inter mt-[20px] font-bold text-[36px] leading-[45px] tracking-normal text-white">
            Launch Your Online Store <br /> in Minutes
          </h2>
          <p className="font-OpenSans w-[465px] mt-[20px] font-normal text-[18px] leading-[28px] tracking-normal text-white/80">
            Join thousands of SMEs growing their business online with Storely's
            powerful platform.
          </p>
        </div>
        <div className="mt-[40px]">
          <div className="flex gap-[10px]">
            <div>
              <img src={icon1} alt="" />
            </div>
            <div>
              <h4 className="font-Inter font-bold text-lg leading-7 text-white">
                Easy Setup
              </h4>
              <p className="font-OpenSans font-normal text-base leading-6 text-white/70">
                Get your store live in under 10 minutes with our <br />
                guided onboarding
              </p>
            </div>
          </div>
          <div className="flex gap-[10px] mt-[15px]">
            <div>
              <img src={icon2} alt="" />
            </div>
            <div>
              <h4 className="font-Inter font-bold text-lg leading-7 text-white">
                Grow Revenue
              </h4>
              <p className="font-OpenSans font-normal text-base leading-6 text-white/70">
                Powerful tools to help you scale and reach more customers
              </p>
            </div>
          </div>
          <div className="flex gap-[10px] mt-[15px]">
            <div>
              <img src={icon3} alt="" />
            </div>
            <div>
              <h4 className="font-Inter font-bold text-lg leading-7 text-white">
                Lightning Fast
              </h4>
              <p className="font-OpenSans font-normal text-base leading-6 text-white/70">
                Optimized for speed and performance on all devices
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[60px] flex items-center gap-[10px]">
          <div>
            <img src={avatar} alt="" />
          </div>
          <div>
            <p className="font-Inter font-normal text-sm leading-5 text-white/60">
              Trusted by 10,000+ SMEs worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
