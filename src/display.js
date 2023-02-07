import React from 'react';


export default function Display(props) {

    // cut the City and Temp (also icon?) out as separate components and update their value upon search
    return (
        <div className="row details">
        <div class="col-md-4 first-col">
            <h1>
                <span>{props.city}</span> | <span>{props.date}</span>
            </h1>
            <h2><span id="temp-digits">0</span><span id="temp-unit">°C</span></h2>
            <button type="button" class="btn temp-button" id="buttonTemp">°C</button>|<button type="button" class="btn temp-button" id="buttonTemp-frh">F</button>
        </div>

        <div class="col-md-8">
            <div class="row">
                <div class="col-md-6">
                    <h2>n/a</h2>
                    <h3>n/a</h3>
                    <h4>n/a</h4>
                    <h4>n/a</h4>
                </div>
                <div class="col-md-6">
                    <p>
                        <img class="img-fluid" id="main-icon" src={`${process.env.PUBLIC_URL}/media/batman.png`} alt=""/>
                    </p>
                </div>
            </div>
        </div>
    </div>




    );

}