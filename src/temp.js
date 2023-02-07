import React, { useState } from "react";

export default function ShowTemp(props) {

    let [unit, setUnit] = useState("celsius");

    function converToF(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function converToC(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
        return (
            <div className="temperature">
                <h2><span className="unit">{props.celsius}°C</span></h2>
                    <button type="button" class="btn temp-button" disabled>°C</button>|
                    <button type="button" class="btn temp-button" onClick={converToF}>F</button>
            </div>
        )
    } else {
        let farTemp = Math.round((props.celsius * 9) / 5 + 32);
        return (
            <div className="temperature">
                <h2><span className="unit">{farTemp}F</span></h2>
                    <button type="button" class="btn temp-button" id="buttonTemp" onClick={converToC}>°C</button>|
                    <button type="button" class="btn temp-button" disabled>F</button>
        </div>
        )
    }

    
}

