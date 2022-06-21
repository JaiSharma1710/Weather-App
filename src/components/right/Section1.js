import React from "react";

export default function Section1(props) {
  let name;
  let region;
  let country;

  props.S1data.length !== 0
    ? (name = props.S1data[0].location.name)
    : (name = "");

  props.S1data.length !== 0
    ? (region = props.S1data[0].location.region)
    : (region = "");

  props.S1data.length !== 0
    ? (country = props.S1data[0].location.country)
    : (country = "");

  return (
    <div className="text-center">
      {props.S1data.length !== 0 && (
        <h1 style={{ marginBottom: "25px" }}>{`${name}, ${region}`}</h1>
      )}
      <div
        className="d-flex justify-content-center"
        style={{ columnGap: "40px" }}
      >
        {props.S1data.length !== 0 ? (
          <img
            alt="flag"
            style={{
              width: "80px",
              display: "inline-block",
            }}
            src={`https://countryflagsapi.com/png/${country}`}
          ></img>
        ) : (
          <h2>Welcome to Weather app</h2>
        )}

        <h2 style={{ display: "inline-block", margin: "0" }}>{country}</h2>
      </div>
    </div>
  );
}
