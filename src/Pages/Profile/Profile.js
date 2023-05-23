import { useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import NavBar from "../../NavBar/NavBar";

import { useNavigate } from "react-router-dom";
import { uploadingImg } from "../../Methods/uploadingImg";
const Profile = () => {
  const [user, setUser] = useState({});
  const [file, setFile] = useState(null);
  const [form, setForm] = useState({});

  // Use Navigate
  const navigate = useNavigate();
  // Fetching user
  const id = localStorage.getItem("token");

  useEffect(() => {
    const fetchUser = async () => {
      console.log(id);
      try {
        const res = await axios.get(
          `https://smartfolio.onrender.com/api/users/${id}`
        );
        console.log("res: " + res.data);
        setUser(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUser();
  }, []);

  // Social Media Names
  function getSocialMediaName(url) {
    if (url.includes("facebook.com")) {
      return "Facebook";
    } else if (url.includes("twitter.com")) {
      return "Twitter";
    } else if (url.includes("instagram.com")) {
      return "Instagram";
    } else if (url.includes("linkedin.com")) {
      return "LinkedIn";
    } else if (url.includes("github.com")) {
      return "Github";
    } else {
      return "Unknown social media";
    }
  }

  const handleProfile = (e) => {
    setForm({ ...form, [e.target.name]: e.target.files[0] });
    setFile(e.target.files[0]);
    console.log(file);
  };

  // uploading pp
  const img = document.querySelector(".img");
  useEffect(() => {
    file && uploadingImg(file);
  }, [file, img]);

  // Updating the profile picture
  const handleSubmit = () => {
    console.log(form);
    setForm({
      ...form,
      profilePic: img.src,
    });

    console.log(form.profilePic);
    if (form.profilePic === img.src) {
      submit();
    }
  };

  const submit = async () => {
    const res = await axios.put(
      `https://smartfolio.onrender.com/api/users/${id}`,
      form
    );
    document.querySelector(".btn").style.display = "none";
    console.log(res.data);
  };

  return (
    <>
      <NavBar />
      <div className="profile">
        {console.log(user)}
        <div className="pic section1">
          <div className="pp">
            <img
              src={user.profilePic}
              name="profilePic"
              className="img"
              alt=""
            />
            <label
              className="edit"
              htmlFor="file"
              onClick={() => {
                document.querySelector(".btn").style.display = "block";
              }}
            >
              <FaEdit />
              Edit
            </label>
            <input
              id="file"
              type="file"
              onChange={handleProfile}
              accept="jpg png svg"
              style={{ display: "none" }}
            />
            <p>{user.username}</p>
          </div>
          <div className="mediaLinks">
            {user.SocialMedia
              ? user.SocialMedia.map((media, index) => (
                  <a
                    href={media}
                    target="_blank"
                    className="mediaLink"
                    rel="noreferrer"
                    key={index}
                  >
                    Connect on {getSocialMediaName(media)}
                  </a>
                ))
              : "Loading..."}
          </div>
          <button className="mediaLink btn" onClick={handleSubmit}>
            Update
          </button>
        </div>
        <div className="data section2">
          <h1 className="heading">Your Profile</h1>
          <div className="profileInfo">
            <div className="box">
              <label className="label">
                <span className="underline">Name: </span>
              </label>
              <input type="text" value={user.username} readOnly />
            </div>
            <div className="box">
              <label className="label">
                <span className="underline">Phone Number:</span>{" "}
              </label>
              <input type="text" value={user.Phonenumber} readOnly />
            </div>
            <div className="box">
              <label className="label">
                <span className="underline">Email:</span>{" "}
              </label>
              <input type="text" value={user.email} readOnly />
            </div>
          </div>

          <div className="desc">
            <label className="underline">About Me:</label>
            <textarea
              className="textarea"
              value={user.Desc}
              readOnly
            ></textarea>
          </div>

          <div className="skillsBox ">
            <h2 className="heading">Skills</h2>

            <ul className="dynamic-txts">
              {user.Skills
                ? user.Skills.map((skill) => <li>{skill}</li>)
                : "Loading..."}
            </ul>
          </div>
          <button
            className="mediaLink logout"
            onClick={() => {
              localStorage.clear();
              navigate("/");
              window.location.reload();
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
