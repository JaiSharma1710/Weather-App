import React from "react";
import Style from "./styles/bar.module.css";

export default function Section2(props) {
  // console.log(props.S2data);

  let temp;

  props.S2data.length !== 0
    ? (temp = props.S2data[0].current.temp_c)
    : (temp = 0);

  // console.log(temp);

  return (
    <div className={Style.bar}>
      <div
        style={{
          marginTop: "15px",
          width: "90%",
          height: "25px",
          backgroundColor: "white",
          border: "1px solid grey",
          borderRadius: "15px",
        }}
      >
        <div
          style={{
            width: `${temp}%`,
            height: "100%",
            backgroundColor: "green",
            borderRadius: "15px",
          }}
        ></div>
      </div>
      <h1 style={{ display: "inline-block" }}>{`${temp}*C`}</h1>
    </div>
  );
}
