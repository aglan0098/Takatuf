import React from "react";
import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

import MultiStepProgressBar from "./MultiStepProgressBar";
import sentPic from "../../../assets/images/company-success.png";
import gif from "../../../assets/images/check-gif.gif";
import { NavLink } from "react-router-dom";

export default function Form() {
  //state for steps
  const [step, setstep] = useState(1);

  //state for form data
  const [formData, setFormData] = useState({
    companyName: "",
    size: "",
    field: "",
    sector: "",
    city: "",
    employerName: "",
    jobTitle: "",
    mobile: "",
    email: "",
    trainingDate: "",
    wantedGender: "",
    wantedDep: "",
    award: "",
  });

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = (input) => (e) => {
    // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  return (
    <>
      {((step == 1 || step == 2 || step == 3) && (
        <form
          action=""
          className="container col-12 col-md-8 col-lg-6"
          style={{ zIndex: `1` }}
        >
          <div className="w-100 mb-4">
            <MultiStepProgressBar currentStep={step} />
          </div>

          <div className="form-content py-4 px-5 bg-light">
            <div className="row">
              {step == 1 && (
                <Step1
                  nextStep={nextStep}
                  handleInputData={handleInputData}
                  values={formData}
                />
              )}

              {step == 2 && (
                <Step2
                  prevStep={prevStep}
                  nextStep={nextStep}
                  handleInputData={handleInputData}
                  values={formData}
                />
              )}

              {step == 3 && (
                <Step3
                  prevStep={prevStep}
                  nextStep={nextStep}
                  handleInputData={handleInputData}
                  values={formData}
                />
              )}
            </div>
          </div>
        </form>
      )) || (
        <div className="container text-center">
          <NavLink to="/trainers-applications">
            <button className="btn btn-outline-success fw-bold">
              انتقل الي الطلبات
            </button>
          </NavLink>
          <div className="row py-5">
            <div className="col-12 col-md-8 col-lg-5 m-auto d-flex justify-content-center position-relative">
              <img src={sentPic} className="col-12" />
              <img
                src={gif}
                style={{
                  mixBlendMode: `multiply`,
                  zIndex: `1`,
                  width: `60%`,
                  top: `75px`,
                }}
                className="position-absolute rounded"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
