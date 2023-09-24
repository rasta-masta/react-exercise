import React from "react";
import Navbar from "./components/navbar";
import "/style.css";
import Home from "./components/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddData from "./components/Add-data";
import DataDetails from "./components/Data-details";
import NotFound from "./components/404";
import Edit from "./components/edit";

const app = () => {
  return (  
   <Router>
    <div>
      <Navbar/>
      <div className="content">
      
          <Routes>
            <Route path="/" element= { <Home/>} />
            <Route path="/add" element= {<AddData/>}/>
            <Route path="/edit/:id" element= {<Edit/>}/>
            <Route path="/contact/:id" element= {<DataDetails/>}/>
            <Route path="*" element= {<NotFound/>}/>
          </Routes> 
              
      </div>
    </div>
    </Router>
  );
}
 
export default app;
