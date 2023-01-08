import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [tempr, setTempr] = useState(` `);
  let [descr, setDescr] = useState(` `);
  let [name, setName] = useState(` `);

  function showTemp(response) {
    setTempr(Math.round(response.data.main.temp));
    setDescr(response.data.weather[0].main);
    setName(response.data.name);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=28bcae7e59c97a4369d75ef9aa62aa6e&units=metric`;

  axios.get(url).then(showTemp);

  if (props.city === name) {
    return (
      <div>
        <p>
          The weather in {props.city} is: {descr}
        </p>
        <p>Temperature is: {tempr}°C</p>
      </div>
    );
  } else {
    return (
      <p>
        "Please enter an existing city name, we can't tell you what the
        weather's like in San Fransokyo"
      </p>
    );
  }
}
