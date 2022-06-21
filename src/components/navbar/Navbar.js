import React, { Fragment } from "react";
export default function Navbar() {
  return (
    <Fragment>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <strong>Weather</strong> App
          </span>
        </div>
      </nav>
    </Fragment>
  );
}
