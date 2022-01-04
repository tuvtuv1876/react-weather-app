import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherHero(props) {
  return (
    <div className="WeatherHero">
      <div className="hero row">
        <div className="overview1 col-5 p-0">
          <span className="floating-left">
            <WeatherIcon code={props.data.icon} />
          </span>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="overview2 col-3">
          <ul>
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
