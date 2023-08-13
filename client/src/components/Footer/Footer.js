import React from "react";
import "../Footer/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-section">
          <div className="footer-header">
            <h2 className="footer-logo">MindMatters</h2>
          </div>
          <div className="footer-description">
            <p>
              A website promoting mental health awareness and providing support
              for individuals dealing with mental health issues. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Eveniet nostrum
              fugiat, a magni non deleniti vitae culpa asperiores, est itaque,
              provident ipsa quisquam facere animi praesentium optio. Facilis,
              illo aperiam.
            </p>
            <button href="#" className="btn-know-more">
              Know More
            </button>
          </div>
        </div>

        <div className="footer-section">
          <div className="footer-header">
            <h4>Quick Links</h4>
          </div>
          <div className="footer-links">
            <Link href="#" className="footer-link">
              Home
            </Link>
            <Link to="#" className="footer-link">
              SignUp
            </Link>
            <Link to="#" className="footer-link">
              Contact
            </Link>
            <Link to="#" className="footer-link">
              Therapy
            </Link>
          </div>
        </div>

        <div className="footer-section">
          <div className="footer-header">
            <h4>Support</h4>
          </div>
          <div className="footer-links">
            <Link to="#" className="footer-link">
              Blog
            </Link>
            <Link to="#" className="footer-link">
              Community
            </Link>
            <Link to="#" className="footer-link">
              Contribution
            </Link>
            <Link to="#" className="footer-link">
              Feedback Form
            </Link>
          </div>
        </div>

        <div className="footer-section">
          <div className="footer-header">
            <h4>Newsletter</h4>
          </div>
          <div className="footer-newsletter">
            <div className="subscribe">
              <i className="sub-icon ri-mail-check-fill"></i>
              <input
                type="email"
                className="email-input"
                placeholder="Enter Email ID"
                required
              />
              <button>
                <i className="sub-icon ri-arrow-right-line"></i>
              </button>
            </div>
            <div className="follow">
              <h4>Follow us</h4>
              <div className="social-icons">
                <Link to="#">
                  <i className="social-icon ri-facebook-fill"></i>
                </Link>
                <Link to="#">
                  <i className="social-icon ri-instagram-line"></i>
                </Link>
                <Link to="#">
                  <i className="social-icon ri-linkedin-fill"></i>
                </Link>
                <Link to="#">
                  <i className="social-icon ri-github-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>© Made with ❤.</p>
      </div>
    </div>
  );
}

export default Footer;
