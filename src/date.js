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
    let hour = props.date.getHours();
    let min = props.date.getMinutes();

    if (min < 10) {
        min = `0${min}`
       }
       if (hour < 10) {
        hour = `0${hour}`
       }
  
    let actualDate = `${day} ${hour}:${min}`;

    return <span>{actualDate}</span>;
}