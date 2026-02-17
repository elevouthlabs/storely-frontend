import { useState, useEffect } from "react";
import api from "../../api/axios.js";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import arrow from "../../assets/arrow.png";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("otpEmail");
    if (!storedEmail) {
      alert("No email found. Please register again.");
      navigate("/register");
    } else {
      setEmail(storedEmail);
    }
  }, [navigate]);

  const handleVerify = async () => {
    try {
      await api.post("/auth/verify-otp", {
        email,
        otp,
      });

      localStorage.removeItem("otpEmail");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Invalid OTP");
    }
  };

  const handleResendOtp = async () => {
    try {
      await api.post("/auth/resend-otp", {
        email,
      });
      alert("OTP resent successfully");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to resend OTP");
    }
  };

  return (
    <div className="flex h-screen bg-[#F5F5F5]">
      <Sidebar />

      <div className="w-1/2 mt-[200px] ml-[28px]">
        <div className="w-96">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 font-inter font-medium text-[12px] leading-[20px] text-center align-middle text-[#64748B]"
          >
            <img src={arrow} alt="" />
            Back
          </button>
          <div>
            <h2 className="font-Inter font-bold  mt-[27px] text-[25.5px] leading-[36px] text-[#0F172A]">
              Verify your email
            </h2>

            <p className="font-Inter font-normal text-[13.6px] leading-[24px] text-black">
              We sent 6-digit code to{" "}
              <span className="font-medium">{email}</span>
            </p>
          </div>
          <div className="flex justify-between gap-[18px] mt-[30px]">
            {Array.from({ length: 6 }).map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="w-[62px] h-[58px] bg-white border rounded text-center text-xl font-bold focus:outline-none focus:ring-2 focus:ring-purple-600"
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, "");
                  e.target.value = value;

                  const newOtp = otp.split("");
                  newOtp[index] = value;
                  setOtp(newOtp.join(""));

                  if (value && e.target.nextSibling) {
                    e.target.nextSibling.focus();
                  }
                }}
                onKeyDown={(e) => {
                  if (
                    e.key === "Backspace" &&
                    !e.target.value &&
                    e.target.previousSibling
                  ) {
                    e.target.previousSibling.focus();
                  }
                }}
              />
            ))}
          </div>
          <button
            onClick={handleVerify}
            className="w-[460px] h-[50px] mt-[30px] rounded-lg bg-gradient-to-b from-[#8A2BE2] to-[#4B0082] font-Inter font-semibold text-base text-white"
          >
            Verify & Continue
          </button>
        </div>
        <div className="flex items-center gap-[5px] mt-[28px] ml-[90px]">
          <p className="font-Inter font-normal text-[18px] leading-[100%] text-black/60">
            Didn't receive the code?
          </p>
          <button
            onClick={handleResendOtp}
            className="font-Inter font-medium text-[18px] leading-[100%] text-[#781FC7]"
          >
            Resend code
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
