import React from 'react'
import { Header } from 'semantic-ui-react'
import "./devHeader.css";

const DevHeader = () => (
    <div>
        <Header as='h2'
            className="devHeader"
            textAlign='center'
            dividing>
            Welcome to Portfolio Generator
        </Header>
    </div>
)

export default DevHeader;