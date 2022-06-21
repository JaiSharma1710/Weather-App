import React from "react";

export default function Forcast3(props) {
  let date = new Date().getDay();

  let day;

  switch (date + 3) {
    case 0:
      day = "Sun";
      break;

    case 1:
      day = "Mon";
      break;

    case 2:
      day = "Tue";
      break;

    case 3:
      day = "Wed";
      break;

    case 4:
      day = "Thu";
      break;

    case 5:
      day = "Fri";
      break;

    case 6:
      day = "Sat";
      break;

    default:
      console.log("error");
  }

  let image;
  let temp;
  let condition;

  props.data.length !== 0
    ? (image = (
        <img
          src={props.data[0].forecast.forecastday[2].day.condition.icon}
          alt="icon"
        />
      ))
    : (image = "");

  props.data.length !== 0
    ? (temp = (
        <p style={{ fontSize: "25px" }}>
          {props.data[0].forecast.forecastday[2].day.maxtemp_c}*C
        </p>
      ))
    : (temp = "");

  props.data.length !== 0
    ? (condition = (
        <p style={{ fontSize: "25px", color: "grey" }}>
          {props.data[0].forecast.forecastday[2].day.condition.text}
        </p>
      ))
    : (condition = "");

  return (
    <div
      style={{
        boxShadow: "0 0 10px 2px rgba(0, 0, 0, 0.15)",
        borderRadius: "15px",
        padding: "15px",
      }}
    >
      {props.data.length !== 0 && <h2>{day}</h2>}

      {image}
      {temp}
      {condition}
    </div>
  );
}
