let form = {};
let file;
let skills = {};
let skillCount = 0;
const handleChange = (e) => {
  console.log(e.target.name, e.target.value);
  if (e.target.name === "projectImg") {
    file = e.target.files[0];
    console.log(file);
  } else {
    if (("" + e.target.name).includes("skillDetails")) {
      skills = { ...skills, [e.target.name]: e.target.value };
      console.log(skills);
      form = { ...form, skillSet: skills };
    } else {
      form = { ...form, [e.target.name]: e.target.value };
    }
  }

  console.log(form);
};

// handleAdd for EDU
const handleAdd = () => {
  console.log("Hello World 1");
  const div = document.createElement("div");
  div.className = "req-block";
  const name = document.createElement("input");
  const range = document.createElement("input");
  name.className = "detailsInput";
  range.className = "detailsInput";
  name.setAttribute("placeholder", "E.g: BTech in CS from ...");
  range.setAttribute("placeholder", "E.g: 20xx - 20xx");
  name.setAttribute("name", "eduDetails");
  range.setAttribute("name", "eduDuration");
  name.addEventListener("change", handleChange);
  range.addEventListener("change", handleChange);
  div.appendChild(name);
  div.appendChild(range);
  const reqBox = document.querySelector(".edu-details");
  console.log(form);
  reqBox.appendChild(div);
};

// HandleAdd for EXP
const handleAdd1 = () => {
  console.log("Hello World 1");
  const div = document.createElement("div");
  div.className = "req-block";
  const name = document.createElement("input");
  const range = document.createElement("input");
  name.className = "detailsInput";
  range.className = "detailsInput";
  name.setAttribute("placeholder", "E.g: Web developer");
  range.setAttribute("placeholder", "E.g: 20xx - 20xx");
  name.setAttribute("name", "expDetails");
  range.setAttribute("name", "expDuration");
  name.addEventListener("change", handleChange);
  range.addEventListener("change", handleChange);
  div.appendChild(name);
  div.appendChild(range);
  const reqBox = document.querySelector(".exp-details");
  reqBox.appendChild(div);
};

// HandleAdd for EXP
const handleAdd2 = () => {
  console.log("Hello World 1");
  const div = document.createElement("div");
  div.className = "req-block";
  const name = document.createElement("input");
  const range = document.createElement("input");
  const label = document.createElement("label");
  const file = document.createElement("input");
  name.className = "detailsInput";
  range.className = "detailsInput";
  file.className = "detailsInput";
  label.className = "detailsLabel";
  label.innerText = "Project Image";
  name.setAttribute("placeholder", "Project Name");
  range.setAttribute("placeholder", "Github Repository Link");
  file.setAttribute("type", "file");
  name.setAttribute("name", "projectDetails");
  range.setAttribute("name", "githubRepo");
  file.setAttribute("name", "projectImg");
  name.addEventListener("change", handleChange);
  range.addEventListener("change", handleChange);
  file.addEventListener("change", handleChange);
  div.appendChild(name);
  div.appendChild(range);
  div.appendChild(label);
  div.appendChild(file);
  const reqBox = document.querySelector(".project-details");
  reqBox.appendChild(div);
};

// HandleAdd for SkillSet
const handleAdd3 = () => {
  console.log("Skill " + ++skillCount);
  const div = document.createElement("div");
  div.className = "req-block";
  const name = document.createElement("input");
  name.className = "detailsInput";

  name.setAttribute("placeholder", "Skill " + skillCount);

  name.setAttribute("name", `skillDetails skill${skillCount}`);

  name.addEventListener("change", handleChange);

  div.appendChild(name);
  const reqBox = document.querySelector(".skills-details");
  reqBox.appendChild(div);
};

module.exports = { handleAdd, handleAdd1, handleAdd2, handleAdd3 };
