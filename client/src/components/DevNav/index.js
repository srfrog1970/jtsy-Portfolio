import React from 'react';
import { Menu } from 'semantic-ui-react';
import "./style.css";

const DevNav = props => {

  let content = (
    <div>
      <Menu inverted stackable fixed="top" className="menu">
        <Menu.Item header className="logo">PORTFOLIO GENERATOR</Menu.Item>
        <Menu.Menu position="left">
          <Menu.Item as="a" href="/" name="home">
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item as="a" href="/about" name="about">
          </Menu.Item>

          <Menu.Item href="/login" name="login">
          </Menu.Item>

          <Menu.Item as="a" name="logout">
          </Menu.Item>
        </Menu.Menu>
      </Menu>

    </div >
  )
  return content
}

export default DevNav;