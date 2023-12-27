import {React,useState} from 'react';
import {Routes,Route, useLocation,BrowserRouter} from "react-router-dom";
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
        <BrowserRouter basename='/ReactWebsite'>
        </BrowserRouter>
        <Routes>
          <Route path="/ReactWebsite" exact element={<Aboutme setCurrentPage={setCurrentPage}/>}/>
          <Route path="/Resume" exact element={<Resume/>}/>
          <Route path="/Projects" exact element={<Projects/>}/>
          <Route path="/WebApps" exact element={<WebApps/>}/>
          <Route path="/3Dsample" exact element={<SampleModel/>}/>
          <Route path="/Contact" exact element={<Contact/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
