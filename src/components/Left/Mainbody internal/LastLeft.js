import React from "react";
import Humidity from "./Last left/Humidity";
import WindSpeed from "./Last left/WindSpeed";
import Styles from "./Last.module.css";
export default function LastLeft(props) {
  return (
    <div className={Styles.last}>
      <Humidity data={props.data} />
      <WindSpeed data={props.data} />
    </div>
  );
}
