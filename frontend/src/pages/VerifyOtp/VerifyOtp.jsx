import { useState, useEffect, useRef } from "react";
import { AuthRequests } from "../../api/axios.js";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import arrow from "../../assets/arrow.png";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const hasRequestedOtp = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("otpEmail");
    if (!storedEmail) {
      toast.error("No email found. Please register again.");
      navigate("/register");
      return;
    }

    setEmail(storedEmail);

    if (hasRequestedOtp.current) return;
    hasRequestedOtp.current = true;

    AuthRequests.resendOtp({
      email: storedEmail,
      purpose: "SIGNUP",
    }).catch((err) => {
      console.log(err.response?.data);
      toast.error(err.response?.data?.message || "Failed to send verification code");
    });
  }, [navigate]);

  const handleVerify = async () => {
    const finalOtp = otp.join("");

    if (finalOtp.length !== 6) {
      alert("Please enter the full 6-digit OTP");
      return;
    }

    try {
      await AuthRequests.verifyOtp({
        email,
        code: otp.join(""),
        purpose: "SIGNUP",
      });

      localStorage.removeItem("otpEmail");
      toast.success("Email verified successfully!");
      navigate("/login");
    } catch (err) {
      console.log(err.response?.data);
      toast.error(err.response?.data?.message || "Invalid OTP");
    }
  };

  const handleResendOtp = async () => {
    try {
      setLoading(true);

      await AuthRequests.resendOtp({
        email,
        purpose: "SIGNUP",
      });

      toast.success("Verification code resent. Check your inbox and spam folder.");
    } catch (err) {
      console.log(err.response?.data);
      toast.error(err.response?.data?.message || "Failed to resend OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-[#F5F5F5]">
      <ToastContainer position="top-right" autoClose={3000} />
      <Sidebar />

      <div className="w-full lg:w-1/2 mt-[60px] lg:mt-[200px] px-4 lg:px-0 lg:ml-[28px]">
        <div className="w-full max-w-md">

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 font-inter font-medium text-[12px] leading-[20px] text-[#64748B]"
          >
            <img src={arrow} alt="" />
            Back
          </button>

          <div>
            <h2 className="font-Inter font-bold mt-[20px] lg:mt-[27px] text-[22px] lg:text-[25.5px] leading-[36px] text-[#0F172A]">
              Verify your email
            </h2>

            <p className="font-Inter font-normal text-[13px] lg:text-[13.6px] leading-[24px] text-black">
              We sent a 6-digit code to{" "}
              <span className="font-medium">{email}</span>
              . Check your spam folder if you do not see it.
            </p>
          </div>

          {/* OTP BOXES */}
          <div className="flex justify-between gap-2 sm:gap-[18px] mt-[30px] flex-wrap sm:flex-nowrap">
            {Array.from({ length: 6 }).map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="w-12 sm:w-[62px] h-12 sm:h-[58px] bg-white border rounded text-center text-xl font-bold focus:outline-none focus:ring-2 focus:ring-purple-600"
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, "");

                  if (!value) return;

                  const newOtp = [...otp];
                  newOtp[index] = value;
                  setOtp(newOtp);

                  if (e.target.nextSibling) {
                    e.target.nextSibling.focus();
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Backspace") {
                    const newOtp = [...otp];
                    newOtp[index] = "";
                    setOtp(newOtp);

                    if (!e.target.value && e.target.previousSibling) {
                      e.target.previousSibling.focus();
                    }
                  }
                }}
              />
            ))}
          </div>

          {/* BUTTON */}
          <button
            onClick={handleVerify}
            disabled={otp.join("").length !== 6}
            className={`w-full sm:w-[460px] h-[50px] mt-[30px] rounded-lg font-semibold text-white ${otp.join("").length === 6
                ? "bg-gradient-to-b from-[#8A2BE2] to-[#4B0082]"
                : "bg-gray-400 cursor-not-allowed"
              }`}
          >
            Verify & Continue
          </button>
        </div>

        {/* RESEND */}
        <div className="flex items-center gap-[5px] mt-[28px] lg:ml-[90px] text-sm sm:text-base">
          <p className="font-Inter font-normal text-black/60">
            Didn't receive the code?
          </p>

          <button
            onClick={handleResendOtp}
            disabled={loading}
            className="font-Inter font-medium text-[#781FC7] disabled:opacity-50"
          >
            {loading ? "Sending..." : "Resend code"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
