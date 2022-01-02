import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

import "./Weather.css";

export default function Weather(props) {
  const [Weather, setWeather] = useState("");

  function handleResponse(response) {
    setWeather({
      temperature: response.data.main.temp,
      percipitation: "#",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      loaded: true,
    });
  }

  if (Weather.loaded) {
    return (
      <div className="Weather">
        <form className="w-100">
          <div className="row flex">
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                id="input-text"
                placeholder="Enter a city here"
              />
            </div>

            <div className="col-4">
              <input
                type="submit"
                id="submit-button"
                className="btn btn-primary mb-3"
                value="Search"
              />
            </div>
          </div>
        </form>
        <div className="hero row">
          <div className="overview1 col-4 p-0">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
              alt=""
            />
            <span className="main-temperature">
              {Math.round(Weather.temperature)}
            </span>
            °C|°F
          </div>
          <div className="overview2 col-4">
            <ul>
              <li>Percipitation: 94%</li>
              <li>Humidity: {Weather.humidity}%</li>
              <li>Wind: {Weather.wind}km/h</li>
            </ul>
          </div>
          <div className="overview3 col-4">
            <ul>
              <li className="city">{props.city}</li>
              <li>
                <FormattedDate date={Weather.date} />
              </li>
              <li>{Weather.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "b90f000267947bf1f6e5a78a0ca5e027";
    let city = "Winterthur";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
