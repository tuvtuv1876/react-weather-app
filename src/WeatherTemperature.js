import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === "celsius")
    return (
      <span className="celsius">
        <span className="main-temperature">{Math.round(props.celsius)}</span>
        °C |{" "}
        <a href="/" onClick={showFahrenheit}>
          °F
        </a>
      </span>
    );
  else {
    return (
      <span className="fahrenheit">
        <span className="main-temperature">{fahrenheit()}</span>
        <a href="/" onClick={showCelsius}>
          °C
        </a>{" "}
        | °F
      </span>
    );
  }
}
