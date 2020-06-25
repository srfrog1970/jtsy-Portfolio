import React, { useContext } from 'react'
import { Redirect } from 'react-router'
import { Header } from 'semantic-ui-react'
import SetupContext from "../../contexts/SetupContext";
import Login from "../../pages/Login";
import "./devHeader.css";

const DevHeader = () => {
    // let loggedIn = false;
    // while (!loggedIn) {
    //     let password = prompt('Enter Your Password');
    //     if (password === localStorage.getItem('password')) {
    //         loggedIn = true;
    //     }
    // }

    const { setup, setSetup } = useContext(SetupContext);
    console.log('in Developer, loggedIn: ', setup.loggedIn)
    if (!setup.loggedIn) {
        return (
            <Redirect to={'/login'} />
        )
    }

    return (
        <div className="top">
            <Header as='h2'
                className="devHeader"
                textAlign='center'
                dividing>
                Welcome to jtsy Portfolio
        </Header>
        </div>
    )
}

export default DevHeader;