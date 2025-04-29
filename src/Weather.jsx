import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [temperature, setTemperature] = useState(null);
  const city = "Lisbon";

  function searchWeather() {
    const apiKey = "4fbe9b2c44d0f8a0833d1te403cbb78o";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then((response) => {
      setTemperature(response.data.temperature.current);
    });
  }

  if (temperature === null) {
    searchWeather();
    return <h4>Loading temperature...</h4>;
  }

  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="Enter a city"
          className="form-control"
        />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
      <h1>{city}</h1>
      <ul>
        <li>Monday 08:00</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="" alt="Sunny" />
          {temperature}°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 42%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
