import { FaPlus } from "react-icons/fa";
import "./Required.css";
import NavBar from "../../NavBar/NavBar";
import {
  handleAdd,
  handleAdd1,
  handleAdd2,
  handleAdd3,
  handleChange,
} from "../../Methods/requiredMethod.js";

const Required = () => {
  return (
    <>
      <NavBar />
      <div className="required">
        <h2 className="heading">Please Enter The Required Details</h2>
        <div className="req-section">
          <div className="req-box">
            <label className="detailsLabel reqLabel">
              Name (For Portfolio)
            </label>
            <input
              type="text"
              className="detailsInput"
              onChange={handleChange}
              name="folioName"
              placeholder="Enter Your Name"
            ></input>
          </div>
          <div className="req-box">
            <label className="detailsLabel reqLabel">About Yourself</label>
            <textarea
              className="detailsInput"
              onChange={handleChange}
              placeholder="Hello Iam ...."
              name="folioDesc"
            ></textarea>
          </div>
          <div className="edu-details">
            <label className="detailsLabel reqLabel">Education Details</label>
            <div className="req-box">
              <div className="req-block">
                Add Education Details
                <FaPlus className="userIcon edu" onClick={handleAdd} />
              </div>
            </div>
          </div>
          <div className="skills-details">
            <label className="detailsLabel reqLabel">Enter Your Skillset</label>
            <div className="req-box">
              <div className="req-block">
                Add Skill
                <FaPlus className="userIcon edu" onClick={handleAdd3} />
              </div>
            </div>
          </div>
          <div className="exp-details">
            <label className="detailsLabel reqLabel">Work Details</label>
            <div className="req-box">
              <div className="req-block">
                Add Your Work Experience
                <FaPlus className="userIcon exp" onClick={handleAdd1} />
              </div>
            </div>
          </div>
          <div className="project-details">
            <label className="detailsLabel reqLabel">Your Projects</label>
            <div className="req-box">
              <div className="req-block">
                Add Your Projects
                <FaPlus className="userIcon exp" onClick={handleAdd2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Required;
