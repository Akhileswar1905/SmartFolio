import { useState } from "react";
import "./SignUp.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  // FormData
  const [form, setForm] = useState({});

  // UseNavigate
  const navigate = useNavigate();
  // Handle Change Function
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Submitting Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3001/api/users/register",
        form
      );
      if (res.data === "User Already Registered") {
        console.log("User Already Registered From Client");
        navigate("/login");
      } else {
        console.log(res.data);
      }
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
    navigate("/details");
  };

  return (
    <div className="signup">
      <h1>Register</h1>
      <form className="signupForm" onSubmit={handleSubmit}>
        <label>User Name</label>
        <input
          onChange={handleChange}
          required
          name="username"
          type="text"
          placeholder="Enter Your Name..."
          className="formInput"
        />
        <label>Email</label>
        <input
          onChange={handleChange}
          required
          type="email"
          name="email"
          placeholder="Enter Your Email..."
          className="formInput"
        />
        <label>Password</label>
        <input
          onChange={handleChange}
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
