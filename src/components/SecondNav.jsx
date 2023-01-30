import React from "react";
import logo from "../assets/images/logo.svg";

export default function SecondNav() {
  return (
    <div className="header d-flex justify-content-between align-items-center px-md-5 py-2">
      <h4 className="colored-text-darker">من نحن</h4>
      <div className="d-flex align-items-center">
        <div className="col-6 text-center">
          <p className="colored-text-darker fw-bold fs-5 my-0">تكاتف</p>
          <p className="colored-text my-0">TAKATUF</p>
        </div>
        <div className="col-6">
          <img src={logo} className="w-75" />
        </div>
      </div>
    </div>
  );
}
