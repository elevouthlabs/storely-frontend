import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthRequests } from "../../api/axios.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import google from "../../assets/google.png";
import apple from "../../assets/apple.png";
import view from "../../assets/view.png";
import read from "../../assets/read.png";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    fullName: "",
    phone: "",
  });

  const navigate = useNavigate();

  const passwordChecks = {
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== confirmPassword) {
      toast.error("Passwords do not match ❌");
      return;
    }

    setLoading(true);

    try {
      await AuthRequests.register({
        email: form.email,
        password: form.password,
        phone: form.phone,
        fullName: form.fullName,
      });

      localStorage.setItem("otpEmail", form.email);

      toast.success("Registration successful");

      setTimeout(() => {
        navigate("/verify-otp");
      }, 1500);

    } catch (err) {
      console.log(err.response?.data);

      toast.error(err.response?.data?.message || "Registration failed ❌");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#F5F5F5]">
      <ToastContainer position="top-right" autoClose={2000} />
      <Sidebar />

      <div className="w-full lg:w-1/2 flex justify-center lg:block px-4 sm:px-6 lg:px-0 mt-[40px] lg:mt-[55px] lg:ml-[28px]">

        <div className="w-full max-w-md lg:max-w-none">

          <form onSubmit={handleSubmit} className="w-full lg:w-96 space-y-4">
            <div className="text-center lg:text-left">
              <h2 className="font-Inter font-bold text-[22px] sm:text-[25.5px] leading-[32px] lg:leading-[36px] text-[#0F172A]">
                Create your account
              </h2>
              <p className="font-Inter text-[12px] sm:text-[13.6px] leading-6 text-slate-600">
                Enter your details to access your store.
              </p>
            </div>
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
            <div className="flex flex-col gap-[10px]">
              <label className="mt-[20px] font-Inter font-medium text-sm sm:text-base text-[#1A1A1A]">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="08012345678"
                className="w-full lg:w-[560px] h-[50px] rounded-lg p-2.5 bg-white placeholder:text-[#CCCCCC]"
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label className="mt-[20px] font-Inter font-medium text-sm sm:text-base text-[#1A1A1A]">
                Password
              </label>

              <div className="relative w-full lg:w-[560px]">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="e.g. Password@123"
                  className="w-full  h-[50px] rounded-lg p-2.5 pr-10 bg-white placeholder:text-[#CCCCCC]"
                  onChange={(e) => {
                    setForm({ ...form, password: e.target.value });
                    setPassword(e.target.value);
                  }}
                />
                <div className="text-[12px] space-y-1">
                  <p className={passwordChecks.uppercase ? "text-green-600" : "text-red-500"}>
                    • At least one uppercase letter
                  </p>
                  <p className={passwordChecks.lowercase ? "text-green-600" : "text-red-500"}>
                    • At least one lowercase letter
                  </p>
                  <p className={passwordChecks.special ? "text-green-600" : "text-red-500"}>
                    • At least one special character
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-6 -translate-y-1/2"
                >
                  <img
                    src={showPassword ? read : view}
                    alt="toggle password"
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label className="mt-[20px] font-Inter font-medium text-sm sm:text-base text-[#1A1A1A]">
                Confirm Password
              </label>
              <div className="relative w-full lg:w-[560px]">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  className="w-full  h-[50px] rounded-lg p-2.5 pr-10 bg-white placeholder:text-[#CCCCCC]"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <img
                    src={showConfirmPassword ? read : view}
                    alt="toggle password"
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>
            <div>
              <button disabled={loading} className="w-full mt-5 lg:w-[560px] h-[50px] rounded-lg bg-gradient-to-b from-[#8A2BE2] to-[#4B0082] font-semibold text-white">
                {loading ? "Creating account..." : "Sign Up"}
              </button>
            </div>
          </form>
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
