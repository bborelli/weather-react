import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const apiKey = "3499ef150985eccadd080ff408a018df";
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then((response) => {
        const dailyData = response.data.list.filter((item) =>
          item.dt_txt.includes("12:00:00")
        );
        setForecast(dailyData.slice(0, 5));
      })
      .catch((error) => {
        console.log("AXIOS ERROR:", error);
      });
  }, [props.city]);

  if (!forecast || forecast.length === 0) {
    return null;
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        {forecast.map((dailyForecast, index) => (
          <div className="col" key={index}>
            <WeatherForecastDay data={dailyForecast} />
          </div>
        ))}
      </div>
    </div>
  );
}
