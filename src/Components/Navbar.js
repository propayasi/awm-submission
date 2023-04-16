import React from "react";
import logo from "../Assets/Vector.png";
import "../Styles/navbar.css";
import hamburger_website from "../Assets/hamburger.png";
import pagesdown from "../Assets/pricing drop.png";

function Navbar() {
  const [showNav, setShowNav] = React.useState(false);

  return (
    <div className="navbar_main_container">
      <div className="phone_container">
        <div className="logo_container">
          <img src={logo} />
        </div>

        <img
          onClick={() => {
            setShowNav(!showNav);
          }}
          className="hamburger"
          src={hamburger_website}
        />
      </div>

      <div className={"list_signup " + (showNav && "active")}>
        <div className="list_container">
          <p>overveiw</p>
          <p>Home</p>
          <p>About</p>
          <p>Pricing</p>
          <div className="pagesdrop">
            <div className="pages_container">
              <p>
                Pages
                <img src={pagesdown} />{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={"signup_post"}>
        <div className="signup_container">
          <p>sign up</p>
        </div>

        <div className="signup_container1">
          <p>log-in</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
