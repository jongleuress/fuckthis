import React, { useState } from "react";
import axios from "axios";

export default function SearchEng() {
  let [city, setCity] = useState(``);
  let [tempr, setTempr] = useState(` `);
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=28bcae7e59c97a4369d75ef9aa62aa6e&units=metric`;

  function handleSubmit(event) {
    event.preventDefault();
    alert(`${city}`);
  }

  function updateCity(event) {
    if (event.key === "Enter") {
      setCity(event.target.value);
    }
  }

  function showTemp(response) {
    setTempr(Math.round(response.data.main.temp));
  }

  if (city) {
    axios.get(url).then(showTemp);

    if (tempr) {
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="search" onKeyDown={updateCity}></input>
            <input type="submit" value="Search"></input>
          </form>
          <p>The weather in {city} is:</p>
          <p>Temperature is {tempr}°C</p>
        </div>
      );
    } else {
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="search" onKeyDown={updateCity}></input>
            <input type="submit" value="Search"></input>
          </form>
          <p>
            "Please enter a valid city, we can't tell you what the weather's
            like in San Fransokyo"
          </p>
        </div>
      );
    }
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="search" onKeyDown={updateCity}></input>
          <input type="submit" value="Search"></input>
        </form>
      </div>
    );
  }
}

