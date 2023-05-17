import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "../../UI/Spinner";
import { Card } from "../../UI/Card";

import "./FireFighterSpots.scss";

const FireFighterSpots = () => {
  const [fireFighterSpots, setFireFighterSpots] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchFireFighterSpots() {
      await axios.get("http://localhost:4000/").then((response) => {
        if (response && response.data) {
          setFireFighterSpots(response.data);
        }
      });
      setIsLoading(false);
    }
    fetchFireFighterSpots();
  }, []);

  const fireFighterSpotsData = fireFighterSpots && fireFighterSpots["@graph"];

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Card>
      <div className="parking-spots">
        {fireFighterSpotsData &&
          fireFighterSpotsData.map((fireFighterSpot) => (
            <div key={fireFighterSpot.id} className="parking-spots__data">
              <div className="parking-spots__details">
                <h4 className="parking-spots__title">
                  {fireFighterSpot.title}
                </h4>
                <p>Localidad: {fireFighterSpot.address.locality}</p>
                <p>Código Postal: {fireFighterSpot.address["postal-code"]}</p>
                <p>
                  Dirección de Aparcamiento:{" "}
                  {fireFighterSpot.address["street-address"]}
                </p>
              </div>
              <button className="parking-spots__button">
                <a
                  href={`https://www.google.com/maps/place/${fireFighterSpot.address["street-address"]}`}
                >
                  CÓMO LLEGAR
                </a>
              </button>
            </div>
          ))}
      </div>
    </Card>
  );
};

export default FireFighterSpots;
