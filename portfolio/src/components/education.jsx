import React from "react";
import Footer from "./footer";

const Education = () => {
  return (  
    <div className="worksheet">
    <div className="home-content">
      <div className="box-home"></div>
      <div className="title"> 
        <p>Nova Bamahry</p>
        <p>Full-Stack Developer</p>
      </div>    

      <div className="about">
        <h1>BioData and Education</h1>  
        <p>Name : Nova Bamahry</p>
      <p>Age : 40<sup>th</sup></p>
      <p>gender : Male</p>
      <p>religion : Islam</p>
  
      <p>Technology and professional skill at Balai Penelitian Tanaman Hias Balithi Cipanas Puncak Bogor</p>
      <p>Bachelor Degree in Plant breeding at Agriculture University of Bogor.</p>
      <p>Fullstack Web-Development at Purwadhika Training School </p>
      </div>  
    </div>
     <Footer/>
  </div>
    
  );
}
 
export default Education;