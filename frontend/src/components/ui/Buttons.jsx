import { Navigate, useNavigate } from "react-router-dom";

const Buttons = ({ label, link, onSubmit }) => {
  const Navigate = useNavigate();

  return (
    <div className="w-full flex justify-center md:justify-start">
      <button
        onClick={onSubmit}
        className="text-white w-full max-w-[560px] h-[50px] mt-[10px] rounded-lg bg-gradient-to-t from-[#4B0082] to-[#8A2BE2]"
      >
        {label}
      </button>
    </div>
  );
};

export default Buttons;