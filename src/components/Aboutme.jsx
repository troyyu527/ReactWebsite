import React from 'react'
import {useNavigate} from "react-router-dom"
function Aboutme(props) {
  //const {name,pos,currentPlayer} = props
  const navigate = useNavigate()
  
  return (
    <div className='page'>
      <div className="aboutme">
        <div className='profile-card'>
          <div className='first-con'>
            <img className='photo'></img>
            <p>Troy</p>
            <p>Yu</p>
            <p>BIM Developer</p>
            <div>Sites</div>
          </div>
          <div className='second-con'>
            <h1>Hello</h1>
            <h3>Here's who I am & what I do</h3>
            <div className='button-con'>
              <button onClick={()=>navigate("/Resume")}>RESUME</button>
              <button onClick={()=>navigate("/Projects")}>PROJECTS</button>
            </div>
            <p>Welcome to my world of BIM innovation. I'm Troy Yu - a BIM Engineer and Developer.</p>
            <p>With a passion for enhancing construction workflows, I've led teams, streamlined processes, and developed custom tools that drive efficiency. Explore my journey of transforming ideas into reality through cutting-edge technology and collaborative teamwork.</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Aboutme