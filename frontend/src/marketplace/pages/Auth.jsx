
import React, { useState } from "react";
import {
    FaUserAlt,
    FaEnvelope,
    FaLock,
    FaPhoneAlt,
    FaEye,
    FaEyeSlash,
} from "react-icons/fa";
import StoreNavbar from "../components/StoreNavbar.jsx";

const Auth = () => {
    const [showSignup, setShowSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="max-w-[430px] mx-auto min-h-screen bg-white">
            {!showSignup ? (
                // ================= LOGIN / ACCOUNT SCREEN =================
                <div className="min-h-screen flex items-center justify-center px-5">
                    <div className="w-full text-center">
                        {/* Icon */}
                        <div className="w-[65px] h-[65px] rounded-full border-2 border-[#d3d3d3] flex items-center justify-center mx-auto mb-7 text-[#9f9f9f] text-[22px]">
                            <FaUserAlt />
                        </div>

                        {/* Heading */}
                        <h2 className="text-[30px] font-bold text-[#1a1a1a] mb-2">
                            Welcome Back!
                        </h2>

                        <p className="text-[#777] text-[15px] leading-7 mb-7">
                            Sign in to access your account and track your
                            <br />
                            orders
                        </p>

                        {/* Sign In */}
                        <button className="w-full h-[52px] rounded-xl bg-[#5f0db3] text-white font-semibold text-[16px] mb-4">
                            Sign In
                        </button>

                        {/* Create Account */}
                        <button
                            onClick={() => setShowSignup(true)}
                            className="w-full h-[52px] rounded-xl border border-[#d8cce6] bg-transparent text-[#333] font-semibold text-[16px]"
                        >
                            Create Account
                        </button>

                        {/* Guest */}
                        <p className="mt-7 text-[#5f0db3] font-semibold text-[15px]">
                            Continue as guest
                        </p>
                    </div>
                </div>
            ) : (
                // ================= SIGNUP SCREEN =================
                <div className="px-5 py-24">
                    {/* Back */}
                    <button
                        onClick={() => setShowSignup(false)}
                        className="text-[22px] text-[#333] mb-5"
                    >
                        ←
                    </button>

                    {/* Top Icon */}
                    <div className="w-[70px] h-[70px] rounded-full bg-[#5f0db3] flex items-center justify-center mx-auto text-white text-[24px] mb-5">
                        <FaUserAlt />
                    </div>

                    {/* Heading */}
                    <h2 className="text-center text-[28px] font-bold text-[#1a1a1a]">
                        Join Storely
                    </h2>

                    <p className="text-center text-[#777] text-[14px] mt-2 mb-8 leading-6">
                        Create your account to start shopping and track
                        <br />
                        your orders
                    </p>

                    {/* Form */}
                    <div className="space-y-4">
                        {/* Full Name */}
                        <div>
                            <label className="text-[14px] font-medium text-[#333] mb-2 block">
                                Full Name
                            </label>

                            <div className="h-[52px] border border-[#ddd] rounded-xl flex items-center px-4 gap-3">
                                <FaUserAlt className="text-[#999] text-[14px]" />

                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full outline-none text-[14px]"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="text-[14px] font-medium text-[#333] mb-2 block">
                                Email
                            </label>

                            <div className="h-[52px] border border-[#ddd] rounded-xl flex items-center px-4 gap-3">
                                <FaEnvelope className="text-[#999] text-[14px]" />

                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full outline-none text-[14px]"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="text-[14px] font-medium text-[#333] mb-2 block">
                                Phone Number
                            </label>

                            <div className="h-[52px] border border-[#ddd] rounded-xl flex items-center px-4 gap-3">
                                <FaPhoneAlt className="text-[#999] text-[14px]" />

                                <input
                                    type="text"
                                    placeholder="+234 123 456 7890"
                                    className="w-full outline-none text-[14px]"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="text-[14px] font-medium text-[#333] mb-2 block">
                                Password
                            </label>

                            <div className="h-[52px] border border-[#ddd] rounded-xl flex items-center px-4 gap-3">
                                <FaLock className="text-[#999] text-[14px]" />

                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create a strong password"
                                    className="w-full outline-none text-[14px]"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="text-[#999]"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="text-[14px] font-medium text-[#333] mb-2 block">
                                Confirm Password
                            </label>

                            <div className="h-[52px] border border-[#ddd] rounded-xl flex items-center px-4 gap-3">
                                <FaLock className="text-[#999] text-[14px]" />

                                <input
                                    type="password"
                                    placeholder="Re-enter your password"
                                    className="w-full outline-none text-[14px]"
                                />

                                <FaEye className="text-[#999]" />
                            </div>
                        </div>
                    </div>

                    {/* Create Button */}
                    <button className="w-full h-[52px] rounded-xl bg-[#5f0db3] text-white font-semibold text-[16px] mt-7">
                        Create Account
                    </button>

                    {/* Terms */}
                    <p className="text-center text-[12px] text-[#777] mt-5 leading-5">
                        I agree to the{" "}
                        <span className="text-[#5f0db3] font-medium">
                            Terms & Conditions
                        </span>{" "}
                        and{" "}
                        <span className="text-[#5f0db3] font-medium">
                            Privacy Policy
                        </span>
                    </p>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-6">
                        <div className="flex-1 h-[1px] bg-[#ddd]"></div>

                        <p className="text-[13px] text-[#777]">Or continue with</p>

                        <div className="flex-1 h-[1px] bg-[#ddd]"></div>
                    </div>

                    {/* Google */}
                    <button className="w-full h-[52px] border border-[#ddd] rounded-xl bg-white text-[15px] font-medium text-[#333] mb-4">
                        Continue with Google
                    </button>

                    {/* Facebook */}
                    <button className="w-full h-[52px] border border-[#ddd] rounded-xl bg-white text-[15px] font-medium text-[#333]">
                        Continue with Facebook
                    </button>

                    {/* Bottom */}
                    <p className="text-center text-[14px] text-[#555] mt-7">
                        Already have an account?{" "}
                        <span
                            onClick={() => setShowSignup(false)}
                            className="text-[#5f0db3] font-semibold cursor-pointer"
                        >
                            Sign In
                        </span>
                    </p>
                </div>
            )}
            <StoreNavbar />
        </div>
    );
};

export default Auth;