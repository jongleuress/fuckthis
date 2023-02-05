import React from 'react';

export default function Timestamp(props) {

    let weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
     ];

    let day = weekDays[props.date.getDay()];
    return <span>{day}</span>;
}