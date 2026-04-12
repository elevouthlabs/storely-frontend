import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
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

function AppWrapper() {
  const location = useLocation();

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
        <Route path="/register-business" element={<RegisterBusiness />} />
        {/* <Route path="/contact-business" element={<Contact />} /> */}
        <Route path="/addItem" element={<AddItems />} />
        <Route path="/launch" element={<Launch />} />
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
