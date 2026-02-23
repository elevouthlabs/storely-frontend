import { useState } from "react";
import AboutBusiness from "./AboutBusiness";
import Contact from "./Contact";

const RegisterBusiness = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    category: "",
    description: "",
    phone: "",
    location: "",
    logo: null,
  });

  return (
    <div>
      {step === 1 && (
        <AboutBusiness form={form} setForm={setForm} next={() => setStep(2)} />
      )}

      {step === 2 && (
        <Contact form={form} setForm={setForm} back={() => setStep(1)} />
      )}
    </div>
  );
};

export default RegisterBusiness;
