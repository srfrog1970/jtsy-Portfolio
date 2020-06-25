import React, { useState, useContext } from "react";
import { Redirect } from 'react-router'
import DevDataContext from "../../contexts/DevDataContext"
import SetupContext from "../../contexts/SetupContext"

console.log('in LoginForm')

// handleInputChange is a prop from page Signin.js
const LoginForm = (props) => {
    const { devData } = useContext(DevDataContext);
    const { setup, setSetup } = useContext(SetupContext);
    let password;

    console.log('in LoginForm, loggedIn: ', setup.loggedIn)
    // handleInputChange is a prop from page Signin.js
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("HMMMM leaving CreateAccountcomp");
        // props.handleInputChange();
        console.log('Login handleSubmit', setup.loggedIn);

        if (password === localStorage.getItem('password')) {
            setSetup({
                ...setup,
                loggedIn: true,
            })
        } else {
            alert('Re-enter password')
        }

    };

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        password = value;
        console.log(name, value, password)
    };

    // console.log("Try", this.state.loaded);
    // if (this.state.loaded) {
    //   return <Redirect to={"/Home"} />;
    // }
    let content = (
        <div className="wrapper">
            <div className="form-wrapper">
                <h1>Log In</h1>
                <h4>* - Denotes Required Field</h4>
                <form onSubmit={handleSubmit}>
                    <div className="password">
                        <label htmlFor="password">Password*</label>
                        <input
                            placeholder="Password"
                            type="password"
                            name="password"
                            required
                            pattern="(?=.*\d)(?=.*[!@_#$%^&*-])(?=.*[a-z])(?=.*[A-Z]).{6,}"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="createAccount">
                        <button type="submit">Create Account</button>
                    </div>
                </form>
                {setup.loggedIn && (
                    <Redirect to={'/developer'} />
                )}
            </div>
        </div>
    );
    return content;
}

export default LoginForm;