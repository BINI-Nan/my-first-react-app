import React from "react";
import "../PageStyle.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1 className="about-main-title">About Me</h1>
        
        <div className="about-cards-container">
          {/* Skills Card */}
          <div className="about-card">
            <div className="card-icon-top">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                <line x1="20" y1="15" x2="20" y2="28" stroke="currentColor" strokeWidth="2"/>
                <circle cx="15" cy="28" r="3" stroke="currentColor" strokeWidth="2"/>
                <circle cx="25" cy="28" r="3" stroke="currentColor" strokeWidth="2"/>
                <line x1="20" y1="20" x2="15" y2="25" stroke="currentColor" strokeWidth="2"/>
                <line x1="20" y1="20" x2="25" y2="25" stroke="currentColor" strokeWidth="2"/>
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
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                <line x1="20" y1="15" x2="20" y2="28" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="28" r="3" stroke="currentColor" strokeWidth="2"/>
                <circle cx="20" cy="28" r="3" stroke="currentColor" strokeWidth="2"/>
                <circle cx="28" cy="28" r="3" stroke="currentColor" strokeWidth="2"/>
                <line x1="20" y1="20" x2="12" y2="25" stroke="currentColor" strokeWidth="2"/>
                <line x1="20" y1="20" x2="28" y2="25" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            
            <h2 className="card-main-title">Educational Background</h2>
            <p className="card-subtitle">Academic Journey</p>
            
            <div className="card-highlight-badge">Current</div>
            
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
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                <line x1="20" y1="15" x2="20" y2="28" stroke="currentColor" strokeWidth="2"/>
                <circle cx="10" cy="28" r="3" stroke="currentColor" strokeWidth="2"/>
                <circle cx="20" cy="28" r="3" stroke="currentColor" strokeWidth="2"/>
                <circle cx="30" cy="28" r="3" stroke="currentColor" strokeWidth="2"/>
                <line x1="20" y1="20" x2="10" y2="25" stroke="currentColor" strokeWidth="2"/>
                <line x1="20" y1="20" x2="30" y2="25" stroke="currentColor" strokeWidth="2"/>
                <circle cx="20" cy="20" r="2" fill="currentColor"/>
              </svg>
            </div>
            
            <h2 className="card-main-title">Leadership Experience</h2>
            <p className="card-subtitle">Roles & Positions</p>
            
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
    </div>
  );
}

export default About;