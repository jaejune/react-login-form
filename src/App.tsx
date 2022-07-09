import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");

  const handleValidation = () => {
    let formIsValid = true;

    if (email.length < 10) {
      formIsValid = false;
      setemailError("최소 10자 이상 입력해주세요.");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (password.length < 10) {
      formIsValid = false;
      setpasswordError("최소 10자 이상 입력해주세요.");
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const loginSubmit = (e: any) => {
    e.preventDefault();
    handleValidation();
  };
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={loginSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">리프페이</h3>
          <div className="form-group mt-3">
            <label>아이디</label>
            <input
              // type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <small id="emailHelp" className="text-danger form-text">
              {emailError}
            </small>
          </div>
          <div className="form-group mt-3">
            <label>패스워드</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <small id="passworderror" className="text-danger form-text">
              {passwordError}
            </small>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              onSubmit={loginSubmit}
            >
              로그인
            </button>
          </div>

          <div className="caption">
            <a href="">비밀번호 찾기</a>
            <a href="">회원가입</a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
