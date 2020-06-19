import React, { useContext } from "react";
import "./style.css";
import DevDataContext from "../../contexts/DevDataContext";

function AboutMeComp() {
  const { devData } = useContext(DevDataContext);
  return (

    <div className="aboutContainer">
      <div className="container">
        <p className="top"></p>
        <h3>About Portfolio Generator</h3>

        <p>
          jtsy Portfolio is a MERN stack app that automatically creates a curated
          portfolio from a developer's GitHub projects. The portfolio is presented
          in a standardized format for potential employers, or others, to view.  Originally conceived by Shawn Hayes and co-developed with Tom van Deusen and Yeng Vang, I've taken the template and customized it to show my projects with my styling. See more about the project in the <a href="https://github.com/frunox/jtsy" rel="noopener noreferrer" target="_blank">GitHub</a> readme file.
      </p>
        <h3>About John Cannon</h3>
        <p>
          I am also an avid photographer, concentrating on landscapes. Some of my images are used as backgrounds in this application.
      </p>
        <p>See my <a href={devData.resumeLink} rel="noopener noreferrer" target="_blank">resume</a></p>
        <p>Visit my <a href={devData.portfolioLink} rel="noopener noreferrer" target="_blank">portfolio</a></p>

      </div>
    </div >
  );
}
export default AboutMeComp;
