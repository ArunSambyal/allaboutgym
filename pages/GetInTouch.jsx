import React from "react";
import certificate from "../images/content/20230905_133552.png";
import video1 from "../videos/video-4.mp4";
import "../styles/getintouch.css";
import TextSlider from "./TextSlider"

// import { Facebook, Instagram ,Twitter, YouTube } from "@mui/icons-material";

const GetInTouch = () => {
  const sliderTexts = [
    " F-470, Majors Tower, Sector 74, Near Judicial Courts Complex, 140306",
    " +91 70536 60001 +91 78724 60001",
    " contact@yourwebsite.com",
   
    
   
  ];
  return (
    <div className="home-container">
      {/* Video Background */}
      <div className="video-background">
        <video src={video1} autoPlay loop muted />
      </div>
      <div className="content-overlay">
        <TextSlider texts={sliderTexts} />
      </div>

      {/* Content Overlay */}
    
    
    <div>
       {/* <a href="/" className="social-icon">
              <Facebook />
            </a>
            <a href="/" className="social-icon">
              <Instagram />
            </a>
            <a href="/" className="social-icon">
              <Twitter />
            </a>
            <a href="/" className="social-icon">
              <YouTube/>
            </a> */}
          
       
      <img src={certificate} alt="Affiliated with NAFE" /> 
      <h3 className="paragraphs">
        Affiliated with NAFE | National Association of Fitness Excellence
      </h3>
     
    </div>
    
           
    </div>
  );
};

export default GetInTouch;
