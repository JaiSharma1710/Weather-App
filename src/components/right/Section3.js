import React from "react";
import Styles from "./styles/Section3.module.css";
import Current from "./Section3 internal/Current";
import Forcast from "./Section3 internal/Forcast";
import Forcast2 from "./Section3 internal/Forcast2";
import Forcast3 from "./Section3 internal/Forcast3";

export default function Section3(props) {
  return (
    <div id="section3" className={Styles.main}>
      <Current data={props.S3data} />
      <Forcast data={props.S3data} />
      <Forcast2 data={props.S3data} />
      <Forcast3 data={props.S3data} />
    </div>
  );
}
