import React from "react";
import { Route, Routes } from "react-router";
import { MadridWeather } from "./pages/MadridWeather";
import { FireFighterSpots } from "./pages/FireFighterSpots";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__routes">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/tiempo-en-Madrid" element={<MadridWeather />} />
          <Route
            path="/aparcamientos-publicos"
            element={<FireFighterSpots />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
