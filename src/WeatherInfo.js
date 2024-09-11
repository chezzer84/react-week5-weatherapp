import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li>Mostly Cloudy</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="float-left"
            />

            <div className="float-left">
              <span className="temperature">
                {" "}
                {Math.round(props.data.temperature)}{" "}
              </span>
              <span className="unit">°c</span>
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li> Humidity: {props.data.humidity} </li>
            <li> Wind: {props.data.wind} km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
