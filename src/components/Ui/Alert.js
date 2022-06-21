import React from "react";
import Styles from "./styles/Alert.module.css";

export default function Alert() {
  return (
    <div className={`alert alert-danger ${Styles.myAlert}`} role="alert">
      <strong>"Please Enter Valid Data"</strong>
    </div>
  );
}
