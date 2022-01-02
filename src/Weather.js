import React, { useState } from "react";
import axios from "axios";
import WeatherHero from "./WeatherHero";

import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState("");

  function handleResponse(response) {
    setWeather({
      temperature: response.data.main.temp,
      percipitation: "#",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
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
        <WeatherHero data={weather} />
      </div>
    );
  } else {
    let apiKey = "b90f000267947bf1f6e5a78a0ca5e027";
    let city = "Winterthur";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
