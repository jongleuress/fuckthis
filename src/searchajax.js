import React, { useState } from "react";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";

export default function WeatherAjax(props) {
  // let [descr, setDescr] = useState(null);
  let [tempr, setTempr] = useState(null);

  function showTemp(response) {
    // setDescr(response.data.weather[0].main);
    setTempr(Math.round(response.data.main.temp));
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=28bcae7e59c97a4369d75ef9aa62aa6e&units=metric`;

  axios.get(url).then(showTemp);

  if (tempr) {
    return (
      <div>
        <p>
          The weather in {props.city} is, and the temperature is {tempr}°C
        </p>

        <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
      </div>
    );
  } else {
    return (
        <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    );
  }
}
