import React from "react";

export default function WeatherForecastDay(props) {
  function max() {
    let temperature = Math.round(props.temp.temperature.maximum);
    return `${temperature}°C`;
  }

  function min() {
    let temperature = Math.round(props.temp.temperature.minimum);
    return `${temperature}°C`;
  }

  function day() {
    let date = new Date(props.temp.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="day">{day()}</div>
      <div className="icon">
        {" "}
        <img
          src={props.temp.condition.icon_url}
          alt={props.temp.condition.icon}
          className="float-left"
          style={{ height: 70, width: 70 }}
        />
      </div>
      <span className="max">{max()}</span>
      <span className="min">{min()}</span>
    </div>
  );
}
