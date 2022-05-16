import React from 'react';
import { Route, Routes } from "react-router";
import './App.scss';
import MadridWeather from './pages/Weather/MadridWeather';
import ParkingSpots from './pages/ParkingSpots/ParkingSpots';
import Header from './components/Header';
import Home from "./pages/Home/Home";

console.log(process.env.REACT_APP_MAPS_API_KEY)

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__routes">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/tiempo-en-Madrid" element={<MadridWeather />} />
          <Route path="/aparcamientos-publicos" element={<ParkingSpots />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
