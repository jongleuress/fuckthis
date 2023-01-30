import React from 'react';


export default function Display() {
    return (
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

                <div class="col-md-3">
                </div>
            
                <div class="col-md-3">
                    <i class="fa-solid fa-location-dot"></i> 
                    <button type="button" class="btn top-button button-proper" id="geoloc">
                        My location
                    </button>
                </div>
            </div>

            <div class="row details">
                <div class="col-md-4 first-col">
                    <h1>
                        <span id="current-city">Gotham</span> | <span id="today"></span>
                    </h1>
                    <h2 id="temp-today"><span id="temp-digits">0</span><span id="temp-unit">°C</span></h2>
                    <button type="button" class="btn temp-button" id="buttonTemp">°C</button>|<button type="button" class="btn temp-button" id="buttonTemp-frh">F</button>
                </div>

                <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-6">
                            <h2 id="descr-gen">Sth</h2>
                            <h3 id="descr-det">Sth</h3>
                            <h4 id="wind">0</h4>
                            <h4 id="hum">0</h4>
                        </div>
                        <div class="col-md-6">
                            <p>
                                <img class="img-fluid" id="main-icon"px src="" alt=""/>
                            </p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-1">
                        </div>
                        <div class="col-md-2">
                            <div class="day">
                                <h1 id="day-one">Fri</h1>
                                <h2 id="temp-one"><span id="test">22°C</span></h2>
                            </div>
                            <div class="forecast-icon">
                                <img class="img-fluid" id="icon-one" src="" alt=""/>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="day">
                                <h1 id="day-one">Sat</h1>
                                <h2 id="temp-one"><span id="test">22°C</span></h2>
                            </div>
                            <div class="forecast-icon">
                                <img class="img-fluid" id="icon-one" src="" alt=""/>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="day">
                                <h1 id="day-one">Sun</h1>
                                <h2 id="temp-one"><span id="test">22°C</span></h2>
                            </div>
                            <div class="forecast-icon">
                                <img class="img-fluid" id="icon-one" src="" alt=""/>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="day">
                                <h1 id="day-one">Mon</h1>
                                <h2 id="temp-one"><span id="test">22°C</span></h2>
                            </div>
                            <div class="forecast-icon">
                                <img class="img-fluid" id="icon-one" src="" alt=""/>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="day">
                                <h1 id="day-one">Tue</h1>
                                <h2 id="temp-one"><span id="test">22°C</span></h2>
                            </div>
                            <div class="forecast-icon">
                                <img class="img-fluid" id="icon-one" src="" alt=""/>
                            </div>
                        </div>
                    
                    </div>

                </div>
            </div>
        </div>



    );

}