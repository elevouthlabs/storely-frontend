import { useState, useEffect, useRef } from "react";
import { AuthRequests } from "../../api/axios.js";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

const OTP_LENGTH = 6;
const RESEND_COUNTDOWN = 60;

const VerifyOtp = () => {
  const [digits, setDigits] = useState(Array(OTP_LENGTH).fill(""));
  const [email, setEmail] = useState("");
  const [countdown, setCountdown] = useState(RESEND_COUNTDOWN);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  // Load email from localStorage
  useEffect(() => {
    const storedEmail = localStorage.getItem("otpEmail");
    if (!storedEmail) {
      toast.error("No email found. Please register again.");
      navigate("/auth/register");
    } else {
      setEmail(storedEmail);
    }
  }, [navigate]);

  // Countdown timer
  useEffect(() => {
    if (countdown === 0) {
      setCanResend(true);
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  // Focus first input on mount
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(-1);
    const newDigits = [...digits];
    newDigits[index] = value;
    setDigits(newDigits);

    // Move to next input
    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all filled
    if (value && newDigits.every((d) => d !== "")) {
      handleVerify(newDigits.join(""));
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (digits[index]) {
        const newDigits = [...digits];
        newDigits[index] = "";
        setDigits(newDigits);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle paste (e.g. from SMS)
  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/[^0-9]/g, "")
      .slice(0, OTP_LENGTH);
    if (!pasted) return;
    const newDigits = Array(OTP_LENGTH).fill("");
    pasted.split("").forEach((char, i) => {
      newDigits[i] = char;
    });
    setDigits(newDigits);
    const nextEmpty = newDigits.findIndex((d) => d === "");
    const focusIndex = nextEmpty === -1 ? OTP_LENGTH - 1 : nextEmpty;
    inputRefs.current[focusIndex]?.focus();

    if (newDigits.every((d) => d !== "")) {
      handleVerify(newDigits.join(""));
    }
  };

  const handleVerify = async (otpValue) => {
    const otp = otpValue ?? digits.join("");

    if (otp.length < OTP_LENGTH) {
      toast.error("Please enter all 6 digits.");
      return;
    }

    const toastId = toast.loading("Verifying code...");
    try {
      await AuthRequests.verifyOtp({ email, otp });
      localStorage.removeItem("otpEmail");
      toast.success("Email verified!", { id: toastId });
      navigate("/auth/login");
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Invalid OTP. Please try again.",
        {
          id: toastId,
        },
      );
      // Clear inputs on failure
      setDigits(Array(OTP_LENGTH).fill(""));
      inputRefs.current[0]?.focus();
    }
  };

  const handleResendOtp = async () => {
    if (!canResend) return;
    const toastId = toast.loading("Resending code...");
    try {
      await AuthRequests.resendOtp({ email });
      toast.success("A new code has been sent!", { id: toastId });
      setDigits(Array(OTP_LENGTH).fill(""));
      setCountdown(RESEND_COUNTDOWN);
      setCanResend(false);
      inputRefs.current[0]?.focus();
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to resend OTP.", {
        id: toastId,
      });
    }
  };

  const filledCount = digits.filter((d) => d !== "").length;

  return (
    <div className="flex w-full h-screen bg-[#fff] min-w-[500px] 2xl:max-w-[550px] 2xl:max-h-[700px]">
      <div className="flex flex-col py-10 items-center justify-center w-full px-8">
        <div className="flex flex-col space-y-4 w-[90vw] max-w-[490px] px-2">
          {/* Back link */}
          <Link
            to="/auth/register"
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
            Back
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <div>
            <h2 className="font-Inter text-center font-bold text-[25.5px] leading-[36px] text-[#0F172A]">
              Verify your email
            </h2>
            <p className="font-Inter font-normal text-center text-[13px] leading-6 text-slate-600 mt-3">
              We sent a 6-digit code to{" "}
              <span className="font-semibold text-[#0F172A]">{email}</span>
            </p>
          </div>

          {/* OTP inputs */}
          <div
            className="flex justify-between gap-2 mt-2"
            onPaste={handlePaste}
          >
            {digits.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                className={`w-full h-[58px] bg-white border-2 rounded-lg text-center text-xl font-bold text-[#0F172A] focus:outline-none transition-all duration-150 ${
                  digit
                    ? "border-[#4B0082] bg-[#4B0082]/5"
                    : "border-gray-300 focus:border-[#8A2BE2] focus:ring-2 focus:ring-[#8A2BE2]/20"
                }`}
                onChange={(e) => handleChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              />
            ))}
          </div>

          {/* Progress indicator */}
          <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#8A2BE2] to-[#4B0082] rounded-full transition-all duration-300"
              style={{ width: `${(filledCount / OTP_LENGTH) * 100}%` }}
            />
          </div>

          {/* Verify button */}
          <div className="w-full pt-1">
            <button
              onClick={() => handleVerify()}
              disabled={filledCount < OTP_LENGTH}
              className="w-full h-[50px] rounded-lg bg-gradient-to-b from-[#8A2BE2] to-[#4B0082] font-Inter font-semibold text-base text-[#CCCCCC] hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Verify & Continue
            </button>
          </div>

          {/* Resend */}
          <div className="flex items-center justify-center gap-[5px] mt-2">
            <p className="font-Outfit font-normal text-[14px] text-black/60">
              Didn't receive the code?
            </p>
            {canResend ? (
              <button
                onClick={handleResendOtp}
                className="font-Outfit font-medium text-[14px] text-[#4B0082] hover:opacity-70 transition-opacity"
              >
                Resend code
              </button>
            ) : (
              <span className="font-Outfit font-medium text-[14px] text-slate-400">
                Resend in {countdown}s
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
