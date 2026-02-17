const StepLoader = () => {
  return (
    <div className="flex items-center justify-center w-full max-w-xl mx-auto">
      {/* Step 1 - Active */}
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5739BF] text-white font-semibold">
        1
      </div>

      {/* Line */}
      <div className="flex-1 h-1 mx-2 rounded bg-gray-200" />

      {/* Step 2 */}
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 font-semibold">
        2
      </div>

      {/* Line */}
      <div className="flex-1 h-1 mx-2 rounded bg-gray-200" />

      {/* Step 3 */}
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 font-semibold">
        3
      </div>

      {/* Line */}
      <div className="flex-1 h-1 mx-2 rounded bg-gray-200" />

      {/* Step 4 */}
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 font-semibold">
        4
      </div>
    </div>
  );
};

export default StepLoader;
