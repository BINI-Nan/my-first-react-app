import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import background from "./resort.webp"; // your resort image

function App() {
  return (
    <div
      className="app-container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "#fff",
      }}
    >
      <Navbar />
      <div className="welcome-text">
        <h1>Welcome to Nan's Resort</h1>
      </div>
    </div>
  );
}

export default App;
