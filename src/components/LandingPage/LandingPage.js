import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../LandingPage/landingpage.css";
import floating from "../../img/frame.svg";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="heading_section">
        <div className="upperContainer">
          <div className="left_container_upper">
            <div className="left_uppper_heading">
              <h1>SUPERCHARGE </h1>
              <h1>YOUR MIND</h1>
            </div>
            <h4>
              Anxious, stressed, or feeling lost? Whatever roubles your mind,
              we're here to help. Whatever troubles your mind, we're here to
              help.
            </h4>
            <h3>Start your new journey with us!</h3>
            <div className="buttons_upper_container">
              <button className=" upper_btn">As User</button>
              <button className=" upper_btn">As Therapist</button>
              <button className=" upper_btn">As Listener</button>
            </div>
          </div>
          <div className="right_upper_container">
            <img
              className="floating flt_img"
              alt="meditating image"
              src={floating}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
