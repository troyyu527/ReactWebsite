import {React,useState} from 'react';
import {Routes,Route, useLocation} from "react-router-dom";
import Menubar from './components/Menubar';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Aboutme from './components/Aboutme';
import WebApps from './components/WebApps';
import SampleModel from './components/SampleModel';
import './css/App.css';
function App() {
  //const navigate = useNavigate();
  //const location = useLocation();
  const [currentPage, setCurrentPage] = useState("/");
  
  
 
  return (
    <div className="App">
      {currentPage !=="/" && <Menubar currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
      <div className='wrapper'>
        
          <Routes>
            <Route path="/ReactWebsite" exact element={<Aboutme setCurrentPage={setCurrentPage}/>}/>
            <Route path="/Resume"  element={<Resume/>}/>
            <Route path="/Projects"  element={<Projects/>}/>
            <Route path="/WebApps"  element={<WebApps/>}/>
            <Route path="/3Dsample"  element={<SampleModel/>}/>
            <Route path="/Contact"  element={<Contact/>}/>
          </Routes>
        
        
      </div>
    </div>
  );
}

export default App;
