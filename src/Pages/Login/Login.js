import { NavLink } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="log">
        <h1>Login</h1>
        <form className="loginForm">
          <label>Email</label>
          <input
            name="email"
            required
            type="email"
            placeholder="Enter Your Email..."
            className="formInput"
          />
          <label>Password</label>
          <input
            name="password"
            required
            type="password"
            placeholder="Enter Your Password..."
            className="formInput"
          />
          <p className="err" style={{ display: "none" }}>
            Wrong Credientials
          </p>
          <button className="loginBtn">Login</button>
          <span>
            Don't have an account? <NavLink to="/signup">Register</NavLink>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
