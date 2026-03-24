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

const LandingPage = () => {
    return (
        <div>
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