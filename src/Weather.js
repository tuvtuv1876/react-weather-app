import React, { useState } from "react";
import axios from "axios";
import WeatherHero from "./WeatherHero";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeather({
      icon: response.data.weather[0].icon,
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

  function search() {
    let apiKey = "b90f000267947bf1f6e5a78a0ca5e027";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateChange(event) {
    setCity(event.target.value);
  }

  if (weather.loaded) {
    return (
      <div className="Weather">
        <form className="w-100" onSubmit={handleSubmit}>
          <div className="row flex">
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                id="input-text"
                placeholder="Enter a city here"
                onChange={updateChange}
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
    search();
    return "Loading...";
  }
}
