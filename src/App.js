import React, { useState } from 'react';
import './App.css';

// Import images
import tshirt1 from './assests/ts.PNG';
import tshirt2 from './assests/n1.PNG';
import tshirt3 from './assests/n2.PNG';
import tshirt4 from './assests/n3.PNG';
import tshirt5 from './assests/n4.PNG';
import girlImage from './assests/girl.PNG';
import logoImage from './assests/log.PNG';

const tshirtImages = [tshirt1, tshirt2, tshirt3, tshirt4, tshirt5];

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
          <img src={logoImage} alt="Brand Logo" />
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
            <li>✔ click on the girl pic to see various other designs 
              printed on T-shirt
            </li>
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
              src={girlImage}
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
