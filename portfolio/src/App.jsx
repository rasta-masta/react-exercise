import react from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/nav';
import './style.css'
import Home from './components/home';
import Education from './components/Education';
import Agri from './components/agri'
import Webdev from './components/web-dev';
import Contact from './components/contact';

function App() {
  
  return (
    <div className="cover">
    <Router>
      <Navbar/>
      <Routes>
        <Route path ='/' element= { <Home/> }/>
        <Route path ='/education' element= { <Education/> }/>
        <Route path ='/agri' element= { <Agri/> }/>
        <Route path ='/web-dev' element= { <Webdev/> }/>
        <Route path ='/contact' element = { <Contact/>}></Route>
      </Routes>
    </Router> 
  </div>  
  )
}

export default App
