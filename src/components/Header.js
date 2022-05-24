import React, { useState, useEffect, useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { colors } from "../constants/Colors";

const Header = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  const DesktopHeader = () => {
    return (
      <div className="main-header">
        <div className="main-header-left">
          <div className="main-header-left-1">
            <img src={"https://parserr.com/content/img/logo2.png"} />
          </div>

          <div className="main-header-left-2">
            <p>Call Us At</p>
            <p>+1 (323) 329-6645</p>
          </div>
        </div>

        <div className="main-header-right">
          <p>Features</p>
          <p>Solutions</p>
          <p>Pricing</p>
          <p>Resources</p>
          <p>Contact</p>
          <p>Login</p>
          <p>Sign Up</p>
        </div>
      </div>
    );
  };

  const MobileHeader = () => {
    return (
      <div style={{width:'100%', borderBottom:`1px solid ${colors.lightGrayColor}`}}>
        <div className="main-header">
          <div className="main-header-left">
            <div className="main-header-left-1">
              <img src={"https://parserr.com/content/img/logo2.png"} />
            </div>

            <div className="main-header-left-2">
              <p>Call Us At</p>
              <p>+1 (323) 329-6645</p>
            </div>
          </div>

          <div
            className="main-header-right"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <BiMenu
              style={{
                color: colors.regularGrayColor,
              }}
              size="35px"
            />
          </div>
        </div>
        {isMenuOpen ? (
          <div className="collapsed-menu-div">
            <p>Features</p>
            <p>Solutions</p>
            <p>Pricing</p>
            <p>Resources</p>
            <p>Contact</p>
            <p>Login</p>
            <p>Sign Up</p>
          </div>
        ) : null}
      </div>
    );
  };

  return screenSize > 1000 ? DesktopHeader() : MobileHeader();
};

export default Header;
