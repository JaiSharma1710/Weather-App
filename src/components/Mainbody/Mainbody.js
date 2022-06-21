import React, { Fragment, useState } from "react";
import MainbodyLeft from "../Left/MainbodyLeft";
import MainbodyRight from "../right/MainbodyRight";
import Styles from "./Mainbody.module.css";

export default function Mainbody(props) {
  let [response, setResponse] = useState([]);
  let [forcastData, setForcastData] = useState([]);

  const [err, setErr] = useState(false);

  const gettingData = (data) => {
    if (data === true) {
      setErr(true);
    } else {
      setResponse((pre) => {
        pre = [];
        return [...pre, data];
      });
    }
  };

  const forcast = async (fData) => {
    let response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=a7717d5fbc384077aa0104207221106&q=${fData}&days=4&aqi=no&alerts=no`
    );
    let data = await response.json();

    if (response.status === 200) {
      setForcastData((pre) => {
        pre = [];
        return [...pre, data];
      });
    }
  };

  const reset = () => {
    setErr(false);
    setResponse([]);
    setForcastData([]);
  };

  return (
    <Fragment>
      <div className={`container ${Styles.main}`}>
        <MainbodyLeft
          alertStatus={props.alertStatus}
          data={gettingData}
          reset={reset}
          forcast={forcast}
        />
        {err ? (
          <h1
            style={{
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            No Data Found!!
          </h1>
        ) : (
          <MainbodyRight getData={response} forcastData={forcastData} />
        )}
      </div>
      <footer
        className="container text-center"
        style={{ color: "grey", fontWeight: "bold", marginTop: "50px" }}
      >
        <p>Made by Jai Sharma</p>
      </footer>
    </Fragment>
  );
}
