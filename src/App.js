import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./App.css";

// Component to handle redirects and scrolling
function ScrollHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Handle /about and /contact routes by redirecting to home and scrolling
    if (location.pathname === "/about") {
      navigate("/", { replace: true });
      setTimeout(() => {
        const element = document.getElementById("about");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else if (location.pathname === "/contact") {
      navigate("/", { replace: true });
      setTimeout(() => {
        const element = document.getElementById("contact");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location.pathname, navigate]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollHandler />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Removed separate About and Contact routes - they're now sections in Home */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;