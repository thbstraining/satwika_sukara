import React from 'react';
import './Itinerary.css';

const Itinerary = ({ itinerary, removeFromItinerary }) => {
  return (
    <div className="itinerary-container">
      <h1>Your Itinerary</h1>
      <div className="itinerary-list">
        {itinerary.map(city => (
          <div key={city.id} className="itinerary-card">
            <h3 className="city-name">{city.name}</h3>
            <button onClick={() => removeFromItinerary(city.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Itinerary;
