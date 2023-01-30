import React, { useEffect, useState } from "react";
import SecondNav from "../../components/SecondNav";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  findUser,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase_setup/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }

    if (user) {
      findUser(user.email)
        .then((role) => {
          if (role == "company") {
            navigate("/companies-form");
          } else {
            navigate("/trainer-form");
          }
        })
        .catch(() => console.log("rooooo"));
    }
  }, [user, loading]);

  return (
    <>
      <div className="container-fluid py-1">
        <SecondNav />
        <div className="d-flex justify-content-center my-4 py-4 col-12 col-sm-10 col-md-7 m-auto">
          <div className="login-form px-4">
            <p className="fw-bold fs-4 colored-text-darker text-center mb-4">
              تسجيل الدخول
            </p>
            <div className="container bg-light form px-4 py-3">
              <div className="row">
                <label className="fw-bold mb-2">البريد الالكتروني</label>
                <br />

                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="col-12 p-2 mb-3 form-input rounded"
                />

                <label className="fw-bold mb-2">الرقم السري</label>
                <br />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="col-12 p-2 mb-3 form-input rounded"
                />
                <div className="row">
                  <button
                    className="primary-button col-5 m-auto my-2"
                    onClick={() => logInWithEmailAndPassword(email, password)}
                  >
                    دخول
                  </button>
                </div>
                <button
                  className="col-6 m-auto my-2 default-button"
                  onClick={signInWithGoogle}
                >
                  تسجيل الدخول باستخدام جوجل
                </button>
                <p className="fw-bold text-center my-2">
                  أو قم بانشاء حساب ك: متدرب من...
                  <Link to="/trainer-register">
                    <span className="colored-text">هنا </span>
                  </Link>
                  كشركه من...
                  <Link to="/company-register">
                    <span className="colored-text">هنا</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
