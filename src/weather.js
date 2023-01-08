import React from "react";

function Weather(props) {
  function TempToFahr(event) {
    event.preventDefault();
    alert(`${Math.round((props.temp * 9) / 5 + 32)} °F`);
  }

  return (
    <p>
      The weather in {props.city} is nice, it is {props.descr}, {props.temp}°C
      and{" "}
      <a href="/" onClick={TempToFahr}>
        F°
      </a>
    </p>
  );
}

export default Weather;
