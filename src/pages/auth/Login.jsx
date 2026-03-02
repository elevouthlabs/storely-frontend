import { useState, useContext } from "react";
import { AuthRequests } from "../../api/axios.js";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [inputErrors, setInputErrors] = useState({
    email: "",
    password: "",
  });

  const { saveToken, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = { email: "", password: "" };
    let isValid = true;

    // Email validation
    if (!form.email.trim()) {
      errors.email = "Email is required.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Password validation
    if (!form.password) {
      errors.password = "Password is required.";
      isValid = false;
    } else if (form.password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
      isValid = false;
    }

    setInputErrors(errors);

    // Show the first error as a toast
    if (!isValid) {
      const firstError = errors.email || errors.password;
      toast.error(firstError);
    }

    return isValid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const toastId = toast.loading("Signing you in...");

    try {
      const res = await AuthRequests.login(form);
      saveToken(res.data.token);

      toast.success("Welcome back!", { id: toastId });
      const userResponse = await AuthRequests.currentUser();
      setUser(userResponse.data);
      navigate("/auth/register-business");
    } catch (err) {
      if (err?.response.status >= 500) {
        toast.error("Server error. Please try again later.", { id: toastId });
        return;
      }
      console.log(err);
      const message =
        err?.response?.data?.message || "Invalid email or password.";
      toast.error(message, { id: toastId });
    }
  };

  return (
    <div className="flex w-full h-screen bg-[#fff] min-w-[500px] 2xl:max-w-[550px] 2xl:max-h-[700px]">
      <div className="flex flex-col py-10 items-center gap-4 w-full">
        <form
          onSubmit={handleLogin}
          className="flex flex-col space-y-4 w-[90vw] max-w-[490px] px-2"
          noValidate
        >
          <div>
            <h2 className="font-Inter text-center font-bold text-[25.5px] leading-[36px] align-middle text-[#0F172A]">
              Sign In
            </h2>
            <p className="font-Inter font-normal text-center text-[13px] leading-6 align-middle text-slate-600 mt-3">
              Welcome back, please Enter your details.
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="email"
              className="mt-[20px] font-Inter font-medium text-base leading-5 align-middle text-[#1A1A1A]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Name@company.com"
              value={form.email}
              className={`border w-full h-[50px] rounded-lg p-2.5 bg-white placeholder:font-Inter placeholder:font-normal placeholder:text-base placeholder:leading-6 placeholder:text-[#CCCCCC] ${
                inputErrors.email ? "border-red-500" : "border-gray-300"
              }`}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
                if (inputErrors.email)
                  setInputErrors((prev) => ({ ...prev, email: "" }));
              }}
            />
            {inputErrors.email && (
              <p className="text-red-500 text-xs mt-[-4px]">
                {inputErrors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="password"
              className="mt-[20px] font-Inter font-medium text-base leading-5 align-middle text-[#1A1A1A]"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={form.password}
              className={`border w-full h-[50px] rounded-lg p-2.5 bg-white placeholder:font-Inter placeholder:font-normal placeholder:text-base placeholder:leading-6 placeholder:text-[#CCCCCC] ${
                inputErrors.password ? "border-red-500" : "border-gray-300"
              }`}
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
                if (inputErrors.password)
                  setInputErrors((prev) => ({ ...prev, password: "" }));
              }}
            />
            {inputErrors.password && (
              <p className="text-red-500 text-xs mt-[-4px]">
                {inputErrors.password}
              </p>
            )}
            <div>
              <p className="font-Inter font-medium text-[11.9px] leading-5 align-middle text-[#4B0082] text-right mt-3">
                <Link to="/auth/forgot-password">Forgot password?</Link>
              </p>
            </div>
          </div>

          {/* Remember me + Submit */}
          <div className="w-full">
            <div className="flex items-center my-4">
              <input type="checkbox" name="remember-me" id="remember-me" />
              <span className="ml-3">Remember me</span>
            </div>
            <button
              type="submit"
              className="w-full h-[50px] rounded-lg p-2.5 bg-gradient-to-b from-[#8A2BE2] to-[#4B0082] font-Inter font-semibold text-base leading-6 text-[#CCCCCC] hover:opacity-90 transition-opacity"
            >
              Sign in
            </button>
          </div>

          <div className="flex items-center w-full justify-center gap-[5px] mt-[20px]">
            <p className="font-Outfit font-normal text-[14px] leading-[100%] text-center text-black/60">
              Don't have an account yet?
            </p>
            <Link to="/auth/register">
              <p className="font-Outfit font-medium text-[14px] leading-[100%] text-center text-black">
                Sign up
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
