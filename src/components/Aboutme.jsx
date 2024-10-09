import React from 'react'
import {useNavigate} from "react-router-dom"
import '../css/aboutme.css';
import profilePic from '../profile/profile_photo.PNG'
function Aboutme(props) {
  const {setCurrentPage} = props;
  const navigate = useNavigate()
  const handleClick = ()=> {
    setCurrentPage("/Resume");
    navigate("/Resume");
  }
  return (
    <div id='AboutMe'>
      <section id="sbsr-333">
        <div className="cs-container">
          {/* Left Image Section */}
          <div className="cs-image-group">
            <picture className="cs-picture">
              <img
                loading="lazy"
                decoding="async"
                src={profilePic}
                alt="Troy Yu"
                width="300"
                height="300"
                aria-hidden="true"
              />
            </picture>
            <div className="cs-box">
              <span className="cs-number">8</span>
              <span className="cs-desc">Years<br /> Experience</span>
            </div>
          </div>
          {/* Right Content Section*/}
          <div className="cs-content">
            <span className="cs-topper">About Me</span>
            <h2 className="cs-title">Troy Yu</h2>
            <h4 style={{ marginBottom: ".5rem" }}>~ BIM Engineer / Developer ~</h4>
            <p className="cs-text" style={{ marginBottom: ".5rem" }}>
            A highly skilled and detail-oriented BIM Engineer/ Software Developer, specializing in Civil Engineering and Web Application Development. 
            Demonstrates proficiency in structural design, analysis, simulation, and BIM automation. Possesses a strong work ethic, analytical mindset, and effective communication skills. 
            Committed to ensuring project success through innovation and adherence to standards.
            </p>
            <h4 style={{ marginBottom: ".5rem" }}>Area of Experties</h4>
            <ul className="cs-ul">
              <li className="cs-li">Project Planning & Implementation</li>
              <li className="cs-li">Testing & Quality Assurance</li>
              <li className="cs-li">Cloud-Based BIM Solutions</li>
              <li className="cs-li">BIM Models Conversion & Integration</li>
              <li className="cs-li">BIM APIs Development</li>
              <li className="cs-li">Web Application Development</li>
            </ul>
            <div className="cs-button-solid" style={{userSelect:"none",cursor:"pointer"}} onClick={handleClick}>
              Learn More
            </div>
          </div>
        </div>
      </section>
    </div>
    
  );
  
}

export default Aboutme