import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Register from "./pages/Register/Register.jsx";
import Login from "./Pages/Login/Login.jsx";
import VerifyOtp from "./pages/VerifyOtp/VerifyOtp.jsx";
import { AuthProvider } from "./context/AuthContext";
import AddItems from "./pages/RegisterBusiness/AddItems.jsx";
import Launch from "./pages/RegisterBusiness/Launch.jsx";
import RegisterBusiness from "./pages/RegisterBusiness/RegisterBusiness.jsx";

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
