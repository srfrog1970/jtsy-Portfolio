import React from "react";
import "./style.css";

function AboutMeComp() {
  return (

    <div className="aboutContainer">
      <div className="container">
        <p className="top"></p>
        <h3>About Portfolio Generator</h3>

        <p>
          Portfolio Generator is a MERN stack app that automatically creates a curated
          portfolio from a developer's GitHub projects. The portfolio is presented
          in a standardized format for potential employers, or others, to view.  Originally conceived by Shawn Hayes and co-developed with Tom van Deusen and Yeng Vang, I've taken the template and customized it to show my projects with my styling. See more about the original project in the <a href="https://github.com/frunox/jtsy" rel="noopener noreferrer" target="_blank">GitHub</a> readme file.
      </p>
        <h3>About John Cannon</h3>
        <p>
          I am a former environmental engineer who has re-trained to become a web developer.  The experience in permitting, design, construction and interaction with public regulators and private clients relates directly to web design, in that careful project planning and management are required to complete a successful project.  Having worked for firms with 2 to 80,000 employees, I am used to working both with large, multidisciplinary teams, and on my own, where self-learning was key.  I used that desire for learning to earn a MERN certification, and continue to expand my knowledge in JavaScript and other web technologies.

          I am also an avid photographer, concentrating on landscapes. Some of my images are used as backgrounds in this application.
      </p>
        <p>See my <a href="https://docs.google.com/document/d/1HtCdlujHQQaI-xbWuMola91hCWx1dE4NU7yyJ78fkUI/edit?usp=sharing" rel="noopener noreferrer" target="_blank">resume</a></p>

      </div>
    </div >
  );
}
export default AboutMeComp;
