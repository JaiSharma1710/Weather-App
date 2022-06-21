import React from "react";

export default function WindSpeed(props) {
  let windSpeed;

  props.data.length !== 0
    ? (windSpeed = props.data[0].current.wind_kph)
    : (windSpeed = "");

  return (
    <div>
      <h3 style={{ color: "grey" }}>Wind Speed</h3>
      <h3 style={{ marginTop: "25px" }}>{windSpeed}Km/h</h3>
    </div>
  );
}
