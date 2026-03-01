import { useState, useContext } from "react";
import { AuthRequests } from "../../api/axios.js";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [inputErrors, setInputErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const { saveToken, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const clearError = (field) => {
    if (inputErrors[field])
      setInputErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateForm = () => {
    const errors = {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    let isValid = true;

    // Full name
    if (!form.fullName.trim()) {
      errors.fullName = "Full name is required.";
      isValid = false;
    } else if (form.fullName.trim().split(" ").filter(Boolean).length < 2) {
      errors.fullName = "Please enter your first and last name.";
      isValid = false;
    }

    // Email
    if (!form.email.trim()) {
      errors.email = "Email is required.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Password
    if (!form.password) {
      errors.password = "Password is required.";
      isValid = false;
    } else if (form.password.length < 8) {
      errors.password = "Password must be at least 8 characters.";
      isValid = false;
    } else if (!/[A-Z]/.test(form.password)) {
      errors.password = "Password must contain at least one uppercase letter.";
      isValid = false;
    } else if (!/[0-9]/.test(form.password)) {
      errors.password = "Password must contain at least one number.";
      isValid = false;
    }

    // Confirm password
    if (!form.confirmPassword) {
      errors.confirmPassword = "Please confirm your password.";
      isValid = false;
    } else if (form.password !== form.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
      isValid = false;
    }

    // Terms
    if (!agreedToTerms) {
      isValid = false;
      toast.error("You must agree to the Terms & Conditions to continue.");
      setInputErrors(errors);
      return false;
    }

    setInputErrors(errors);

    const firstError =
      errors.fullName ||
      errors.email ||
      errors.password ||
      errors.confirmPassword;
    if (!isValid) toast.error(firstError);

    return isValid;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const toastId = toast.loading("Creating your account...");
    try {
      const res = await AuthRequests.register(form);
      saveToken(res.data.token);

      const userResponse = await AuthRequests.currentUser();
      setUser(userResponse.data);

      toast.success("Account created successfully!", { id: toastId });
      navigate("/auth/register-business");
    } catch (err) {
      console.log(err);
      const message =
        err?.response?.data?.message ||
        "Registration failed. Please try again.";
      toast.error(message, { id: toastId });
    }
  };

  // Password strength indicator
  const getPasswordStrength = () => {
    const p = form.password;
    if (!p) return null;
    let score = 0;
    if (p.length >= 8) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[0-9]/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;

    if (score <= 1)
      return { label: "Weak", color: "bg-red-400", width: "w-1/4" };
    if (score === 2)
      return { label: "Fair", color: "bg-yellow-400", width: "w-2/4" };
    if (score === 3)
      return { label: "Good", color: "bg-blue-400", width: "w-3/4" };
    return { label: "Strong", color: "bg-green-500", width: "w-full" };
  };

  const strength = getPasswordStrength();

  return (
    <div className="flex w-full bg-[#fff]">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: "8px",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
          },
          error: { iconTheme: { primary: "#4B0082", secondary: "#fff" } },
          success: { iconTheme: { primary: "#4B0082", secondary: "#fff" } },
        }}
      />

      <div className="flex flex-col py-2 items-center gap-4 w-full overflow-y-auto">
        <form
          onSubmit={handleRegister}
          className="flex flex-col space-y-4 w-[90vw] max-w-[490px] px-2"
          noValidate
        >
          <div>
            <h2 className="font-Inter text-center font-bold text-[25.5px] leading-[36px] text-[#0F172A]">
              Create Account
            </h2>
            <p className="font-Inter font-normal text-center text-[13px] leading-6 text-slate-600 mt-3">
              Get started — fill in your details below.
            </p>
          </div>

          {/* Full Name */}
          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="fullName"
              className="mt-[20px] font-Inter font-medium text-base leading-5 text-[#1A1A1A]"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="John Doe"
              value={form.fullName}
              className={`border w-full h-[50px] rounded-lg p-2.5 bg-white placeholder:font-Inter placeholder:font-normal placeholder:text-base placeholder:leading-6 placeholder:text-[#CCCCCC] ${
                inputErrors.fullName ? "border-red-500" : "border-gray-300"
              }`}
              onChange={(e) => {
                setForm({ ...form, fullName: e.target.value });
                clearError("fullName");
              }}
            />
            {inputErrors.fullName && (
              <p className="text-red-500 text-xs">{inputErrors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="email"
              className="font-Inter font-medium text-base leading-5 text-[#1A1A1A]"
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
                clearError("email");
              }}
            />
            {inputErrors.email && (
              <p className="text-red-500 text-xs">{inputErrors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="password"
              className="font-Inter font-medium text-base leading-5 text-[#1A1A1A]"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Min. 8 characters"
              value={form.password}
              className={`border w-full h-[50px] rounded-lg p-2.5 bg-white placeholder:font-Inter placeholder:font-normal placeholder:text-base placeholder:leading-6 placeholder:text-[#CCCCCC] ${
                inputErrors.password ? "border-red-500" : "border-gray-300"
              }`}
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
                clearError("password");
              }}
            />
            {/* Password strength bar */}
            {form.password && strength && (
              <div className="mt-1">
                <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${strength.color} ${strength.width}`}
                  />
                </div>
                <p
                  className={`text-xs mt-1 font-Inter font-medium ${
                    strength.label === "Weak"
                      ? "text-red-400"
                      : strength.label === "Fair"
                        ? "text-yellow-500"
                        : strength.label === "Good"
                          ? "text-blue-400"
                          : "text-green-500"
                  }`}
                >
                  {strength.label} password
                </p>
              </div>
            )}
            {inputErrors.password && (
              <p className="text-red-500 text-xs">{inputErrors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="confirmPassword"
              className="font-Inter font-medium text-base leading-5 text-[#1A1A1A]"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              value={form.confirmPassword}
              className={`border w-full h-[50px] rounded-lg p-2.5 bg-white placeholder:font-Inter placeholder:font-normal placeholder:text-base placeholder:leading-6 placeholder:text-[#CCCCCC] ${
                inputErrors.confirmPassword
                  ? "border-red-500"
                  : form.confirmPassword &&
                      form.password === form.confirmPassword
                    ? "border-green-400"
                    : "border-gray-300"
              }`}
              onChange={(e) => {
                setForm({ ...form, confirmPassword: e.target.value });
                clearError("confirmPassword");
              }}
            />
            {inputErrors.confirmPassword && (
              <p className="text-red-500 text-xs">
                {inputErrors.confirmPassword}
              </p>
            )}
            {!inputErrors.confirmPassword &&
              form.confirmPassword &&
              form.password === form.confirmPassword && (
                <p className="text-green-500 text-xs">Passwords match ✓</p>
              )}
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-start gap-3 mt-2">
            <input
              type="checkbox"
              id="terms"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="mt-1 accent-[#4B0082]"
            />
            <label
              htmlFor="terms"
              className="font-Inter text-sm text-[#1A1A1A] leading-5"
            >
              I agree to the{" "}
              <Link
                to="/terms"
                className="text-[#4B0082] font-medium underline underline-offset-2"
              >
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy"
                className="text-[#4B0082] font-medium underline underline-offset-2"
              >
                Privacy Policy
              </Link>
            </label>
          </div>

          {/* Submit */}
          <div className="w-full pt-2">
            <button
              type="submit"
              className="w-full h-[50px] rounded-lg p-2.5 bg-gradient-to-b from-[#8A2BE2] to-[#4B0082] font-Inter font-semibold text-base leading-6 text-[#CCCCCC] hover:opacity-90 transition-opacity"
            >
              Create Account
            </button>
          </div>

          <div className="flex items-center w-full justify-center gap-[5px] pb-6">
            <p className="font-Outfit font-normal text-[14px] text-black/60">
              Already have an account?
            </p>
            <Link to="/auth/login">
              <p className="font-Outfit font-medium text-[14px] text-black">
                Sign in
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
