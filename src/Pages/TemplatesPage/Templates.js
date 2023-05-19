import "./Templates.css";
import NavBar from "../../NavBar/NavBar";
import Slides from "./Carousel";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
const Templates = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const fetchTemplates = async () => {
      const res = await axios.get(
        "https://smartfolio.onrender.com/api/templates"
      );
      console.log(res.data);
      setTemplates(res.data);
    };
    fetchTemplates();
  }, []);

  return (
    <>
      <NavBar />
      <div className="templates">
        <div className="head">
          <h1>Templates</h1>
        </div>
        {templates
          ? templates.map((template, index) => (
              <div className="template-item" key={index}>
                <Slides template={template} />
                <h2>{template.Title}</h2>
                <div className="btns">
                  <a href={template.url} target="_blank" rel="noreferrer">
                    <button className="mediaLink">Preview</button>
                  </a>
                  <NavLink className="mediaLink" to={"/required"}>
                    Use It
                  </NavLink>
                </div>
              </div>
            ))
          : "Loading templates..."}
      </div>
    </>
  );
};

export default Templates;
