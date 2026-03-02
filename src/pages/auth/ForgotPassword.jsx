import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthRequests } from "../../api/axios.js";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (value) => {
    if (!value.trim()) return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return "Please enter a valid email address.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateEmail(email);
    if (error) {
      setEmailError(error);
      toast.error(error);
      return;
    }

    const toastId = toast.loading("Sending reset link...");
    try {
      await AuthRequests.forgotPassword({ email });
      toast.success("Reset link sent! Check your inbox.", { id: toastId });
      setSubmitted(true);
    } catch (err) {
      console.log(err);
      const message =
        err?.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(message, { id: toastId });
    }
  };

  return (
    <div className="flex w-full h-screen bg-[#fff] min-w-[500px] 2xl:max-w-[550px] 2xl:max-h-[700px]">
      <div className="flex flex-col py-10 items-center justify-center gap-4 w-full px-8">
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 w-[90vw] max-w-[490px] px-2"
            noValidate
          >
            {/* Icon */}
            <div className="flex justify-center mb-2">
              <div className="w-[56px] h-[56px] rounded-full bg-gradient-to-b from-[#8A2BE2]/10 to-[#4B0082]/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-[#4B0082]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
            </div>

            {/* Heading */}
            <div>
              <h2 className="font-Inter text-center font-bold text-[25.5px] leading-[36px] text-[#0F172A]">
                Forgot Password?
              </h2>
              <p className="font-Inter font-normal text-center text-[13px] leading-6 text-slate-600 mt-3">
                No worries! Enter your email and we'll send you a reset link.
              </p>
            </div>

            {/* Email input */}
            <div className="flex flex-col gap-[10px]">
              <label
                htmlFor="email"
                className="mt-[20px] font-Inter font-medium text-base leading-5 text-[#1A1A1A]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Name@company.com"
                value={email}
                className={`border w-full h-[50px] rounded-lg p-2.5 bg-white placeholder:font-Inter placeholder:font-normal placeholder:text-base placeholder:leading-6 placeholder:text-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]/30 transition ${
                  emailError ? "border-red-500" : "border-gray-300"
                }`}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError("");
                }}
              />
              {emailError && (
                <p className="text-red-500 text-xs">{emailError}</p>
              )}
            </div>

            {/* Submit */}
            <div className="w-full pt-2">
              <button
                type="submit"
                className="w-full h-[50px] rounded-lg p-2.5 bg-gradient-to-b from-[#8A2BE2] to-[#4B0082] font-Inter font-semibold text-base leading-6 text-[#CCCCCC] hover:opacity-90 transition-opacity"
              >
                Send Reset Link
              </button>
            </div>

            <div className="flex items-center w-full justify-center gap-[5px]">
              <p className="font-Outfit font-normal text-[14px] text-black/60">
                Remember your password?
              </p>
              <Link to="/auth/login">
                <p className="font-Outfit font-medium text-[14px] text-black">
                  Sign in
                </p>
              </Link>
            </div>
          </form>
        ) : (
          /* ── Success state ── */
          <div className="flex flex-col items-center gap-5 w-full text-center">
            {/* Animated checkmark */}
            <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-b from-[#8A2BE2]/10 to-[#4B0082]/20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9 text-[#4B0082]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>

            <div>
              <h2 className="font-Inter font-bold text-[25.5px] leading-[36px] text-[#0F172A]">
                Check your email
              </h2>
              <p className="font-Inter font-normal text-[13px] leading-6 text-slate-600 mt-3">
                We sent a password reset link to
              </p>
              <p className="font-Inter font-semibold text-[14px] text-[#4B0082] mt-1">
                {email}
              </p>
            </div>

            <p className="font-Inter text-[12px] text-slate-500">
              Didn't receive the email?{" "}
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-[#4B0082] font-medium underline underline-offset-2 hover:opacity-70 transition-opacity"
              >
                Click to resend
              </button>
            </p>

            <Link
              to="/auth/login"
              className="flex items-center gap-1 text-[#4B0082] font-Inter text-sm font-medium mt-2 hover:opacity-70 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
