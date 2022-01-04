import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherHero(props) {
  return (
    <div className="WeatherHero">
      <div className="hero row">
        <div className="overview1 col-5 p-0">
          <span className="floating-left">
            <WeatherIcon code={props.data.icon} />
          </span>
          <span className="main-temperature">
            {Math.round(props.data.temperature)}
          </span>
          °C|°F
        </div>
        <div className="overview2 col-3">
          <ul>
            <li>Percipitation: 94%</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
        <div className="overview3 col-4">
          <ul>
            <li className="city">{props.data.city}</li>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li>{props.data.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
