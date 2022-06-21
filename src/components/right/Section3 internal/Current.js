import React from "react";

export default function Current(props) {
  // console.log(props.data[0]);

  let currentImg;
  let temp;
  let condition;

  props.data.length !== 0
    ? (currentImg = (
        <img src={props.data[0].current.condition.icon} alt="icon" />
      ))
    : (currentImg = "");

  props.data.length !== 0
    ? (temp = (
        <p style={{ fontSize: "25px" }}>{props.data[0].current.temp_c}*C</p>
      ))
    : (temp = "");

  props.data.length !== 0
    ? (condition = (
        <p style={{ fontSize: "25px", color: "grey" }}>
          {props.data[0].current.condition.text}
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
      {props.data.length !== 0 && <h2>Today</h2>}
      {currentImg}
      {temp}
      {condition}
    </div>
  );
}
