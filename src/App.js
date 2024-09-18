import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Perth" />
        <footer>
          {" This project was coded by "}
          <a
            href="https://www.shecodes.io/graduates/91637-cheryl-watts"
            target="blank"
            rel="noopener noreferrer"
          >
            Cheryl Watts 👩‍💻
          </a>
          {"and is "}
          <a
            href="https://github.com/chezzer84/react-week5-weatherapp"
            target="blank"
            rel="noopener noreferrer"
          >
            open sourced
          </a>
          {"and hosted on "}
          <a
            href="https://glistening-taiyaki-cb92af.netlify.app/"
            target="blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
