import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

const WaitlistModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Open modal on page load
        setIsOpen(true);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[99999999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
            <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-xl relative animate-fadeIn">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
                >
                    ✕
                </button>

                {/* Logo */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center justify-center">
                        <img src={logo} alt="storely logo" />
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-[#252C46] mb-2">
                    Join the Waitlist
                </h2>

                <p className="text-gray-500 mb-6 text-sm">
                    Join thousands of people already on the waitlist and be the first to
                    send gifts on time, every time.
                </p>

                <form className="flex flex-col gap-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Your Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full mt-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Your Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full mt-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Your Phone Number
                        </label>

                        <div className="flex items-center mt-1 border border-gray-200 rounded-full overflow-hidden">
                            {/* Country */}
                            <div className="flex items-center gap-2 px-3 bg-gray-100">
                                <span className="text-sm">🇳🇬</span>
                                <span className="text-xs">+234</span>
                            </div>

                            <input
                                type="tel"
                                placeholder="Enter your phone number"
                                className="flex-1 px-4 py-3 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="mt-4  bg-[#2D1B4E] text-white py-3 rounded-full font-semibold transition"
                    >
                        Join Waitlist
                    </button>
                </form>
            </div>
        </div>
    );
}

export default WaitlistModal;