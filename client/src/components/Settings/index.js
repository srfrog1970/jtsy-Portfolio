import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import DevDataContext from "../../contexts/DevDataContext"

console.log('in Settings')

// handleInputChange is a prop from page Signin.js
const Settings = (props) => {
    const { devData } = useContext(DevDataContext);
    const [state, setState] = useState({
        firstName: devData.fname,
        lastName: devData.lname,
        email: devData.email,
        linkedInLink: devData.linkedInLink,
        resumeLink: devData.resumeLink,
        portfolioLink: devData.portfolioLink,
    });


    // handleInputChange is a prop from page Signin.js
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("HMMMM leaving CreateAccountcomp");
        props.handleInputChange();
        const developerData = {
            fname: state.firstName,
            lname: state.lastName,
            email: state.email,
            linkedInLink: state.linkedInLink,
            resumeLink: state.resumeLink,
            portfolioLink: state.portfolioLink,
        }
        console.log('in Settings: call updateDeveloper')
        API.updateDeveloper(developerData)
        setState({
            ...state,
        })

    };

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        setState({ ...state, [name]: value });
    };

    let content = (
        <div className="wrapper">
            <div className="form-wrapper">
                <h1>Create Account</h1>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="firstName">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            className={formErrors.firstName.length > 0 ? "error" : null}
                            placeholder="First Name"
                            type="text"
                            name="firstName"
                            noValidate
                            onChange={handleChange}
                        />
                        {formErrors.firstName.length > 0 && (
                            <span className="errorMessage">{formErrors.firstName}</span>
                        )}
                    </div>
                    <div className="lastName">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            className={formErrors.lastName.length > 0 ? "error" : null}
                            placeholder="Last Name"
                            type="text"
                            name="lastName"
                            noValidate
                            onChange={handleChange}
                        />
                        {formErrors.lastName.length > 0 && (
                            <span className="errorMessage">{formErrors.lastName}</span>
                        )}
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input
                            className={formErrors.email.length > 0 ? "error" : null}
                            placeholder="Email"
                            type="email"
                            name="email"
                            noValidate
                            onChange={handleChange}
                        />
                        {formErrors.email.length > 0 && (
                            <span className="errorMessage">{formErrors.email}</span>
                        )}
                    </div>
                    {/* LinkedIn */}
                    <div className="linkedInLink">
                        <label htmlFor="linkedInLink">LinkedIn Link</label>
                        <input
                            placeholder="LinkedIn link"
                            type="text"
                            name="linkedInLink"
                            onChange={handleChange}
                        />
                    </div>
                    {/* LinkedIn */}
                    {/* resume */}
                    <div className="resumeLink">
                        <label htmlFor="resumeLink">Resume Link</label>
                        <input
                            placeholder="Resume link"
                            type="text"
                            name="resumeLink"
                            onChange={handleChange}
                        />
                    </div>
                    {/* resume */}
                    {/* portfolio */}
                    <div className="portfolioLink">
                        <label htmlFor="portfolioLink">Portfolio Link</label>
                        <input
                            placeholder="portfolio link"
                            type="text"
                            name="portfolioLink"
                            onChange={handleChange}
                        />
                    </div>
                    {/* portfolio */}
                    <div className="createAccount">
                        <button type="submit">Change Settings</button>
                    </div>
                </form>
            </div>
        </div>
    );
    return content;
}

export default Settings;
