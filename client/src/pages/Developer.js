import React, { useState, useContext } from "react";
import { Container } from 'semantic-ui-react';
import DevNav from "../components/DevNav";
import DevHeader from "../components/DevHeader";
import DevContainer from '../components/DevContainer'
import DevTable from '../components/DevTable'
import "./developer.css";
// import DevDataContext from "../contexts/DevDataContext";

function Developer() {

  return (
    <div className="devPage">
      <DevNav />
      <Container>
        <DevHeader />
        <DevContainer />
        <DevTable />
      </Container>
    </div>
  );
}

export default Developer;