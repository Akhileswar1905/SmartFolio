import "./About.css";
import NavBar from "../../NavBar/NavBar";
import brand from "./SmartFolio.png";
const About = () => {
  return (
    <>
      <NavBar />
      <div className="about">
        <div className="section">
          <div className="header">
            <h1 className="head">About Us</h1>
          </div>
          <div className="moreinfo">
            <p>
              Smartfolio is a web application that helps developers showcase
              their skills and projects with a professional portfolio. In
              today's competitive job market, having a portfolio is a must to
              stand out from the crowd. With Smartfolio, you can easily create
              your own portfolio in just a few simple steps.
            </p>
            <p>
              Our platform offers a variety of templates to choose from, so you
              can find the perfect fit for your personal style and needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
