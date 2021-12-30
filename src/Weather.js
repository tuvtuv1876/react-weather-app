import React from "react";

import "./Weather.css";

export default function Weather() {
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
          <span className="main-temperature">21</span>°C|°F
        </div>
        <div className="overview2 col-4">
          <ul>
            <li>Percipitation: 94%</li>
            <li>Humidity: 66%</li>
            <li>Wind: 31km/h</li>
          </ul>
        </div>
        <div className="overview3 col-4">
          <ul>
            <li className="city">Winterthur</li>
            <li>Tuesday, 16:47</li>
            <li>Light Rain</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
