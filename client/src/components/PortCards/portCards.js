import React from "react";
// import PortCard from "../PortCard/portCard";
import ProjectCard from "../Card";
import { Row, Col } from "../Grid";

function PortCards(props) {
  return (
    <div>
      <Row>
        {props.repositories.map((repo, index) => (
          <Col size="sm-6">
            <ProjectCard fluid key={index} repo={repo} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default PortCards;
