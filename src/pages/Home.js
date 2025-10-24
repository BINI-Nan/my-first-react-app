import React, { useState } from "react";
import "../PageStyle.css";
// Import your image
import profileImage from "../assets/nanz.jpg";

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! Thank you for reaching out.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* HOME SECTION */}
      <section id="home" className="home-container">
        <div className="home-content">
          <div className="text-section">
            <p className="subheading">Sawadee Kha</p>
            
            <div className="typewriter-container">
              <h1 className="main-heading">
                <span className="typewriter">I am Nan Smith</span>
              </h1>
            </div>

            <p className="intro-text">
              Hi there! I'm Rennan Capuyan, an IT student at Cebu Technological University - Danao Campus. This portfolio is my small space to give a glimpse of who I am and the things I'm exploring in tech. I'm not a pro at this, but feel free to look around and check out my work hehe.
            </p>

            <button className="explore-btn">Explore My Work</button>
          </div>

          <div className="image-section">
            <div className="image-placeholder">
              <img
                src={profileImage}
                alt="Nan Smith"
                className="main-profile-image"
              />
              
              {/* Camera Flash Effects */}
              <div className="camera-flashes">
                <div className="flash flash1"></div>
                <div className="flash flash2"></div>
                <div className="flash flash3"></div>
                <div className="flash flash4"></div>
                <div className="flash flash5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about-page">
        <div className="about-content">
          <h1 className="about-main-title">About Me</h1>
          
          <div className="about-cards-container">
            {/* Skills Card */}
            <div className="about-card">
              <div className="card-icon-top">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <rect x="10" y="8" width="30" height="34" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <line x1="15" y1="15" x2="25" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="15" y1="20" x2="28" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="15" y1="25" x2="22" y2="25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M32 28 L35 31 L42 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="card-main-title">Skills</h2>
              <p className="card-subtitle">Public Service Abilities</p>
              <div className="card-divider"></div>
              <ul className="card-list">
                <li>Event Planning & Coordination</li>
                <li>Team Leadership & Collaboration</li>
                <li>Community Engagement</li>
                <li>Public Speaking & Communication</li>
                <li>Student Representation & Advocacy</li>
              </ul>
            </div>

            {/* Educational Background Card */}
            <div className="about-card about-card-highlight">
              <div className="card-icon-top">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <path d="M25 15 L10 22 L25 29 L40 22 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M10 22 L10 32 L25 39 L40 32 L40 22" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <line x1="40" y1="22" x2="40" y2="38" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="40" cy="40" r="2" fill="currentColor"/>
                </svg>
              </div>
              <h2 className="card-main-title">Educational Background</h2>
              <p className="card-subtitle">Academic Journey</p>
              <span className="card-highlight-badge">Current</span>
              <div className="card-divider"></div>
              <ul className="card-list">
                <li>Bachelor of Science in Information Technology</li>
                <li>Cebu Technological University - Danao Campus</li>
                <li>Currently pursuing my degree</li>
                <li>Learning and exploring technology</li>
                <li>Still developing my coding skills</li>
              </ul>
            </div>

            {/* Leadership Experience Card */}
            <div className="about-card">
              <div className="card-icon-top">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <path d="M15 10 L35 10 L35 25 Q35 32 25 32 Q15 32 15 25 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M10 10 L10 18 Q10 22 15 22" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M40 10 L40 18 Q40 22 35 22" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <rect x="20" y="32" width="10" height="6" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <rect x="15" y="38" width="20" height="4" fill="currentColor"/>
                </svg>
              </div>
              <h2 className="card-main-title">Leadership Experience</h2>
              <p className="card-subtitle">Roles & Achievements</p>
              <div className="card-divider"></div>
              <ul className="card-list">
                <li>PYAP Events Coordinator (2021-2022)</li>
                <li>TECNOGADGET Organization BSIT Night Representative (2023-2024)</li>
                <li>Class Secretary (2022-Present)</li>
                <li>Supreme Student Government - COT Night Representative (Present)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-container">
        <h1 className="contact-title">CONTACT ME</h1>
        
        <div className="contact-form-card">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="6"
                required
              />
            </div>

            <button type="submit" className="send-button">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 2L9 11M18 2L12 18L9 11M18 2L2 8L9 11"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Send Message
            </button>
          </form>
        </div>

        <a href="#home" className="back-to-home-button">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 15L10 5M10 5L5 10M10 5L15 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Home
        </a>
      </section>
    </>
  );
}

export default Home;