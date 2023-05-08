import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Profile from "./Pages/Profile/Profile";
import Details from "./Pages/Details/Details";
import Templates from "./Pages/TemplatesPage/Templates";
import About from "./Pages/About/About";

const id = localStorage.getItem("token");
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={id ? <Templates /> : <Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
