import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Register from "./Pages/Register/Register.jsx";
import Login from "./pages/Login/Login.jsx";
import VerifyOtp from "./Pages/VerifyOtp/VerifyOtp.jsx";
import { AuthProvider } from "./context/AuthContext";
import AboutBusiness from "./Pages/RegisterBusiness/AboutBusiness.jsx";
import Contact from "./Pages/RegisterBusiness/Contact.jsx";
import AddItems from "./Pages/RegisterBusiness/AddItems.jsx";

function AppWrapper() {
  const location = useLocation();

  const noNavbarRoutes = [
    "/register",
    "/login",
    "/verify-otp",
    "/about-business",
    "/contact-business",
    "/addItem",
  ];

  const hideNavbar = noNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/about-business" element={<AboutBusiness />} />
        <Route path="/contact-business" element={<Contact />} />
        <Route path="/addItem" element={<AddItems />} />
        <Route path="/" element={<div>Home Page</div>} />
      </Routes>
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
