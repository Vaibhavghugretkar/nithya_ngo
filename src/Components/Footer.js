import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <img src='./nithya_logo-removebg-preview (2).png'></img>
        </div>
        <div className="footer-content">
          <h2>Nithya Foundation</h2>

          <div className="foot-info">
          <div>
          <p>
            Empowering lives through menstrual health education and advocacy.
            Breaking taboos, fostering hygiene, and championing a world where
            every individual's well-being matters. Join us in the journey
            towards menstrual equity and awareness.
          </p>
          </div>

          <div className="contact-us">
            <h3>Contact Us</h3>
            <i class='bx bxl-instagram-alt'></i>
            <i class='bx bxl-whatsapp' ></i>  
            <div>
            <button className="join-us">Join Us</button> 
            </div>
            
          </div>
          </div>
          
        </div>
      </div>
      <div className="footerEnd">
      <p> &copy; All rights reserved | Nithya Foundation</p>
      </div>
    </>
  );
}
