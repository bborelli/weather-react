import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  const convertToFahrenheit = () => (props.celsius * 9) / 5 + 32;

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  return (
    <div className="WeatherTemperature">
      <span className="temperature">
        {unit === "celsius"
          ? Math.round(props.celsius)
          : Math.round(convertToFahrenheit())}
      </span>
      <span className="unit">
        {unit === "celsius" ? (
          <>
            <span className="active">°C</span> |{" "}
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </>
        ) : (
          <>
            <a href="/" onClick={showCelsius}>
              °C
            </a>{" "}
            | <span className="active">°F</span>
          </>
        )}
      </span>
    </div>
  );
}
