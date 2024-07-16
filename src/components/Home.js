// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">Travel Itinerary Planner</h1>
      <div className="button-container">
        <Link to="/cities" className="nav-button">City List</Link>
        <Link to="/itinerary" className="nav-button">Itinerary</Link>
      </div>
    </div>
  );
}

export default Home;
