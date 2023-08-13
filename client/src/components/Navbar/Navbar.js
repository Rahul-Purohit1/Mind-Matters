import React, { useState } from "react";
import "../Navbar/navbar.css";
import logo from "../../img/open-mind.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"; //  npm install react-icons --save
import { Link } from "react-router-dom";

function Navbar() {
  const [showbutton, setShowButoon] = useState(false);
  return (
    <div className="navbarbody">
      <div className="linksparentbody">
        <img className="logo_main" src={logo} alt="LOGO" />

        <h1>MindMatters</h1>

        <div className="closeicon">
          <AiOutlineClose
            style={{ display: showbutton ? "block" : "none" }}
            onClick={() => {
              setShowButoon(false);
            }}
            className="closeicon"
          />
          <AiOutlineMenu
            style={{ display: showbutton ? "none" : "block" }}
            onClick={() => {
              setShowButoon(true);
            }}
            className="closeicon"
          />
        </div>
      </div>
      <div className={showbutton ? "showclass" : "hideclass"}>
        <div className="navbarlinks">
          <div className="navbarlinks links">
            <h4>
              <Link to="/" target="_blank">
                Wellness Hub
              </Link>
            </h4>
            <h4>
              <Link to="https://mindmattersblog.netlify.app/" target="_blank">
                Blogs
              </Link>
            </h4>
            <h4>
              <Link to="#" target="_blank">
                Therapy
              </Link>
            </h4>
            <h4>
              <Link to="#" target="_blank">
                Self Healing
              </Link>
            </h4>
            <h4>
              <Link to="#" target="_blank">
                How it works
              </Link>
            </h4>
            <h4>
              <Link to="#" target="_blank">
                About Us
              </Link>
            </h4>
          </div>

          <div className="both_btn">
            <Link to="/login">
              <button className="login_btn">Login</button>
            </Link>
            <Link to="/register">
              <button className="signup_btn">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
