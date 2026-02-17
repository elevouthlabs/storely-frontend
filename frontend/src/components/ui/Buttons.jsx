import { Navigate, useNavigate } from "react-router-dom";

const Buttons = ({ label, link }) => {
  const Navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => Navigate(`${link}`)}
        className="text-white w-[560px] h-[50px] mt-[40px] rounded-lg bg-gradient-to-t from-[#4B0082] to-[#8A2BE2]"
      >
        {label}
      </button>
    </div>
  );
};

export default Buttons;
