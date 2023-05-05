import "./SignUp.css";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signup">
      <h1>Register</h1>
      <form className="signupForm">
        <label>User Name</label>
        <input
          required
          name="username"
          type="text"
          placeholder="Enter Your Name..."
          className="formInput"
        />
        <label>Email</label>
        <input
          required
          type="email"
          name="email"
          placeholder="Enter Your Email..."
          className="formInput"
        />
        <label>Password</label>
        <input
          required
          type="password"
          name="password"
          placeholder="Enter Your Password..."
          className="formInput"
        />

        <button className="signupBtn">Register</button>
        <span>
          Already Have an account? <NavLink to="/login">Login</NavLink>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
