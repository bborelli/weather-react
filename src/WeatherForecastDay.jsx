import React from "react";

export default function WeatherForecastDay(props) {
  const date = new Date(props.data.dt * 1000);
  const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
  const maxTemp = Math.round(props.data.main.temp_max);
  const minTemp = Math.round(props.data.main.temp_min);
  const iconCode = props.data.weather[0].icon;

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{dayName}</div>
      <img
        src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`}
        alt="Weather icon"
        width={36}
        style={{ filter: "contrast(120%) brightness(0.9)" }}
      />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">{maxTemp}°</span>
        <span className="WeatherForecast-temperature-min">{minTemp}°</span>
      </div>
    </div>
  );
}
