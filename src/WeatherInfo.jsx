import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="WeatherInfo-header">
        <div className="WeatherInfo-text">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <li className="WeatherInfo-small">
              <span>Humidity: {props.data.humidity}%</span> |{" "}
              <span>Wind: {props.data.wind} km/h</span>
            </li>
          </ul>
        </div>

        <div className="WeatherInfo-main">
          <img
            src={props.data.icon}
            alt={props.data.description}
            width={52}
            height={52}
          />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
    </div>
  );
}
