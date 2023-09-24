import React from "react";
import Footer from "./footer";

const Contact = () => {
  return (  
    <div className="worksheet">
      <div className="home-content">
        <div className="box-home"></div>
        <div className="title"> 
          <p>Nova Bamahry</p>
          <p>Full-Stack Developer</p>
        </div>    

        <div className="about">
          <h1>Contact-Me</h1>  
          <div className="contact-me">
            <form>
      
              <label>First Name</label>
              <input type="text" required/> 

              <label>Last Name</label>
              <input type="text" required/>

              <label>Phone-Number</label>
              <input type="text" required />
              
              <label>Email</label>
              <input type="text"/>       

              <label>Keterangan</label>
              <textarea name="email" id="email" cols="30" rows="5"></textarea>

              <button>Submit</button> 
            </form>
          </div> 
        </div>  
      </div>
       <Footer/>
    </div>
  );
}
 
export default Contact
