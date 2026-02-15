const InputBox = ({ label, type, value, placeholder }) => {
  return (
    <div>
      <p className="font-Inter font-medium">{label}:</p>
      <input
        type={type}
        value={``}
        placeholder={placeholder}
        className="w-[560px] h-[50px] rounded-lg p-[10px] mt-[10px]"
      />
    </div>
  );
};

export default InputBox;
