import React from "react";
import EmailForm from "../EmailForm"
import "./contactStyle.css"


function ContactComp() {

  return (
    <div className="contactContainer">
      <div className="container">
        <h2>Thank you for visiting!</h2>
        <h3>Connect with me via:</h3>
        <p>
          <a href="https://github.com/frunox/" alt="GitHub link">
            GitHub
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/john-cannon-58145b105/" alt="LinkedIn link">
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