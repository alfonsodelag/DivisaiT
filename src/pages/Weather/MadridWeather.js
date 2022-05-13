import React, { useEffect, useState } from 'react';
import Card from '../../UI/Card';
import axios from 'axios';
import './MadridWeather.scss';

const date = new Date();
const timestamp = date.getTime();
const todaysDate = new Date(timestamp);
const esDate = new Intl.DateTimeFormat("es", { dateStyle: "long", timeStyle: "medium" }).format(todaysDate);

const MadridWeather = () => {

    const [weatherData, setWeatherData] = useState('')

    useEffect(() => {
        async function fetchData() {
            return await axios.get('https://openweathermap.org/data/2.5/onecall?lat=40.4165&lon=-3.7026&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02')
                .then(response => {
                    setWeatherData(response.data)
                })
        }
        fetchData();
    }, []);

    const currentWeather = weatherData?.current;
    const dailyWeather = weatherData?.daily;
    // console.log("currentWeather", currentWeather);
    console.log("dailyWeather", dailyWeather);

    return (
        <div className="weather">
            <section className="weather__current">
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
                <iframe className="weather__map" src="https://www.openstreetmap.org/export/embed.html?bbox=-4.167251586914063%2C40.18149636613134%2C-3.260879516601563%2C40.6426145676101&amp;layer=mapnik&amp;marker=40.41245043754496%2C-3.7140655517578125"></iframe>
            </section>
            <section className="weather__daily">
                {dailyWeather && dailyWeather.map(weather => (
                    <Card key={weather.dt}>
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
                    </Card>
                ))}
            </section>
        </div>
    )
}

export default MadridWeather;