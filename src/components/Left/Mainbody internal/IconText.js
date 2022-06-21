import React from "react";

export default function IconText(props) {
  // console.log(props.data[0]);

  let iconSrc;
  let temp;
  let condition;

  props.data.length !== 0
    ? (iconSrc = (
        <img
          style={{ width: "120px", display: "inline-block" }}
          src={props.data[0].current.condition.icon}
          alt="img"
        ></img>
      ))
    : (iconSrc = "");

  props.data.length !== 0
    ? (temp = (
        <h1
          style={{
            fontSize: "70px",
          }}
        >{`${props.data[0].current.temp_c}*C`}</h1>
      ))
    : (temp = "");

  props.data.length !== 0
    ? (condition = (
        <h1 style={{ marginTop: "30px", fontSize: "30px" }}>
          {props.data[0].current.condition.text}
        </h1>
      ))
    : (condition = "");

  return (
    <>
      <div className={`container text-center fs-1`}>
        {iconSrc}
        {temp}
        {condition}
      </div>
    </>
  );
}
