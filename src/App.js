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
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);
  
  
 
  return (
    <div className="App">
      {currentPage !=="${procces.env.PUBLIC_URL}/" && <Menubar currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
      <div className='wrapper'>
        <Routes>
          <Route path="${procces.env.PUBLIC_URL}/" element={<Aboutme setCurrentPage={setCurrentPage}/>}/>
          <Route path="${procces.env.PUBLIC_URL}/Resume" exact element={<Resume/>}/>
          <Route path="${procces.env.PUBLIC_URL}/Projects" exact element={<Projects/>}/>
          <Route path="${procces.env.PUBLIC_URL}/WebApps" exact element={<WebApps/>}/>
          <Route path="${procces.env.PUBLIC_URL}/3Dsample" exact element={<SampleModel/>}/>
          <Route path="${procces.env.PUBLIC_URL}/Contact" exact element={<Contact/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
