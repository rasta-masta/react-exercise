import React from "react";

const Footer = () => {
  return (  
    <div className="footer-content">
      <div className="myContact">
        <p>My Contact:</p>
        <p>0812 1111 222 12</p>
        <p>email:</p>
        <p>ibam.nva@gmail.com</p>
      </div>

      <div className="social-media">
        <p>Follow Me :</p>
          <img src="./src/assets/linkedin-icon.png" alt="linkedin"/>
          <img src="./src/assets/fb.png" alt="fb"/>
          <img src="./src/assets/instagram-icon.jpg" alt="instagram"/>
          <img src="./src/assets/twitter-icon.png" alt="twitter"/>
      </div>
    </div>
  );
}
 
export default Footer
