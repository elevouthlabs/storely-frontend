import { useState, useEffect } from "react";
import Hero from "./Hero.jsx"
import Everything from "./Everything.jsx";
import Sell from "./Sell.jsx";
import Started from "./Started.jsx";
import FAQ from "./Faq.jsx";
import Business from "./Business.jsx";
import Solution from "./Solution.jsx";
import Features from "./Features.jsx";
import Powered from "./Powered.jsx";
import Pricing from "./Pricing.jsx";
import Community from "./Community.jsx";
import WaitlistModal from "../../components/Waitlist/WaitlistModal.jsx";

const LandingPage = () => {

    const [openModal, setOpenModal] = useState(false);


    useEffect(() => {
        setOpenModal(true);
    }, []);

    return (
        <div>
            <WaitlistModal open={openModal} />
            <Hero />
            <Everything />
            <Sell />
            <Solution />
            <Features />
            <Started />
            <FAQ />
            <Powered />
            <Pricing />
            <Community />
            <Business />
        </div>
    )
}

export default LandingPage;