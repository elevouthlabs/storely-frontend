import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import AuthLayout from "./components/Dashboard/AuthLayout.jsx";
import SignUp from "./Pages/Dashboard/SignUp.jsx";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/"></Route>

        <Route path="/sign-up" element={<AuthLayout />}>
          <Route index element={<SignUp />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
