import React, { useState, useContext } from "react";
import { Redirect } from 'react-router'
import { Container } from 'semantic-ui-react';
import DevNav from "../components/DevNav";
import DevHeader from "../components/DevHeader";
import DevContainer from '../components/DevContainer'
import DevTable from '../components/DevTable'
import Login from '../pages/Login'
import "./developer.css";
import SetupContext from "../contexts/SetupContext";

function Developer() {
  // let password;


  return (
    <div className="devPage">
      <DevNav />
      <Container>
        <DevHeader className="welcome" />
        <DevContainer />
        <DevTable />
      </Container>
    </div>
  );
}

export default Developer;