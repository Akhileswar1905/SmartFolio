import { FaPlus } from "react-icons/fa";
import './Required.css'
import NavBar from '../../NavBar/NavBar'

// handleAdd for EDU
const handleAdd = () =>{
const div = document.createElement("div")
div.className = "req-block"
const name = document.createElement("input")
const range = document.createElement("input")
name.className = 'detailsInput'
range.className = 'detailsInput'
name.setAttribute("placeholder","E.g: BTech in CS from ...")
range.setAttribute("placeholder","E.g: 20xx - 20xx")

div.appendChild(name)
div.appendChild(range)
const reqBox = document.querySelector(".edu-details")
reqBox.appendChild(div)

}


// HandleAdd for EXP
const handleAddExp = () =>{
const div = document.createElement("div")
div.className = "req-block"
const name = document.createElement("input")
const range = document.createElement("input")
name.className = 'detailsInput'
range.className = 'detailsInput'
name.setAttribute("placeholder","E.g: Web Developer")
range.setAttribute("placeholder","E.g: 20xx - 20xx")

div.appendChild(name)
div.appendChild(range)
const reqBox = document.querySelector(".exp-details")
reqBox.appendChild(div)

}

const Required = () => {
  return (
    <><NavBar /><div className='required'>
      <h2 className='heading'>Please Enter The Required Details</h2>
      <div className="req-section">
        <div className="req-box">
          <label className='detailsLabel'>About Yourself</label>
          <textarea className='detailsInput' placeholder='Hello Iam ....'></textarea>
        </div>
        <div className="edu-details">
          <label className='detailsLabel'>Education Details</label>
        <div className="req-box">
          <div className="req-block">
          <input className='detailsInput' placeholder='E.g: BTech in CS from ...'></input> 
          <input className='detailsInput' placeholder='E.g: 20xx - 20xx'></input> 
          <FaPlus className="userIcon" onClick={handleAdd} />
          </div>
        </div>
        </div>
        <div className="exp-details">
          <label className='detailsLabel'>Education Details</label>
        <div className="req-box">
          <div className="req-block">
          <input className='detailsInput' placeholder='E.g: Web developer'></input> 
          <input className='detailsInput' placeholder='E.g: 20xx - 20xx'></input> 
          <FaPlus className="userIcon" onClick={handleAddExp} />
          </div>
        </div>
        </div>
      </div>
    </div></>
  )
}

export default Required
