import React from "react";
import { Nav, NavItem } from "react-bootstrap";

const AppNav = () => (
  <Nav bsStyle="tabs" activeKey={1}>
    <NavItem href="/home" eventKey={1}>
      Home
    </NavItem>
    <NavItem href="/about" eventKey={2} title="Item">
      About
    </NavItem>
    <NavItem href="/topics" eventKey={3} disabled>
      Topics
    </NavItem>
  </Nav>
);

export default AppNav;
