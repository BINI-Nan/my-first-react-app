import React from "react";
import "../PageStyle.css";

function About() {
  const handleClick = (text) => {
    alert(`You clicked on "${text}"!`);
  };

  return (
    <div className="about-page">
      <h1 className="about-welcome">Hi, I’m Nan</h1>
      <div className="about-boxes">
        <div className="about-box" onClick={() => handleClick("Gallery")}>Gallery</div>
        <div className="about-box" onClick={() => handleClick("Me/Myself")}>Me/Myself</div>
        <div className="about-box" onClick={() => handleClick("Other")}>Other</div>
      </div>
    </div>
  );
}

export default About;
