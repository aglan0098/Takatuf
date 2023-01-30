import React from "react";

export default function Footer() {
  return (
    <>
      <div className="container-fluid p-5 bg-light">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="row">
              <div className="col-6">
                <p className="colored-text">تكاتف</p>
                <ul className="px-0">
                  <li className="list-item">عن تكاتف</li>
                  <li className="list-item">المدونة</li>
                  <li className="list-item">تدريب</li>
                  <li className="list-item">تواصل معنا</li>
                </ul>
              </div>
              <div className="col-6">
                <p className="colored-text">تكاتف للشركات</p>
                <ul className="px-0">
                  <li className="list-item">خدماتنا</li>
                  <li className="list-item">أسئلة شائعة للشركات</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <button className="icon-button"><i class='bx bxs-envelope fs-4'></i></button>
            <button className="icon-button"><i class='bx bxl-twitter fs-4'></i></button>
            <button className="icon-button"><i class='bx bxl-linkedin fs-4'></i></button>
          </div>
        </div>
      </div>
    </>
  );
}
