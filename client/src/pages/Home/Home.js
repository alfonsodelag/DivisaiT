import React from "react";
import MadridImg from "../../assets/images/madrid.png";
import { Card } from "../../UI/Card";

import "./Home.scss";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home__title">
          <h1>Portal de Madrid</h1>
          <p>
            Bienvenido al nuevo Portal de Madrid, un espacio abierto a
            ciudadanos y profesionales con el objetivo de facilitar información
            y datos sobre la ciudad
          </p>
        </div>
      </div>
      <Card>
        <img className="home__image" src={MadridImg} />
      </Card>
    </div>
  );
};

export default Home;
