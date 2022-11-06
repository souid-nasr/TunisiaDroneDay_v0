import React from "react";
import "./Register.css";

const Login = () => {
  return (
    <div className="regiterk-container">
      <h2>Log In </h2>

      <div class="input">
        <input type="email" id="email" />
        <label for="email" class="label">
          Email *
        </label>
      </div>
      <div class="input">
        <input type="password" id="password" />
        <label for="password" >
          Password *
        </label>
      </div>

      <button>Connect</button>
    </div>
  );
};

export default Login;
