import { useState } from "react";
import WaitlistModal from "../Waitlist/WaitlistModal.jsx";

const WaitlistSlider = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="w-full z-[9999] fixed top-0 left-0 bg-[#2D1B4E] text-white overflow-hidden">
        <div className="flex justify-between items-center px-4 py-2 text-sm relative">

          {/* Sliding text */}
          <div className="whitespace-nowrap overflow-hidden w-full">
            <div className="flex animate-marquee">
              <span className="mr-8">
                Join thousands of smart sellers already on Storely — Launch, manage & grow your store effortlessly •
              </span>
              <span className="mr-8">
                Join thousands of smart sellers already on Storely — Launch, manage & grow your store effortlessly •
              </span>
              <span className="mr-8">
                Join thousands of smart sellers already on Storely — Launch, manage & grow your store effortlessly •
              </span>
              <span className="mr-8">
                Join thousands of smart sellers already on Storely — Launch, manage & grow your store effortlessly •
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              setOpenModal(false); // reset first
              setTimeout(() => setOpenModal(true), 0); // trigger again
            }}
            className="ml-4 bg-white text-[#2D1B4E] font-semibold px-4 py-1 rounded-full hover:bg-gray-100 transition whitespace-nowrap"
          >
            Join Waitlist
          </button>
        </div>
      </div>

      <WaitlistModal open={openModal} />
    </>
  );
};

export default WaitlistSlider;