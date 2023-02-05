import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import headerPic from "../../assets/images/headerPic.png";
import reviews from "../../assets/images/reviews.png"
import companies from "../../assets/images/companies.png";
import place from "../../assets/images/place.png";

import icon1 from "../../assets/images/home_icon1.png";
import icon2 from "../../assets/images/home_icon2.png";
import icon3 from "../../assets/images/home_icon3.png";

import forCompanies from "../../assets/images/for-companies.png";
import forTrainers from "../../assets/images/for-trainers.png";

import logo from "../../assets/images/logo.svg";
import img1 from "../../assets/images/articles/1.png";
import img2 from "../../assets/images/articles/2.png";
import img3 from "../../assets/images/articles/3.png";
import img4 from "../../assets/images/articles/4.png";
import img5 from "../../assets/images/articles/5.png";
import img6 from "../../assets/images/articles/6.png";

export default function Home() {
  return (
    <>
      <NavBar />
      {/* ================= Header ============== */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center px-5 pt-5">
            <div>
              <h2 className="mb-4">
                بوابتك المهنية تبدأ مع
                <br /> <span className="linear-text">تكاتف</span>
              </h2>
              <p className="mb-3 gray-text">
                تكاتف هي منصة تجمع الطلاب المقبلين على التخرج
              </p>
              <p className="gray-text">
                و الشركات التي تقدم برامج تدريبية تساهم في تحفيز الطلاب و تطوير
                مهارات التوظيف لديها .
              </p>
              <p className="gray-text fw-bold my-4">أبحث عن:</p>
              <div className="row">
                <button className="col-5 ms-4 default-button">
                  أبحث عن متدربين <img src={logo} className="w-25" />
                </button>
                <button className="col-5 primary-button">
                  أبحث عن تدريب تعاوني <img src={logo} className="w-25" />
                </button>
              </div>
              <p className="gray-text text-center mt-3">
                أكثر من 10 ألف متدرب في المنصه جاهز للتدريب
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={headerPic} className="w-100" />
          </div>
        </div>
      </div>

      {/* ================= شركات ============== */}
      <div className="container py-5">
        <img src={reviews} className="w-100 my-4" />
        <h4 className="text-center fw-bold my-5">شركات تثق بتكاتف</h4>
        <img src={companies} className="w-100 my-4" />

        <h4 className="text-center fw-bold my-5">
          منصّة متكاملة للتدريب وإدارة العمليات
        </h4>
        <div className="col-10 m-auto row text-center my-4 py-3 gap-4">
          <div
            className="col-md rounded position-relative py-5"
            style={{ border: `1px solid gray` }}
          >
            <span
              className="position-absolute px-2 text-light fw-bold"
              style={{
                top: `15px`,
                right: `25px`,
                borderRadius: `50%`,
                backgroundColor: `#74c671`,
              }}
            >
              1
            </span>
            <img src={icon1} />
            <p className="text-center fw-bold">
              الشركات تنشر فرص التدريب في المنصّة
            </p>
          </div>
          <div
            className="col-md rounded position-relative py-5"
            style={{ border: `1px solid gray` }}
          >
            <span
              className="position-absolute px-2 text-light fw-bold"
              style={{
                top: `15px`,
                right: `25px`,
                borderRadius: `50%`,
                backgroundColor: `#74c671`,
              }}
            >
              2
            </span>
            <img src={icon2} className="my-4" />
            <p className="text-center fw-bold">
              طلاب و طالبات مؤهلين يقدّمون على الفرص
            </p>
          </div>
          <div
            className="col-md rounded position-relative py-5"
            style={{ border: `1px solid gray` }}
          >
            <span
              className="position-absolute px-2 text-light fw-bold"
              style={{
                top: `15px`,
                right: `25px`,
                borderRadius: `50%`,
                backgroundColor: `#74c671`,
              }}
            >
              3
            </span>
            <img src={icon3} className="my-4" />
            <p className="text-center fw-bold mt-4">
              لباقي علينا! الجدولة والمتابعة
            </p>
          </div>
        </div>
      </div>

      {/* ================= انجازات ============== */}
      <div className="container-fluid py-2 position-relative bg-light">
        <h3 className="text-center fw-bold my-4">إنجازات نفتخر فيها</h3>
        <div className="row text-center my-4 py-5 w-75 m-auto">
          <div className="col-md-3 mb-3">
            <h2 className="fw-bold fs-1">+10 ألف</h2>
            <p className="my-1">سعودي وسعودية </p>
            <p className="my-0">مؤهلين وجاهزين للتدريب</p>
          </div>
          <div className="col-md-3 mb-3">
            <h2 className="fw-bold fs-1">97%</h2>
            <p className="my-1">نسبة الحضور</p>
            <p className="my-0">والخروج على الوقت</p>
          </div>
          <div className="col-md-3 mb-3">
            <h2 className="fw-bold fs-1">+500 ألف</h2>
            <p className="my-1">ساعة تدريب</p>
            <p className="my-0">تمت تغطيتها</p>
          </div>
          <div className="col-md-3 mb-3">
            <h2 className="fw-bold fs-1">+4.5</h2>
            <p className="my-1">متوسّط تقييم</p>
            <p className="my-0">المتدربين في المنصّة</p>
          </div>
        </div>
        {/* <img
          src={rocet}
          className="col-2 position-absolute"
          style={{ bottom: `0px`, right: `10px`}}
        /> */}
      </div>

      {/* =================== Details ================= */}
      <div className="container p-5">
        <div className="row my-4 py-3">
          <div className="col-md-4 d-flex align-items-center justify-content-start mb-4 mb-md-0">
            <div className="content">
              <h4 className="fw-bold mb-4">وين تكاتف؟</h4>
              <p className="colored-text fw-bold">المملكة العربية السعودية</p>
              <p className="my-1">الرياض</p>
              <p className="my-1">جدة</p>
              <p className="my-1">الدمام</p>
            </div>
          </div>
          <div className="col-md-8">
            <img src={place} className="w-100" />
          </div>
        </div>

        <div className="row my-4 py-4">
          <div className="col-md-6">
            <img src={forCompanies} className="w-100" />
          </div>
          <div className="col-md-6 py-5">
            <h4 className="fw-bold mb-5">تكاتف للشركات</h4>
            <div className="row mb-5">
              <div className="col">
                <p className="fw-bold">
                  متدربين تم تأهيلهم <br />
                  وتدريبهم للوظائف
                </p>
              </div>
              <div className="col">
                <p className="fw-bold">
                  تغطية فرص العمل
                  <br /> لضمان سير عمل الفروع
                </p>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col">
                <p className="fw-bold">
                  متدربين أكفاء و شغوفين
                  <br /> للتكيف مع بيئة العمل
                </p>
              </div>
              <div className="col">
                <p className="fw-bold">
                  راحة بال، نتابع عنك الحضور
                  <br /> وسداد دفعات المتدربين
                </p>
              </div>
            </div>

            <button className="default-button">بدء البحث عن متدربين</button>
            <button className="small-button mx-5">تعرف أكثر</button>
          </div>
        </div>

        <div className="row my-4 py-4">
          <div className="col-md-6 py-5">
            <h4 className="fw-bold mb-5">تكاتف للباحثين عن التدريب</h4>
            <div className="row mb-5">
              <div className="col">
                <p className="fw-bold">فرص تدريب تناسب جدولك</p>
              </div>
              <div className="col">
                <p className="fw-bold">
                  احصل على خبرة خلال <br /> مدة تدريبك
                </p>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col">
                <p className="fw-bold">
                  اكسب خبرات عمل
                  <br /> تفيد سيرتك الذاتية
                </p>
              </div>
              <div className="col">
                <p className="fw-bold">
                  طوّر مهاراتك <br />
                  الشخصية والمهنية
                </p>
              </div>
            </div>

            <button className="default-button">ابدأ العمل</button>
            <button className="small-button mx-5">تعرف أكثر</button>
          </div>
          <div className="col-md-6">
            <img src={forTrainers} className="w-100" />
          </div>
        </div>
      </div>

      {/* =================== Articles ================= */}
      <div className="container py-3">
        <h2 className="text-center fw-bold py-3">تعرّف أكثر على العمل المرن</h2>
        <div className="row gap-4 my-5">
          <div
            className="col bg-light"
            style={{ borderBottom: `1px solid #999` }}
          >
            <img src={img1} className="w-100 mb-2" />
            <p className="my-2 colored-text">العمل المرن للشركات</p>
            <p className="fw-bold">
              دليلك لثقافة الشركة | تجربة مبات، وسالا
              <br /> سيتي، وقهوة صحبة
            </p>
            <p className="gray-text">
              30 نوفمبر 2022 <span className="mx-4">.</span> 7 دقيقة
            </p>
          </div>
          <div
            className="col bg-light"
            style={{ borderBottom: `1px solid #999` }}
          >
            <img src={img2} className="w-100 mb-2" />
            <p className="my-2 colored-text">العمل المرن للشركات</p>
            <p className="fw-bold">
              خلّصت أفكارك؟ جرّب عواطفك! | دليلك للتسويق
              <br /> العاطفي
            </p>
            <p className="gray-text">
              1 نوفمبر 2022 <span className="mx-4">.</span> 6 دقيقة
            </p>
          </div>
          <div
            className="col bg-light"
            style={{ borderBottom: `1px solid #999` }}
          >
            <img src={img3} className="w-100 mb-2" />
            <p className="my-2 colored-text">العمل المرن للشركات</p>
            <p className="fw-bold">
              التوظيف الموسمي: كيف توظّف وتستفيد
              <br /> من الكفاءات السعودية؟ | تجربة مجموعة العبدالكريم ودوز
            </p>
            <p className="gray-text">
              2 أكتوبر 2022 <span className="mx-4">.</span> 6 دقيقة
            </p>
          </div>
        </div>

        <div className="row gap-4">
          <div className="col bg-light">
            <img src={img4} className="w-100 mb-2" />
            <p className="my-2 colored-text">العمل المرن للشركات</p>
            <p className="fw-bold">
              كيف يجنّبك العمل المرن تكاليف المواسم الراكدة
            </p>
            <p className="gray-text">
              31 أغسطس 2022 <span className="mx-4">.</span> 4 دقيقة
            </p>
          </div>
          <div className="col bg-light">
            <img src={img5} className="w-100 mb-2" />
            <p className="my-2 colored-text">العمل المرن للشركات</p>
            <p className="fw-bold">
              الدوران الوظيفي: ماهو؟ وكيف يحلّه العمل المرن؟
            </p>
            <p className="gray-text">
              31 يوليو 2022 <span className="mx-4">.</span> 5 دقيقة
            </p>
          </div>
          <div className="col bg-light">
            <img src={img6} className="w-100 mb-2" />
            <p className="my-2 colored-text">تقارير</p>
            <p className="fw-bold">
              [تقرير] تعرّف على السوق السعودي للعمل: جيل جديد من الباحثين!
            </p>
            <p className="gray-text">
              4 يوليو 2022 <span className="mx-4">.</span> 6 دقيقة
            </p>
          </div>
        </div>
        <div className="text-center my-5">
          <button className="default-button m-auto">اقرأ أكثر</button>
        </div>
      </div>

      <Footer />
    </>
  );
}
