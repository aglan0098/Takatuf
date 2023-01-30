import React from "react";

export default function Step2({ prevStep, nextStep, handleInputData, values }) {
  const Prev = (e) => {
    e.preventDefault();
    prevStep();
  };

  const Next = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <>
      <p className="colored-text mb-4">معلومات مسؤول التدريب</p>
      <div className="col-12 mb-3">
        <label className="mb-2" htmlFor="">
          اسم المسؤول
        </label>
        <br />
        <input
          className="col-12 px-2 py-1 rounded form-input"
          type="text"
          value={values.employerName}
          onChange={handleInputData("employerName")}
        />
      </div>

      <div className="col-12 mb-3">
        <label className="mb-2" htmlFor="">
          المسمى الوظيفي
        </label>
        <br />
        <input
          className="col-12 px-2 py-1 rounded form-input"
          type="text"
          value={values.jobTitle}
          onChange={handleInputData("jobTitle")}
        />
      </div>

      <div className="col-12 mb-3">
        <label className="mb-2" htmlFor="">
          رقم الجوال
        </label>
        <br />
        <input
          className="col-12 px-2 py-1 rounded form-input"
          type="text"
          value={values.mobile}
          onChange={handleInputData("mobile")}
        />
      </div>

      <div className="col-12 mb-3">
        <label className="mb-2" htmlFor="">
          البريد الإلكتروني
        </label>
        <br />
        <input
          className="col-12 px-2 py-1 rounded form-input"
          type="text"
          value={values.email}
          onChange={handleInputData("email")}
        />
      </div>

      <div className="col-12">
        <button className="default-button px-5" onClick={Next}>
          التالي
        </button>
        <button className="small-button mx-4" onClick={Prev}>
          العودة
        </button>
      </div>
    </>
  );
}
