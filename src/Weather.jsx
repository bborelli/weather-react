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
    <h4>
      The temperature in {city} is {temperature}°C
    </h4>
  );
}
