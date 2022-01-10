import React from "react";

export default function WeatherTemperature(props) {
  return (
    <span className="celsius">
      <span className="main-temperature">{Math.round(props.celsius)}</span>
      <span className="main-temperature-links">°C</span>
    </span>
  );
}
