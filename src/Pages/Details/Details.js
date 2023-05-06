import "./Details.css";
import { FaUserAlt } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const [form, setForm] = useState({});
  const [file, setFile] = useState(null);
  const handleForm = (e) => {
    console.log(e.target.name, form);
    if (e.target.name === "file") {
      setForm({
        ...form,
        [e.target.name]: e.target.files[0],
      });
      setFile(e.target.files[0]);
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  const id = localStorage.getItem("token");
  console.log(file);
  // Fetching user
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const handleSubmit = async () => {
    const res = await axios.put(`http://localhost:3001/api/users/${id}`, form);
    console.log("res:", res.data);
    setUser(user);
    navigate("/");
  };

  return (
    <div className="details">
      <div className="detailsWrapper">
        <div className="detailsTitle">
          <h2 className="title">Please Enter Your Details</h2>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <h2 className="heading">Profile Picture</h2>
          <div className="detailsPP">
            <img
              src={
                user.profilePicture
                  ? user.profilePicture
                  : "https://i.pinimg.com/564x/ad/73/1c/ad731cd0da0641bb16090f25778ef0fd.jpg"
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
                name="profileDescription"
                placeholder="Please Enter About Yourself"
              />
            </div>

            <div className="socialHandles">
              <h2 className="heading">Social Media</h2>
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
            {/* Submit btn */}
            <button className="detailsSubmit" onSubmit={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Details;
