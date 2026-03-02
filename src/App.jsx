import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar/Navbar.jsx";
import Register from "./pages/auth/Register.jsx";
import Login from "./pages/auth/Login.jsx";
import VerifyOtp from "./pages/auth/VerifyOtp.jsx";
import { AuthProvider } from "./context/AuthContext";
import AddItems from "./pages/RegisterBusiness/AddItems.jsx";
import Launch from "./pages/RegisterBusiness/Launch.jsx";
import RegisterBusiness from "./pages/RegisterBusiness/RegisterBusiness.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import DashboardLayout from "./layouts/dashboard_layout.js";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import DashboardOrders from "./pages/Dashboard/Orders.js";
import DashboardProducts from "./pages/Dashboard/DashboardProducts.jsx";
import DashboardServices from "./pages/Dashboard/DashboardServices.jsx";
import DashboardInventory from "./pages/Dashboard/DashboardInventory.jsx";
import DashboardCustomers from "./pages/Dashboard/DashboardCustomers.jsx";
import DashboardPayments from "./pages/Dashboard/DashboardPayments.jsx";
import DashboardAnalytics from "./pages/Dashboard/DashboardAnalytics.jsx";
import DashboardSettings from "./pages/Dashboard/DashboardSettings.jsx";
import AuthLayout from "./layouts/auth_layout.js";
import ForgotPassword from "./pages/auth/ForgotPassword.jsx";
import ResetPassword from "./pages/auth/ResetPassword.jsx";

function AppWrapper() {
  const location = useLocation();

  const noNavbarRoutes = [
    "/auth",
    "/auth/register",
    "/auth/login",
    "/auth/forgot-password",
    "/auth/reset-password",
    "/auth/verify-otp",
    "/about-business",
    "/register-business",
    "/contact-business",
    "/addItem",
    "/launch",
    "/dashboard",
  ];

  const hideNavbar =
    noNavbarRoutes.includes(location.pathname) ||
    location.pathname.includes("dashboard");

  return (
    <div>
      {/* react-hot-toast container */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: "8px",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
          },
          error: {
            iconTheme: {
              primary: "#4B0082",
              secondary: "#fff",
            },
          },
        }}
      />
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route inedx element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="verify-otp" element={<VerifyOtp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
        <Route path="/register-business" element={<RegisterBusiness />} />
        {/* <Route path="/contact-business" element={<Contact />} /> */}
        <Route path="/addItem" element={<AddItems />} />
        <Route path="/launch" element={<Launch />} />
        <Route path="/" element={<LandingPage />} />

        {/* Dashboard nested routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<DashboardOrders />} />
          <Route path="products" element={<DashboardProducts />} />
          <Route path="services" element={<DashboardServices />} />
          <Route path="inventory" element={<DashboardInventory />} />
          <Route path="customers" element={<DashboardCustomers />} />
          <Route path="payments" element={<DashboardPayments />} />
          <Route path="analytics" element={<DashboardAnalytics />} />
          <Route path="settings" element={<DashboardSettings />} />
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
