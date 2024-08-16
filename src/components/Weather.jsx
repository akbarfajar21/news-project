import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = "9e8e01b681674a12a2c41304241408";

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
      );
      setWeather(response.data);
    } catch (error) {
      console.log("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeather();
  }, [city]);

  return (
    <div className="weather-container bg-blue-200 p-2 rounded-lg shadow-md text-center max-w-xs mx-auto">
      {loading ? (
        <p className="text-sm">Loading weather...</p>
      ) : weather ? (
        <div>
          <h3 className="text-lg font-bold">{weather.location.name}</h3>
          <p className="text-sm">{weather.current.condition.text}</p>
          <img
            src={weather.current.condition.icon}
            alt={weather.current.condition.text}
            className="mx-auto w-12 h-12"
          />
          <p className="text-xl font-bold">
            {Math.round(weather.current.temp_c)}°C
          </p>
          <p className="text-sm">Humidity: {weather.current.humidity}%</p>
        </div>
      ) : (
        <p className="text-sm">Weather data not available</p>
      )}
    </div>
  );
};

export default Weather;
