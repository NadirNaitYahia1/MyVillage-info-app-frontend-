import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route,useLocation  } from "react-router-dom";
import './bootstrap-5.1.3-dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import phome from './pages/phome';
import Test from './components/Test';
import './App.css';
import Pharmacie from './components/Pharmacie';
import Login from './components/Login';
import Create from './components/Create';
import CreatePh from './components/CreatePh';
import Admin from './components/Admin';
import { Location } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState(false);
  const[nav,setNav]=useState(true);
  
  
  
  const handleChange = () => {
    const newMode = !mode;
    setMode(newMode);
    localStorage.setItem('mode', newMode);
    
  }
 
 

  useEffect(() => {
   if ((window.location.href.substring('http://localhost:3000'.length,(window.location.href.length)) ===  '/loged/admin/create_pharmacy') | (window.location.href.substring('http://localhost:3000'.length,(window.location.href.length)) ===  '/loged/admin/create_bus')) {
     setNav(false)
    
     console.log('ok')
   } 
   else{
    setNav(true)
    console.log('no')
  
   }
 
  },[window.location.href]);

  return (
    <div className={mode ? 'App' : 'App-dark'}>
      <Router>
        {nav && <Navbar onChange={handleChange}  />}
        <Routes>
          <Route path="/" Component={phome} />
          <Route path="/test" Component={Test} />
          <Route path="ph" Component={Pharmacie} />
          <Route path="/login" Component={Login} />
          <Route path="/loged/admin" Component={Admin} />
          <Route path="loged/admin/create_bus" Component={Create}  />
          <Route path="loged/admin/create_pharmacy" Component={CreatePh} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
