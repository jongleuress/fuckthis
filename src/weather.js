import React, { useState } from "react";
import Timestamp from "./date";
import axios from "axios";
import ShowTemp from "./temp";

export default function Weather(props) {

  let [tempr, setTempr] = useState(` `);
  let [descr, setDescr] = useState(` `);
  let [name, setName] = useState(` `);
  let [date, setDate] = useState(` `);
  let [hum, setHum] = useState(` `);
  let [wind, setWind] = useState(` `);
  let [icon, setIcon] = useState(` `);
  let [detail, setDet] = useState(` `);

  function showTemp(response) {
    setTempr(Math.round(response.data.main.temp));
    setDescr(response.data.weather[0].main);
    setName(response.data.name);
    setDate(new Date(response.data.dt * 1000));
    setWind(response.data.wind.speed.toString());
    setHum(response.data.main.humidity);
    setIcon(response.data.weather[0].icon);
    setDet(response.data.weather[0].description);

    // if (date.getHours() <= 8 || thisDate.getHours() >= 21) {
    //   document.querySelector(".container-md").style.background = "#004962";
    //   document.querySelector(".container-md").style.color = "#ecd287";
    //   document.querySelector("#logo").style.color = "#fff9e9";
    //   document.querySelector("#bar-icon").style.color = "#fff9e9";
    // } else {
    //   document.querySelector(".container-md").style.background = "linear-gradient(0deg, rgba(21,144,145,1) 0%, rgba(55,170,191,1) 100%)";
    //   document.querySelector(".container-md").style.color = "#112B3C";
    //   document.querySelector("#logo").style.color = "#000000";
    //   document.querySelector("#bar-icon").style.color = "#000000";
    // }
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=28bcae7e59c97a4369d75ef9aa62aa6e&units=metric`;

  axios.get(url).then(showTemp);

  if (props.city === name) {
    return (

  <div className="Success">
            
            <div class="row details">
                <div class="col-md-4 first-col">
                    <h1>
                        <span>{props.city}</span> | <Timestamp date={date} />
                    </h1>

                    <ShowTemp celsius={tempr}/>
                    
                </div>

                <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-6">
                            <h2>{descr}</h2>
                            <h3>{detail}</h3>
                            <h4>{wind}m/sec</h4>
                            <h4>{hum}%</h4>
                        </div>
                        <div class="col-md-6">
                            <p>
                                <img class="img-fluid" id="main-icon" src={`${process.env.PUBLIC_URL}/media/${icon}.png`} alt=""/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

      <div>
        <p>
          The weather in {props.city} is: {descr}
        </p>
        <p>Temperature is: {tempr}°C</p>
      </div>
    </div>
    );
  } else {
    return (
      <p>
        "Please enter an existing city name, we can't tell you what the weather's like in San Fransokyo"
      </p>
    );
  }
}
