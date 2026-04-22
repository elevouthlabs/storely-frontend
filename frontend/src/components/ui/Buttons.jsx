import { useNavigate } from "react-router-dom";

const Buttons = ({ label, link, onSubmit, type = "button" }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (onSubmit) {
      onSubmit(event);
    }

    if (event.defaultPrevented) {
      return;
    }

    if (link) {
      window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
      navigate(link);
    }
  };

  return (
    <div className="w-full flex justify-center md:justify-start">
      <button
        type={type}
        onClick={handleClick}
        className="text-white w-full max-w-[560px] h-[50px] mt-[10px] rounded-lg bg-gradient-to-t from-[#4B0082] to-[#8A2BE2]"
      >
        {label}
      </button>
    </div>
  );
};

export default Buttons;