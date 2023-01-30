import "./styles.css";
import { useState } from "react";
import Weather from "./weather";
import { ColorRing } from "react-loader-spinner";

export default function App() {
  let [city, setCity] = useState(``);

  function updateOnKey(event) {
    setTimeout(() => {
      setCity(
        event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1)
      );
    }, 3000);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function Query() {
    if (city) {
      return <Weather city={city} />;
    } else {
      return null;
    }
  }

  return (
    <div className="App">
      <div className="container">
      <h1>Weather search app</h1>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateOnKey}></input>
        <input type="submit" value="Search"></input>
      </form>

    <div class="container-md">

      <nav class="navbar navbar-light">
        <span class="navbar-brand mb-0 h1" id="logo">My weather app</span>
        <span class="navbar-brand mb-0 h1" id="bar-icon"><i class="fa-solid fa-bars"></i></span>
      </nav>


      <div class="row header">
        <div class="col-md-6 first-col">
          <form action="" id="city-form">
            <input type="text" autocomplete="off" id="search" placeholder="Search your city" />
            <input type="submit" class="btn top-button btn-outline-primary" />
          </form>
        </div>
      </div>

    </div>

      <p><a href="https://github.com/jongleuress/yesthis">GitHub link</a></p>

      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
      {/* <SearchEng /> */}
      <Query />
    </div>
    </div>
  );
}

// write a condition that only if city !== null, Weather is triggered

