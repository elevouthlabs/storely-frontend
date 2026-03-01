import { useState, useContext } from "react";
import { AuthRequests } from "../../api/axios.js";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useNavigate, Link } from "react-router-dom";
import google from "../../assets/google.png";
import apple from "../../assets/apple.png";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [inputErrors, setInputErrors] = useState({
    email: "",
    password: "",
  });

  const [requestError, setRequestError] = useState("");

  const { saveToken, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    validateForm();
    try {
      const res = await AuthRequests.login(form);
      console.log(res.data.token);
      saveToken(res.data.token);

      const userResponse = await AuthRequests.currentUser();
      setUser(userResponse.data);
      navigate("/register-business");
    } catch (err) {
      console.log(err);
      alert("Login failed");
    }
  };

  const validateForm = () => {
    throw new Error("something went wrong");
  };

  return (
    <div className="flex h-screen bg-[#fff]">
      <Sidebar />
      <div className=" flex flex-col py-10 items-center gap-4 w-full">
        <form
          onSubmit={handleLogin}
          className="flex flex-col space-y-4 w-full px-8"
        >
          <div>
            <h2 className="font-Inter text-center font-bold text-[25.5px] leading-[36px] align-middle text-[#0F172A]">
              Sign In
            </h2>
            <p className="font-Inter font-normal text-center text-[13px] leading-6 align-middle text-slate-600 mt-3">
              Welcome back, please Enter your details.
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="email"
              className=" mt-[20px]font-Inter font-medium text-base leading-5 align-middle text-[#1A1A1A]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Name@company.com"
              className="border w-full h-[50px] rounded-lg p-2.5 bg-white placeholder:font-Inter placeholder:font-normal placeholder:text-base placeholder:leading-6 placeholder:text-[#CCCCCC]"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="password"
              className=" mt-[20px]font-Inter font-medium text-base leading-5 align-middle text-[#1A1A1A]"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="border w-full h-[50px] rounded-lg p-2.5 bg-white placeholder:font-Inter placeholder:font-normal placeholder:text-base placeholder:leading-6 placeholder:text-[#CCCCCC]"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <div>
              <p className="font-Inter font-medium text-[11.9px] leading-5 align-middle text-[#4B0082] text-right mt-3">
                <Link to="/forgot-password">Forgot password?</Link>
              </p>
            </div>
          </div>
          {/*  */}
          <div className="w-full">
            <div className="flex items-center my-4">
              <input type="checkbox" name="remember-me" id="remember-me" />
              <span className="ml-3">Remember me</span>
            </div>
            <button className="  w-full h-[50px] rounded-lg p-2.5 bg-gradient-to-b from-[#8A2BE2] to-[#4B0082] font-Inter font-semibold text-base leading-6 text-[#CCCCCC]">
              Sign in
            </button>
          </div>
          <div className="flex items-center w-full justify-center gap-[5px]  mt-[20px]">
            <p className="font-Outfit font-normal text-[14px] leading-[100%] text-center text-black/60">
              Don't have an account yet?
            </p>
            <Link to="/register">
              <p className="font-Outfit font-medium text-[14px] leading-[100%] text-center text-black">
                Sign up
              </p>
            </Link>
          </div>
        </form>
        {/* <div className=" h-[1px] bg-[#CCCCCC] mt-[30px] flex item-center justify-center">
          <div className="w h-[20px] mt-[-10px] bg-[#F8FAFC]">
            <p className="font-Inter text-center font-normal text-[11.9px] leading-5 align-middle text-slate-500">
              Or continue with
            </p>
          </div>
        </div> */}
        {/* <div className="pt-[20px] flex items-center  gap-[20px]">
          <a
            href="#"
            className="w h-[44px] rounded-lg p-2.5 bg-white flex items-center  gap-[10px] hover:shadow-md transition"
          >
            <img src={google} alt="Google logo" />
            <p className="font-Inter font-normal text-sm leading-5 text-center text-[#364153]">
              Sign in with Google
            </p>
          </a>

          <a
            href="#"
            className="w h-[44px] rounded-lg p-2.5 bg-white flex items-center gap-[10px] hover:shadow-md transition"
          >
            <img src={apple} alt="Apple logo" />
            <p className="font-Inter font-normal text-sm leading-5 text-center text-[#364153]">
              Sign in with Apple
            </p>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
