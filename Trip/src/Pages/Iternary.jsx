import React, { useState } from 'react'
import './Iternary.css'

const Iternary = () => {
    const [destination , setdestination] = useState();
    const [Startdate , setStartdate] = useState();
    const [endDate , setendDate] = useState();
    const [activities , setactivities] = useState();
    const [Trip , setTrip] = useState([]);
    const [travelers, setTravelers] = useState(1);
    const handlesubmit  =(e) =>{
        e.preventDefault();
        const newTrip = {destination , Startdate , endDate, activities, travelers};
        setTrip([...Trip,newTrip]);
    
     setdestination("");
     setStartdate("");
     setendDate("");
     setactivities("");
     setTravelers("");

    };
  return (
    <div className='itinerary-page'>
        <h1>Plan Your Itinerary</h1>
         <form className="trip-form" onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setdestination(e.target.value)}
          required
        />
        <input
          type="date"
          value={Startdate}
          onChange={(e) => setStartdate(e.target.value)}
          required
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setendDate(e.target.value)}
          required
        />
        <input
          type="number"
          min="1"
          value={travelers}
          onChange={(e) => setTravelers(e.target.value)}
        />
        <textarea
          placeholder="Activities (comma separated)"
          value={activities}
          onChange={(e) => setactivities(e.target.value)}
        ></textarea>
        <button type="submit" className="btn">Save Itinerary</button>
      </form>

      <div className="trip-list">
        <h2>Saved Trips</h2>
        {Trip.length === 0 ? (
          <p>No trips planned yet.</p>
        ) : (
          <ul>
            {Trip.map((trip, index) => (
              <li key={index} className="trip-card">
                <h3>{trip.destination}</h3>
                <p>
                  {trip.startDate} → {trip.endDate}
                </p>
                <p>Travelers: {trip.travelers}</p>
                <p>Activities: {trip.activities}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Iternary