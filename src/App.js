import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CityList from './components/CityList';
import Itinerary from './components/Itinerary';
import './App.css';

function App() {
  const [cities, setCities] = useState([]);
  const [itinerary, setItinerary] = useState([]);

  useEffect(() => {
    fetchCities();
    loadItinerary();
  }, []);

  const fetchCities = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      const cityData = data.map(country => ({
        id: country.cca3,
        name: country.capital ? country.capital[0] : 'N/A',
        description: `Country: ${country.name.common}, Population: ${country.population}`,
      })).filter(city => city.name !== 'N/A');

      setCities(cityData);
    } catch (error) {
      console.error('Error fetching city data:', error);
    }
  };

  const loadItinerary = () => {
    const savedItinerary = JSON.parse(localStorage.getItem('itinerary')) || [];
    setItinerary(savedItinerary);
  };

  const saveItinerary = (updatedItinerary) => {
    setItinerary(updatedItinerary);
    localStorage.setItem('itinerary', JSON.stringify(updatedItinerary));
  };

  const addToItinerary = (city) => {
    const updatedItinerary = [...itinerary, city];
    saveItinerary(updatedItinerary);
    alert(`${city.name} has been added to your itinerary.`);
  };

  const removeFromItinerary = (cityId) => {
    const updatedItinerary = itinerary.filter(item => item.id !== cityId);
    saveItinerary(updatedItinerary);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cities" element={<CityList cities={cities} addToItinerary={addToItinerary} />} />
          <Route path="/itinerary" element={<Itinerary itinerary={itinerary} removeFromItinerary={removeFromItinerary} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
