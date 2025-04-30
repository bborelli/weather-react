import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
    });
  }

  function searchWeather() {
    const apiKey = "4fbe9b2c44d0f8a0833d1te403cbb78o";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(() => {
        alert("City not found. Please try again.");
      });
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
      <WeatherInfo data={weatherData} />
      <WeatherForecast city={weatherData.city} />
    </div>
  );
}
