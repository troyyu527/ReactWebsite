import React from 'react'
import {Link} from "react-router-dom"
function Menubar(props) {
  const {currentPage,setCurrentPage} = props
  //const navigate = useNavigate()
  

  const handleLinkClick = (link) => {
    setCurrentPage(link);
  };
  return (
    <div className="menubar">
      <div className='menu'>
        {/* <div className='home'>
          <Link className="nav-link" to="/" onClick={() => handleLinkClick('about')}>
            Troy Yu / BIM DEVELOPER
          </Link>
        </div> */}
        <div className='main-con'>
          <div className='container' >
            <Link className={`nav-link ${currentPage === '/' ? 'visited-link' : ''}`} to="/" onClick={()=>handleLinkClick("/")}>
            <div className='link'>ABOUT ME</div>
            </Link>
          </div>
          <div className='container'>
            <Link className={`nav-link ${currentPage === '/Resume' ? 'visited-link' : ''}`} to="/Resume" onClick={()=>handleLinkClick("/Resume")}>
            <div className='link'>RESUME</div>
            </Link>
          </div>
          <div className='container'>
            <Link className={`nav-link ${currentPage === '/Projects' ? 'visited-link' : ''}`} to="/Projects" onClick={()=>handleLinkClick("/Projects")}>
            <div className='link'>PROJECTS</div>
            </Link>
          </div>
          <div className='container'>
            <Link className={`nav-link ${currentPage === '/WebApps' ? 'visited-link' : ''}`} to="/WebApps" onClick={()=>handleLinkClick("/WebApps")}>
            <div className='link'>WEB APP</div>
            </Link>
          </div>
          <div className='container'>
            <Link className={`nav-link ${currentPage === '/3Dsample' ? 'visited-link' : ''}`} to="/3Dsample" onClick={()=>handleLinkClick("/3Dsample")}>
            <div className='link'>3D MODEL VIEWER</div>
            </Link>
          </div>
          <div className='container'>
            <Link className={`nav-link ${currentPage === '/Contact' ? 'visited-link' : ''}`} to="/Contact" onClick={()=>handleLinkClick("/Contact")}>
            <div className='link visitedLink'>CONTACT</div>
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Menubar