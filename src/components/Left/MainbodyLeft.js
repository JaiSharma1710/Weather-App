import React, { Fragment, useState } from "react";
import Input from "../Ui/Input";
import Styles from "./Left.module.css";
import DateAndTime from "./Mainbody internal/DateAndTime";
import IconText from "./Mainbody internal/IconText";
import LastLeft from "./Mainbody internal/LastLeft";

export default function MainbodyLeft(props) {
  let [weatherData, setWeatherData] = useState([]);
  let [err, setErr] = useState(false);

  const getInputData = async (data) => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=a7717d5fbc384077aa0104207221106&q=${data}&aqi=yes`
    );

    if (response.status !== 200) {
      setErr(true);
    }

    const responseData = await response.json();
    setWeatherData((pre) => {
      pre = [];
      return [...pre, responseData];
    });

    if (response.status === 200) {
      props.data(responseData);
    } else {
      props.data(true);
    }
  };

  const reset = () => {
    setWeatherData([]);
    setErr(false);
    props.reset();
  };

  let content;

  err
    ? (content = (
        <div className={Styles.error}>
          <h1>No Location found!!</h1>
          <button onClick={reset} className="btn btn-dark">
            Reset
          </button>
        </div>
      ))
    : (content = (
        <div className={Styles.left}>
          <Input
            getData={getInputData}
            alertStatus={props.alertStatus}
            forcast={props.forcast}
          />
          <DateAndTime />
          <IconText data={weatherData} />
          <LastLeft data={weatherData} />
        </div>
      ));

  return <>{content}</>;
}
