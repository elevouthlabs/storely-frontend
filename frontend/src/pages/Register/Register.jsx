import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../api/axios.js";
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
            await api.post("/auth/register", form);

            localStorage.setItem("otpEmail", form.email);

            navigate("/verify-otp");
        } catch (err) {
            console.log(err.response?.data);
            alert(err.response?.data?.message || "Registration failed");
        }
    };

    return (
        <div className="flex h-screen bg-[#F5F5F5]">
            <Sidebar />
            <div className="w-1/2 mt-[55px] ml-[28px]">
                <form
                    onSubmit={handleSubmit}
                    className="w-96 space-y-4"
                >
                    <div>
                        <h2 className="font-Inter font-bold text-[25.5px] leading-[36px] align-middle text-[#0F172A]">
                            Create your account
                        </h2>
                        <p className="font-Inter font-normal text-[13.6px] leading-6 align-middle text-slate-600">Enter your details to access your store.</p>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <label htmlFor="Full Name" className=" mt-[20px]font-Inter font-medium text-base leading-5 align-middle text-[#1A1A1A]">Full Name</label>
                        <input
                            type="text"
                            placeholder="e.g. Jane Doe"
                            className="w-[560px] h-[50px] rounded-lg p-2.5 bg-white placeholder:font-Inter placeholder:font-normal placeholder:text-base placeholder:leading-6 placeholder:text-[#CCCCCC]"
                            onChange={(e) =>
                                setForm({ ...form, fullName: e.target.value })
                            }
                        />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <label htmlFor="Email" className=" mt-[20px]font-Inter font-medium text-base leading-5 align-middle text-[#1A1A1A]">Email</label>
                        <input
                            type="email"
                            placeholder="Name@company.com"
                            className="w-[560px] h-[50px] rounded-lg p-2.5 bg-white placeholder:font-Inter placeholder:font-normal placeholder:text-base placeholder:leading-6 placeholder:text-[#CCCCCC]"
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
                        />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <label htmlFor="Password" className=" mt-[20px]font-Inter font-medium text-base leading-5 align-middle text-[#1A1A1A]">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-[560px] h-[50px] rounded-lg p-2.5 bg-white placeholder:font-Inter placeholder:font-normal placeholder:text-base placeholder:leading-6 placeholder:text-[#CCCCCC]"
                            onChange={(e) =>
                                setForm({ ...form, password: e.target.value })
                            }
                        />
                        <div>
                            <Link to="/forgot-password">
                                <p className="font-Inter font-medium text-[11.9px] leading-5 align-middle text-[#4B0082]">
                                    Forgot password?
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <button className="w-[560px] h-[50px] rounded-lg p-2.5 bg-gradient-to-b from-[#8A2BE2] to-[#4B0082] font-Inter font-semibold text-base leading-6 text-[#CCCCCC]">
                            Sign Up
                        </button>
                    </div>
                </form>
                <div className="w-[560px] h-[1px] bg-[#CCCCCC] mt-[30px] flex item-center justify-center">
                    <div className="w-[125px] h-[20px] mt-[-10px] bg-[#F8FAFC]">
                        <p className="font-Inter text-center font-normal text-[11.9px] leading-5 align-middle text-slate-500">Or continue with</p>
                    </div>
                </div>
                <div className="pt-[20px] flex items-center ml-[40px] gap-[20px]">
                    <a
                        href="#"
                        className="w-[219px] h-[44px] rounded-lg p-2.5 bg-white flex items-center  gap-[10px] hover:shadow-md transition"
                    >
                        <img src={google} alt="Google logo" />
                        <p className="font-Inter font-normal text-sm leading-5 text-center text-[#364153]">
                            Sign in with Google
                        </p>
                    </a>

                    <a
                        href="#"
                        className="w-[219px] h-[44px] rounded-lg p-2.5 bg-white flex items-center gap-[10px] hover:shadow-md transition"
                    >
                        <img src={apple} alt="Apple logo" />
                        <p className="font-Inter font-normal text-sm leading-5 text-center text-[#364153]">
                            Sign in with Apple
                        </p>
                    </a>
                </div>
                <div className="flex items-center gap-[5px] ml-[140px] mt-[20px]">
                    <p className="font-Outfit font-normal text-[18px] leading-[100%] text-center text-black/60">Already have an account?</p>
                    <Link to="/login">
                        <p className="font-Outfit font-medium text-[18px] leading-[100%] text-center text-black">
                            Log in
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}


export default Register;