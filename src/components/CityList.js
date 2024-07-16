// src/components/CityList.js
import React from 'react';
import './CityList.css';

const CityList = ({ cities, addToItinerary }) => {
  return (
    <div className="city-list">
      {cities.map(city => (
        <div key={city.id} className="city-card">
          <h3 className="city-name">{city.name}</h3>
          <p>{city.description}</p>
          <button onClick={() => addToItinerary(city)}>Add to Itinerary</button>
        </div>
      ))}
    </div>
  );
}

export default CityList;
