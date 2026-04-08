import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { useForm, ValidationError } from "@formspree/react";

const WaitlistModal = ({ open }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [state, handleSubmit] = useForm("meepvqwn");

    // Open modal when `open` changes to true
    useEffect(() => {
        if (open) setIsOpen(true);
    }, [open]);

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
                    <img src={logo} alt="storely logo" />
                </div>

                {state.succeeded ? (
                    <p className="text-center text-green-600 font-semibold">
                        Thanks for joining!
                    </p>
                ) : (
                    <>
                        <h2 className="text-2xl font-bold text-[#252C46] mb-2">
                            Join the Waitlist
                        </h2>
                        <p className="text-gray-500 mb-6 text-sm">
                            Join thousands already on the waitlist and be among the first to
                            launch, manage, and grow your store with ease.
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="w-full mt-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2"
                                />
                                <ValidationError
                                    prefix="Name"
                                    field="name"
                                    errors={state.errors}
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Your Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full mt-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2"
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Your Phone Number
                                </label>
                                <div className="flex items-center mt-1 border border-gray-200 rounded-full overflow-hidden">
                                    <div className="flex items-center gap-2 px-3 bg-gray-100">
                                        <span className="text-sm">🇳🇬</span>
                                        <span className="text-xs">+234</span>
                                    </div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        className="flex-1 px-4 py-3 focus:outline-none"
                                    />
                                    <ValidationError
                                        prefix="Phone Number"
                                        field="phone"
                                        errors={state.errors}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="mt-4 bg-[#2D1B4E] text-white py-3 rounded-full font-semibold transition"
                            >
                                Join Waitlist
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default WaitlistModal;