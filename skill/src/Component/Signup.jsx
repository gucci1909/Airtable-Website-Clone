import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Sigup_google, Singup } from "../store/Auth/auth.action";
import skill from "../img/skill.jpeg"

const SignUpStyling = styled.div`
  text-align: center;
  background-color: #f2f6f8;
  .navbarForLoginAndSignup {
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
  }
  .mainSignUpDiv {
    width: 370px;
    margin: auto;
    margin-top: 10px;
  }
  .SignUpformDiv {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    border-radius: 5px;
    background-color: white;
    widht: 100%;
    height: 405px;
  }
  .SignUpform {
    widht: 100%;
    height: fit-content;
    margin-top: 20px;
    display: grid;
    gap: 15px;
  }
  .SignUpinputAdjust {
    height: 25px;
    width: 77%;
    margin: auto;
    border-radius: 2px;
    background-color: #f8f8f8;
    border: none;
    border: 0.1px solid #cacaca;
    font-size: 13px;
    padding: 9px;
  }
  .SignUpSubmitButton {
    height: 37px;
    width: 80%;
    margin: auto;
    border-radius: 2px;
    background-color: #0bacf5;
    border: none;
    color: white;
    font-size: 13px;
    font-weight: 500;
    padding: 0px 10px;
    cursor: pointer;
  }
  .SignUpSubmitButton:hover {
    background-color: #44b6e8;
  }
  .POR {
    font-size: "18px";
    font-weight: 600;
    opacity: 0.7;
    position: relative;
    margin-top: -14px;
    margin-bottom: 10px;
  }
  .DontHaveAccountSignUp {
    margin-top: 20px;
    background-color: white;
    padding: 10px 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  }
  .playstore {
    width: 75%;
  }
`;
const SignupPage = () => {
  const token = useSelector((store) => store.auth.user.token);
  const navigate = useNavigate();
  console.log(token);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handlegoogle = (e) => {
    e.preventDefault();
    dispatch(Sigup_google());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Singup(email, password));
  };

  useEffect(() => {
    if (token) {
      navigate("/login");
    }
  }, [token]);

  return (
    <SignUpStyling>
      <div className="navbarForLoginAndSignup">
        <Link to="/">
          <img
            src={skill}
            style={{ height: "150px",width:"180px" }}
            alt="NavProjectLogo"
          />
        </Link>
        <p style={{ fontSize: "14px", color: "grey" }}>
          Already Have an account ?{" "}
          <Link
            to="/login"
            style={{
              fontWeight: "600",
              color: "#1b74e4",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Log in
          </Link>
        </p>
      </div>
      <div className="mainSignUpDiv">
        <div className="SignUpformDiv">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h3
              style={{
                fontSize: "18px",
                color: "black",
                padding: "30px 0px 0px 40px",
                textAlign: "left",
                fontWeight: "600",
              }}
            >
              Sign up
            </h3>
          </Link>
          <form className="SignUpform" onSubmit={handleSubmit}>
            <input
              type="text"
              className="SignUpinputAdjust"
              placeholder="Enter email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="SignUpinputAdjust"
              placeholder="Choose Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "30px",
                height: "30px",
              }}
            >
              <input
                type="checkbox"
                style={{ marginRight: "10px", marginLeft: "10px" }}
              />
              <p>
                I agree to the{" "}
                <a
                  href=""
                  style={{ color: "#0bacf5", textDecoration: "none" }}
                >
                  Terms of Use{" "}
                </a>
              </p>
            </div>
            <input
              type="submit"
              className="SignUpSubmitButton"
              value="CREATE FREE ACCOUNT"
            />
            <p
              style={{
                opacity: "1",
                fontSize: "11px",
                width: "65%",
                margin: "auto",
                marginTop: "0px",
                marginBottom: "10px",
              }}
            >
              By signing up, you agree to our Terms , Data Policy and Cookies
              Policy .
            </p>
          </form>
          <hr
            style={{
              width: "80%",
              opacity: "1",
              margin: "auto",
              marginTop: "10px",
            }}
          />
          <p className="POR">OR</p>
          <div
            onClick={handlegoogle}
            style={{
              opacity: "0.98",
              fontSize: "14px",
              color: "black",
              borderRadius: "4px",
              border: "1px solid #c6c6c6",
              fontWeight: "700",
              marginTop: "0px",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              width: "80%",
              margin: "auto",
              height: "40px",
            }}
          >
            <img
              src=""
              alt="skill-up"
            />
            <p>Continue with Google</p>
          </div>
        </div>
        <div className="DontHaveAccountSignUp">
          <p style={{ fontSize: "14px" }}>
            Already Have an account ?{" "}
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                fontWeight: "600",
                color: "#1b74e4",
                cursor: "pointer",
              }}
            >
              Log in
            </Link>
          </p>
        </div>
        <br />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "40px",
            justifyContent: "center",
            fontSize: "12px",
          }}
        >
        </div>
      </div>
    </SignUpStyling>
  );
};

export default SignupPage;
