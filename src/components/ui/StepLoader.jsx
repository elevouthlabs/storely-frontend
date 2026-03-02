// const StepLoader = () => {
//   return (
//     <div className="flex items-center justify-center w-full max-w-xl mx-auto">
//       {/* Step 1 - Active */}
//       <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5739BF] text-white font-semibold">
//         1
//       </div>

//       {/* Line */}
//       <div className="flex-1 h-1 mx-2 rounded bg-gray-200" />

//       {/* Step 2 */}
//       <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 font-semibold">
//         2
//       </div>

//       {/* Line */}
//       <div className="flex-1 h-1 mx-2 rounded bg-gray-200" />

//       {/* Step 3 */}
//       <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 font-semibold">
//         3
//       </div>

//       {/* Line */}
//       <div className="flex-1 h-1 mx-2 rounded bg-gray-200" />

//       {/* Step 4 */}
//       <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 font-semibold">
//         4
//       </div>
//     </div>
//   );
// };

// export default StepLoader;

import React from "react";

const StepLoader = ({ currentStep = 1, totalSteps = 4 }) => {
  return (
    <div className="flex items-center justify-center w-full max-w-xl mx-auto">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const step = index + 1;
        const isActive = step === currentStep;
        const isCompleted = step < currentStep;

        return (
          <React.Fragment key={step}>
            {/* Step circle */}
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold
                ${
                  isActive
                    ? "bg-purple-700 text-white"
                    : isCompleted
                      ? "bg-purple-700 text-white"
                      : "bg-gray-200 text-gray-500"
                }`}
            >
              {step}
            </div>

            {/* Line (except after last step) */}
            {step !== totalSteps && (
              <div
                className={`flex-1 h-1 mx-2 rounded
                  ${isCompleted ? "bg-purple-700" : "bg-gray-200"}`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepLoader;
