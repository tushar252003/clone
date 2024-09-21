import React, { useState } from 'react';
import './App.css'; // Make sure to create and import your CSS here

const tshirtImages = ["ts.PNG", "n1.PNG", "n2.PNG", "n3.PNG", "n4.PNG"];

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeTshirtImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % tshirtImages.length);
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="log.PNG" alt="Brand Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#">Catalog</a></li>
          <li><a href="#">How it works</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Use-cases</a></li>
          <li><a href="#">Need help?</a></li>
        </ul>
        <div className="auth-buttons">
          <button className="login-btn">Log in</button>
          <button className="signup-btn">Sign up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Create and sell custom products</h1>
          <ul>
            <li>✔ 100% Free to use</li>
            <li>✔ 900+ High-Quality Products</li>
            <li>✔ Largest global print network</li>
          </ul>
          <div className="hero-buttons">
            <button className="start-btn">Start for free</button>
            <button className="info-btn">How it works?</button>
          </div>
        </div>

        {/* Interactive T-shirt Section */}
        <div className="interactive-section">
          <div className="tshirt-section">
            <img
              id="tshirt-image"
              src={tshirtImages[currentImageIndex]}
              alt="T-shirt"
              style={{ opacity: 1, transition: 'opacity 0.5s ease-in-out' }}
            />
          </div>
          <div className="girl-section">
            <img
              id="girl-image"
              src="girl.PNG"
              alt="Girl Pointing"
              onClick={changeTshirtImage}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
