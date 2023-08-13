import React from "react";
import "./login.css";

function login() {
  return (
    <div>
      <div class="container">
        <h1>Login</h1>
        <form method="post" action="/login">
          <div class="txt_field">
            <input type="email" name="username" />
            <span></span>
            <label>Username</label>
          </div>
          <div class="txt_field">
            <input type="password" name="password" />
            <span></span>
            <label>Password</label>
          </div>

          {/* further Options */}
          <div class="signup_link">
            Not a member? <a href="/register">Signup</a>
          </div>
          <div class="signup_link">
            Back to HomePage? <a href="/">Click</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default login;
