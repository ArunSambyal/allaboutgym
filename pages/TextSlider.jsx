import React, { useState, useEffect } from "react";

const TextSlider = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000); // Change text every 3 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, [texts]);

  return (
    <div className="text-slider">
      <p className="slider-text">{texts[currentIndex]}</p>
    </div>
  );
};

export default TextSlider;
