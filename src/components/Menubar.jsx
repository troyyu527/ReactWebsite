import React,{useState} from 'react'
import {Link} from "react-router-dom"
function Menubar(props) {
  //const {name,pos,currentPlayer} = props
  //const navigate = useNavigate()
  const [visitedLink, setVisitedLink] = useState('about');

  const handleLinkClick = (link) => {
    setVisitedLink(link);
  };
  return (
    <div className="menubar">
      <div className='menu'>
        <div className='home'>
          <Link className="nav-link" to="/" onClick={() => handleLinkClick('about')}>
            Troy Yu / BIM DEVELOPER
          </Link>
        </div>
        <div className='main-con'>
          <div className='container' >
            <Link className={`nav-link ${visitedLink === 'about' ? 'visited-link' : ''}`} to="/" onClick={() => handleLinkClick('about')}>
            <div className='link'>ABOUT ME</div>
            </Link>
          </div>
          <div className='container'>
            <Link className={`nav-link ${visitedLink === 'resume' ? 'visited-link' : ''}`} to="/Resume" onClick={() => handleLinkClick('resume')}>
            <div className='link'>RESUME</div>
            </Link>
          </div>
          <div className='container'>
            <Link className={`nav-link ${visitedLink === 'project' ? 'visited-link' : ''}`} to="/Projects" onClick={() => handleLinkClick('project')}>
            <div className='link'>PROJECTS</div>
            </Link>
          </div>
          <div className='container'>
            <Link className={`nav-link ${visitedLink === 'contact' ? 'visited-link' : ''}`} to="/Contact" onClick={() => handleLinkClick('contact')}>
            <div className='link visitedLink'>CONTACT</div>
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Menubar