import React, { useEffect, useState } from "react";
import ButtonComp from "../../components/ButtonComp";
import { colors } from "../../constants/Colors";
import LockImage from "./../../assets/images/lock.png";
import { useNavigate } from "react-router-dom";

import {
  MdAccountCircle,
  MdVpnKey,
  MdLocalPhone,
  MdEmail,
} from "react-icons/md";

const Register = () => {
  const [formData, setFormData] = useState({});
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const navigation = useNavigate()

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  }, [window.innerWidth]);

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
    <div className="main-register">
      <div className="main-register-center">
        <div className="main-register-header">
          <img src={"https://parserr.com/content/img/origami_24.png"} />
          <p>Parserr</p>
        </div>

        <form onSubmit={handleLogin} className="register-form">
          <div className="register-1">
            <div className="register-each">
              <div className="register-each-box">
                <MdAccountCircle
                  style={{
                    color: colors.regularGrayColor,
                  }}
                  size="20px"
                />
                <input
                  type="text"
                  placeholder="First Name"
                  className="register-each-box-input"
                />
              </div>
              <p>*</p>
            </div>
            <div className="register-each">
              <div className="register-each-box">
                <MdAccountCircle
                  style={{
                    color: colors.regularGrayColor,
                  }}
                  size="20px"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="register-each-box-input"
                />
              </div>
              <p>*</p>
            </div>
            <div className="register-each">
              <div className="register-each-box">
                <MdLocalPhone
                  style={{
                    color: colors.regularGrayColor,
                  }}
                  size="20px"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="register-each-box-input"
                />
              </div>
              <p style={{ opacity: 0 }}>*</p>
            </div>
            <div className="register-each">
              <div className="register-each-box">
                <MdEmail
                  style={{
                    color: colors.regularGrayColor,
                  }}
                  size="20px"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="register-each-box-input"
                />
              </div>
              <p>*</p>
            </div>
          </div>

          <p className="sole">
            Password must have atleast 6 characters, one uppercase, and one
            lowercase.
          </p>
          <div className="register-1">
            <div className="register-each">
              <div className="register-each-box">
                <MdVpnKey
                  style={{
                    color: colors.regularGrayColor,
                  }}
                  size="20px"
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="register-each-box-input"
                />
              </div>
              <p>*</p>
            </div>
            <div className="register-each">
              <div className="register-each-box">
                <MdVpnKey
                  style={{
                    color: colors.regularGrayColor,
                  }}
                  size="20px"
                />
                <input
                  type="text"
                  placeholder="Confirm Password"
                  className="register-each-box-input"
                />
              </div>
              <p>*</p>
            </div>

            <div className="terms">
              <input type="checkbox" />
              <div className="terms-text-div">
                <p className="alt">Accept</p>
                <p className="alt-2">"Terms of service"</p>
                <p className="alt">and</p>
                <p className="alt-2">"Privacy Policy"</p>
              </div>
            </div>
          </div>
          <ButtonComp type="submit" text="Register" />
          <div className="login-bottom">
            
            <p onClick={()=> navigation("/")} style={{fontSize:'14px',color:colors.regularGrayColor,cursor:'pointer'}}>Already have an account?</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
