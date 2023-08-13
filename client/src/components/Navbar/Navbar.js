import React, { useState } from "react";
import "../Navbar/navbar.css";
import logo from "../../img/open-mind.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"; //  npm install react-icons --save
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
              <a href="#" target="_blank">
                Wellness Hub
              </a>
            </h4>
            <h4>
              <a href="https://mindmattersblog.netlify.app/" target="_blank">
                Blogs
              </a>
            </h4>
            <h4>
              <a href="#" target="_blank">
                Therapy
              </a>
            </h4>
            <h4>
              <a href="#" target="_blank">
                Self Healing
              </a>
            </h4>
            <h4>
              <a href="#" target="_blank">
                How it works
              </a>
            </h4>
            <h4>
              <a href="#" target="_blank">
                About Us
              </a>
            </h4>
          </div>

          <div className="both_btn">
            <button className="login_btn">Login</button>
            <button className="signup_btn">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


