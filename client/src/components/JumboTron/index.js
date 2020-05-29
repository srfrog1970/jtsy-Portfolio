import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import background from "../../assets/background.jpg";
import './style.css'

// const Styles = styled.div`
//   .jumbo {
//     background: url(${background}) no-repeat fixed bottom;
//     background-size: cover;
//     color: #efefef;
//     height: 400px;
//     position: relative;
//     z-index: -2;
//   }

//   .overlay {
//     background-color: #000;
//     opacity: 0.15;
//     position: absolute;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     z-index: -1;
//   }
// `;

export const Jumbotron = () => (
  <Jumbo fluid className="jumbo text-center">
    <div className="overlay"></div>
    <Container>
      <h1 className="greeting">Welcome to my portfolio page!</h1>
      <br />
      <br />
      <h2>
        Take a look around and you will find all kinds of cool things I have
        put together!
        </h2>
    </Container>
  </Jumbo>
);
