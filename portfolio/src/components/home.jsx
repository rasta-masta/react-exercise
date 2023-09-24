import React from "react";
import Footer from "./footer";

const Home = () => {

  return ( 
    <div className="worksheet">
      <div className="home-content">
        <div className="box-home"></div>
        <div className="title"> 
          <p>Nova Bamahry</p>
          <p>Full-Stack Developer</p>
        </div>    

        <div className="about">
          <h1>About</h1>  
          <p>"I am a plant breeder assistant who is currently a student at a well-known boot camp in Indonesia. The field I am currently studying is full-stack web development. My goal in learning this technology is to acquire new skills that can be beneficial both in my work and in becoming an entrepreneur who supports agricultural activities. This includes developing and assisting in the digital marketing of agricultural products through farmer groups in Indonesia."</p>
        </div>  
      </div>
       <Footer/>
    </div>
  );
}
 
export default Home;

