import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Register from "./pages/Register/Register.jsx";
import Login from "./pages/Login/Login.jsx";
import VerifyOtp from "./pages/VerifyOtp/VerifyOtp.jsx";
import { AuthProvider } from "./context/AuthContext";
import AboutBusiness from "./pages/RegisterBusiness/AboutBusiness.jsx";
// import Contact from "./Pages/RegisterBusiness/Contact.jsx";
import AddItems from "./pages/RegisterBusiness/AddItems.jsx";
import Launch from "./pages/RegisterBusiness/Launch.jsx";
import RegisterBusiness from "./pages/RegisterBusiness/RegisterBusiness.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { SidebarProvider } from "./components/ui/sidebar.jsx";
import { DashboardSidebar } from "./components/DashboardSidebar/page.jsx";
import DashboardLayout from "./dashboard_layout.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import DashboardOrders from "./pages/Dashboard/Orders.js";
import DashboardProducts from "./pages/Dashboard/DashboardProducts.jsx";
import DashboardServices from "./pages/Dashboard/DashboardServices.jsx";
import DashboardInventory from "./pages/Dashboard/DashboardInventory.jsx";
import DashboardCustomers from "./pages/Dashboard/DashboardCustomers.jsx";
import DashboardPayments from "./pages/Dashboard/DashboardPayments.jsx";
import DashboardAnalytics from "./pages/Dashboard/DashboardAnalytics.jsx";
import DashboardSettings from "./pages/Dashboard/DAshboardSettings.jsx";

function AppWrapper() {
  const location = useLocation();

  const noNavbarRoutes = [
    "/register",
    "/login",
    "/verify-otp",
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
  const showDashboardSidebar = location.pathname.includes("dashboard");

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
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
    </>
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
