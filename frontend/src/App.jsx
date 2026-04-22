import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Login from "./pages/Login/Login.jsx";
import VerifyOtp from "./pages/VerifyOtp/VerifyOtp.jsx";
import { AuthProvider } from "./context/AuthContext";
import AddItems from "./pages/RegisterBusiness/AddItems.jsx";
import Launch from "./pages/RegisterBusiness/Launch.jsx";
import RegisterBusiness from "./pages/RegisterBusiness/RegisterBusiness.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import Register from "./pages/Register/Register.jsx";
import WaitlistSlider from "./components/WaitlistSlider/WaitlistSlider.jsx";
import AddProduct from "./pages/AddProduct/AddProduct.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import DashboardLayout from "./layout/DashboardLayout/DashboardLayout.jsx";
import Contact from "./pages/RegisterBusiness/Contact.jsx";
import RegisterSuccess from "./pages/RegisterBusiness/RegisterSuccess.jsx";

function AppWrapper() {
  const location = useLocation();
  const [form, setForm] = useState({
    name: "",
    businessType: "",
    category: "",
    description: "",
    email: "",
    storeUrl: "",
    phone: "",
    whatsappNumber: "",
    brandColor: "",
    location: "",
    logo: null,
    logoPreview: "",
    logoName: "",
    itemName: "",
    itemDescription: "",
    itemPrice: "",
    itemType: "",
    productImage: null,
    productImagePreview: "",
    productImageName: "",
  });

  const noNavbarRoutes = [
    "/auth",
    "/register",
    "/auth/login",
    "/verify-otp",
    "/auth/forgot-password",
    "/auth/reset-password",
    "/auth/verify-otp",
    "/about-business",
    "/register-business",
    "/contact-business",
    "/addItem",
    "/launch",
    "/register-success",
    "/dashboard",
    "/login",
    "/dashboard/add-product"
  ];

  const hideNavbar =
    noNavbarRoutes.includes(location.pathname) ||
    location.pathname.includes("dashboard");

  return (
    <div>
      {!hideNavbar && <WaitlistSlider />}

      {!hideNavbar && <Navbar />}

      <Routes>
        <Route>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
        </Route>
        <Route
          path="/register-business"
          element={<RegisterBusiness form={form} setForm={setForm} />}
        />
        <Route path="/contact-business" element={<Contact form={form} setForm={setForm} />} />
        <Route path="/addItem" element={<AddItems form={form} setForm={setForm} />} />
        <Route path="/launch" element={<Launch form={form} />} />
        <Route path="/register-success" element={<RegisterSuccess form={form} />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-product" element={<AddProduct />} />
        </Route>
      </Routes>
      {!hideNavbar && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppWrapper />
      </AuthProvider>
    </Router>
  );
}

export default App;
