import React from 'react'
import {Link, useLocation} from "react-router-dom"

const NAV_LINKS = [
  { to: "/", label: "ABOUT" },
  { to: "/Resume", label: "RESUME" },
  { to: "/Projects", label: "PROJECTS" },
  { to: "/WebApps", label: "WEB APPS" },
  { to: "/3Dsample", label: "3D VIEWER" },
  { to: "/Contact", label: "CONTACT" },
]

function Menubar() {
  const { pathname } = useLocation();
  return (
    <header className="menubar">
      <nav className="menu">
        <Link className="brand" to="/">
          <span className="mark">TY</span>
          <span className="brand-text">
            <span className="brand-name">Troy Yu</span>
            <span className="brand-role">Software Engineer / BIM Automation</span>
          </span>
        </Link>
        <div className="main-con">
          {NAV_LINKS.map((item) => (
            <div className="container" key={item.to}>
              <Link
                className={`link ${pathname === item.to ? 'visited-link' : ''}`}
                to={item.to}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Menubar
