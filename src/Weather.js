import React, { useState } from "react";
import FormatDate from "./FormatDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      humidity: response.data.temperature.humidity,
      iconUrl: response.data.condition.icon_url,
      description: response.data.condition.description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>

            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormatDate date={weatherData.date} />
          </li>
          <li>Mostly Cloudy</li>
        </ul>

        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />

              <div className="float-left">
                <span className="temperature">
                  {" "}
                  {Math.round(weatherData.temperature)}{" "}
                </span>
                <span className="unit">°c</span>
              </div>
            </div>
          </div>

          <div className="col-6">
            <ul>
              <li> Humidity: {weatherData.humidity} </li>
              <li> Wind: {weatherData.wind} km/h </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apikey = "5t5a295fb1483fe5b29973001ac3oefd";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apikey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);

    return "Loading...";
  }
}
