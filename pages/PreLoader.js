import React, { useState, useEffect } from 'react';
import logo from "../images/content/footerLogo.png";
import "../styles/preloader.css";

const PreLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay of 3000 milliseconds (3 seconds)
    const delay = 1700;
    
    const hidePreloader = () => {
      setIsLoading(false);
    };

    const timeoutId = setTimeout(hidePreloader, delay);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div id="preloader" className={isLoading ? 'show' : 'hide'}>
      <div className="preloader-inner">
        {/* <div className="spinner"></div> */}
        <img src={logo} width="350" alt="spinner logo" />
      </div>
      {/* 
      <div className="loading-text">
        <span data-preloader-text="T" className="characters">T</span>
        <span data-preloader-text="H" className="characters">H</span>
        <span data-preloader-text="E" className="characters">E</span>
        <span data-preloader-text="A" className="characters">A</span>
        <span data-preloader-text="R" className="characters">R</span>
        <span data-preloader-text="C" className="characters">C</span>
        <span data-preloader-text="H" className="characters">H</span>
      </div> 
      */}
    </div>
  );
};

export default PreLoader;
