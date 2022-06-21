import React from "react";

export default function Humidity(props) {
  // console.log(props.data);

  let humidity;

  props.data.length !== 0
    ? (humidity = props.data[0].current.humidity)
    : (humidity = "");

  return (
    <div>
      <h3 style={{ color: "grey" }}>Humidity</h3>
      <h3 style={{ marginTop: "25px" }}>{humidity}%</h3>
    </div>
  );
}
