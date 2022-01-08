import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Sat</div>
          <WeatherIcon code="01d" size={33} />
          <div className="WeatherForecast-temperature">
            <span>30°</span>
            <span className="WeatherForecast-temp-night"> 20°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
