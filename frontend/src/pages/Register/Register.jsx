import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthRequests } from "../../api/axios.js";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import google from "../../assets/google.png";
import apple from "../../assets/apple.png";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthRequests.register(form);

      localStorage.setItem("otpEmail", form.email);

      navigate("/verify-otp");
    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#F5F5F5]">
      <Sidebar />

      <div className="w-full lg:w-1/2 flex justify-center lg:block px-4 sm:px-6 lg:px-0 mt-[40px] lg:mt-[55px] lg:ml-[28px]">

        <div className="w-full max-w-md lg:max-w-none">

          <form onSubmit={handleSubmit} className="w-full lg:w-96 space-y-4">

            {/* Header */}
            <div className="text-center lg:text-left">
              <h2 className="font-Inter font-bold text-[22px] sm:text-[25.5px] leading-[32px] lg:leading-[36px] text-[#0F172A]">
                Create your account
              </h2>
              <p className="font-Inter text-[12px] sm:text-[13.6px] leading-6 text-slate-600">
                Enter your details to access your store.
              </p>
            </div>

            {/* Full Name */}
            <div className="flex flex-col gap-[10px]">
              <label className="mt-[20px] font-Inter font-medium text-sm sm:text-base text-[#1A1A1A]">
                Full Name
              </label>
              <input
                type="text"
                placeholder="e.g. Jane Doe"
                className="w-full lg:w-[560px] h-[50px] rounded-lg p-2.5 bg-white placeholder:text-[#CCCCCC]"
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-[10px]">
              <label className="mt-[20px] font-Inter font-medium text-sm sm:text-base text-[#1A1A1A]">
                Email
              </label>
              <input
                type="email"
                placeholder="Name@company.com"
                className="w-full lg:w-[560px] h-[50px] rounded-lg p-2.5 bg-white placeholder:text-[#CCCCCC]"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-[10px]">
              <label className="mt-[20px] font-Inter font-medium text-sm sm:text-base text-[#1A1A1A]">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full lg:w-[560px] h-[50px] rounded-lg p-2.5 bg-white placeholder:text-[#CCCCCC]"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />

              <Link to="/forgot-password">
                <p className="text-[11px] sm:text-[11.9px] text-[#4B0082]">
                  Forgot password?
                </p>
              </Link>
            </div>

            {/* Button */}
            <div>
              <button className="w-full lg:w-[560px] h-[50px] rounded-lg bg-gradient-to-b from-[#8A2BE2] to-[#4B0082] font-semibold text-white">
                Sign Up
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="w-full lg:w-[560px] h-[1px] bg-[#CCCCCC] mt-[30px] flex items-center justify-center">
            <div className="w-[125px] h-[20px] mt-[-10px] bg-[#F8FAFC]">
              <p className="text-center text-[11px] sm:text-[11.9px] text-slate-500">
                Or continue with
              </p>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="pt-[20px] flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-[15px] lg:ml-[40px]">

            <a
              href="#"
              className="w-full sm:w-[219px] h-[44px] rounded-lg p-2.5 bg-white flex items-center justify-center gap-[10px] hover:shadow-md transition"
            >
              <img src={google} alt="Google logo" />
              <p className="text-sm text-[#364153]">
                Sign in with Google
              </p>
            </a>

            <a
              href="#"
              className="w-full sm:w-[219px] h-[44px] rounded-lg p-2.5 bg-white flex items-center justify-center gap-[10px] hover:shadow-md transition"
            >
              <img src={apple} alt="Apple logo" />
              <p className="text-sm text-[#364153]">
                Sign in with Apple
              </p>
            </a>
          </div>

          {/* Footer */}
          <div className="flex sm:flex-row items-center justify-center lg:justify-start gap-[5px] mt-[20px] lg:ml-[140px] text-center lg:text-left">
            <p className="text-[14px] sm:text-[18px] text-black/60">
              Already have an account?
            </p>
            <Link to="/login">
              <p className="text-[14px] sm:text-[18px] font-medium text-black">
                Log in
              </p>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;
