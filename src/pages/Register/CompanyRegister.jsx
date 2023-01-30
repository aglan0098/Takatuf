import React, { useEffect, useState } from "react";
import SecondNav from "../../components/SecondNav";

import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPasswordC,
} from "../../firebase_setup/firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPasswordC(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/companies-form");
  }, [user, loading]);

  return (
    <>
      <div className="container-fluid py-1">
        <SecondNav />
        <div className="d-flex justify-content-center col-12 col-sm-10 col-md-7 m-auto">
          <div className="login-form px-4">
            <p className="fw-bold fs-4 colored-text-darker text-center mb-4">
              انشاء حساب كشركه
            </p>
            <div className="container form px-4 py-3 bg0light">
              <div className="row">
                <label className="fw-bold mb-2">الأسم</label>
                <br />
                <input
                  type="text"
                  className="col-12 p-2 mb-3 form-input rounded"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                />

                <label className="fw-bold mb-2">البريد الالكتروني</label>
                <br />
                <input
                  type="text"
                  className="col-12 p-2 mb-3 form-input rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail Address"
                />

                <label className="fw-bold mb-2">الرقم السري</label>
                <br />
                <input
                  type="password"
                  className="col-12 p-2 mb-3 form-input rounded"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />

                <div className="row">
                  <button
                    className="primary-button col-5 m-auto my-2"
                    onClick={register}
                  >
                    انشاء حساب
                  </button>
                </div>

                <p className="fw-bold text-center my-2">
                  لديك حساب بالفعل...
                  <Link to="/login">
                    <span className="colored-text">دخول</span>
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
