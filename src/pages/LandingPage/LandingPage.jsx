import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";

import LandingPageImage1 from "../../assets/landing-page-img-1.png";
import LandingPageImage2 from "../../assets/landing-page-img-2.png";
import LandingPageImage3 from "../../assets/landing-page-img-3.png";
import LandingPageImage4 from "../../assets/landing-page-img-4.png";
import LandingPageImage5 from "../../assets/landing-page-img-5.png";

import LPGrid1 from "../../assets/lp-grid-1.png";
import LPGrid2 from "../../assets/lp-grid-2.png";
import LPGrid3 from "../../assets/lp-grid-3.png";
import LPGrid4 from "../../assets/lp-grid-4.png";
import LPGrid5 from "../../assets/lp-grid-5.png";
import LPGrid6 from "../../assets/lp-grid-6.png";

import FiveStars from "../../assets/5-stars.png";
import ReviewUser from "../../assets/review-user.png";

// ── Reusable reveal wrapper ──────────────────────────────────────────────────
const Reveal = ({ children, delay = 0, direction = "up", className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      scale: direction === "scale" ? 0.92 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ── Staggered children container ────────────────────────────────────────────
const StaggerContainer = ({ children, className = "", stagger = 0.1 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const StaggerItem = ({ children, className = "" }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// ── Animated check-list item ─────────────────────────────────────────────────
const CheckItem = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="flex items-center gap-3 my-4"
      initial={{ opacity: 0, x: -24 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.35, delay: delay + 0.15, type: "spring", stiffness: 260 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="#8A2BE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" />
        </svg>
      </motion.div>
      <span>{children}</span>
    </motion.div>
  );
};

// ── Floating badge ────────────────────────────────────────────────────────────
const FloatingBadge = ({ children }) => (
  <motion.button
    className="border border-2 border-[#00000030] rounded-full px-4 py-2 font-Inter font-medium text-base leading-6 flex items-center"
    initial={{ opacity: 0, y: -12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    whileHover={{ scale: 1.03 }}
  >
    {children}
  </motion.button>
);

// ── Hover card ────────────────────────────────────────────────────────────────
const HoverCard = ({ children, className = "" }) => (
  <motion.div
    className={className}
    whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(138,43,226,0.12)" }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    {children}
  </motion.div>
);

// ── Purple gradient button ────────────────────────────────────────────────────
const PurpleBtn = ({ children, className = "", onClick }) => (
  <motion.button
    className={`bg-gradient-to-b from-[#8A2BE2] to-[#4B0082] font-Inter font-semibold text-base leading-6 text-[#CCCCCC] ${className}`}
    whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(138,43,226,0.4)" }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    onClick={onClick}
  >
    {children}
  </motion.button>
);

// ── Step number with draw-in ──────────────────────────────────────────────────
const StepNumber = ({ number, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.span
      ref={ref}
      className="text-[#8A2BE2] text-[50px] font-bold"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay, type: "spring", stiffness: 200 }}
    >
      {number}
    </motion.span>
  );
};

const LandingPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

  const faqs = [
    { question: "Is Storely really free to start?", answer: "We offer branding, performance marketing, content strategy, and campaign development — all tailored to drive growth, impact, and lasting brand value." },
    { question: "Do I need any technical skills?", answer: "No technical skills needed. Your store goes live faster than making coffee." },
    { question: "How do I receive payments?", answer: "Get paid immediately with secure checkout trusted by thousands. We integrate with leading payment providers to ensure your transactions are safe and seamless." },
    { question: "Can I sell services, not just products?", answer: "One platform for everything you sell. Products, services, bookings—all in one place." },
    { question: "How do my customers find my store?", answer: "You get a unique Storely link that you can share anywhere — WhatsApp, Instagram, Facebook, email, or even printed on a flyer. One link does it all." },
  ];

  const gridCards = [
    { title: "Get Online Instantly", desc: "No technical skills needed. Your store goes live faster than making coffee.", img: LPGrid1 },
    { title: "Your Own Professional Storefront", desc: "Beautiful, branded storefront that builds trust and drives sales.", img: LPGrid2 },
    { title: "Sell Products & Services", desc: "One platform for everything you sell. Products, services, bookings—all in one place.", img: LPGrid3 },
    { title: "Accept Payments Instantly", desc: "Get paid immediately with secure checkout trusted by thousands.", img: LPGrid4 },
    { title: "Track Sales Easily", desc: "Clear dashboard shows what's working. No confusion, just clarity.", img: LPGrid5 },
    { title: "AI That Helps You Sell Better", desc: "Write better descriptions, reach more customers—AI does the heavy lifting.", img: LPGrid6 },
  ];

  return (
    <div className="max-w-6xl mx-auto">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <div className="px-4 py-8">
        <div className="md:flex md:items-center md:gap-8">
          <div>
            <FloatingBadge>
              <motion.span
                className="h-2 w-2 bg-[#00C950] rounded-full inline-block mr-2"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-sm">Join 10,000+ Businesses online</span>
            </FloatingBadge>

            <motion.div
              className="font-bold text-[35px] font-Inter mt-8 leading-[42px] text-[#000000]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Start selling online in minutes
            </motion.div>

            <motion.div
              className="font-Inter text-[18px] mt-4 leading-[28px] text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              Create a professional business page, list your products or services, share one link, and receive payments instantly — no technical skills required.
            </motion.div>

            <motion.div
              className="flex flex-col gap-4 mt-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34 }}
            >
              <NavLink to="/register-business">
                <PurpleBtn className="w-full rounded-lg p-3">Create My Store</PurpleBtn>
              </NavLink>
              <NavLink to="/about-business">
                <motion.button
                  className="w-full border border-[#00000030] px-6 py-3 rounded-lg font-Inter font-medium leading-6"
                  whileHover={{ scale: 1.02, backgroundColor: "#f9f6ff" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  See how it works
                </motion.button>
              </NavLink>
            </motion.div>

            <motion.div
              className="mt-10 flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {["Secure payments", "Built for whatsapp selling"].map((text, i) => (
                <div key={i} className="flex items-center gap-2 text-[13px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                    fill="none" stroke="#00A63E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.01 }}
          >
            <img src={LandingPageImage1} alt="Landing Page Image" className="w-full h-auto rounded-lg" />
          </motion.div>
        </div>
      </div>

      {/* ── FEATURES GRID ─────────────────────────────────────────────────── */}
      <div className="px-4 py-8 bg-[#f5f5f5]">
        <Reveal className="text-center">
          <div className="font-bold text-[24px] font-Inter mt-10 leading-[32px] text-[#000000]">
            Everything You Need to Start Selling Online
          </div>
          <div className="font-Inter text-[18px] mt-6 leading-[28px] text-gray-700">
            Powerful features designed to help you grow, without the complexity of traditional e-commerce platforms.
          </div>
        </Reveal>

        <StaggerContainer className="mt-10 flex flex-col gap-6 md:grid md:grid-cols-3" stagger={0.08}>
          {gridCards.map((card, i) => (
            <StaggerItem key={i}>
              <HoverCard className="flex-1 rounded-[20px] px-6 pt-4 bg-white shadow-md overflow-hidden">
                <div className="font-bold text-[18px] font-Inter leading-[28px] text-[#000000]">{card.title}</div>
                <div className="font-Inter text-[16px] mt-2 leading-[24px] text-gray-700">{card.desc}</div>
                <motion.img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-auto mt-4 rounded-lg"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4 }}
                />
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* ── WHATSAPP SELLING ──────────────────────────────────────────────── */}
      <div className="px-4 py-8">
        <div className="md:flex md:gap-6">
          <div>
            <Reveal>
              <div className="font-bold text-[24px] font-Inter mt-10 leading-[32px] text-[#000000]">
                Everything You Need to Start Selling Online
              </div>
              <div className="font-Inter text-[18px] mt-6 leading-[28px] text-gray-700">
                Storely turns WhatsApp conversations into real sales without long chats or manual transfers. Send a link, get paid, and manage orders automatically.
              </div>
            </Reveal>
            <div className="mt-10">
              {["No more 'DM for price'", "Automatic order tracking", "Instant payment confirmation", "Professional look for your business"  ].map((text, i) => (
                <CheckItem key={i} delay={i * 0.1}>{text}</CheckItem>
              ))}
            </div>
            <Reveal delay={0.3}>
              <div className="mt-10">
                <PurpleBtn className="flex gap-4 items-center justify-center w-full rounded-lg px-3 py-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
                  </svg>
                  <span>Start Selling On Whatsapp</span>
                </PurpleBtn>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" className="md:w-1/2">
            <img src={LandingPageImage2} alt="Landing Page Image" className="w-full mt-10 rounded-lg" />
          </Reveal>
        </div>
      </div>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
      <div className="px-4 py-8 bg-[#f5f5f5]">
        <div className="md:flex md:gap-6">
          <div>
            <Reveal>
              <FloatingBadge><span className="text-sm">How it works</span></FloatingBadge>
              <div className="font-bold text-[24px] font-Inter mt-5 leading-[32px] text-[#000000]">
                Get started in three simple steps
              </div>
            </Reveal>

            <div className="flex flex-col gap-3 mt-6">
              {[
                { n: "01", title: "Create your store", desc: "Sign up and customize your business page in minutes" },
                { n: "02", title: "Add products or services", desc: "Upload photos, set prices, and write descriptions" },
                { n: "03", title: "Share link & get paid", desc: "Send your link anywhere and start receiving payments" },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-5 my-4 font-Inter"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  <StepNumber number={step.n} delay={i * 0.12} />
                  <div className="flex flex-col gap-2">
                    <span className="text-[18px] font-bold">{step.title}</span>
                    <span className="text-[18px] text-gray-600">{step.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <Reveal direction="left" delay={0.15} className="mt-5 bg-white pt-5 px-4 rounded-[10px] md:w-1/2">
            <img src={LandingPageImage3} alt="Landing Page Image" className="w-full h-auto mt-10 rounded-lg" />
          </Reveal>
        </div>
      </div>

      {/* ── DASHBOARD FEATURES ────────────────────────────────────────────── */}
      <div className="px-4 py-8">
        <div className="md:flex md:gap-6">
          <div>
            <Reveal>
              <div className="font-bold text-[24px] font-Inter mt-10 leading-[32px] text-[#000000]">
                Everything You Need to Start Selling Online
              </div>
              <div className="font-Inter text-[18px] mt-6 leading-[28px] text-gray-700">
                Storely turns WhatsApp conversations into real sales without long chats or manual transfers. Send a link, get paid, and manage orders automatically.
              </div>
            </Reveal>
            <div className="mt-10">
              {["Add, edit, hide products & services", "View and manage orders", "Update order status", "Share store link anytime"].map((text, i) => (
                <CheckItem key={i} delay={i * 0.1}>{text}</CheckItem>
              ))}
            </div>
          </div>

          <Reveal direction="left" className="mt-10">
            <img src={LandingPageImage4} alt="Landing Page Image" className="w-full h-auto mt-10 rounded-lg" />
          </Reveal>
        </div>
      </div>

      {/* ── SECURITY ──────────────────────────────────────────────────────── */}
      <div className="px-4 py-8 bg-[#f5f5f5]">
        <Reveal className="text-center">
          <div className="font-bold text-[24px] font-Inter mt-10 leading-[32px] text-[#000000]">
            Built to Protect Businesses and Buyers
          </div>
          <div className="font-Inter text-[18px] mt-6 leading-[28px] text-gray-700">
            We take security seriously so you can focus on growing your business.
          </div>
        </Reveal>

        <StaggerContainer className="mt-10 flex flex-col md:flex-row gap-6" stagger={0.12}>
          {[
            {
              icon: <><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="m9 12 2 2 4-4" /></>,
              title: "Verified Businesses",
              desc: "Phone and email verification for every seller to ensure legitimacy",
            },
            {
              icon: <><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
              title: "Secure Payments",
              desc: "Payments processed through trusted, encrypted providers",
            },
            {
              icon: <><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></>,
              title: "Platform Monitoring",
              desc: "Active fraud detection and prevention systems working 24/7.",
            },
          ].map((card, i) => (
            <StaggerItem key={i}>
              <HoverCard className="flex flex-col items-center rounded-[20px] p-6 bg-white shadow-md h-full">
                <motion.div
                  className="bg-[#8A2BE220] p-3 rounded-full mb-3"
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="#8A2BE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {card.icon}
                  </svg>
                </motion.div>
                <div className="font-bold text-[18px] font-Inter leading-[28px] text-[#000000]">{card.title}</div>
                <div className="font-Inter text-center text-[14px] mt-2 leading-[24px] text-gray-700">{card.desc}</div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <div className="px-4 py-8">
        <div className="md:flex md:gap-6">
          <div className="md:w-1/2">
            <Reveal>
              <span>FAQs</span>
              <div className="font-bold text-[24px] font-Inter mt-10 leading-[32px] text-[#000000]">
                Frequently Asked Questions
              </div>
              <div className="font-Inter text-[18px] mt-6 leading-[28px] text-gray-700">
                Find quick answers to the most common questions about our services, process, and support
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <PurpleBtn className="flex items-center justify-center gap-4 mt-5 rounded-full py-3 px-7">
                <span>Let's Talk</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><path d="m10 8 4 4-4 4" />
                </svg>
              </PurpleBtn>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10">
                <img src={LandingPageImage5} alt="Landing Page Image"
                  className="w-full h-auto mt-10 rounded-lg md:max-w-[75%]" />
              </div>
            </Reveal>
          </div>

          <ul className="mt-10 flex flex-col gap-4 md:flex-1 md:w-1/2">
            {faqs.map((faq, index) => (
              <motion.li
                key={index}
                className="bg-gray-100 p-3 py-2 rounded-lg cursor-pointer overflow-hidden"
                onClick={() => toggleFaq(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                whileHover={{ backgroundColor: "#f0e8ff" }}
              >
                <div className="flex items-center justify-between">
                  <motion.span
                    className="font-bold font-Inter text-[14px]"
                    animate={{ color: activeFaq === index ? "#8A2BE2" : "#000000" }}
                    transition={{ duration: 0.2 }}
                  >
                    {faq.question}
                  </motion.span>
                  <motion.div
                    className="rounded-full border border-gray-500 p-1 ml-2 flex-shrink-0"
                    animate={{
                      backgroundColor: activeFaq === index ? "#8A2BE2" : "transparent",
                      borderColor: activeFaq === index ? "#8A2BE2" : "#6b7280",
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <motion.svg
                      animate={{ rotate: activeFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                      fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      stroke={activeFaq === index ? "#fff" : "currentColor"}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </motion.svg>
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {activeFaq === index && (
                    <motion.p
                      className="mt-2 text-gray-700 text-[14px]"
                      key="answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <div className="px-4 py-8 bg-[#f5f5f5]">
        <Reveal className="text-center">
          <div className="font-bold text-[24px] font-Inter mt-10 leading-[32px] text-[#000000]">
            Loved by Small Business Owners
          </div>
          <div className="font-Inter text-[18px] mt-6 leading-[28px] text-gray-700">
            Join thousands of entrepreneurs who are growing their businesses with Storely
          </div>
        </Reveal>

        <StaggerContainer className="mt-10 flex flex-col gap-5 md:flex-row" stagger={0.15}>
          {[
            { quote: '"Storely changed my business! I went from Instagram DMs to a professional store in minutes. My sales tripled in the first month."', name: "Sarah K.", role: "Fashion Designer" },
            { quote: '"The payment integration is seamless. I get paid instantly and the order management keeps me organized. Best decision ever!"', name: "Maria S.", role: "Catering Services" },
          ].map((review, i) => (
            <StaggerItem key={i}>
              <HoverCard className="card rounded-lg flex flex-col gap-3 bg-white shadow-md p-4 h-full">
                <motion.img
                  src={FiveStars} alt="5 Stars" className="w-24 h-auto mb-2"
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.2, type: "spring" }}
                />
                <p className="text-gray-700 text-[14px]">{review.quote}</p>
                <div className="flex gap-3 mt-3">
                  <motion.img
                    src={ReviewUser} alt="Review User"
                    className="w-10 h-10 rounded-full inline-block mr-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <div className="flex flex-col">
                    <span className="text-gray-900 font-bold text-[14px]">{review.name}</span>
                    <span>{review.role}</span>
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
};

export default LandingPage;