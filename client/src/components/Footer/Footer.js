import React from "react";
import "../Footer/footer.css";

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
            <a href="#" className="footer-link">
              Home
            </a>
            <a href="#" className="footer-link">
              SignUp
            </a>
            <a href="#" className="footer-link">
              Contact
            </a>
            <a href="#" className="footer-link">
              Therapy
            </a>
          </div>
        </div>

        <div className="footer-section">
          <div className="footer-header">
            <h4>Support</h4>
          </div>
          <div className="footer-links">
            <a href="#" className="footer-link">
              Blog
            </a>
            <a href="#" className="footer-link">
              Community
            </a>
            <a href="#" className="footer-link">
              Contribution
            </a>
            <a href="#" className="footer-link">
              Feedback Form
            </a>
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
                <a href="#">
                  <i className="social-icon ri-facebook-fill"></i>
                </a>
                <a href="#">
                  <i className="social-icon ri-instagram-line"></i>
                </a>
                <a href="#">
                  <i className="social-icon ri-linkedin-fill"></i>
                </a>
                <a href="#">
                  <i className="social-icon ri-github-line"></i>
                </a>
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
