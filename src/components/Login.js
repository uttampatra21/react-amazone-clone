import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = (props) => {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>User</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <button className="login__signin">Sign in</button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>

        <button className="regester__account">
          Create your Amazone Account
        </button>
      </div>
    </div>
  );
};

export default Login;
