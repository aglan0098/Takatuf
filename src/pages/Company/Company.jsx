import React from "react";
import logo from "../../assets/images/logo.svg";
import shape from "../../assets/images/formBackground.png";
import Form from "./Form/Form";

import { useNavigate } from "react-router-dom";
import { logout } from "../../firebase_setup/firebase";

export default function Company() {
  const navigate = useNavigate();
  const out = () => {
    logout();
    navigate("/home");
  };
  return (
    <>
      <div className="container-fluid">
        {/* ========= Nav ========= */}
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

        {/* ========= Form =========== */}
        <div className="d-flex justify-content-center align-items-center py-4 position-relative" style={{height: `100vh`}}>
          <button
            className="btn btn-outline-danger my-3 position-absolute"
            onClick={out}
            style={{ left: `25px`, top: `10px` }}
          >
            log out
          </button>
          <Form />
          <img
            src={shape}
            className="position-absolute w-50"
            style={{ bottom: `0`, left: `0` }}
          />
        </div>
      </div>
    </>
  );
}
