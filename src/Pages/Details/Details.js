import "./Details.css";
import { FaPlus, FaUserAlt } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadingImg, hello } from "../../Methods/uploadingImg";

const Details = () => {
  const [form, setForm] = useState({});
  const [file, setFile] = useState(null);
  const [social, setSocial] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [skills, setSkills] = useState([]);
  // Handling Form data
  const handleForm = (e) => {
    console.log(e.target.name, form);
    if (e.target.name === "file") {
      setForm({
        ...form,
        [e.target.name]: e.target.files[0],
      });
      setFile(e.target.files[0]);
    } else if (e.target.name === "social") {
      setInputValue(e.target.value);
    } else if (e.target.name === "skill") {
      setInputValue2(e.target.value);
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  // Img url
  // uploading pp
  const img = document.querySelector(".img");
  useEffect(() => {
    file && uploadingImg(file);
    file ? console.log(uploadingImg(file)) : console.log("loading");
  }, [file, img]);

  // Debouncing for social media links
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSocial((prevSocial) => [...prevSocial, inputValue]);
      setInputValue("");
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  // Debouncing for skills
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSkills((prevSkills) => [...prevSkills, inputValue2]);
      setInputValue("");
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [inputValue2]);

  const id = localStorage.getItem("token");

  // console.log(file);
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const submitData = async () => {
    console.log(form);
    const res = await axios.put(
      `https://smartfolio.onrender.com/api/users/${id}`,
      form
    );
    console.log("res:", res.data);
    setUser(res.data);
    navigate("/profile");
  };

  // Submitting form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    const filteredSocial = social.filter((str) => str !== "");
    const filteredSkills = skills.filter((str) => str !== "");
    setSocial(filteredSocial);
    setSkills(filteredSkills);
    console.log("Img src: " + img.src);
    console.log(filteredSkills);
    console.log(filteredSocial);
    setForm({
      ...form,
      SocialMedia: filteredSocial,
      Skills: filteredSkills,
      profilePic: img.src,
    });
    if (form.SocialMedia) {
      submitData();
    }
  };

  let c = 1;
  const handleSkill = () => {
    c++;
    const input = document.createElement("input");
    input.classList.add("detailsInput");
    input.setAttribute("name", "skill");
    input.setAttribute("placeholder", `Enter Your Skill`);
    input.addEventListener("change", handleForm);
    const skillBox = document.querySelector(".skillbox");
    const skill = document.createElement("div");
    skillBox.appendChild(skill);
    skill.append(input);
    console.log("Added skill ", c);
  };

  return (
    <div className="details">
      <div className="detailsWrapper">
        <div className="detailsTitle title">
          <h2>Please Enter Your Details</h2>
          {console.log(skills)}
        </div>
        <form onSubmit={handleSubmit} className="form">
          <h2 className="heading">Profile Picture</h2>
          <div className="detailsPP">
            <img
              src={
                "https://i.pinimg.com/564x/ad/73/1c/ad731cd0da0641bb16090f25778ef0fd.jpg"
              }
              alt=""
              className="img"
            />
            <label className="detailsLabel" htmlFor="file">
              <FaUserAlt className="userIcon" />
            </label>
            <input
              onChange={handleForm}
              className="detailsInput"
              type="file"
              id="file"
              name="file"
              style={{ display: "none" }}
            />
          </div>

          <div className="detailsForm">
            {/* Desc */}
            <div className="detailsForm">
              <label className="detailsLabel">About Me</label>
              <textarea
                className="detailsInput"
                onChange={handleForm}
                type="text"
                name="Desc"
                placeholder="Please Enter About Yourself"
              />
            </div>

            <div className="socialHandles">
              <h2 className="heading">Social Media</h2>
              <div className="detailsForm">
                <label className="detailsLabel">LinkedIn</label>
                <input
                  type="text"
                  onChange={handleForm}
                  name="social"
                  className="detailsInput"
                />
              </div>
              <div className="detailsForm">
                <label className="detailsLabel">GitHub</label>
                <input
                  type="text"
                  onChange={handleForm}
                  name="social"
                  className="detailsInput"
                />
              </div>
              <div className="detailsForm">
                <label className="detailsLabel">Instagram</label>
                <input
                  type="text"
                  onChange={handleForm}
                  name="social"
                  className="detailsInput"
                />
              </div>
              <div className="detailsForm">
                <label className="detailsLabel">Facebook</label>
                <input
                  type="text"
                  onChange={handleForm}
                  name="social"
                  className="detailsInput"
                />
              </div>
              <div className="detailsForm">
                <label className="detailsLabel">Twitter</label>
                <input
                  type="text"
                  onChange={handleForm}
                  name="social"
                  className="detailsInput"
                />
              </div>
            </div>

            <div className="detailsForm">
              <h2 className="heading">Contact Info</h2>
              <label>Phone Number</label>
              <input
                type="number"
                className="detailsInput"
                name="Phonenumber"
                onChange={handleForm}
              />
            </div>

            <div className="detailsForm skillbox">
              <h2 className="heading">Skills</h2>
              <div className="skills">
                <input
                  type="text"
                  onChange={handleForm}
                  name="skill"
                  className="detailsInput"
                  placeholder={`Enter Your Skill (Eg: Web Developer, App Developer, Machine Learning Engineer)`}
                />
                <FaPlus className="userIcon" onClick={handleSkill} />
              </div>
            </div>
            {/* Submit btn */}
            <button className="detailsSubmit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Details;
