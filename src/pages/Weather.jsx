import React, { useEffect, useState } from 'react';

const Weather = () => {

    const [weather, setWeather] = useState([]);

    useEffect(() => {
        const apiUrl = "http://api.openweathermap.org/data/2.5/weather?zip=8000,dk&appid=25ea4c6ae7fa12cbab57d7543e9ad78e&units=metric";
        fetch(apiUrl)
            .then((res) => res.json())
            .then((weather) => {
                setWeather(weather);
            });
    }, []);

    console.log(weather)

    return (
        <div>
            <p>Location: {weather.name}</p>
            <p>Temperature: {weather.main && weather.main.temp ? Math.round(weather.main.temp).toString() : ""}°</p>
            <p>Wind speed: {weather.wind && weather.wind.speed} m/s</p>
        </div>
    )
}

export default Weather
