import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <input type="search" placeholder="Enter a city here" />
            </div>
            <div className="col-4">
              <input className="btn btn-primary" type="submit" value="Search" />
            </div>
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-4">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
            alt=""
          />
          <span className="main-temperature">21</span>°C
        </div>
        <div className="col-4">
          <ul>
            <li>Percipitation: 94%</li>
            <li>Humidity: 66%</li>
            <li>Wind: 31km/h</li>
          </ul>
        </div>
        <div className="col-4">
          <ul>
            <li>Winterthur</li>
            <li>Tuesday, 16:47</li>
            <li>Light Rain</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
