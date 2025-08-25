import React from 'react';
import './Homepage.css';
import tourismVideo from '../assets/tourism.mp4';  

const Homepage = () => {
  return (
    <div>
      <nav className="nav">
        <div className="logo">TripPlanner</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">DashBoard</a></li>
          <li><a href="#">Itinerary</a></li>
        </ul>
      </nav>

      <section className="hero-section">
        <video 
          autoPlay 
          loop 
          muted 
          className="background-video"
        >
          <source src={tourismVideo} type="video/mp4" />
        </video>

        <div className="hero-content">
          <h1>Plan Your Trip</h1>
          <p>Stunning destination , seamless Planning</p>
          <button className="btn" onClick={() => alert('start planning!')}>
            Start Planning
          </button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
