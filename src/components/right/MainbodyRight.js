import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Style from "./styles/right.module.css";

export default function MainbodyRight(props) {
  return (
    <div className={Style.main}>
      <Section1 S1data={props.getData} />
      <Section2 S2data={props.getData} />
      <Section3 S3data={props.forcastData} />
    </div>
  );
}
