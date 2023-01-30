import React from "react";
import SecondNav from "../../components/SecondNav";
import shape from "../../assets/images/formBackground.png";
import Form from "./Form/Form";

import { useNavigate } from "react-router-dom";
import { logout } from "../../firebase_setup/firebase";

export default function Trainer() {
  const navigate = useNavigate();
  const out = () => {
    logout();
    navigate("/home");
  };
  return (
    <>
      <div className="container-fluid">
        {/* ========= Nav ========= */}
        <SecondNav />

        {/* ========= Form =========== */}
        <div className="d-flex justify-content-center align-items-center py-4 position-relative" style={{height: `100vh`}}>
        <button className="btn btn-outline-danger my-3 position-absolute" onClick={out} style={{left: `25px`, top:`10px`}}>log out</button>
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
