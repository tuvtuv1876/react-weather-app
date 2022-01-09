import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  let date = new Date(props.data.dt * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[date.getDay()];

  return (
    <div className="ForecastDay">
      <div className="WeatherForecast-day">{day}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={33} />
      <div className="WeatherForecast-temperature">
        <span>{Math.round(props.data.temp.max)}°</span>
        <span className="WeatherForecast-temp-night">
          {" "}
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
