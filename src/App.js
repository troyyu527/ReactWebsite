import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Menubar from './components/Menubar';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Aboutme from './components/Aboutme';
import WebApps from './components/WebApps';
import SampleModel from './components/SampleModel';
import './css/App.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="footer-brand">Troy Yu</span>
        <nav className="footer-links">
          <Link to="/">About</Link>
          <Link to="/Resume">Resume</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/WebApps">Web Apps</Link>
          <Link to="/Contact">Contact</Link>
          <a href="https://github.com/troyyu527" target="_blank" rel="noreferrer noopener">GitHub</a>
          <a href="https://www.linkedin.com/in/troy-yu-5244b694" target="_blank" rel="noreferrer noopener">LinkedIn</a>
        </nav>
        <span className="footer-copy">© {year} Troy Yu · Software Engineer · BIM & CAD Automation Developer</span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Menubar />
        <div className='wrapper'>
          <Routes>
            <Route path="/" exact element={<Aboutme />} />
            <Route path="/Resume" exact element={<Resume />} />
            <Route path="/Projects" exact element={<Projects />} />
            <Route path="/WebApps" exact element={<WebApps />} />
            <Route path="/3Dsample" exact element={<SampleModel />} />
            <Route path="/Contact" exact element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
