import AuthCard from "./AuthCard";

const AuthSideBar = () => {
  return (
    <div className="text-white flex flex-col h-full">
      {/* Top section obviously */}
      <p className="text-3xl font-bold tracking-tight">Storely</p>
      {/* Middle section */}
      <div className="mt-[48px]">
        <h1 className="font-Inter text-4xl font-bold">
          Launch Your Online Store in Minutes
        </h1>
        <p className="font-sans text-lg text-white/80 leading-7 mt-[16px]">
          Join thousands of SMEs growing their business online with Storely's
          powerful platform
        </p>
        <div className="mt-[48px] flex flex-col gap-6">
          <AuthCard
            icon={``}
            heading="Easy Setup"
            body="Get your store live in under 10 minutes with our guided onboarding"
          />
          <AuthCard
            icon={``}
            heading="Grow Revenue"
            body="Powerful tools to help you scale and reach more customers"
          />
          <AuthCard
            icon={``}
            heading="Lightning Fast"
            body="Optimized for speed and performance on all devices"
          />
        </div>
      </div>
      {/* Bottom section */}
      <div className="flex items-center gap-[11px] mt-auto">
        {/* Images div */}
        <div className="flex">
          <div className="w-[39px] h-[39px] rounded-full bg-white"></div>
          <div className="w-[39px] h-[39px] rounded-full bg-white"></div>
          <div className="w-[39px] h-[39px] rounded-full bg-white"></div>
        </div>
        <p className="text-sm text-white/60 font-Inter">
          Trusted by 10,000+ SMEs worldwide
        </p>
      </div>
    </div>
  );
};

export default AuthSideBar;
