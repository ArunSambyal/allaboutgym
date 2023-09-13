import React, { useState, useEffect } from 'react';
import logo1 from "../images/content/icon/2.png"
import logo2 from "../images/content/icon/3.png"
// import logo4 from "../images/content/icon/5.png"
import logo5 from "../images/content/icon/6.png"
import "../styles/fun.css";

const FunFacts = () => {
  const [designDrawing, setDesignDrawing] = useState(0);
  const [projectCompleted, setProjectCompleted] = useState(0);
  const [designAward, setDesignAward] = useState(0);


  useEffect(() => {
    // Define your target numbers
    const targetDesignDrawing = 120;
    const targetProjectCompleted = 210;
    const targetDesignAward = 15;
    // const targetProjectRunning = 62;

    // Create a timer to increment the numbers
    const timer = setInterval(() => {
      // Increment each number by 1 (you can adjust the increment value)
      if (designDrawing < targetDesignDrawing) {
        setDesignDrawing(designDrawing + 1);
      }
      if (projectCompleted < targetProjectCompleted) {
        setProjectCompleted(projectCompleted + 1);
      }
      if (designAward < targetDesignAward) {
        setDesignAward(designAward + 1);
      }
      
    }, 200); // Adjust the interval as needed

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, [designDrawing, projectCompleted, designAward]);

  return (
    <section className="funfacts bg_1" id="funfacts">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="funfacts_inner">
              <div className="funfact2 d-flex align-items-center">
                <div className="fun_img">
                  <img src={logo1} alt="img" />
                </div>
                <div className="funfact_content">
                  <p>Design Drawing</p>
                  <div className="d-flex align-items-center">
                    <h2 className="fun-number">{designDrawing}</h2>
                  </div>
                </div>
              </div>
              <div className="funfact2 d-flex align-items-center">
                <div className="fun_img">
                  <img src={logo2} alt="img" />
                </div>
                <div className="funfact_content">
                  <p>Project Completed</p>
                  <div className="d-flex align-items-center">
                    <h2 className="fun-number">{projectCompleted}</h2>
                  </div>
                </div>
              </div>
              <div className="funfact2 d-flex align-items-center">
                <div className="fun_img">
                  <img src={logo5} alt="img" />
                </div>
                <div className="funfact_content">
                  <p>Design Awards</p>
                  <div className="d-flex align-items-center">
                    <h2 className="fun-number">{designAward}</h2>
                  </div>
                </div>
              </div>
              <div className="funfact2 d-flex align-items-center">
              
               
              </div>
              {/* Repeat the same structure for other facts */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
