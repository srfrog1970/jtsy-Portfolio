import React, { useState, useContext } from "react";
import { Redirect } from 'react-router'
import DevDataContext from "../../contexts/DevDataContext"
import SetupContext from "../../contexts/SetupContext"

console.log('in LoginForm')

// handleInputChange is a prop from page Signin.js
const LoginForm = (props) => {
    const { devData } = useContext(DevDataContext);
    const { setup } = useContext(SetupContext);
    const [state, setState] = useState({
        githubID: "",
        password: "",
        loggedIn: setup.loggedIn,
    });

    console.log('in LoginForm, loggedIn: ', setup.loggedIn, state.loggedIn)
    // handleInputChange is a prop from page Signin.js
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("HMMMM leaving CreateAccountcomp");
        // props.handleInputChange();
        console.log('Login handleSubmit', state.password, state.loggedIn);

        if (state.password === localStorage.getItem('password')) {
            setState({
                ...state,
                loggedIn: true,
            })
        } else {
            alert('Re-enter password')
        }

    };

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        setState({ ...state, [name]: value });
        console.log(name, value)
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
                    {/* Git hub */}
                    <div className="githubID">
                        <label htmlFor="githubID">Github ID*</label>
                        <input
                            placeholder="Github ID"
                            type="text"
                            name="githubID"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    {/* Git hub */}
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
                {state.loggedIn && (
                    <Redirect to={'/developer'} />
                )}
            </div>
        </div>
    );
    return content;
}

export default LoginForm;
