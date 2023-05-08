import { useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import NavBar from "../../NavBar/NavBar";

const Profile = () => {
  const [user, setUser] = useState({});

  // Fetching user
  const id = localStorage.getItem("token");

  useEffect(() => {
    const fetchUser = async () => {
      console.log(id);
      try {
        const res = await axios.get(`http://localhost:3001/api/users/${id}`);
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

  return (
    <>
      <NavBar />
      <div className="profile">
        {console.log(user)}
        <div className="pic section1">
          <div className="pp">
            <img src={user.profilePic} alt="" />
            <label className="edit" htmlFor="file">
              <FaEdit />
              Edit
            </label>
            <input
              id="file"
              type="file"
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
          <div className="skillsBox ">
            <h2 className="heading">Skills</h2>

            <ul className="dynamic-txts">
              {user.Skills
                ? user.Skills.map((skill) => <li>{skill}</li>)
                : "Loading..."}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
