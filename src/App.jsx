import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Register from "./Pages/Register/Register.jsx";
import Login from "./Pages/Login/Login.jsx";
import VerifyOtp from "./Pages/VerifyOtp/VerifyOtp.jsx";
import { AuthProvider } from "./context/AuthContext";
import AboutBusiness from "./Pages/RegisterBusiness/AboutBusiness.jsx";
// import Contact from "./Pages/RegisterBusiness/Contact.jsx";
import AddItems from "./Pages/RegisterBusiness/AddItems.jsx";
import Launch from "./Pages/RegisterBusiness/Launch.jsx";
import RegisterBusiness from "./Pages/RegisterBusiness/RegisterBusiness.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import Footer from "./components/Footer/Footer.jsx";

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
  ];

  const hideNavbar = noNavbarRoutes.includes(location.pathname);

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
