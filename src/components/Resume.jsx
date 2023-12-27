import React from 'react'
import TroyBIMResume from '../download/TroyYu_resume 2023.pdf'
function Resume(props) {
  //const {name,pos,currentPlayer} = props
  
  
  return (
    <div className='page'>
      <div className="resume">
        <h1>Resume</h1>
        <div className='con'>
        <div className='line-con'>
          <h2>Experience</h2>
          <a href={TroyBIMResume} download="TroyYu_RESUME"><span className='download'>DOWNLOAD RESUME</span></a>
        </div>
        <div className='main-con'>
          <div className='first-con'>
            <h3>2014-2022</h3>
            <p>BIM Engineer / Developer / Manager</p>
            <p>Urbantech Counsulting Engineering PC</p>
            <p>New York, NY, USA</p>
          </div>
          <div className='second-con'>
            <ul>
              <li>Earned selection to develop and execute BIM functions, including construction of applications, creation of entire BIM work system, and establishment of high performance team</li>
              <li>Led a team of 5 engineers in the implementation of BIM strategies, overseeing the development of internal BIM extensions and plugins for efficient project integration</li>
              <li>Managed the conversion of the company's design system from traditional CAD platform to BIM (Revit) platform which led to time and cost savings</li>
              <li>
                Demonstrate expertise in performing multiple responsibilities, including:
                <ul>
                  <li>Overseeing the implementation of BIM processes and technologies across projects, collaborating with project teams, and ensuring compliance with BIM standards and protocols.</li>
                  <li>Coordinating and managing BIM workflows and project deliverables, including clash detection, model integration, and data management</li>
                  <li>Conducting Quality Assurance/Control to ensure accuracy and completeness in project models.</li>
                  <li>Contributing to the development of BIM strategies, exploring innovative BIM solutions, and identifying opportunities to improve efficiency and productivity.</li>
                  <li>Evaluating and selecting appropriate BIM software tools, managing licenses, and contributed to BIM software development.</li>
                  <li>Construction Procedure Animation & Presentation Preparation.</li>
                  <li>General job site inspection.</li>
                </ul>
              </li>
              <li>
                BIM Extension & Application Developement, including:
                <ul>
                  <li>LiDAR Data/Point Cloud Analysis</li>
                    <ul>
                      <li>Conducting clash detection and deformation analysis by aligning reality capture data with proposed design models. Employing Python to enhance precision through noise reduction in point cloud data and determining optimal fit for planar regions. Refining post-processing techniques for normalizing point cloud distributions and generating detailed data reports.</li>
                    </ul>
                  <li>Revit Extensions</li>
                  <ul>
                    <li>Created custom Autodesk Revit extension using C#, leveraging the Revit API to automate complex workflows and streamline interactions with BIM designed objects.</li>
                    <li>Utilized Python to design and implement Dynamo scripts and workflows, enabling the manipulation of BIM data and streamlining complex tasks.</li>
                  </ul>
                  <li>Autodesk Network License Seat Tracker</li>
                  <ul>
                    <li>Designed and implemented a software license manager using C# and WPF on the .NET platform. This application allocated and tracked software licenses status., leading to improvement in license utilization and mitigating issues related to license depletion.</li>
                  </ul>
                  <li>Reinforcing Steel Bar Bill of Materials Generator</li>
                  <ul>
                    <li>Automated the processing of reinforcing steel bar Bill of Materials by developing an internal user-facing application using Python. This application extracted data from CAD models and generated accurate reports.</li>
                  </ul>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        </div>
        <div className="con">
        <div className='line-con'>
          <h2>Other Experience</h2>
        </div>
        <div className='main-con'>
          <div className='first-con'>
            <h3>2009-2011</h3>
            <p>Research Assistant - Computational Analysis & Modeling</p>
            <p>MSV Lab, National Taiwan Ocean University</p>
            <p>Keelung, Taiwan</p>
          </div>
          <div className='second-con'>
            <ul>
              <li>Developed engineering models using MATLAB for applied mathematics, with Finite Element Analysis and elements result computation in engineering mechanics problems.</li>
              <li>Worked on practical problems by formulating numerical equations and studying mathematical models.</li>
            </ul>
          </div>
        </div>
        </div>
        <div className="con">
        <div className='line-con'>
          <h2>Education</h2>
        </div>
        <div className='main-con'>
          <div className='first-con'>
            <h3>2013-2014</h3>
            <p>Columbia University</p>
            <p>New York, NY, USA</p>
          </div>
          <div className='second-con edu'>
            <p>Civil Engineering & Engineering Mechanics</p>
            <p>Master of Science</p>
          </div>
        </div>
        <div className='main-con'>
          <div className='first-con'>
            <h3>2007-2011</h3>
            <p>National Taiwan Ocean University</p>
            <p>Taiwan</p>
          </div>
          <div className='second-con edu'>
            <p>Harbor & River Engineering</p>
            <p>Bachelor of Science</p>
          </div>
        </div>
        </div>
        <div className="con">
        <div className='line-con'style={{marginTop:"2rem"}}>
          <h2>Misc.</h2>
        </div>
        <div className='misc-con'>
          <h3>Professional Skillset</h3>
          <div className='con'>
            <div className='list'>Computer Graphics in Engineering</div>
            <div className='list'>Structural Drawings</div>
            <div className='list'>Data Analysis</div>
            <div className='list'>Project Planning and Implementation</div>
            <div className='list'>Time Management</div>
            <div className='list'>Rapid Conflict Resolution</div>
            <div className='list'>Site Planning and Logistics</div>
            <div className='list'>Software Development</div>
            <div className='list'>API Integrations & Development</div>
            <div className='list'>Web Application Architecture</div>
          </div>
        </div>
        <div className='misc-con'>
          <h3>Language</h3>
          <div className='con'>
            <div className='list'>English (Proficient)</div>
            <div className='list'>Chinese - Mandarin (Native)</div>
          </div>
        </div>
        <div className='misc-con'>
          <h3>License</h3>
          <div className='con'>
            <div className='list'>OSHA 10-Hour</div>
            <div className='list'>OSHA Construction Scaffolding</div>
          </div>
        </div>
        <div className='misc-con'>
          <h3>Technical Acumen</h3>
          <div className='con'>
            <div className='list'>AutoCAD</div>
            <div className='list'>Revit</div>
            <div className='list'>Navisworks</div>
            <div className='list'>Advance Steel</div>
            <div className='list'>Civil 3D</div>
            <div className='list'>ReCap Pro</div>
            <div className='list'>InfraWorks</div>
            <div className='list'>BIM 360</div>
            <div className='list'>Autodesk Cloud/Platform Services</div>
            <div className='list'>C#</div>
            <div className='list'>.Net</div>
            <div className='list'>WPF</div>
            <div className='list'>Python</div>
            <div className='list'>Javascript</div>
            <div className='list'>HTML</div>
            <div className='list'>CSS</div>
            <div className='list'>Node.js</div>
            <div className='list'>Express.js</div>
            <div className='list'>D3.js</div>
            <div className='list'>Three.js</div>
            <div className='list'>WebGL</div>
            <div className='list'>React</div>
            <div className='list'>MongoDB</div>
            <div className='list'>AWS</div>
            <div className='list'>Git</div>
          </div>
        </div>
        </div>
        
      </div>
        
    </div>
  )
}

export default Resume