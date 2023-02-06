import "./styles.css";
import { useState } from "react";
import Weather from "./weather";
import Display from "./display";

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

  // so Query runs and if there's a match for the city we searched it employs useState from Weather and displays real-life info - if not (the else bit) it displays fake info for Gotham from the Display component 

  function Query() {
    if (city) {
      return <Weather city={city} />;
    } else {
      return null;
      // return <Display city="Gotham"/>
    }
  }

  return (
    <div className="App">
      <div class="container-md">
            <nav class="navbar navbar-light">
                <span class="navbar-brand mb-0 h1" id="logo">My weather app</span>
                <span class="navbar-brand mb-0 h1" id="bar-icon"><i class="fa-solid fa-bars"></i></span>
            </nav>
            
            <div class="row header">
                <div class="col-md-6 first-col">
                    <form onSubmit={handleSubmit}>
                        <input type="search" onChange={updateOnKey}></input>
                        <input type="submit" value="Search"></input>
                    </form>
                </div>
                <div class="col-md-6"></div>

            </div>


            
            
            (/*  need to quote this bit below out */) 
            <Display city="Gotham"/>
            
            

      <Query />
    </div>
  </div>
  );
}



