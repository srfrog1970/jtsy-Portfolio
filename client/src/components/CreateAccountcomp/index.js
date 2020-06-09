import React, { useState, useEffect } from "react";
import API from "../../utils/API";
// import { Redirect } from "react-router-dom";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

// const formValid = ({ formErrors, ...rest }) => {
//   let valid = true;

//   // validate form errors being empty
//   Object.values(formErrors).forEach((val) => {
//     val.length > 0 && (valid = false);
//   });

//   // validate the form was filled out
//   Object.values(rest).forEach((val) => {
//     val === null && (valid = false);
//   });

//   return valid;
// };
console.log('in CreateAccountcomp')

// handleInputChange is a prop from page Signin.js
const CreateAccountComp = (props) => {

  const [state, setState] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    githubID: null,
    loaded: null,
    formErrors: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      githubID: "",
    },
  });

  //  onSubmit={handleSubmit} - removed from form tag
  // replaced handleSubmit with useEffect()

  useEffect(() => {
    // code to run every time `state` object changes
    console.log('CreateAccountcomp useEffect -> call getsync()')
    console.log('state ', state.githubID, state.firstName, state.lastName, state.email)
    props.handleInputChange();
    API.getsync(state.githubID, state.firstName, state.lastName, state.email);
    setState({
      ...state,
      loaded: true
    }, [state]);
  });
  // handleInputChange is a prop from page Signin.js
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("HMMMM leaving CreateAccountcomp");
  //   props.handleInputChange();
  //   console.log('CreateAccountcomp call getsync()')
  //   console.log('state ', state.githubID, state.firstName, state.lastName, state.email)
  //   API.getsync(state.githubID, state.firstName, state.lastName, state.email);
  //   // state.loaded = true;
  //   setState({
  //     ...state,
  //     loaded: true
  //   })
  // };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      case "githubID":
        formErrors.githubID =
          value.length < 3 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    setState({ formErrors, ...state, [name]: value });
  };

  const { formErrors } = state;
  // console.log("Try", this.state.loaded);
  // if (this.state.loaded) {
  //   return <Redirect to={"/Home"} />;
  // }
  let content = (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Create Account</h1>
        <form noValidate>
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
          {/* Git hub */}
          <div className="githubID">
            <label htmlFor="githubID">Github ID</label>
            <input
              className={formErrors.githubID.length > 0 ? "error" : null}
              placeholder="Github ID"
              type="text"
              name="githubID"
              noValidate
              onChange={handleChange}
            />
            {formErrors.githubID.length > 0 && (
              <span className="errorMessage">{formErrors.githubID}</span>
            )}
          </div>
          {/* Git hub */}
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              className={formErrors.password.length > 0 ? "error" : null}
              placeholder="Password"
              type="password"
              name="password"
              noValidate
              onChange={handleChange}
            />
            {formErrors.password.length > 0 && (
              <span className="errorMessage">{formErrors.password}</span>
            )}
          </div>
          <div className="createAccount">
            <button type="submit">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  );
  return content;
}

export default CreateAccountComp;
