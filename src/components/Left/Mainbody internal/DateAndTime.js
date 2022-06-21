import React from "react";

export default function DateAndTime() {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let date = new Date().toLocaleDateString("en-US", options);
  let hours = new Date().getHours();
  let ampm;
  if (hours < 12) {
    ampm = "AM";
  } else if (hours > 12) {
    ampm = "PM";
  }
  let min = new Date().getMinutes();
  let time = String(hours) + ":" + String(min);

  return (
    <div
      style={{ color: "grey", marginTop: "10px" }}
      className="container text-center fs-3"
    >{`${time} ${ampm}, ${date}`}</div>
  );
}
