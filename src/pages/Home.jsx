import React from "react";
import backgroundImage from "../assets/it.jpg"; // Import the image

const Home = () => {
  return (
    <div 
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,  // ✅ Use the imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)"
      }}
    >
      <h1>Welcome to IT Company</h1>
      <p>Your trusted tech partner</p>
    </div>
  );
};

export default Home;
