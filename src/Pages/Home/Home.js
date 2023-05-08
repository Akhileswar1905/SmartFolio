import { NavLink } from "react-router-dom";
import "./Home.css";
import logo from "./logo.png";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Home = () => {
  return (
    <div className="home">
      <div className="info">
        <div className="title">
          <img src={logo} alt="" />
          <p>SmartFolio</p>
        </div>
        <div className="more-info">
          <p>Elevate your online</p> <p>presence with a professional</p>
          <p className="homespan">portfolio</p>
          {/* <span>"Your story, your portfolio, your way"</span> */}
          <button className="auth">
            <NavLink to="/signup" className={"link"}>
              Get Started
            </NavLink>
          </button>
        </div>
        <div className="icons">
          <FaInstagram className="icon" />
          <FaGithub className="icon" />
          <FaLinkedinIn className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Home;
