import { useState, useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthRequests } from "../../api/axios.js";

const ResetPassword = () => {
  const [form, setForm] = useState({ password: "", confirmPassword: "" });
  const [inputErrors, setInputErrors] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [success, setSuccess] = useState(false);

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  // Guard — redirect if no token
  useEffect(() => {
    if (!token) {
      toast.error("Invalid or missing reset token.");
      navigate("/auth/forgot-password");
    }
  }, [token, navigate]);

  const clearError = (field) => {
    if (inputErrors[field])
      setInputErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const getPasswordStrength = () => {
    const p = form.password;
    if (!p) return null;
    let score = 0;
    if (p.length >= 8) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[0-9]/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;

    if (score <= 1)
      return {
        label: "Weak",
        color: "bg-red-400",
        width: "w-1/4",
        textColor: "text-red-400",
      };
    if (score === 2)
      return {
        label: "Fair",
        color: "bg-yellow-400",
        width: "w-2/4",
        textColor: "text-yellow-500",
      };
    if (score === 3)
      return {
        label: "Good",
        color: "bg-blue-400",
        width: "w-3/4",
        textColor: "text-blue-400",
      };
    return {
      label: "Strong",
      color: "bg-green-500",
      width: "w-full",
      textColor: "text-green-500",
    };
  };

  const validateForm = () => {
    const errors = { password: "", confirmPassword: "" };
    let isValid = true;

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

    if (!form.confirmPassword) {
      errors.confirmPassword = "Please confirm your password.";
      isValid = false;
    } else if (form.password !== form.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
      isValid = false;
    }

    setInputErrors(errors);
    const firstError = errors.password || errors.confirmPassword;
    if (!isValid) toast.error(firstError);

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const toastId = toast.loading("Resetting your password...");
    try {
      await AuthRequests.resetPassword({ token, password: form.password });
      toast.success("Password reset successfully!", { id: toastId });
      setSuccess(true);
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        "Failed to reset password. The link may have expired.";
      toast.error(message, { id: toastId });
    }
  };

  const strength = getPasswordStrength();

  return (
    <div className="flex w-full h-screen bg-[#fff] min-w-[500px] 2xl:max-w-[550px] 2xl:max-h-[700px]">
      <div className="flex flex-col py-10 items-center justify-center w-full px-8">
        {!success ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 w-[90vw] max-w-[490px] px-2"
            noValidate
          >
            {/* Back link */}
            <Link
              to="/auth/login"
              className="flex items-center gap-1 text-[#4B0082] font-Inter text-sm font-medium w-fit mb-2 hover:opacity-70 transition-opacity"
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

            {/* Icon */}
            <div className="flex justify-center">
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
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  />
                </svg>
              </div>
            </div>

            {/* Heading */}
            <div>
              <h2 className="font-Inter text-center font-bold text-[25.5px] leading-[36px] text-[#0F172A]">
                Set New Password
              </h2>
              <p className="font-Inter font-normal text-center text-[13px] leading-6 text-slate-600 mt-3">
                Your new password must be different from your previous one.
              </p>
            </div>

            {/* New Password */}
            <div className="flex flex-col gap-[10px]">
              <label
                htmlFor="password"
                className="mt-[20px] font-Inter font-medium text-base leading-5 text-[#1A1A1A]"
              >
                New Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 8 characters"
                  value={form.password}
                  className={`border w-full h-[50px] rounded-lg p-2.5 pr-11 bg-white placeholder:font-Inter placeholder:font-normal placeholder:text-base placeholder:leading-6 placeholder:text-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]/30 transition ${
                    inputErrors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  onChange={(e) => {
                    setForm({ ...form, password: e.target.value });
                    clearError("password");
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#4B0082] transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {/* Strength bar */}
              {form.password && strength && (
                <div className="mt-1">
                  <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${strength.color} ${strength.width}`}
                    />
                  </div>
                  <p
                    className={`text-xs mt-1 font-Inter font-medium ${strength.textColor}`}
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
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  placeholder="Re-enter your password"
                  value={form.confirmPassword}
                  className={`border w-full h-[50px] rounded-lg p-2.5 pr-11 bg-white placeholder:font-Inter placeholder:font-normal placeholder:text-base placeholder:leading-6 placeholder:text-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]/30 transition ${
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
                <button
                  type="button"
                  onClick={() => setShowConfirm((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#4B0082] transition-colors"
                  tabIndex={-1}
                >
                  {showConfirm ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </button>
              </div>

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

            {/* Submit */}
            <div className="w-full pt-2">
              <button
                type="submit"
                className="w-full h-[50px] rounded-lg bg-gradient-to-b from-[#8A2BE2] to-[#4B0082] font-Inter font-semibold text-base leading-6 text-[#CCCCCC] hover:opacity-90 transition-opacity"
              >
                Reset Password
              </button>
            </div>
          </form>
        ) : (
          /* ── Success state ── */
          <div className="flex flex-col items-center gap-5 w-full text-center">
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
                Password Reset!
              </h2>
              <p className="font-Inter font-normal text-[13px] leading-6 text-slate-600 mt-3">
                Your password has been successfully updated. You can now sign in
                with your new password.
              </p>
            </div>

            <Link
              to="/auth/login"
              className="w-full h-[50px] rounded-lg bg-gradient-to-b from-[#8A2BE2] to-[#4B0082] font-Inter font-semibold text-base leading-6 text-[#CCCCCC] hover:opacity-90 transition-opacity flex items-center justify-center mt-2"
            >
              Back to Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
