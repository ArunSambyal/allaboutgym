import React, { useState, useEffect } from "react";
import "../styles/home.css";
import video1 from "../videos/opacity.mp4";
import TextSlider from "./TextSlider";
import Recruitment from "./Recruitment";
import PreLoader from "./PreLoader";
import Feature from "../components/Feature";
import MyCarousel from "./MyImageCarousel";

const Home = () => {
  const sliderTexts = [
    "Supporting your Fitness Business with a team of Fitness Consultants who have 15+ years of combined",
    "Take care of your people and they will take care of your business”. As “PEOPLE” are one of the 4Ps’ and one of the pillars of our business, we pay special attention in connecting the right type of candidates with employers..",
    "Supporting your Fitness Business with a team of Fitness Consultants who have 60+ years of combined experience in Europe, Africa, and the Middle East",
   
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    // Function to update the text index and trigger the fade effect
    const updateTextIndex = () => {
      setCurrentTextIndex((prevIndex) => {
        // Increment the text index and loop back to the beginning when reaching the end
        const newIndex = (prevIndex + 1) % sliderTexts.length;
        return newIndex;
      });
    };

    // Start a timer to update the text index every 3 seconds (adjust as needed)
    const textChangeInterval = setInterval(updateTextIndex, 3000); // 3000 milliseconds (3 seconds)

    // Clear the interval when the component unmounts
    return () => clearInterval(textChangeInterval);
  }, [sliderTexts]);

  return (
    <>
      <PreLoader />
      <MyCarousel />
      <div className="home-container">
        {/* Video Background */}
        <div className="video-background">
          <video src={video1} autoPlay loop muted />
        </div>

        {/* Content Overlay */}
        <div className="content-overlay">
          {sliderTexts.map((text, index) => (
            <TextSlider
              key={index}
              texts={currentTextIndex === index ? [text] : []}
            />
          ))}
        </div>
      </div>

      <Feature />
      <Recruitment />
    </>
  );
};

export default Home;
