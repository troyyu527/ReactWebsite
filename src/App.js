import React from 'react';
import {Routes,Route} from "react-router-dom";
import Menubar from './components/Menubar';
import Resume from './components/Resume';
import Projects from './components/Projects';
//import BimTech from './components/BimTech';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import Aboutme from './components/Aboutme';
function App() {
  //const navigate = useNavigate();
  return (
    <div className="App">
      <Menubar/>
      <div className='wrapper'>
        <Routes>
          <Route path="/" exact element={<Aboutme/>}/>
          <Route path="/Resume" exact element={<Resume/>}/>
          <Route path="/Projects" exact element={<Projects/>}/>
          <Route path="/Contact" exact element={<Contact/>}/>
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
