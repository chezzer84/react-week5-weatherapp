import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          {" This project was coded by Cheryl Watts and is "}
          <a
            href="https://github.com/chezzer84/react-week5-weatherapp"
            target="blank"
          >
            open sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
