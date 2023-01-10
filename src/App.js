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
      <h1>Weather search app</h1>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateOnKey}></input>
        <input type="submit" value="Search"></input>
      </form>

      <p><a href="">GitHub link</a></p>

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
  );
}

// write a condition that only if city !== null, Weather is triggered

