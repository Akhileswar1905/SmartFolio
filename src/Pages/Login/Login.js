import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  // Form Data
  const [form, setForm] = useState({});

  // Error Handling
  const [err, setErr] = useState("none");

  // useNavigate
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
        "https://smartfolio.onrender.com/api/users/login",
        form
      );
      if (res.data.length) {
        console.log(res.data);
        localStorage.setItem("token", res.data[0]._id);
        navigate("/profile");
        window.location.reload();
      } else {
        setErr("block");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="login">
      <div className="log">
        <h1>Login</h1>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            onChange={handleChange}
            name="email"
            required
            type="email"
            placeholder="Enter Your Email..."
            className="formInput"
          />
          <label>Password</label>
          <input
            onChange={handleChange}
            name="password"
            required
            type="password"
            placeholder="Enter Your Password..."
            className="formInput"
          />
          <p className="err" style={{ display: err }}>
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
