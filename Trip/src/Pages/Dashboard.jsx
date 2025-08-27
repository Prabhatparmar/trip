import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [trips] = useState([
    {
      destination: "Goa",
      startDate: "2025-09-12",
      endDate: "2025-09-15",
      travelers: 2,
      activities: "Beach, Food"
    },
    {
      destination: "Manali",
      startDate: "2025-11-22",
      endDate: "2025-11-28",
      travelers: 4,
      activities: "Trekking, Skiing"
    }
  ]);

  return (
    <div className='dashboard'>
      <h1>Welcome Back!</h1>

    
      <div className="stats">
        <div className="stat-card">Total Trips: {trips.length}</div>
        <div className="stat-card">Upcoming: 1</div>
        <div className="stat-card">Completed: 1</div>
      </div>

      <h2>My Trips</h2>
      <div className="trips-grid">
        {trips.map((trip, index) => (
          <div className="trip-card" key={index}>
            <h3>{trip.destination}</h3>
            <p>{trip.startDate} → {trip.endDate}</p>
            <p>Travelers: {trip.travelers}</p>
            <p>Activities: {trip.activities}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
