import { Link } from "react-router-dom";
import InputBox from "../../components/ui/InputBox";
import Buttons from "../../components/ui/buttons";

const SignUp = () => {
  return (
    <div>
      <div>
        <h2 className="font-Inter font-bold text-[26px]">
          Create Your Account
        </h2>
        <p className="text-sm text-[#475569] mt-1">
          Enter your details to access your store.
        </p>
      </div>
      <form className="mt-[30px]">
        <div className=" flex flex-col gap-5">
          <InputBox
            label="Full Name"
            placeholder={`e.g John Doe`}
            type="text"
          />
          <InputBox
            label="Email"
            placeholder={`Name@company.com`}
            type="text"
          />
          <InputBox
            label="Password"
            placeholder={`Enter your password`}
            type="password"
          />
        </div>
        <p className="mt-[10px] font-Inter text-[12px] font-medium text-[#4B0082] text-end">
          <Link>Forgot Password?</Link>
        </p>
        <Buttons label={`Sign up`} />
      </form>
    </div>
  );
};

export default SignUp;
