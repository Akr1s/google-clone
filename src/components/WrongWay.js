import React from "react";
import { Link } from "react-router-dom";
import "./WrongWay.css";

function WrongWay() {
  return (
    <div className="container">
      <div className="mainbox">
        <div className="err">4</div>
        <i className="far fa-question-circle fa-spin"></i>
        <div className="err2">4</div>
        <div className="msg">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <p>
            Let's go{" "}
            <Link to="/" className="wrong__link">
              home
            </Link>{" "}
            and try from there.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WrongWay;
