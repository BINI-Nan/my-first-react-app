import React from "react";
import "../PageStyle.css";

function Home() {
  const handleClick = (text) => {
    alert(`You clicked on "${text}"!`);
  };

  return (
    <div className="page home-page">
      <h1 className="home-welcome">Welcome</h1>
      <div className="home-boxes">
        <div className="home-box" onClick={() => handleClick("Learn")}>
          Learn
        </div>
        <div className="home-box" onClick={() => handleClick("Explore")}>
          Explore
        </div>
        <div className="home-box" onClick={() => handleClick("More")}>
          More
        </div>
      </div>
    </div>
  );
}

export default Home;
