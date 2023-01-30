import React from "react";

export default function Step1({ nextStep, handleInputData, values }) {
  const Next = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <>
      <div className="col-12 mb-3">
        <label className="mb-2" htmlFor="">
          المدينة
        </label>
        <br />
        <input
          className="col-12 px-2 py-1 rounded form-input"
          type="text"
          value={values.city}
          onChange={handleInputData("city")}
        />
      </div>
      <div className="col-12 mb-3">
        <label className="mb-2" htmlFor="">
          اسم الجامعة
        </label>
        <br />
        <input
          className="col-12 px-2 py-1 rounded form-input"
          type="text"
          value={values.university}
          onChange={handleInputData("university")}
        />
      </div>

      <div className="col-12 mb-3">
        <label className="mb-2" htmlFor="">
          التخصص
        </label>
        <br />
        <input
          className="col-12 px-2 py-1 rounded form-input"
          type="text"
          value={values.dep}
          onChange={handleInputData("dep")}
        />
      </div>

      <div className="col-12 mb-3">
        <label className="mb-2" htmlFor="">
          المدن التي ترغب في التدرب بها
        </label>
        <br />
        <input
          className="col-12 px-2 py-1 rounded form-input"
          type="text"
          value={values.citysYouWant}
          onChange={handleInputData("citysYouWant")}
        />
      </div>

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

      <div className="col-12">
        <button className="default-button px-5" onClick={Next}>
          التالي
        </button>
      </div>
    </>
  );
}
