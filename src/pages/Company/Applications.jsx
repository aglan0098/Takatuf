import React from "react";

import app from "../../assets/images/applications.png";
import SecondNav from "../../components/SecondNav";

export default function Applications() {
  return (
    <>
      <div className="container-fluid">
        <SecondNav />
        <div className="row">
          <div className="col-12 text-center my-5">
            <img src={app} className="col-md-10 col-12" />
          </div>
        </div>
      </div>
    </>
  );
}
