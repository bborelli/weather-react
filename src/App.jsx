import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <p>
        This website was created by Bruna Borelli and can be seen on
        <a
          href="https://github.com/bborelli/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
}
