import React from "react";

export default function ShowTemp(props) {


    return (
        <div className="temperature">
            <h2><span>{props.tempr}°C</span></h2>
                    <button type="button" class="btn temp-button" id="buttonTemp">°C</button>|<button type="button" class="btn temp-button" id="buttonTemp-frh">F</button>
        </div>
    )
}