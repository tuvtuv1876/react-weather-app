import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState("");

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    console.log(response.data.daily);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function search() {
    let apiKey = "b90f000267947bf1f6e5a78a0ca5e027";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="WeatherForecast-title">6 Day Forecast</div>
        <div className="row">
          {forecast.map(function (forecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={forecast} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    search();
    return null;
  }
}
