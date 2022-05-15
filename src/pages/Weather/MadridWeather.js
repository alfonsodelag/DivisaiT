import React, { useEffect, useState } from 'react';
import Card from '../../UI/Card/Card';
import Spinner from '../../UI/Spinner/Spinner';
import axios from 'axios';
import './MadridWeather.scss';
import credentials from '../../credentials';
import Map from '../../UI/Map/Map';

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

const date = new Date();
const timestamp = date.getTime();
const todaysDate = new Date(timestamp);
const esDate = new Intl.DateTimeFormat("es", { dateStyle: "long", timeStyle: "medium" }).format(todaysDate);

const MadridWeather = () => {

    const [weatherData, setWeatherData] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        async function fetchWeatherData() {
            const response = await axios.get('https://openweathermap.org/data/2.5/onecall?lat=40.4165&lon=-3.7026&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02')
                .then(response => {
                    setWeatherData(response.data)
                });

            setIsLoading(false);
        }
        fetchWeatherData();
    }, []);

    const currentWeather = weatherData?.current;
    const dailyWeather = weatherData?.daily;

    if (isLoading) {
        return (
            <Spinner />
        )
    }

    return (
        <Card>
            <Map
                googleMapURL={mapURL}
                containerElement={<div style={{ height: '400px' }} />}
                mapElement={<div style={{ height: '100%' }} />}
                loadingElement={<p>Cargando</p>}
            />
            <section className="weather">
                <div>
                    <div>
                        <h4 className="weather__date">{esDate}</h4>
                        <h1 className="weather__city">Madrid, ES</h1>
                    </div>
                    <div className="weather__details">
                        <p>{currentWeather?.weather[0]?.description},</p>
                        <p>{currentWeather?.temp}°C</p>
                    </div>
                    <div>
                        <div className="weather__details">
                            <p>Humedad: {currentWeather?.humidity}%</p>
                            <p>UV: {currentWeather?.uvi}</p>
                        </div>
                    </div>
                </div>
                {/* <iframe className="weather__map" src="https://www.openstreetmap.org/export/embed.html?bbox=-4.167251586914063%2C40.18149636613134%2C-3.260879516601563%2C40.6426145676101&amp;layer=mapnik&amp;marker=40.41245043754496%2C-3.7140655517578125"></iframe> */}
            </section>
            <section className="weather__daily">
                {dailyWeather && dailyWeather.map(weather => (
                    <div className="weather__daily__cards" key={weather.dt}>
                        <div className="weather__details">
                            <img src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`} />
                            <p>{new Intl.DateTimeFormat("es", { dateStyle: "long" }).format(weather.dt * 1000)}</p>
                        </div>
                        <p>Temperatura: {weather?.temp.day}°C</p>
                        <div>
                            <div className="weather__details">
                                <p>Humedad: {weather?.humidity}%</p>
                                <p>UV: {weather?.uvi}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </Card>
    )
}

export default MadridWeather;