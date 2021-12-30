import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [loaded, setLoaded] = useState(false);
  const [Weather, setWeather] = useState("");

  function handleResponse(response) {
    setWeather({
      Temperature: response.data.main.temp,
      Percipitation: "#",
      Humidity: response.data.main.humidity,
      Wind: response.data.wind.speed,
      Description: response.data.weather[0].description,
    });
    setLoaded(true);
  }

  if (loaded) {
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
              {Math.round(Weather.Temperature)}
            </span>
            °C|°F
          </div>
          <div className="overview2 col-4">
            <ul>
              <li>Percipitation: 94%</li>
              <li>Humidity: {Weather.Humidity}%</li>
              <li>Wind: {Weather.Wind}km/h</li>
            </ul>
          </div>
          <div className="overview3 col-4">
            <ul>
              <li className="city">{props.city}</li>
              <li>Tuesday, 16:47</li>
              <li>{Weather.Description}</li>
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
