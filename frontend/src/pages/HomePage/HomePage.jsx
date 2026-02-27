import Hero from "./Hero.jsx"
import Everything from "./Everything.jsx";
import Sell from "./Sell.jsx";
import Started from "./Started.jsx";
import Run from "./Run.jsx";
import Protect from "./Protect.jsx";
import FAQ from "./Faq.jsx";

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Everything />
            <Sell />
            <Started />
            <Run />
            <Protect />
            <FAQ />
        </div>
    )
}

export default HomePage;