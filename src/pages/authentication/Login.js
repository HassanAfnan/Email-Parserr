import React, { useEffect, useState } from "react";
import ButtonComp from "../../components/ButtonComp";
import { colors } from "../../constants/Colors";
import LockImage from "./../../assets/images/lock.png";
import { MdAccountCircle, MdVpnKey } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({});
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const navigation = useNavigate();

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  }, [window.innerWidth]);

  console.log(formData)

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("i hit");
  };

  return (
    <div className="main-login">
      <div className="main-login-center">
        <div className="main-login-header">
          <img src={"https://parserr.com/content/img/origami_24.png"} />
          <p>Parserr</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="login-1">
            <div className="login-each">
              <div className="login-each-box">
                <MdAccountCircle
                  style={{
                    color: colors.regularGrayColor,
                  }}
                  size="20px"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="login-each-box-input"
                  onChange={e => handleChange("email",e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="login-each">
              <div className="login-each-box">
                <MdVpnKey
                  style={{
                    color: colors.regularGrayColor,
                  }}
                  size="20px"
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="login-each-box-input"
                  onChange={e => handleChange("password",e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="login-remember">
            <input type="checkbox" />
            <p>Remember me?</p>
          </div>
          <ButtonComp type="submit" text="Log in" />
          <div className="login-bottom">
            <div className="login-bottom-left">
              <FaLock
                style={{
                  color: colors.regularGrayColor,
                }}
                size="20px"
              />
              <p>Forgot your password ?</p>
            </div>

            <p onClick={() => navigation("/register")}>Create an account</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
