import React from "react";
import FormatDate from "./FormatDate";
import UnitConversion from "./UnitConversion";

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
              <UnitConversion celsius={props.data.temperature} />
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
