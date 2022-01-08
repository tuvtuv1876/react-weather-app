import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }

  let apiKey = "b90f000267947bf1f6e5a78a0ca5e027";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="WeatherForecast-title">6 Day Forecast</div>

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
