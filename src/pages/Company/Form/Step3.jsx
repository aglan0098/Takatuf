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
      <p className="colored-text mb-4">معلومات التدريب</p>
      <div className="col-12 mb-3">
        <label className="mb-2" htmlFor="">
          موعد التدريب التعاوني
        </label>
        <br />
        <input
          className="col-12 px-2 py-1 rounded form-input"
          type="text"
          value={values.trainingDate}
          onChange={handleInputData("trainingDate")}
        />
      </div>

      <div className="col-12 mb-3">
        <label className="mb-2" htmlFor="">
          الجنس المطلوب
        </label>
        <br />
        <input
          className="col-12 px-2 py-1 rounded form-input"
          type="text"
          value={values.wantedGender}
          onChange={handleInputData("wantedGender")}
        />
      </div>

      <div className="col-12 mb-3">
        <label className="mb-2" htmlFor="">
          التخصص الذي تبحث عنه
        </label>
        <br />
        <input
          className="col-12 px-2 py-1 rounded form-input"
          type="text"
          value={values.wantedDep}
          onChange={handleInputData("wantedDep")}
        />
      </div>

      <div className="col-12 mb-3">
        <label className="mb-2" htmlFor="">
          إمكانية صرف مكافئة تدريب
        </label>
        <br />
      </div>

      <div className="row mb-4">
        <div className="col-6">
          <input
            className="col-12 px-2 py-1 rounded form-input"
            type="radio"
            name="award"
            value={values.gpa}
            onChange={handleInputData("gpa")}
          />
          <label className="mb-2" htmlFor="">
            لا توجد مكافئة نقدية
          </label>
        </div>
        <div className="col-6">
          <input
            className="col-12 px-2 py-1 rounded form-input"
            type="radio"
            name="award"
            value={values.gpaType}
            onChange={handleInputData("gpaType")}
          />
          <label className="mb-2" htmlFor="">
            تصرف مكافئة و قدرها :
          </label>
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
