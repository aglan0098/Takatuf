import React from "react";
import handleSubmit from "./handleSubmit";

export default function Step2({ prevStep, nextStep, handleInputData, values }) {
  const Prev = (e) => {
    e.preventDefault();
    prevStep();
  };

  const submithandler = (e) => {
    e.preventDefault();
    nextStep();
    handleSubmit(values);
  };

  return (
    <>
      <div className="col-12 mb-3">
        <label className="mb-2" htmlFor="">
          اسم المتدرب
        </label>
        <br />
        <input
          className="col-12 px-2 py-1 rounded form-input"
          type="text"
          value={values.name}
          onChange={handleInputData("name")}
        />
      </div>
      <div className="col-12 mb-3">
        <label className="mb-2" htmlFor="">
          الجنس
        </label>
        <br />
        <input
          className="col-12 px-2 py-1 rounded form-input"
          type="text"
          value={values.gender}
          onChange={handleInputData("gender")}
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

      <div className="row text-center mb-4">
        <div className="col-4">
          <label className="mb-2" htmlFor="">
            المعدل التراكمي
          </label>
          <br />
          <input
            className="col-12 px-2 py-1 rounded form-input"
            type="text"
            value={values.gpa}
            onChange={handleInputData("gpa")}
          />
        </div>
        <div className="col-4">
          <label className="mb-2" htmlFor="">
            نوع المعدل التراكمي
          </label>
          <br />
          <input
            className="col-12 px-2 py-1 rounded form-input"
            type="text"
            value={values.gpaType}
            onChange={handleInputData("gpaType")}
          />
        </div>
        <div className="col-4">
          <label className="mb-2" htmlFor="">
            السيرة الذاتية
          </label>
          <br />
          <input
            className="col-12 px-2 py-1 rounded form-input"
            type="text"
            value={values.cv}
            onChange={handleInputData("cv")}
          />
        </div>
      </div>

      <div className="col-12">
        <button className="default-button px-5" onClick={submithandler}>
          ارسال
        </button>
        <button className="small-button mx-4" onClick={Prev}>
          العودة
        </button>
      </div>
    </>
  );
}
