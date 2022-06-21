import React, { Fragment, useRef } from "react";

export default function Input(props) {
  const ref = useRef();

  const fromSubmitHandeler = (event) => {
    event.preventDefault();

    if (ref.current.value === "") {
      props.alertStatus(true);
      setTimeout(() => {
        props.alertStatus(false);
      }, 3000);
    } else {
      props.getData(ref.current.value);
      props.forcast(ref.current.value);
    }
    ref.current.value = "";
  };

  return (
    <Fragment>
      <form onSubmit={fromSubmitHandeler} className="input-group mb-3">
        <input
          autoComplete="off"
          id="input"
          type="text"
          className="form-control"
          placeholder="Enter Your City"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          ref={ref}
        />
        <button
          className="btn btn-outline-secondary"
          type="sunmit"
          id="button-addon2"
        >
          Button
        </button>
      </form>
    </Fragment>
  );
}
