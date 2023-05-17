import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "../../UI/Spinner";
import { Card } from "../../UI/Card";
import { Map } from "../../UI/Map";

import "./ParkingSpots.scss";

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${process.env.REACT_APP_TEST}`;

const ParkingSpots = () => {
  const [parkingSpots, setParkingSpots] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fethParkingSpotsData() {
      await axios.get("http://localhost:4000/").then((response) => {
        if (response && response.data) {
          setParkingSpots(response.data);
        }
      });
      setIsLoading(false);
    }
    fethParkingSpotsData();
  }, []);

  const parkingSpotsData = parkingSpots && parkingSpots["@graph"];

  console.log("parkingSpotsData", parkingSpotsData);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Card>
      <Map
        googleMapURL={mapURL}
        containerElement={<div style={{ height: "400px" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        loadingElement={<Spinner />}
      />
      <div className="parking-spots">
        {parkingSpotsData &&
          parkingSpotsData.map((parkingSpot) => (
            <div key={parkingSpot.id} className="parking-spots__data">
              <div className="parking-spots__details">
                <h4 className="parking-spots__title">{parkingSpot.title}</h4>
                <p>Localidad: {parkingSpot.address.locality}</p>
                <p>Código Postal: {parkingSpot.address["postal-code"]}</p>
                <p>
                  Dirección de Aparcamiento:{" "}
                  {parkingSpot.address["street-address"]}
                </p>
              </div>
              <button className="parking-spots__button">
                <a
                  href={`https://www.google.com/maps/place/${parkingSpot.address["street-address"]}`}
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

export default ParkingSpots;
