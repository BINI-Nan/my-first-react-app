import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    // Close mobile menu when clicking a link
    setIsMobileMenuOpen(false);
    
    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Scroll detection to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "contact"];
      const scrollPosition = window.scrollY + 150; // offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount to set initial active section

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Nan's Portfolio</div>
      
      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li className={activeSection === "home" ? "active" : ""}>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>
            <span className="nav-icon">🏠</span>
            Home
          </a>
        </li>
        <li className={activeSection === "about" ? "active" : ""}>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>
            <span className="nav-icon">👤</span>
            About
          </a>
        </li>
        <li className={activeSection === "contact" ? "active" : ""}>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>
            <span className="nav-icon">📧</span>
            Contact
          </a>
        </li>
      </ul>

      {/* Desktop Menu Icon - only shows on desktop */}
      <button className={`menu-icon desktop-menu ${isDropdownOpen ? "active" : ""}`} onClick={toggleDropdown}>
        <span className="menu-line"></span>
        <span className="menu-line"></span>
        <span className="menu-line"></span>
      </button>

      {/* Mobile Menu Icon - only shows on mobile */}
      <button className={`menu-icon mobile-menu ${isMobileMenuOpen ? "active" : ""}`} onClick={toggleMobileMenu}>
        <span className="menu-line"></span>
        <span className="menu-line"></span>
        <span className="menu-line"></span>
      </button>

      {/* Desktop Dropdown Menu - Profile, Settings, More Options */}
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <ul className="dropdown-list">
            <li className="dropdown-item">
              <a href="#profile" onClick={(e) => { e.preventDefault(); setIsDropdownOpen(false); }}>
                <span className="dropdown-icon">👤</span>
                Profile
              </a>
            </li>
            <li className="dropdown-item">
              <a href="#settings" onClick={(e) => { e.preventDefault(); setIsDropdownOpen(false); }}>
                <span className="dropdown-icon">⚙️</span>
                Settings
              </a>
            </li>
            <li className="dropdown-item">
              <a href="#more" onClick={(e) => { e.preventDefault(); setIsDropdownOpen(false); }}>
                <span className="dropdown-icon">📋</span>
                More Options
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Overlay to close menus when clicking outside */}
      {isMobileMenuOpen && <div className="menu-overlay" onClick={toggleMobileMenu}></div>}
      {isDropdownOpen && <div className="menu-overlay" onClick={toggleDropdown}></div>}
    </nav>
  );
}

export default Navbar;