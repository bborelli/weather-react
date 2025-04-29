import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          This project was coded by Bruna Borelli and can be seen on
          <a
            href="https://github.com/bborelli/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
