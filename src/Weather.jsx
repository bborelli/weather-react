import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  function searchWeather() {
    const apiKey = "4fbe9b2c44d0f8a0833d1te403cbb78o";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchWeather();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (!weatherData.ready) {
    searchWeather();
    return <div>Loading temperature...</div>;
  }

  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus
              onChange={handleCityChange}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <FormattedDate date={weatherData.date} />
      <ul>
        <li className="text-capitalize">{weatherData.description}</li>
        <li>Humidity: {weatherData.humidity}%</li>
        <li>Wind: {weatherData.wind} km/h</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src={weatherData.icon} alt={weatherData.description} />
          {weatherData.temperature}°C
        </div>
      </div>
    </div>
  );
}
