import React from "react";

export default function Step1({ nextStep, handleInputData, values }) {
  const Next = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <>
      <p className="colored-text mb-4">معلومات الشركة</p>
      <div className="col-12 mb-3">
        <label className="mb-2" htmlFor="">
          إسم الشركة
        </label>
        <br />
        <input
          className="col-12 px-2 py-1 rounded form-input"
          type="text"
          value={values.companyName}
          onChange={handleInputData("companyName")}
        />
      </div>

      <div className="col-12 mb-3">
        <label className="mb-2" htmlFor="">
          حجم المنشأة
        </label>
        <br />
        <input
          className="col-12 px-2 py-1 rounded form-input"
          type="text"
          value={values.size}
          onChange={handleInputData("size")}
        />
      </div>

      <div className="col-12 mb-3">
        <label className="mb-2" htmlFor="">
          مجال العمل
        </label>
        <br />
        <input
          className="col-12 px-2 py-1 rounded form-input"
          type="text"
          value={values.field}
          onChange={handleInputData("field")}
        />
      </div>

      <div className="col-12 mb-3">
        <label className="mb-2" htmlFor="">
          القطاع
        </label>
        <br />
        <input
          className="col-12 px-2 py-1 rounded form-input"
          type="text"
          value={values.sector}
          onChange={handleInputData("sector")}
        />
      </div>

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

      <div className="col-12">
        <button className="default-button px-5" onClick={Next}>
          التالي
        </button>
      </div>
    </>
  );
}
