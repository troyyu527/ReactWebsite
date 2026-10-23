import React from 'react'
import { useNavigate } from "react-router-dom"
import '../css/aboutme.css';
import profilePic from '../profile/profile_photo.PNG'

function Aboutme() {
  const navigate = useNavigate();
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
                width="320"
                height="320"
              />
            </picture>
            <div className="cs-box">
              <span className="cs-number">10+</span>
              <span className="cs-desc">Years<br /> Experience</span>
            </div>
          </div>
          {/* Right Content Section*/}
          <div className="cs-content">
            <span className="cs-topper">About Me</span>
            <h1 className="cs-title">Troy Yu</h1>
            <h4 className="cs-subtitle">Software Engineer &nbsp;/&nbsp; BIM &amp; CAD Automation Developer</h4>
            <p className="cs-text">
              A software engineer specializing in engineering software development and BIM/CAD
              automation. I build desktop and web applications, AEC API integrations across Revit,
              AutoCAD, Civil3D, and Tekla, and AI-assisted engineering workflows — turning
              repetitive design and detailing work into reliable, automated software solutions.
            </p>
            <h4 className="cs-expertise-label">Areas of Expertise</h4>
            <ul className="cs-ul">
              <li className="cs-li">Engineering Software Development</li>
              <li className="cs-li">BIM &amp; CAD Automation &amp; Delivery</li>
              <li className="cs-li">AEC API Development</li>
              <li className="cs-li">Desktop &amp; Web Application Development</li>
              <li className="cs-li">AI-Assisted Engineering Workflows</li>
              <li className="cs-li">Cloud &amp; Data Integration</li>
            </ul>
            <div className="cs-button-group">
              <button className="cs-button-solid" onClick={() => navigate("/Resume")}>
                View Resume
              </button>
              <button className="cs-button-ghost" onClick={() => navigate("/Projects")}>
                See Projects
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutme
