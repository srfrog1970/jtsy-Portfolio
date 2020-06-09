import React, { useContext } from "react";
import EmailForm from "../EmailForm"
import DevDataContext from "../../contexts/DevDataContext";
import "./contactStyle.css"


function ContactComp() {
  const { devData } = useContext(DevDataContext);
  const githubLink = `https://github.com/${devData.developerLoginName}/`
  return (
    <div className="contactContainer">
      <div className="container">
        <h2>Thank you for visiting!</h2>
        <h3>Connect with me via:</h3>
        <p>
          <a href={githubLink} rel="noopener noreferrer" target="_blank" alt="GitHub link">
            GitHub
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/john-cannon-58145b105/" rel="noopener noreferrer" target="_blank" alt="LinkedIn link">
            LinkedIn
          </a>
        </p>
        <p>
          <h4>And Via Email</h4>
          <EmailForm />
        </p>
      </div>
    </div>

  )
}
export default ContactComp;